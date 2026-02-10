import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
import Project2Data from "@/assets/jsonData/project/Project2Data.json";
import { fetchProjectBySlug } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { locale, id: slugOrId } = await params;
  const t = await getTranslations({ locale, namespace: "project" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const baseUrl = "https://zainom.com";

  const apiProject = await fetchProjectBySlug(slugOrId, locale);
  if (apiProject) {
    const path =
      locale === "en"
        ? `/project-details/${apiProject.slug}`
        : `/${locale}/project-details/${apiProject.slug}`;
    return {
      title: `${tCommon("siteTitle")} - ${apiProject.title}`,
      description: apiProject.short_description || apiProject.title,
      alternates: {
        canonical: `${baseUrl}${path}`,
        languages: {
          en: `${baseUrl}/project-details/${apiProject.slug}`,
          ar: `${baseUrl}/ar/project-details/${apiProject.slug}`,
        },
      },
    };
  }

  const numId = parseInt(slugOrId, 10);
  if (!Number.isNaN(numId)) {
    const data = Project2Data.find((p) => p.id === numId);
    const projectTitle = data?.title || t("detailsTitle") || "Project Details";
    const path =
      locale === "en"
        ? `/project-details/${slugOrId}`
        : `/${locale}/project-details/${slugOrId}`;
    return {
      title: `${tCommon("siteTitle")} - ${projectTitle}`,
      alternates: {
        canonical: `${baseUrl}${path}`,
        languages: {
          en: `${baseUrl}/project-details/${slugOrId}`,
          ar: `${baseUrl}/ar/project-details/${slugOrId}`,
        },
      },
    };
  }

  return { title: `${tCommon("siteTitle")} - ${t("detailsTitle") || "Project"}` };
}

const ProjectDetailsPage = async ({ params }) => {
  const { id: slugOrId, locale } = await params;

  const apiProject = await fetchProjectBySlug(slugOrId, locale);
  if (apiProject) {
    return (
      <LayoutStyle7 breadCrumb={apiProject.title} title={apiProject.title}>
        <ProjectDetailsContent projectInfo={apiProject} isFromApi />
      </LayoutStyle7>
    );
  }

  const numId = parseInt(slugOrId, 10);
  if (!Number.isNaN(numId)) {
    const data = Project2Data.find((p) => p.id === numId);
    if (!data) notFound();
    const t = await getTranslations({ locale, namespace: "project" });
    const title = data.title || t("detailsTitle") || "Project Details";
    return (
      <LayoutStyle7 breadCrumb={title} title={title}>
        <ProjectDetailsContent projectInfo={data} />
      </LayoutStyle7>
    );
  }

  notFound();
};

export default ProjectDetailsPage;
