import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jain Dental Studio",
  description:
    "Modern dentist website with an editable admin dashboard and MongoDB content storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
