"use client";

import { useState } from "react";

const fallbackImage =
  "data:image/svg+xml,%3Csvg width='1200' height='900' viewBox='0 0 1200 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23e7f6f3'/%3E%3Cstop offset='1' stop-color='%23f7fbfa'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='900' fill='url(%23g)'/%3E%3Ccircle cx='600' cy='390' r='92' fill='%230d766d' opacity='0.12'/%3E%3Cpath d='M560 343c-27 0-49 22-49 49 0 68 54 128 89 128s89-60 89-128c0-27-22-49-49-49-17 0-31 8-40 21-9-13-23-21-40-21z' fill='%230d766d'/%3E%3Ctext x='600' y='610' text-anchor='middle' font-family='Arial, sans-serif' font-size='34' font-weight='700' fill='%2310211f'%3EClinic image%3C/text%3E%3Ctext x='600' y='660' text-anchor='middle' font-family='Arial, sans-serif' font-size='22' fill='%235d706b'%3EUpdate this from admin dashboard%3C/text%3E%3C/svg%3E";

export function SmartImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imageSrc, setImageSrc] = useState(src || fallbackImage);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImageSrc(fallbackImage)}
    />
  );
}
