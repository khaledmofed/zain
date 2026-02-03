"use client";

import { useEffect } from "react";

/**
 * Logs zain-infra API response to the browser console. No UI.
 */
export default function ZainInfraApiDebug({ data }) {
  useEffect(() => {
    if (data == null) return;
    console.log("[zain-infra API] response:", data);
  }, [data]);

  return null;
}
