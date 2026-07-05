import "server-only";

import { getDb } from "./db";

export type SiteContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    primaryCta: string;
    secondaryCta: string;
  };
  stats: Array<{ label: string; value: string }>;
  about: {
    title: string;
    body: string;
    image: string;
  };
  services: Array<{ title: string; description: string; image: string }>;
  gallery: Array<{ title: string; image: string }>;
  testimonials: Array<{ name: string; quote: string }>;
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
    mapUrl: string;
  };
};

export const defaultContent: SiteContent = {
  hero: {
    eyebrow: "Modern dental care in your neighborhood",
    title: "A calmer, brighter dental experience.",
    subtitle:
      "Gentle dentistry, cosmetic smile design, implants, and preventive care delivered in a warm clinic built around comfort and clarity.",
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1800&q=85",
    primaryCta: "Book appointment",
    secondaryCta: "View services",
  },
  stats: [
    { value: "12+", label: "years of clinical experience" },
    { value: "4.9", label: "average patient rating" },
    { value: "8k+", label: "healthy smiles treated" },
  ],
  about: {
    title: "Precision dentistry with a human touch.",
    body:
      "From first checkups to smile makeovers, our team focuses on transparent treatment planning, pain-conscious care, and modern equipment that helps every visit feel easy.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
  },
  services: [
    {
      title: "Smile design",
      description:
        "Whitening, veneers, bonding, and reshaping planned around your natural features.",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Preventive care",
      description:
        "Routine exams, cleanings, X-rays, and gum health support for long-term confidence.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Implants and crowns",
      description:
        "Durable restorations designed for comfort, chewing strength, and a natural look.",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85",
    },
  ],
  gallery: [
    {
      title: "Reception",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Treatment suite",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Consultation",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85",
    },
  ],
  testimonials: [
    {
      name: "Riya S.",
      quote:
        "The doctor explained every step clearly and the treatment felt much easier than I expected.",
    },
    {
      name: "Aman K.",
      quote:
        "Clean clinic, friendly team, and my smile design result looks natural. Exactly what I wanted.",
    },
  ],
  contact: {
    phone: "+91 98765 43210",
    email: "hello@jainsmiles.com",
    address: "2nd Floor, Jain Plaza, Main Road, New Delhi",
    hours: "Mon-Sat, 9:30 AM - 7:30 PM",
    mapUrl: "https://maps.google.com",
  },
};

const COLLECTION = "site_content";
const DOCUMENT_ID = "main";

function mergeSiteContent(content?: Partial<SiteContent> | null): SiteContent {
  return {
    hero: {
      ...defaultContent.hero,
      ...(content?.hero ?? {}),
    },
    stats: Array.isArray(content?.stats) ? content.stats : defaultContent.stats,
    about: {
      ...defaultContent.about,
      ...(content?.about ?? {}),
    },
    services: Array.isArray(content?.services)
      ? content.services
      : defaultContent.services,
    gallery: Array.isArray(content?.gallery)
      ? content.gallery
      : defaultContent.gallery,
    testimonials: Array.isArray(content?.testimonials)
      ? content.testimonials
      : defaultContent.testimonials,
    contact: {
      ...defaultContent.contact,
      ...(content?.contact ?? {}),
    },
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const db = await getDb();
    const document = await db
      .collection<{ _id: string; content?: Partial<SiteContent> }>(COLLECTION)
      .findOne({ _id: DOCUMENT_ID });

    return mergeSiteContent(document?.content);
  } catch {
    return defaultContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  const db = await getDb();

  await db.collection<{ _id: string; content: SiteContent }>(COLLECTION).updateOne(
    { _id: DOCUMENT_ID },
    {
      $set: {
        content,
        updatedAt: new Date(),
      },
    },
    { upsert: true },
  );
}
