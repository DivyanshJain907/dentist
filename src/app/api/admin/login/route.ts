import { NextResponse } from "next/server";

import { setAdminSession, verifyAdminCredentials } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };
  const email = body.email?.trim() || "";
  const password = body.password || "";

  if (!verifyAdminCredentials(email, password)) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 },
    );
  }

  await setAdminSession(email);
  return NextResponse.json({ ok: true });
}
