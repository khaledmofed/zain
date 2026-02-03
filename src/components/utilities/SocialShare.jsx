"use client";
import Link from "next/link";
import React from "react";
import { useApp } from "@/contexts/AppContext";

const DEFAULT_SOCIAL = {
  facebook: "https://www.facebook.com/mshussain0101/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/zain_sme/?hl=en",
  linkedin: "https://www.linkedin.com/",
};

const SocialShare = () => {
  const { settings } = useApp();
  const facebook = settings?.facebook || DEFAULT_SOCIAL.facebook;
  const twitter = settings?.twitter || DEFAULT_SOCIAL.twitter;
  const instagram = settings?.instagram || DEFAULT_SOCIAL.instagram;
  const linkedin = settings?.linkedin || DEFAULT_SOCIAL.linkedin;

  return (
    <>
      <li>
        <Link
          className="facebook"
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </Link>
      </li>
      <li>
        <Link
          className="twitter"
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
      <li>
        <Link
          className="instagram"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </Link>
      </li>
      <li>
        <Link
          className="linkedin"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </li>
    </>
  );
};

export default SocialShare;
