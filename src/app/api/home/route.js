import { fetchHome } from "@/lib/api";
import { NextResponse } from "next/server";

/**
 * GET /api/home?locale=ar|en
 * Proxies to external API so the browser request shows in Network tab.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  const data = await fetchHome(locale);

  if (data == null) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch home data" },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, data });
}
