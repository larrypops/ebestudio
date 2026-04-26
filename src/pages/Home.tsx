"use client";

import PageTransition from "../components/PageTransition";
import { Hero, SocialProof } from "../components/Hero";
import {
  Services as ServicesComponent,
  ValueProposition,
} from "../components/Services";
import { Workflow, Testimonials } from "../components/CompanyMeta";
import Playlist from "../components/Playlist";
import { Gallery } from "../components/Gallery";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <SocialProof />
      <ValueProposition />
      <ServicesComponent />
      <Workflow />
      <Gallery />
      <Playlist />
      <Testimonials />

      <section className="py-24 bg-linear-to-b from-bg-dark to-bg-accent/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1]">
            Pret a lancer votre <span className="text-gradient">chef-d'oeuvre ?</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Rejoignez les artistes et createurs qui font confiance a EBE pour
            leur son et leur image. Qualite garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-brand text-white font-bold rounded-full flex items-center justify-center gap-2 glow-red hover:bg-brand/90 transition-all text-lg"
            >
              Reserver maintenant <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
