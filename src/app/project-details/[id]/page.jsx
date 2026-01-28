import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import React from "react";
import Project2Data from "@/assets/jsonData/project/Project2Data.json";

export const metadata = {
  title: "Zain - Consulting Business - Project Details",
};

export const dynamic = "force-dynamic";

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = Project2Data.find((project) => project.id === parseInt(id));

  return (
    <>
      <LayoutStyle7 breadCrumb="Project-details" title="Project Details">
        {data && <ProjectDetailsContent projectInfo={data} />}
      </LayoutStyle7>
    </>
  );
};

export default ProjectDetailsPage;
