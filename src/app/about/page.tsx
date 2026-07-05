import { Check, ShieldCheck, Star, UsersRound } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-[#f7fbfa] text-[#10211f]">
      <SiteHeader content={content} />

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="animate-rise">
            <SectionLabel>About Jain Dental Studio</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Dentistry built around trust, comfort, and clarity.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d706b]">
              {content.about.body}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-rise delay-2">
            <SmartImage
              src={content.about.image}
              alt={content.about.title}
              className="aspect-[4/5] rounded-2xl object-cover shadow-[0_18px_55px_rgba(36,63,58,0.13)]"
            />
            <div className="space-y-4 pt-12">
              {content.gallery.slice(0, 2).map((item) => (
                <SmartImage
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] rounded-2xl object-cover shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <ValueCard
            icon={<ShieldCheck size={24} />}
            title="Honest diagnosis"
            body="Treatment options are explained clearly before anything begins."
          />
          <ValueCard
            icon={<Star size={24} />}
            title="Natural results"
            body="Cosmetic and restorative work is planned around your real smile."
          />
          <ValueCard
            icon={<UsersRound size={24} />}
            title="Family friendly"
            body="Preventive care and appointments for adults, teens, and children."
          />
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-[#dce9e6] bg-white p-7 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Every visit should feel easy to understand.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "We listen first and understand the actual concern.",
              "We explain the treatment path in simple language.",
              "We keep appointments organized, calm, and respectful of time.",
              "We focus on long-term oral health, not quick fixes.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-[#f7fbfa] p-4">
                <Check className="mt-1 text-[#0d766d]" size={20} />
                <p className="leading-7 text-[#40514d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}

function ValueCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-[#dce9e6] bg-[#f7fbfa] p-6 hover-lift">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#e7f6f3] text-[#0d766d]">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-[#5d706b]">{body}</p>
    </article>
  );
}
