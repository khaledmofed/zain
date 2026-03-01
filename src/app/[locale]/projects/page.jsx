import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ProjectsPageContent from "@/components/project/ProjectsPageContent";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "project" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const baseUrl = "https://zainom.com";
  const path = locale === "en" ? "/projects" : "/ar/projects";

  return {
    title: `${tCommon("siteTitle")} - ${t("pageTitle")}`,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        en: `${baseUrl}/projects`,
        ar: `${baseUrl}/ar/projects`,
      },
    },
  };
}

const ProjectsPage = async () => {
  const t = await getTranslations({ namespace: "project" });

  return (
    <LayoutStyle7 breadCrumb={t("breadcrumb")} title={t("pageTitle")}>
      <ProjectsPageContent />
    </LayoutStyle7>
  );
};

export default ProjectsPage;
