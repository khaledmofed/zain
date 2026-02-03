import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ZainDXContent from "@/components/business-units/ZainDXContent";
import { getTranslations } from "next-intl/server";
import React from "react";
import { fetchCustom } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "zainDX" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const baseUrl = "https://zainom.com";
  const path = locale === "en" ? "/zain-dx" : `/ar/zain-dx`;

  return {
    title: `${tCommon("siteTitle")} - ${t("title")}`,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        en: `${baseUrl}/zain-dx`,
        ar: `${baseUrl}/ar/zain-dx`,
      },
    },
  };
}

const ZainDXPage = async ({ params }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "zainDX" });
  const zainDxResponse = await fetchCustom("zain-dx", locale);

  return (
    <>
      <LayoutStyle7 breadCrumb={t("breadcrumb")} title={t("title")}>
        <ZainDXContent apiData={zainDxResponse} />
      </LayoutStyle7>
    </>
  );
};

export default ZainDXPage;
