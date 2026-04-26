"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Workflow = dynamic(
  () => import("./CompanyMeta").then((module) => module.Workflow),
);
const Gallery = dynamic(
  () => import("./Gallery").then((module) => module.Gallery),
);
const Playlist = dynamic(() => import("./Playlist"));
const Testimonials = dynamic(
  () => import("./CompanyMeta").then((module) => module.Testimonials),
);

function SectionPlaceholder() {
  return (
    <section className="py-20 content-visibility-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-24 rounded-3xl bg-white/[0.04] border border-white/5 animate-pulse" />
      </div>
    </section>
  );
}

export default function HomeDeferredSections() {
  const [showDeferred, setShowDeferred] = useState(false);

  useEffect(() => {
    const timerId = window.setTimeout(() => setShowDeferred(true), 600);
    return () => window.clearTimeout(timerId);
  }, []);

  if (!showDeferred) {
    return (
      <>
        <SectionPlaceholder />
        <SectionPlaceholder />
      </>
    );
  }

  return (
    <>
      <Workflow />
      <Gallery />
      <Playlist />
      <Testimonials />
    </>
  );
}
