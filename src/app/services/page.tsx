import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-[#f7fbfa] text-[#10211f]">
      <SiteHeader content={content} />

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl animate-rise">
          <SectionLabel>Services</SectionLabel>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Complete dental care for healthy, confident smiles.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d706b]">
            Explore the treatments currently highlighted on the website. Admin
            edits update these service cards automatically.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {content.services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-[#dce9e6] bg-white p-3 hover-lift"
            >
              <SmartImage
                src={service.image}
                alt={service.title}
                className="aspect-[4/3] w-full rounded-xl object-cover image-zoom"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-3 leading-7 text-[#5d706b]">
                  {service.description}
                </p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0d766d]"
                >
                  Book this treatment
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Treatment flow</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Planned carefully from consultation to follow-up.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Consultation and diagnosis",
              "Treatment plan with options and timeline",
              "Comfort-focused procedure",
              "Aftercare and review guidance",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-[#dce9e6] bg-[#f7fbfa] p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0d766d] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <CheckCircle2 className="text-[#0d766d]" size={21} />
                <p className="font-bold text-[#31413d]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}
