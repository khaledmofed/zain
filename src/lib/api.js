import { cache } from "react";

/**
 * Base URL for Zain Solutions API.
 * Set API_BASE_URL in .env.local to override (e.g. API_BASE_URL=https://zain.ivadso.com/api).
 */
const API_BASE = process.env.API_BASE_URL || "https://zain.ivadso.com/api";
const STORAGE_BASE =
  process.env.NEXT_PUBLIC_STORAGE_URL ||
  (API_BASE ? API_BASE.replace(/\/api\/?$/, "") + "/storage" : "");

/**
 * Returns full URL for a storage path (e.g. logo, favicon).
 * @param {string} path - Path from API (e.g. "settings/logo.png") or full URL.
 */
export function getStorageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return STORAGE_BASE ? `${STORAGE_BASE}/${path.replace(/^\//, "")}` : path;
}

/**
 * Fetches home page data from the API (cached per request).
 * @param {string} locale - 'ar' or 'en' (used as Accept-Language).
 * @returns {Promise<object|null>} API response data or null on error.
 */
export const fetchHome = cache(async function fetchHome(locale = "en") {
  const url = `${API_BASE}/home`;
  const headers = {
    Accept: "application/json",
    "Accept-Language": locale === "ar" ? "ar" : "en",
  };

  try {
    const res = await fetch(url, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`[API] /home failed: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();
    return json?.data ?? json;
  } catch (err) {
    console.error(
      "[API] fetchHome error:",
      err.message,
      "| URL:",
      url,
      "|",
      err.cause || "",
    );
    return null;
  }
});

/**
 * Fetches a single blog post by slug from the API.
 * @param {string} slug - Blog slug (e.g. "overcame-breeding-point-concerns-has-terminate").
 * @param {string} locale - 'ar' or 'en' (Accept-Language).
 * @returns {Promise<object|null>} API data object or null on error/404.
 */
export async function fetchBlogBySlug(slug, locale = "en") {
  if (!slug) return null;
  const url = `${API_BASE}/blogs/${encodeURIComponent(slug)}`;
  const headers = {
    Accept: "application/json",
    "Accept-Language": locale === "ar" ? "ar" : "en",
  };

  try {
    const res = await fetch(url, { headers, cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error("[API] fetchBlogBySlug error:", err.message);
    return null;
  }
}

/**
 * Fetches paginated blogs list from the API.
 * @param {number} page - Page number (1-based).
 * @param {string} locale - 'ar' or 'en' (Accept-Language).
 * @param {object} opts - Optional: per_page (default 12), category (slug), featured (1/0).
 * @returns {Promise<{ data: array, meta: object }|null>} { data, meta } or null on error.
 */
export async function fetchBlogs(page = 1, locale = "en", opts = {}) {
  const { per_page = 12, category, featured } = opts;
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("per_page", String(per_page));
  if (category) params.set("category", category);
  if (featured !== undefined && featured !== "")
    params.set("featured", String(featured));

  const url = `${API_BASE}/blogs?${params.toString()}`;
  const headers = {
    Accept: "application/json",
    "Accept-Language": locale === "ar" ? "ar" : "en",
  };

  try {
    const res = await fetch(url, { headers, cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    const payload = json?.data ?? json;
    return {
      data: Array.isArray(payload?.data) ? payload.data : (payload?.data ?? []),
      meta: payload?.meta ?? {
        current_page: 1,
        last_page: 1,
        per_page: Number(per_page),
        total: 0,
      },
    };
  } catch (err) {
    console.error("[API] fetchBlogs error:", err.message);
    return null;
  }
}

/**
 * Fetches a custom page by slug (e.g. vision, mission).
 * @param {string} slug - Slug (e.g. "vision", "mission").
 * @param {string} locale - 'ar' or 'en' (Accept-Language).
 * @returns {Promise<object|null>} API data object or null on error.
 */
export async function fetchCustom(slug, locale = "en") {
  if (!slug) return null;
  const url = `${API_BASE}/custom/${encodeURIComponent(slug)}`;
  const headers = {
    Accept: "application/json",
    "Accept-Language": locale === "ar" ? "ar" : "en",
  };

  try {
    const res = await fetch(url, { headers, cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error("[API] fetchCustom error:", err.message);
    return null;
  }
}

/**
 * Submits a contact form to the API.
 * @param {object} payload - { name, email, phone?, company?, subject?, message }
 * @returns {Promise<{ success: boolean, message: string, data?: object }>}
 */
export async function submitContact(payload) {
  const url = `${API_BASE}/contact`;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) {
      return {
        success: false,
        message: json?.message || "Request failed",
        data: json?.data,
      };
    }
    return {
      success: true,
      message: json?.message || "Message sent successfully",
      data: json?.data,
    };
  } catch (err) {
    console.error("[API] submitContact error:", err.message);
    return {
      success: false,
      message: err.message || "Network error",
    };
  }
}
