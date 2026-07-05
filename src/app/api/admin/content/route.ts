import { NextResponse } from "next/server";

import { getAdminSession } from "@/lib/auth";
import { getSiteContent, saveSiteContent, type SiteContent } from "@/lib/content";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await getSiteContent());
}

export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const content = (await request.json()) as SiteContent;
  await saveSiteContent(content);

  return NextResponse.json({ ok: true });
}
