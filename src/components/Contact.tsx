"use client";

import { motion } from "motion/react";
import { STUDIO_INFO } from "../constants";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export function Contact() {
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } },
  };

  return (
    <section id="contact" className="py-32 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.1)]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-brand uppercase text-xs font-black tracking-[0.4em] mb-6">
              Contact & Acces
            </h2>
            <h3 className="text-5xl md:text-8xl font-display font-black tracking-tighter italic uppercase leading-[0.9] mb-8">
              PARLONS DE <br />
              <span className="text-gradient">VOTRE SON</span>
            </h3>
            <p className="text-xl text-white/40 max-w-md leading-relaxed">
              Base a Yaounde, EBE est le hub creatif pour les artistes qui visent
              l'excellence. On repond en moins d'une heure.
            </p>
          </div>

          <div className="space-y-8">
            <motion.div variants={item} className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/5 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-1">
                  Localisation
                </p>
                <p className="text-xl font-bold">{STUDIO_INFO.location}</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/5 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-1">
                  Telephone
                </p>
                <p className="text-xl font-bold">{STUDIO_INFO.phone}</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/5 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-1">
                  Email
                </p>
                <p className="text-xl font-bold">{STUDIO_INFO.email}</p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white hover:text-bg-dark transition-all"
                whileHover={{ y: -5 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="p-12 glass-card rounded-[3rem] border-white/5 shadow-2xl relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

          <form className="space-y-8 relative z-10">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">
                  Deposez votre blaze
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-brand/50 focus:bg-white/[0.08] transition-all"
                  placeholder="Nom complet"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">
                  Votre canal
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-brand/50 focus:bg-white/[0.08] transition-all"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">
                Le Goal
              </label>
              <select className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-brand/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer">
                <option className="bg-bg-dark">Enregistrement Voix</option>
                <option className="bg-bg-dark">Mixage / Mastering</option>
                <option className="bg-bg-dark">Clip Video</option>
                <option className="bg-bg-dark">E.P / Album Complet</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">
                Le Brief
              </label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-brand/50 focus:bg-white/[0.08] transition-all resize-none"
                placeholder="Dites-nous ce que vous avez en tete..."
              ></textarea>
            </div>

            <div className="flex flex-col gap-5 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-brand text-white font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 glow-red shadow-xl cursor-pointer"
              >
                ENVOYER LA DEMANDE <Send size={20} />
              </motion.button>

              <div className="flex items-center gap-4">
                <div className="h-px bg-white/5 flex-1" />
                <span className="text-[10px] font-black text-white/20 tracking-[0.3em] uppercase">
                  OU
                </span>
                <div className="h-px bg-white/5 flex-1" />
              </div>

              <motion.a
                href={STUDIO_INFO.whatsapp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-white/5 border border-white/5 text-white font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              >
                WHATSAPP DIRECT <MessageSquare size={20} />
              </motion.a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const footerLinks = [
    { name: "Accueil", to: "/" },
    { name: "Services", to: "/services" },
    { name: "A Propos", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="py-24 border-t border-white/[0.03] bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden glow-red shadow-lg border border-white/10 bg-white/5">
                <img
                  src="/medias/images/logo.png"
                  alt="Logo Ekie Bozeur Entertainment"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-black text-xl tracking-tighter uppercase italic">
                Ekie Bozeur <span className="text-brand">Entertainment</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-bold">
              Le standard international de la production musicale et audiovisuelle
              au Cameroun.
            </p>
          </div>

          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-8">
              Navigation
            </h5>
            <ul className="text-sm font-bold text-white/50 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.to} className="hover:text-white transition-colors">
                    / {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-8">
              Studio Info
            </h5>
            <ul className="text-sm font-bold text-white/50 space-y-4">
              <li>Lundi - Samedi</li>
              <li>09:00 - 21:00</li>
              <li>{STUDIO_INFO.location}</li>
              <li className="text-brand">Reservation obligatoire</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-8">
              Newsletter
            </h5>
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
              <input
                type="text"
                className="bg-transparent border-none outline-none px-4 py-2 text-sm flex-1 font-bold"
                placeholder="E-mail"
              />
              <button className="bg-brand text-white p-2 rounded-lg">
                <Send size={16} />
              </button>
            </div>
            <p className="mt-4 text-[10px] font-bold text-white/20 uppercase tracking-widest">
              Rejoignez le gang.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/[0.03]">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
            © {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 hover:text-white/40"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10 hover:text-white/40"
            >
              Terms of Sound
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
