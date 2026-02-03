"use client";

import { useEffect } from "react";

/**
 * Logs home API data to the browser console only. No UI.
 * Data is fetched on the server and passed as props.
 */
export default function HomeApiDebug({ data, locale }) {
  useEffect(() => {
    if (data == null) return;
    console.log("[Home API] locale:", locale);
    console.log("[Home API] data:", data);
  }, [data, locale]);

  return null;
}
