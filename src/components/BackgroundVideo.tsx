"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  poster: string;
  alt?: string;
  /**
   * Scale (transform-origin: top-left) used to push a baked-in corner
   * watermark out of the visible frame. 1 = no crop.
   */
  cropScale?: number;
};

/**
 * Full-bleed autoplaying, muted, looping background video that fills its
 * (relative) parent. Falls back to a static poster for prefers-reduced-motion.
 */
export default function BackgroundVideo({ src, poster, alt = "", cropScale = 1 }: Props) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const cropStyle =
    cropScale !== 1
      ? ({ transform: `scale(${cropScale})`, transformOrigin: "top left" } as React.CSSProperties)
      : undefined;

  if (reduced) {
    return (
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={cropStyle}
      />
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      style={cropStyle}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-label={alt || undefined}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
