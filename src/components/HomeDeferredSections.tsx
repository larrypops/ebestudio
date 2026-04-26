"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Workflow = dynamic(
  () => import("./CompanyMeta").then((module) => module.Workflow),
  { ssr: false },
);
const SocialProof = dynamic(
  () => import("./Hero").then((module) => module.SocialProof),
  { ssr: false },
);
const ValueProposition = dynamic(
  () => import("./Services").then((module) => module.ValueProposition),
  { ssr: false },
);
const Services = dynamic(
  () => import("./Services").then((module) => module.Services),
  { ssr: false },
);
const Gallery = dynamic(
  () => import("./Gallery").then((module) => module.Gallery),
  { ssr: false },
);
const Playlist = dynamic(() => import("./Playlist"), { ssr: false });
const Testimonials = dynamic(
  () => import("./CompanyMeta").then((module) => module.Testimonials),
  { ssr: false },
);

function SectionPlaceholder({ height = "h-24" }: { height?: string }) {
  return (
    <section className="py-20 content-visibility-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`${height} rounded-3xl bg-white/[0.04] border border-white/5 animate-pulse`}
        />
      </div>
    </section>
  );
}

function LazyMount({
  children,
  placeholderHeight,
}: {
  children: ReactNode;
  placeholderHeight?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "420px 0px" },
    );

    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={anchorRef} className="content-visibility-auto">
      {isVisible ? children : <SectionPlaceholder height={placeholderHeight} />}
    </div>
  );
}

export default function HomeDeferredSections() {
  return (
    <>
      <LazyMount placeholderHeight="h-28">
        <SocialProof />
      </LazyMount>
      <LazyMount placeholderHeight="h-96">
        <ValueProposition />
      </LazyMount>
      <LazyMount placeholderHeight="h-96">
        <Services />
      </LazyMount>
      <LazyMount placeholderHeight="h-20">
        <Workflow />
      </LazyMount>
      <LazyMount placeholderHeight="h-72">
        <Gallery />
      </LazyMount>
      <LazyMount placeholderHeight="h-72">
        <Playlist />
      </LazyMount>
      <LazyMount placeholderHeight="h-72">
        <Testimonials />
      </LazyMount>
    </>
  );
}
