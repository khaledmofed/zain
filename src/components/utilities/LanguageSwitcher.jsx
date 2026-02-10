"use client";
import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    // Navigate to new locale with same path
    router.replace(pathname, { locale: newLocale });
  };

  // Determine the opposite locale and its flag
  const oppositeLocale = locale === "en" ? "ar" : "en";
  const flagSrc =
    oppositeLocale === "en"
      ? "/assets/img/flags/english3.png"
      : "/assets/img/flags/oman.png";
  const flagAlt = oppositeLocale === "en" ? "English" : "العربية";
  const flagTitle = oppositeLocale === "en" ? "English" : "العربية";

  return (
    <div
      className="language-switcher"
      style={{
        display: "inline-block",
        marginRight: "15px",
      }}
    >
      <button
        onClick={() => switchLocale(oppositeLocale)}
        className="btn-language"
        style={{
          background: "transparent",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          padding: "0",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.1)";
          e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
        }}
        title={flagTitle}
      >
        <Image
          src={flagSrc}
          alt={flagAlt}
          width={32}
          height={32}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
