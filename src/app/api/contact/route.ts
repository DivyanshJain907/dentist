import { NextResponse } from "next/server";

import {
  parseContactMessage,
  saveContactMessage,
  validateContactMessage,
} from "@/lib/messages";

export async function POST(request: Request) {
  const message = parseContactMessage(await request.json());
  const error = validateContactMessage(message);

  if (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  await saveContactMessage(message);

  return NextResponse.json({ ok: true });
}
