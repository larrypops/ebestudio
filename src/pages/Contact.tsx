"use client";

import PageTransition from "../components/PageTransition";
import { Contact as ContactComponent } from "../components/Contact";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <PageTransition>
      <section className="pt-40 pb-10 bg-bg-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-6xl md:text-9xl font-display font-black tracking-tighter italic uppercase leading-none mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            RESTONS EN <br />
            <span className="text-gradient">CONTACT</span>
          </motion.h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            Besoin d'une prod ? D'un clip ? Ou juste d'une info ? On est la pour
            propulser votre carriere.
          </p>
        </div>
      </section>

      <ContactComponent />
    </PageTransition>
  );
}
