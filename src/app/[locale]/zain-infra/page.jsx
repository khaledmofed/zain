import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ZainInfraContent from "@/components/business-units/ZainInfraContent";
import { getTranslations } from "next-intl/server";
import React from "react";
import { fetchCustom } from "@/lib/api";
import ZainInfraApiDebug from "@/components/utilities/ZainInfraApiDebug";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "zainInfra" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const baseUrl = "https://zainom.com";
  const path = locale === "en" ? "/zain-infra" : `/ar/zain-infra`;

  return {
    title: `${tCommon("siteTitle")} - ${t("title")}`,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        en: `${baseUrl}/zain-infra`,
        ar: `${baseUrl}/ar/zain-infra`,
      },
    },
  };
}

const ZainInfraPage = async ({ params }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "zainInfra" });
  const zainInfraResponse = await fetchCustom("zain-infra", locale);
  console.log("[zain-infra] API response:", zainInfraResponse);

  return (
    <>
      <LayoutStyle7 breadCrumb={t("breadcrumb")} title={t("title")}>
        <ZainInfraApiDebug data={zainInfraResponse} />
        <ZainInfraContent apiData={zainInfraResponse} />
      </LayoutStyle7>
    </>
  );
};

export default ZainInfraPage;
