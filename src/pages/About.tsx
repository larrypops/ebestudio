"use client";

import PageTransition from "../components/PageTransition";
import { TEAM } from "../constants";
import { motion } from "motion/react";
import { Target, Heart, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Award />,
      title: "Excellence",
      desc: "Le souci du détail à chaque étape.",
    },
    {
      icon: <Target />,
      title: "Performance",
      desc: "Des outils de pointe pour des résultats pros.",
    },
    {
      icon: <Heart />,
      title: "Passion",
      desc: "On aime la musique autant que vous.",
    },
  ];

  return (
    <PageTransition>
      <section className="pt-40 pb-20 bg-bg-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic uppercase leading-none mb-8">
                QUI SOMMES <br />
                <span className="text-gradient">NOUS ?</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed mb-8">
                Ekie Bozeur Entertainment (EBE) est un studio basé à Yaoundé
                spécialisé dans la production musicale, audiovisuelle et digitale.
              </p>
              <div className="p-8 border-l-2 border-brand bg-white/5 rounded-r-2xl italic text-white/80">
                "Notre mission : créer des œuvres de qualité internationale et
                accompagner les talents africains vers un niveau supérieur."
              </div>
            </motion.div>

            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden glass-card p-2 border-white/5 transform rotate-2">
                <img
                  src="/medias/images/about.jpg"
                  alt="Studio Life"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-[80px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-accent/30 relative content-visibility-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,9,20,0.05),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand uppercase text-xs font-black tracking-[0.4em] mb-4">
              L'Équipe EBE
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-black italic uppercase tracking-tighter">
              UNE FORCE <span className="text-gradient">COLLECTIVE</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                className="group cursor-pointer"
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5 transition-all duration-700 group-hover:border-brand/40 group-hover:shadow-[0_20px_50px_rgba(229,9,20,0.1)] group-hover:-translate-y-2 group-active:border-brand/40 group-active:shadow-[0_20px_50px_rgba(229,9,20,0.1)] group-active:-translate-y-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-active:scale-110"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.src = "/medias/images/team/team-1.jpg";
                    }}
                  />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500">
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-none mb-2">
                      Expert EBE
                    </p>
                    <p className="text-sm sm:text-base font-bold italic leading-tight">
                      "{(member as any).description}"
                    </p>
                  </div>

                  <div className="absolute top-6 right-6 w-8 h-8 bg-brand rounded-full flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 scale-100 sm:scale-0 sm:group-hover:scale-100 group-active:scale-100 rotate-0 sm:rotate-12 sm:group-hover:rotate-0 group-active:rotate-0">
                    <Heart size={14} fill="white" className="text-white" />
                  </div>
                </div>

                <div className="px-4">
                  <h4 className="text-2xl font-display font-black tracking-tight mb-1 group-hover:text-brand group-active:text-brand transition-colors">
                    {member.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-brand/50" />
                    <p className="text-white/40 text-[10px] sm:text-xs font-black uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {values.map((v, i) => (
            <div key={i} className="space-y-6">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mx-auto text-2xl">
                {v.icon}
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight">{v.title}</h4>
              <p className="text-white/40 leading-relaxed max-w-[250px] mx-auto">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
