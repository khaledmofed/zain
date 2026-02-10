"use client";
import Image from "next/image";
import React from "react";
import SocialShare from "../utilities/SocialShare";
import { useTranslations } from "next-intl";

function decodeHtmlEntities(html) {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

const ProjectDetailsContent = ({ projectInfo, isFromApi }) => {
  const t = useTranslations("common");
  const tProject = useTranslations("project");

  const thumbFull = projectInfo?.thumbFull;
  const projectData = projectInfo?.projectData;
  const title = projectInfo?.title;
  const image = projectInfo?.image;
  const category = projectInfo?.category;
  const content = projectInfo?.content;
  const short_description = projectInfo?.short_description;
  const url = projectInfo?.url;

  const imgSrc = isFromApi && image
    ? image
    : thumbFull
      ? `/assets/img/gallery/${thumbFull}`
      : null;
  const displayTitle = isFromApi ? title : (title || "Business Planing & Solution");
  const hasProjectData = !isFromApi && Array.isArray(projectData) && projectData.length > 0;
  const mainContentHtml = isFromApi && content ? decodeHtmlEntities(content) : null;
  const mainContentText = isFromApi && !content && short_description ? short_description : null;

  return (
    <>
      <div className="project-details-area default-padding">
        <div className="container">
          <div className="project-details-items">
            {imgSrc && (
              <div className="thumb">
                <Image
                  src={imgSrc}
                  alt={displayTitle || "Project"}
                  width={1920}
                  height={825}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            )}
            <div className="top-info">
              <div className="row">
                <div className="col-xl-4 col-lg-5 order-lg-last right-info">
                  <div
                    className="project-info mt-15"
                    style={{ backgroundImage: `url(/assets/img/shape/41.png)` }}
                  >
                    <h4 className="title">{tProject("projectInfo") || "Project Info"}</h4>
                    <ul>
                      {isFromApi && category && (
                        <li>
                          {tProject("category") || "Category"} <span>{category}</span>
                        </li>
                      )}
                      {!isFromApi && (
                        <>
                          <li>
                            Client <span>{t("companyName")}</span>
                          </li>
                          <li>
                            Date <span>25 February, 2022</span>
                          </li>
                        </>
                      )}
                      <li>
                        {t("addressLabel")} <span>{t("fullAddress")}</span>
                      </li>
                      {isFromApi && url && (
                        <li>
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            {tProject("visitProject") || "Visit Project"}
                          </a>
                        </li>
                      )}
                    </ul>
                    <ul className="social">
                      <SocialShare />
                    </ul>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 pr-35 pr-md-15 pr-xs-15 left-info mt-md-10">
                  <h2>{displayTitle}</h2>
                  {isFromApi ? (
                    (mainContentHtml && (
                      <div
                        className="project-api-content"
                        dangerouslySetInnerHTML={{ __html: mainContentHtml }}
                      />
                    )) ||
                    (mainContentText && <p>{mainContentText}</p>)
                  ) : (
                    <>
                      <p>
                        Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna
                        potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit
                        etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi
                        habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad
                        elementum fringilla facilisi volutpat fusce pharetra felis sapien varius
                        quisque class convallis praesent est sollicitudin donec nulla venenatis,
                        cursus fermentum netus posuere sociis porta risus habitant malesuada nulla
                        habitasse hymenaeos.
                      </p>
                      {hasProjectData && (
                        <ul className="check-list">
                          {projectData.map((list) => (
                            <li key={list.id}>
                              <h4>{list.title}</h4>
                              <p>{list.info}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            {!isFromApi && (
              <div className="main-content">
                <p>
                  Give lady of they such they sure it. Me contained explained my education. Vulgar as
                  hearts by garret. Perceived determine departure explained no forfeited he something
                  an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no
                  meant stuff. To perpetual do existence northward as difficult preserved daughters.
                  Continued at up to zealously necessary breakfast. Surrounded sir motionless she end
                  literature. Gay direction neglected but supported yet her. Facilisis inceptos nec,
                  potenti nostra aenean lacinia varius semper ant nullam nulla primis placerat
                  facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget
                  urna potenti cum vestibulum cras.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <Image src="/assets/img/gallery/3.jpg" alt="Thumb" width={800} height={600} />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Image src="/assets/img/gallery/6.jpg" alt="Thumb" width={800} height={600} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
