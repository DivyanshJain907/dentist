import { Camera, Sparkles } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ClinicPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-[#f7fbfa] text-[#10211f]">
      <SiteHeader content={content} />

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="animate-rise">
            <SectionLabel>Clinic gallery</SectionLabel>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              See the space before you visit.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#5d706b] animate-rise delay-2">
            Browse the reception, treatment suite, consultation area, and clinic
            details. These images are editable from the admin dashboard.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {content.gallery.map((item, index) => (
            <figure
              key={item.title}
              className={`rounded-2xl border border-[#dce9e6] bg-white p-3 hover-lift ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <SmartImage
                src={item.image}
                alt={item.title}
                className={`w-full rounded-xl object-cover image-zoom ${
                  index === 0 ? "aspect-[16/10] md:h-[520px]" : "aspect-[4/3]"
                }`}
              />
              <figcaption className="flex items-center justify-between p-4">
                <span className="font-bold text-[#31413d]">{item.title}</span>
                <Camera size={18} className="text-[#0d766d]" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["Calm waiting area", "Modern equipment", "Clean treatment rooms"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#dce9e6] bg-[#f7fbfa] p-6"
              >
                <Sparkles className="mb-4 text-[#0d766d]" size={23} />
                <h2 className="text-xl font-bold">{item}</h2>
                <p className="mt-3 leading-7 text-[#5d706b]">
                  Designed to make each appointment feel simple, clear, and
                  comfortable.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}
