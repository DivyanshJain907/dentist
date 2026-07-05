import { redirect } from "next/navigation";

import { getAdminSession } from "@/lib/auth";

import { LoginForm } from "./login-form";

export default async function AdminLoginPage() {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin/dashboard");
  }

  return <LoginForm />;
}
