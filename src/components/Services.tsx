"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { SERVICES, STUDIO_INFO } from "../constants";
import * as LucideIcons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Services() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center md:text-left">
            <motion.h2
              className="text-brand uppercase text-xs font-black tracking-[0.4em] mb-6"
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              whileInView={{ letterSpacing: "0.4em", opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Expertise & Savoir-faire
            </motion.h2>
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none italic uppercase">
              NOS <span className="text-gradient">SERVICES</span>
            </h3>
          </div>
          <p className="text-white/40 max-w-sm text-lg leading-relaxed border-l-0 md:border-l border-white/10 pl-0 md:pl-6 text-center md:text-left mx-auto md:mx-0">
            Une approche 360 degrés pour transformer votre vision artistique en
            réalité commerciale.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.map((service) => {
            const Icon = (LucideIcons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={item}
                className="group p-10 glass-card rounded-[2rem] hover:bg-white/[0.05] transition-all duration-500 border-white/5 relative overflow-hidden flex flex-col"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/10 rounded-full blur-[60px] group-hover:bg-brand/20 transition-all duration-500" />

                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">
                  {service.title}
                </h4>
                <p className="text-white/40 text-base leading-relaxed mb-8 group-hover:text-white/70 transition-colors flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0"
                >
                  En savoir plus <LucideIcons.ChevronRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function ValueProposition() {
  const points = [
    "Qualité studio professionnelle",
    "Accompagnement personnalisé",
    "Créativité + direction artistique",
    "Livraison rapide",
    "Résultats adaptés aux plateformes",
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-bg-accent/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative group">
            <img
              src="/medias/images/about.jpg"
              alt="Ekie Bozeur Entertainment Team"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 via-transparent to-transparent" />
          </div>

          <motion.div
            className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 p-6 sm:p-10 glass-card rounded-[2rem] sm:rounded-[2.5rem] md:block max-w-[280px] sm:max-w-xs border-brand/20 glow-red z-20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <LucideIcons.Quote className="text-brand mb-3 sm:mb-4 w-6 h-6 sm:w-8 sm:h-8" />
            <p className="text-lg sm:text-xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight">
              "Porter les talents africains vers un niveau supérieur."
            </p>
            <p className="text-[10px] sm:text-xs text-white/40 uppercase font-black tracking-widest">
              - Ekie Bozeur, CEO
            </p>
          </motion.div>
        </motion.div>

        <div>
          <motion.h2
            className="text-brand uppercase text-xs font-black tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pourquoi choisir Ekie Bozeur Entertainment ?
          </motion.h2>
          <motion.h3
            className="text-5xl md:text-7xl font-display font-black mb-10 tracking-tighter italic uppercase leading-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Plus qu'un studio, <br />
            <span className="text-gradient">un partenaire.</span>
          </motion.h3>
          <motion.p
            className="text-xl text-white/50 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Chez Ekie Bozeur Entertainment, nous ne faisons pas que produire du
            son. Nous construisons des identités fortes. Chaque détail compte
            pour créer l'exceptionnel.
          </motion.p>

          <motion.ul className="space-y-6 mb-16">
            {points.map((point, i) => (
              <motion.li
                key={point}
                className="flex items-center gap-4 text-white/90 font-bold text-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <CheckCircle2 size={16} />
                </div>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <motion.a
            href={STUDIO_INFO.whatsapp}
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand text-white font-black rounded-2xl glow-red hover:bg-brand/90 transition-all text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            DISCUTER DE MON PROJET <LucideIcons.ArrowRight size={22} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
