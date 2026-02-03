"use client";
import React from "react";
import { useLocale } from "next-intl";

const ServiceAccordionItem = ({
  serviceKey,
  title,
  items,
  answer,
  index,
  isFirst = false,
}) => {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const headingId = `heading-${serviceKey}`;
  const collapseTarget = `collapse-${serviceKey}`;
  const btnClass = isFirst ? "" : "collapsed";
  const textClass = isFirst ? "show" : "";
  const expanded = isFirst ? "true" : "false";

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id={headingId}>
          <button
            className={`accordion-button ${btnClass}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseTarget}`}
            aria-expanded={expanded}
            aria-controls={collapseTarget}
            style={{ fontSize: "22px", fontWeight: "600", color: "#bf1d2e" }}
          >
            {title}
          </button>
        </h2>
        <div
          id={collapseTarget}
          className={`accordion-collapse collapse ${textClass}`}
          aria-labelledby={headingId}
          data-bs-parent="#servicesAccordion"
        >
          <div className="accordion-body">
            {answer != null ? (
              <div
                className="service-list-html"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            ) : Array.isArray(items) ? (
              <ul
                className="service-list"
                style={{ listStyle: "none", paddingLeft: "0", margin: 0 }}
              >
                {items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{
                      padding: "10px 0",
                      paddingLeft: isRTL ? "0" : "25px",
                      paddingRight: isRTL ? "25px" : "0",
                      position: "relative",
                      lineHeight: "1.8",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: isRTL ? "auto" : "0",
                        right: isRTL ? "0" : "auto",
                        color: "#bf1d2e",
                        fontWeight: "bold",
                      }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAccordionItem;
