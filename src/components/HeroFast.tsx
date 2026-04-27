import { ArrowRight, MessageSquare, Play } from "lucide-react";
import { STUDIO_INFO } from "../constants";
import Link from "next/link";

export default function HeroFast() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-violet/20 rounded-full blur-[120px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand text-[10px] font-bold mb-8 tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            L'excellence sonore à Yaoundé
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black leading-[0.95] mb-8 tracking-tighter">
            PRODUIRE <br />
            <span className="text-gradient uppercase">L'EXCEPTIONNEL.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Ekie Bozeur Entertainment : là où la technologie rencontre l'âme
            artistique. Donnez à votre musique la dimension qu'elle mérite.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a
              href={STUDIO_INFO.whatsapp}
              className="px-10 py-5 bg-brand text-white font-black rounded-2xl flex items-center justify-center gap-3 glow-red hover:bg-brand/90 active:bg-brand/90 active:scale-[0.99] transition-all text-lg shadow-[0_20px_50px_rgba(229,9,20,0.3)] w-full sm:w-auto"
            >
              RÉSERVER UNE SESSION <MessageSquare size={20} />
            </a>
            <Link
              href="/services"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 active:bg-white/10 transition-all text-lg w-full sm:w-auto"
            >
              NOS SERVICES <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="relative z-10 block">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden glass-card p-3 sm:p-5 border-white/5 shadow-2xl skew-y-0 lg:-rotate-3 hover:rotate-0 active:rotate-0 transition-transform duration-700">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/medias/images/hero-bg.jpg"
                alt="Studio session"
                className="w-full aspect-[4/5] sm:aspect-video lg:aspect-[4/5] object-cover transition-all duration-1000"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-bg-dark/90 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 right-8 sm:right-12 flex items-end justify-between">
              <div>
                <p className="text-brand font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 sm:mb-2">
                  Premium Audio
                </p>
                <div className="h-0.5 sm:h-1 w-12 bg-brand mb-2 sm:mb-4" />
                <p className="text-xl sm:text-2xl font-black uppercase tracking-tighter leading-none">
                  Vibe Check <br /> <span className="text-white/40">In Progress</span>
                </p>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand flex items-center justify-center glow-red shadow-lg animate-pulse">
                <Play className="text-white fill-white ml-1 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-40 sm:h-40 border border-white/5 rounded-full animate-float opacity-20" />
          <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 h-32 sm:w-60 sm:h-60 border border-brand/10 rounded-full animate-pulse opacity-20" />
        </div>
      </div>
    </section>
  );
}
