"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Project1Data from "@/assets/jsonData/project/Project1Data.json";
import ProjectStyle2 from "./ProjectStyle2";
import { useApp } from "@/contexts/AppContext";

// Normalize to gallery item shape: { id, thumb, tag, title, link }
function normalizeToGalleryItems(rawList) {
  return rawList.map((p) => {
    const isFromApi = p.image != null || p.slug != null;
    if (isFromApi) {
      return {
        id: p.id,
        thumb: p.image || "",
        tag: p.category || "",
        title: p.title || "",
        link: p.slug
          ? `/project-details/${p.slug}`
          : p.url || `/project-details/${p.id}`,
      };
    }
    return {
      id: p.id,
      thumb: p.thumb ? `/assets/img/projects/${p.thumb}` : "",
      tag: p.tag || "",
      title: p.title || "",
      link: p.link || `/project-details/${p.id}`,
    };
  });
}

const ProjectsPageContent = () => {
  const { homeData } = useApp();
  const apiProjects = homeData?.projects ?? [];
  const useApiData = Array.isArray(apiProjects) && apiProjects.length > 0;
  const rawList = useApiData ? apiProjects : Project1Data;
  const list = [...rawList].sort((a, b) => {
    const orderA = a.order ?? a.sort_order ?? a.id ?? 0;
    const orderB = b.order ?? b.sort_order ?? b.id ?? 0;
    return Number(orderA) - Number(orderB);
  });
  const items = normalizeToGalleryItems(list);

  return <ProjectStyle2 projectTitle={true} items={items} />;
};

export default ProjectsPageContent;
