"use client";
import { useEffect } from "react";
import { ScrollToTop } from "react-simple-scroll-up";
import { useLocale } from "next-intl";
import { useApp } from "@/contexts/AppContext";

const Dependency = () => {
  const locale = useLocale();
  const { settings } = useApp();
  const whatsappNumber = (
    settings?.whatsapp ||
    settings?.phone ||
    "96872720046"
  )
    .replace(/\s+/g, "")
    .replace(/^\+/, "");
  const whatsappMessage =
    locale === "ar"
      ? "مرحباً، أود الاستفسار عن خدماتكم."
      : "Hello, I'd like to inquire about your services.";

  useEffect(() => {
    // Dynamically import Bootstrap JS to avoid SSR issues
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {})
      .catch((err) => {
        console.error("Project loading ...:", err);
      });
  }, []);

  return (
    <>
      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          locale === "ar" ? "تواصل عبر واتساب" : "Contact on WhatsApp"
        }
      >
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
      </a>
      <ScrollToTop
        symbol={<i className="fal fa-long-arrow-up"></i>}
        showAt={100}
        easing="easeInOutSine"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 999,
        }}
      />
    </>
  );
};

export default Dependency;
