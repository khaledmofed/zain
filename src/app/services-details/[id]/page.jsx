import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import React from "react";
import Services2Data from "@/assets/jsonData/services/Services2Data.json";

export const metadata = {
  title: "Zain - Consulting Business - Services Details",
};

export const dynamic = "force-dynamic";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = Services2Data.find((service) => service.id === parseInt(id));

  return (
    <>
      <LayoutStyle7 breadCrumb="Service-details" title="Service Details">
        {data && <ServiceDetailsContent serviceInfo={data} />}
      </LayoutStyle7>
    </>
  );
};

export default ServiceDetailsPage;
