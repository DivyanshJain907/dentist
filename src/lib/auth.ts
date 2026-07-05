import "server-only";

import { cookies } from "next/headers";
import crypto from "node:crypto";

const COOKIE_NAME = "dentist_admin_session";
const ONE_DAY = 60 * 60 * 24;

function getSecret() {
  return (
    process.env.DENTIST_ADMIN_SESSION_SECRET ||
    process.env.ADMIN_SESSION_SECRET ||
    "local-dev-change-this-secret"
  );
}

function sign(value: string) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function verifyAdminCredentials(email: string, password: string) {
  const adminEmail =
    process.env.DENTIST_ADMIN_EMAIL ||
    process.env.ADMIN_EMAIL ||
    "admin@dentist.local";
  const adminPassword =
    process.env.DENTIST_ADMIN_PASSWORD ||
    process.env.ADMIN_PASSWORD ||
    "admin12345";

  return email === adminEmail && password === adminPassword;
}

export function createSessionToken(email: string) {
  const payload = JSON.stringify({
    email,
    expiresAt: Date.now() + ONE_DAY * 1000,
  });
  const encodedPayload = Buffer.from(payload).toString("base64url");
  return `${encodedPayload}.${sign(encodedPayload)}`;
}

export async function setAdminSession(email: string) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, createSessionToken(email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: ONE_DAY,
    path: "/",
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || signature !== sign(encodedPayload)) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as { email: string; expiresAt: number };

    if (payload.expiresAt < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
