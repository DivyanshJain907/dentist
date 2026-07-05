import { redirect } from "next/navigation";

import { getAdminSession } from "@/lib/auth";
import { getSiteContent } from "@/lib/content";
import { getContactMessages } from "@/lib/messages";

import { DashboardEditor } from "./dashboard-editor";

export default async function DashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin");
  }

  const [content, messages] = await Promise.all([
    getSiteContent(),
    getContactMessages(),
  ]);

  return <DashboardEditor initialContent={content} initialMessages={messages} />;
}
