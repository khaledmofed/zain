"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { submitContact } from "@/lib/api";

const ContactForm = () => {
  const t = useTranslations("contact");
  const [loading, setLoading] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const fd = new FormData(form);
    const get = (key) => (fd.get(key) ?? "").toString().trim();
    const payload = {
      name: get("name"),
      email: get("email"),
      phone: get("phone") || undefined,
      company: get("company") || undefined,
      subject: get("subject") || undefined,
      message: get("message"),
    };
    if (!payload.name || !payload.email || !payload.message) {
      toast.error(t("requiredFields") || "Please fill required fields.");
      return;
    }
    setLoading(true);
    try {
      const result = await submitContact(payload);
      if (result.success) {
        form.reset();
        toast.success(t("successMessage"));
      } else {
        toast.error(t("errorMessage") || result.message);
      }
    } catch (err) {
      toast.error(t("errorMessage") || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="contact-form contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder={t("name")}
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder={`${t("email")}*`}
                type="email"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder={t("phone")}
                type="text"
                autoComplete="off"
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="company"
                name="company"
                placeholder={t("company") || "Company"}
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="subject"
                name="subject"
                placeholder={t("subject") || "Subject"}
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder={`${t("message")} *`}
                autoComplete="off"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit" disabled={loading}>
              <i className="fa fa-paper-plane"></i>{" "}
              {loading ? t("sending") || "Sending..." : t("submit")}
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="form-message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
