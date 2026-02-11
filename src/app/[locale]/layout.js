import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Dependency from "@/components/utilities/Dependency";
import HtmlAttributes from "@/components/utilities/HtmlAttributes";
import { ToastContainer } from "react-toastify";
import "@/assets/css/rtl.css";
import { Tajawal } from "next/font/google";
import { fetchHome, getStorageUrl } from "@/lib/api";
import { AppProvider } from "@/contexts/AppContext";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-tajawal",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) return {};
  const homeData = await fetchHome(locale);
  const s = homeData?.settings ?? {};
  const baseUrl = "https://zainom.com";
  const path = locale === "en" ? "" : `/${locale}`;
  const siteName = s.site_name || "Zain Solutions";
  const siteDescription =
    s.site_description ||
    "Integrated infrastructure and digital transformation solutions";
  const pageTitle = `${siteName} - ${siteDescription}`;
  return {
    title: pageTitle,
    description: siteDescription,
    keywords:
      s.site_keywords ||
      "infrastructure, digital transformation, Zain Solutions",
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: { en: baseUrl, ar: `${baseUrl}/ar` },
    },
    openGraph: {
      title: pageTitle,
      description: siteDescription,
      url: `${baseUrl}${path}`,
      siteName,
      locale: locale === "ar" ? "ar_OM" : "en_US",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const homeData = await fetchHome(locale);
  const rawSettings = homeData?.settings ?? {};
  const settings = {
    ...rawSettings,
    logo: getStorageUrl(rawSettings.logo) || rawSettings.logo,
    logo_white: getStorageUrl(rawSettings.logo_white) || rawSettings.logo_white,
    favicon: getStorageUrl(rawSettings.favicon) || rawSettings.favicon,
  };

  const baseUrl = "https://zainom.com";
  const siteUrl = locale === "en" ? baseUrl : `${baseUrl}/${locale}`;
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: settings.site_name || "Zain Solutions",
        url: siteUrl,
        logo: settings.logo
          ? { "@type": "ImageObject", url: settings.logo }
          : undefined,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: (settings.phone || "").replace(/\s+/g, ""),
          email: settings.email,
          contactType: "customer service",
          areaServed: "OM",
        },
        address: settings.address
          ? { "@type": "PostalAddress", addressLocality: settings.address }
          : undefined,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: settings.site_name || "Zain Solutions",
        description:
          settings.site_description ||
          "Integrated infrastructure and digital transformation solutions",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: [locale === "ar" ? "ar" : "en"],
      },
    ].filter(Boolean),
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <AppProvider settings={settings} homeData={homeData}>
        <HtmlAttributes
          locale={locale}
          tajawalVariable={locale === "ar" ? tajawal.variable : ""}
        />
        <ToastContainer />
        <Dependency />
        {children}
      </AppProvider>
    </NextIntlClientProvider>
  );
}
