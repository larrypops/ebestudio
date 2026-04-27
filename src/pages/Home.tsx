import HeroFast from "../components/HeroFast";
import HomeDeferredSections from "../components/HomeDeferredSections";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroFast />
      <HomeDeferredSections />

      <section className="py-24 bg-linear-to-b from-bg-dark to-bg-accent/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1]">
            Prêt à lancer votre <span className="text-gradient">chef-d'œuvre ?</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Rejoignez les artistes et créateurs qui font confiance à EBE pour
            leur son et leur image. Qualité garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-brand text-white font-bold rounded-full flex items-center justify-center gap-2 glow-red hover:bg-brand/90 active:bg-brand/90 active:scale-[0.99] transition-all text-lg"
            >
              Réserver maintenant <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
