"use client";

import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS, FAQS, STUDIO_INFO } from "../constants";
import { MessageCircle, CheckCircle, Headphones, Send, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Workflow() {
  const steps = [
    { icon: <MessageCircle />, title: "Contact", desc: "Via WhatsApp ou formulaire" },
    { icon: <CheckCircle />, title: "Analyse", desc: "Étude de votre projet" },
    { icon: <Headphones />, title: "Production", desc: "Réalisation studio" },
    { icon: <Send />, title: "Livraison", desc: "Optimisation & diffusion" },
  ];

  return (
    <section className="py-32 border-y border-white/5 bg-white/[0.01] content-visibility-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <h2 className="text-brand uppercase text-[10px] font-black tracking-[0.5em] mb-6">Workflow</h2>
          <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter italic uppercase">
            Processus <span className="text-gradient">Fluide</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 relative">
          {/* Connector Line Desktop */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-white/5 hidden lg:block z-0">
            <motion.div 
               className="h-full bg-brand origin-left"
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               viewport={{ once: true }}
            />
          </div>

          {/* Connector Line Mobile/Tablet */}
          <div className="absolute left-[31px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 lg:hidden z-0">
            <motion.div 
               className="w-full bg-brand origin-top h-full"
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               transition={{ duration: 2, ease: "easeInOut" }}
               viewport={{ once: true }}
            />
          </div>
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative z-10 flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 bg-bg-accent border border-white/10 rounded-[1.25rem] flex items-center justify-center text-brand shrink-0 lg:mb-8 shadow-xl relative z-10"
                whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "var(--color-brand)", color: "white" }}
              >
                {step.icon}
              </motion.div>
              <div className="text-left lg:text-center">
                <h4 className="text-xl sm:text-2xl font-black mb-1 sm:mb-3 uppercase tracking-tight">{step.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 inline-block px-10 py-4 glass-card rounded-2xl border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 font-black uppercase tracking-widest text-xs">
            Simple. <span className="text-brand">Rapide.</span> Efficace.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Multiply testimonials to ensure we have enough for a seamless loop
  const totalTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-32 bg-bg-dark relative overflow-hidden content-visibility-auto">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-brand uppercase text-[10px] font-black tracking-[0.5em] mb-6">Témoignages</h2>
          <h3 className="text-5xl md:text-8xl font-display font-black tracking-tighter italic uppercase leading-[0.9]">
            PAROLES DE <br /><span className="text-gradient">PROS</span>
          </h3>
        </motion.div>
      </div>

      <div className="relative group cursor-grab active:cursor-grabbing">
        {/* Gradient overlays to fade out the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden py-10" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <motion.div 
            className="flex gap-6 sm:gap-8 shrink-0"
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            animate={isPaused ? undefined : { 
              x: ["0%", "-33.33%"] 
            }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {totalTestimonials.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-[300px] sm:w-[400px] p-8 sm:p-10 glass-card rounded-[2.5rem] border-white/5 hover:border-brand/30 transition-all duration-500 flex flex-col justify-between min-h-[300px] sm:min-h-[320px] shrink-0 select-none"
              >
                <div className="mb-6 sm:mb-8">
                  <div className="w-10 h-10 bg-brand/10 text-brand flex items-center justify-center rounded-lg mb-6">
                    <MessageCircle size={20} fill="currentColor" className="opacity-20" />
                  </div>
                  <p className="text-lg sm:text-xl font-bold italic mb-6 leading-relaxed">“{t.quote}”</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-brand to-accent-violet flex items-center justify-center p-px shadow-lg overflow-hidden shrink-0">
                    <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center overflow-hidden">
                      {(t as any).avatar ? (
                        <img 
                          src={(t as any).avatar} 
                          alt={t.name} 
                          className="w-full h-full object-cover transition-all duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="text-xs font-black">{t.name[0]}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs sm:text-sm font-black uppercase text-white">{t.name}</p>
                    <CheckCircle size={14} className="text-[#1d9bf0] fill-[#1d9bf0] text-white" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center lg:text-right">
        <motion.p 
          className="text-white/20 font-black text-[10px] uppercase tracking-[0.3em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Balayez pour voir plus d'avis
        </motion.p>
      </div>
    </section>
  );
}


export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-accent/30 content-visibility-auto">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand uppercase text-sm font-bold tracking-widest mb-4">FAQ</h2>
          <h3 className="text-4xl font-extrabold mb-4">On répond à <span className="text-gradient">tout</span></h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="glass-card rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="p-6 flex items-center justify-between">
                <h4 className="font-bold">{faq.question}</h4>
                <ChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
