import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-[#f7fbfa] text-[#10211f]">
      <SiteHeader content={content} />

      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="animate-rise py-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe4df] bg-white px-4 py-2 text-sm font-bold text-[#0d766d] shadow-sm">
              <Sparkles size={16} />
              {content.hero.eyebrow}
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d706b]">
              {content.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-13 items-center gap-2 rounded-lg bg-[#0d766d] px-6 font-bold text-white shadow-[0_16px_36px_rgba(13,118,109,0.24)] hover:-translate-y-0.5 hover:bg-[#095f58]"
              >
                <CalendarDays size={19} />
                {content.hero.primaryCta}
              </a>
              <a
                href="#services"
                className="inline-flex h-13 items-center gap-2 rounded-lg border border-[#cfe4df] bg-white px-6 font-bold text-[#10211f] hover:-translate-y-0.5 hover:border-[#0d766d] hover:text-[#0d766d]"
              >
                {content.hero.secondaryCta}
                <ArrowRight size={19} />
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="animate-rise rounded-xl border border-[#dce9e6] bg-white p-4 shadow-sm hover-lift"
                >
                  <p className="text-3xl font-bold tracking-tight text-[#0d766d]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-5 text-[#60716d]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-rise delay-2">
            <div className="absolute -left-5 -top-5 hidden h-32 w-32 rounded-2xl bg-[#d6f0eb] md:block" />
            <div className="relative overflow-hidden rounded-2xl border border-[#dce9e6] bg-white p-3 shadow-[0_24px_70px_rgba(36,63,58,0.16)]">
              <SmartImage
                src={content.hero.image}
                alt={content.hero.title}
                className="aspect-[4/4.35] w-full rounded-xl object-cover image-zoom"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/70 bg-white/92 p-5 shadow-[0_18px_50px_rgba(16,33,31,0.16)] backdrop-blur">
                <p className="flex items-center gap-2 text-sm font-bold text-[#0d766d]">
                  <ShieldCheck size={18} />
                  Comfort-first treatment
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5d706b]">
                  Advanced care with clear explanations, thoughtful scheduling,
                  and a calm clinic experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce9e6] bg-white px-4 py-6 animate-rise">
        <div className="mx-auto grid max-w-7xl gap-4 text-sm font-bold text-[#536661] md:grid-cols-4">
          {[
            "Digital consultation",
            "Pain-conscious care",
            "Cosmetic dentistry",
            "Family appointments",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="text-[#0d766d]" size={18} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 md:py-28 animate-rise">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <SmartImage
              src={content.about.image}
              alt={content.about.title}
              className="aspect-[4/5] rounded-2xl object-cover shadow-[0_18px_55px_rgba(36,63,58,0.13)] image-zoom"
            />
            <div className="space-y-4 pt-12">
              {content.gallery.slice(0, 2).map((item) => (
                <SmartImage
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] rounded-2xl object-cover shadow-sm image-zoom"
                />
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>About the clinic</SectionLabel>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {content.about.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d706b]">
              {content.about.body}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<ShieldCheck size={22} />}
                title="Clear treatment plans"
                body="You understand the problem, options, cost direction, and timeline before starting."
              />
              <InfoCard
                icon={<Star size={22} />}
                title="Comfort-led dentistry"
                body="Appointments are planned to feel calm, efficient, and respectful of your time."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-20 md:py-28 animate-rise">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Complete dental care, designed for natural-looking results.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex h-12 w-max items-center gap-2 rounded-lg bg-[#10211f] px-5 font-bold text-white hover:bg-[#0d766d]"
            >
              Book appointment
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {content.services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-[#dce9e6] bg-[#f7fbfa] p-3 transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(36,63,58,0.14)]"
              >
                <SmartImage
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full rounded-xl object-cover image-zoom"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-24 leading-7 text-[#5d706b]">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0d766d]">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clinic" className="px-4 py-20 md:py-28 animate-rise">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>Clinic gallery</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Bright spaces, modern equipment, and a calmer visit.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {content.gallery.map((item, index) => (
              <figure
                key={item.title}
                className={index === 0 ? "md:row-span-2" : ""}
              >
                <SmartImage
                  src={item.image}
                  alt={item.title}
                  className={`w-full rounded-2xl object-cover shadow-sm image-zoom ${
                    index === 0 ? "aspect-[4/4.2] md:h-full" : "aspect-[4/3]"
                  }`}
                />
                <figcaption className="mt-3 font-bold text-[#31413d]">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#10211f] px-4 py-20 text-white md:py-28 animate-rise">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#9ee1d7]">
                Patient reviews
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Trusted by patients who want careful, clear dental care.
              </h2>
            </div>
            <div className="rounded-2xl bg-white/8 p-5">
              <p className="text-4xl font-bold text-[#9ee1d7]">4.9/5</p>
              <p className="mt-1 text-sm font-medium text-white/65">
                Average patient rating
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {content.testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 hover-lift"
              >
                <div className="mb-5 flex gap-1 text-[#9ee1d7]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl leading-9 text-white/82">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 font-bold text-white">
                  {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 md:py-28 animate-rise">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-[#dce9e6] bg-white shadow-[0_24px_70px_rgba(36,63,58,0.12)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[#e7f6f3] p-7 md:p-12">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Book a dental visit that feels easy from the start.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#5d706b]">
              Call the clinic or open the map. The team can help with a routine
              checkup, cosmetic consultation, or urgent concern.
            </p>
            <a
              href={`tel:${content.contact.phone}`}
              className="mt-8 inline-flex h-13 items-center gap-2 rounded-lg bg-[#0d766d] px-6 font-bold text-white hover:bg-[#095f58]"
            >
              <Phone size={19} />
              Call now
            </a>
          </div>

          <div className="grid gap-4 p-6 md:p-10">
            <ContactItem icon={<Phone size={20} />} label={content.contact.phone} />
            <ContactItem icon={<Mail size={20} />} label={content.contact.email} />
            <ContactItem icon={<MapPin size={20} />} label={content.contact.address} />
            <ContactItem icon={<Clock3 size={20} />} label={content.contact.hours} />
            <a
              href={content.contact.mapUrl}
              className="mt-2 inline-flex h-12 w-max items-center gap-2 rounded-lg border border-[#cfe4df] px-5 font-bold text-[#10211f] hover:border-[#0d766d] hover:text-[#0d766d]"
            >
              Open map
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <SiteFooter content={content} />
    </main>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-[#dce9e6] bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#e7f6f3] text-[#0d766d]">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 leading-7 text-[#5d706b]">{body}</p>
    </div>
  );
}

function ContactItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[#dce9e6] bg-[#f7fbfa] p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#0d766d]">
        {icon}
      </span>
      <span className="self-center leading-7 text-[#40514d]">{label}</span>
    </div>
  );
}
