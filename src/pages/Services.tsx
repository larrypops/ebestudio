"use client";

import PageTransition from "../components/PageTransition";
import { FAQ } from "../components/CompanyMeta";
import { motion } from "motion/react";
import {
  Star,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SERVICES, STUDIO_INFO } from "../constants";
import * as LucideIcons from "lucide-react";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) {
        return;
      }

      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  const extraAdvantages = [
    {
      icon: <Star className="text-brand" />,
      title: "Qualité Certifiée",
      desc: "Standards internationaux pour toutes nos productions.",
    },
    {
      icon: <Zap className="text-brand" />,
      title: "Livraison Rapide",
      desc: "Respect strict des délais pour vos sorties.",
    },
    {
      icon: <ShieldCheck className="text-brand" />,
      title: "Copyright Secure",
      desc: "Accompagnement sur les droits et la distribution.",
    },
  ];

  return (
    <PageTransition>
      <section className="pt-40 pb-20 bg-bg-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-6xl md:text-9xl font-display font-black tracking-tighter italic uppercase leading-none mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            NOS <span className="text-gradient">SERVICES</span>
          </motion.h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            Une expertise multidimensionnelle pour élever votre art au rang
            d'icône. Découvrez nos solutions sur-mesure.
          </p>
        </div>
      </section>

      <div className="space-y-40 py-40">
        {SERVICES.map((service, i) => {
          const Icon = (LucideIcons as any)[service.icon];
          const isEven = i % 2 === 0;

          return (
            <section key={service.id} id={service.id} className="scroll-mt-32 relative">
              <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  className={`space-y-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                    <Icon size={32} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9]">
                    {service.title}
                  </h2>
                  <p className="text-xl text-white/60 leading-relaxed">
                    {(service as any).longDescription}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-4">
                    {(service as any).features?.map((feature: string, fIdx: number) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-3 text-white/80 font-bold"
                      >
                        <CheckCircle2 size={18} className="text-brand shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <a
                      href={STUDIO_INFO.whatsapp}
                      className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-brand hover:text-white transition-all rounded-xl inline-flex items-center gap-3 font-black uppercase tracking-widest text-xs"
                    >
                      Réserver ce service <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className={`${isEven ? "lg:order-2" : "lg:order-1"} relative`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4 border-white/5 group relative flex items-center justify-center">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl bg-linear-to-br from-bg-accent/50 to-bg-dark">
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Icon size={400} />
                      </motion.div>

                      {[1, 2, 3].map((p) => (
                        <motion.div
                          key={p}
                          className="absolute w-2 h-2 rounded-full bg-brand/30"
                          animate={{
                            x: [Math.random() * 200, Math.random() * -200],
                            y: [Math.random() * 200, Math.random() * -200],
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{ duration: 5 + p, repeat: Infinity, ease: "linear" }}
                          style={{ top: "50%", left: "50%" }}
                        />
                      ))}
                    </div>

                    <motion.div
                      className="relative z-10 text-brand filter drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]"
                      animate={{ y: [-10, 10], rotate: [-2, 2], scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <Icon
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44"
                        strokeWidth={1}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute top-10 right-10 p-2 md:p-4 glass-card rounded-xl text-white/20 animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <LucideIcons.Music className="w-4 h-4 md:w-6 md:h-6" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-10 left-10 p-2 md:p-4 glass-card rounded-xl text-white/20 animate-float"
                      style={{ animationDelay: "2s" }}
                    >
                      <LucideIcons.Zap className="w-4 h-4 md:w-6 md:h-6" />
                    </motion.div>
                  </div>

                  <div
                    className={`absolute -bottom-10 ${
                      isEven ? "-right-10" : "-left-10"
                    } w-48 h-48 md:w-64 md:h-64 bg-brand/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none`}
                  />
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="py-32 bg-bg-accent/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand uppercase text-xs font-black tracking-[0.4em] mb-4">
              Pourquoi nous ?
            </h2>
            <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
              DES AVANTAGES <span className="text-gradient">UNIQUES</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {extraAdvantages.map((adv, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center p-10 glass-card rounded-[2.5rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-4xl border border-white/5">
                  {adv.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">
                  {adv.title}
                </h4>
                <p className="text-white/40 leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </PageTransition>
  );
}
