import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import type { SiteContent } from "@/lib/content";

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-[#dce9e6] bg-[#10211f] px-4 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Jain Dental Studio"
              className="h-12 w-12 rounded-lg"
            />
            <span>
              <span className="block text-xl font-bold">Jain Dental Studio</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#9ee1d7]">
                Modern Dental Care
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/68">
            Gentle, modern dentistry for preventive care, cosmetic smiles, and
            confident long-term oral health.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#9ee1d7]">
            Pages
          </h3>
          <div className="mt-5 grid gap-3 text-white/72">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/clinic" className="hover:text-white">
              Clinic Gallery
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/admin" className="hover:text-white">
              Admin
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#9ee1d7]">
            Contact
          </h3>
          <div className="mt-5 grid gap-4 text-sm text-white/72">
            <FooterItem icon={<Phone size={17} />} label={content.contact.phone} />
            <FooterItem icon={<Mail size={17} />} label={content.contact.email} />
            <FooterItem icon={<MapPin size={17} />} label={content.contact.address} />
            <FooterItem icon={<Clock3 size={17} />} label={content.contact.hours} />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
        <p>(c) 2026 Jain Dental Studio. All rights reserved.</p>
        <p>Designed for a modern clinic experience.</p>
      </div>
    </footer>
  );
}

function FooterItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-[#9ee1d7]">{icon}</span>
      <span className="leading-6">{label}</span>
    </div>
  );
}
