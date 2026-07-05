import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

import { ContactForm } from "./contact-form";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-[#f7fbfa] text-[#10211f]">
      <SiteHeader content={content} />

      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="animate-rise flex flex-col justify-between rounded-3xl bg-[#10211f] p-6 text-white shadow-[0_24px_70px_rgba(16,33,31,0.18)] md:p-10">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#9ee1d7]">
                Contact
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Book a visit or ask the clinic a question.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
                Send your details and the clinic team can help you choose the
                right appointment for your concern.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${content.contact.phone}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#f2c96f] px-5 font-bold text-[#10211f] hover:bg-white"
                >
                  <Phone size={19} />
                  Call now
                </a>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-5 font-bold text-white hover:border-[#9ee1d7] hover:text-[#9ee1d7]"
                >
                  <Mail size={19} />
                  Email clinic
                </a>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              <SmartImage
                src={content.gallery[0]?.image || content.hero.image}
                alt="Jain Dental Studio reception"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 animate-rise delay-2">
            <ContactForm />
            <div className="grid gap-3 sm:grid-cols-2">
              <ContactCard icon={<Phone size={22} />} title="Phone" value={content.contact.phone} />
              <ContactCard icon={<Mail size={22} />} title="Email" value={content.contact.email} />
              <ContactCard icon={<MapPin size={22} />} title="Address" value={content.contact.address} />
              <ContactCard icon={<Clock3 size={22} />} title="Hours" value={content.contact.hours} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-[#dce9e6] bg-white shadow-sm lg:grid-cols-[1fr_0.85fr]">
          <div className="bg-[#e7f6f3] p-6 md:p-10">
            <SectionLabel>Location</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Find Jain Dental Studio
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#5d706b]">
              {content.contact.address}
            </p>
            <a
              href={content.contact.mapUrl}
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#10211f] px-5 font-bold text-white hover:bg-[#0d766d] sm:w-max"
            >
              Open map
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="min-h-72 bg-[#10211f] p-5 text-white md:p-8">
            <div className="grid h-full place-items-center rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center">
              <MapPin className="mb-4 text-[#9ee1d7]" size={42} />
              <p className="max-w-sm text-xl font-bold leading-8">
                Open the map for directions and clinic location details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex min-h-32 gap-4 rounded-2xl border border-[#dce9e6] bg-white p-4 hover-lift md:p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e7f6f3] text-[#0d766d]">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[#0d766d]">
          {title}
        </span>
        <span className="mt-1 block break-words leading-7 text-[#40514d]">
          {value}
        </span>
      </span>
    </div>
  );
}
