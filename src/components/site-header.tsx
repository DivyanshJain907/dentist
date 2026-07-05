import { CalendarDays } from "lucide-react";
import Link from "next/link";

import type { SiteContent } from "@/lib/content";

export function SiteHeader({ content }: { content: SiteContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dce9e6] bg-white/90 px-4 backdrop-blur-xl animate-drop-in">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Jain Dental Studio"
            className="h-11 w-11 rounded-lg"
          />
          <span>
            <span className="block text-lg font-bold tracking-tight">
              Jain Dental Studio
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#6b7c78]">
              Modern Dental Care
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-[#43524f] md:flex">
          <Link href="/about" className="hover:text-[#0d766d]">
            About
          </Link>
          <Link href="/services" className="hover:text-[#0d766d]">
            Services
          </Link>
          <Link href="/clinic" className="hover:text-[#0d766d]">
            Clinic
          </Link>
          <Link href="/contact" className="hover:text-[#0d766d]">
            Contact
          </Link>
        </nav>

        <a
          href={`tel:${content.contact.phone}`}
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#10211f] px-4 text-sm font-bold text-white hover:bg-[#0d766d]"
        >
          <CalendarDays size={17} />
          Book Visit
        </a>
      </div>
    </header>
  );
}
