"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Play, MessageSquare } from "lucide-react";
import { STUDIO_INFO } from "../constants";
import Link from "next/link";

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-violet/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 text-center lg:text-left"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand text-[10px] font-bold mb-8 tracking-[0.2em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            L'excellence sonore a Yaounde
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-8xl font-display font-black leading-[0.95] mb-8 tracking-tighter"
          >
            PRODUIRE <br />
            <span className="text-gradient uppercase">L'EXCEPTIONNEL.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-white/50 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Ekie Bozeur Entertainment : la ou la technologie rencontre l'ame
            artistique. Donnez a votre musique la dimension qu'elle merite.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <motion.a
              href={STUDIO_INFO.whatsapp}
              className="px-10 py-5 bg-brand text-white font-black rounded-2xl flex items-center justify-center gap-3 glow-red hover:bg-brand/90 transition-all text-lg shadow-[0_20px_50px_rgba(229,9,20,0.3)] w-full sm:w-auto"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              RESERVER UNE SESSION <MessageSquare size={20} />
            </motion.a>
            <Link
              href="/services"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-lg w-full sm:w-auto"
            >
              NOS SERVICES <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 block"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden glass-card p-3 sm:p-5 border-white/5 shadow-2xl skew-y-0 lg:-rotate-3 hover:rotate-0 transition-transform duration-700">
            <motion.div
              className="overflow-hidden rounded-[2rem]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/medias/images/hero-bg.jpg"
                alt="Studio session"
                className="w-full aspect-[4/5] sm:aspect-video lg:aspect-[4/5] object-cover transition-all duration-1000"
              />
            </motion.div>

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
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand flex items-center justify-center glow-red shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="text-white fill-white ml-1 w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            </div>
          </div>

          <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/5 rounded-full animate-float opacity-20 hidden sm:block" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-brand/10 rounded-full animate-pulse opacity-20 hidden sm:block" />
        </motion.div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const artists = ["Tenor", "Evina", "Cysoul", "Lydol", "Vanister"];

  const artistAvatars = [
    {
      name: "Tenor",
      img: "/medias/images/t%C3%A9moignages/tenor.jpg",
    },
    {
      name: "Evina",
      img: "/medias/images/t%C3%A9moignages/evina.jpg",
    },
    {
      name: "Cysoul",
      img: "/medias/images/t%C3%A9moignages/cysoul.jpg",
    },
    {
      name: "Lydol",
      img: "/medias/images/t%C3%A9moignages/lydol.jpg",
    },
    {
      name: "Vanister",
      img: "/medias/images/t%C3%A9moignages/vanister.jpg",
    },
  ];

  const loopedArtists = [...artists, ...artists, ...artists];

  return (
    <section className="py-20 border-y border-white/5 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand uppercase text-[10px] font-black tracking-[0.5em] mb-4 block">
            Co-signe par les plus grands
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase mb-8">
            ILS NOUS FONT <span className="text-gradient">CONFIANCE</span>
          </h2>

          <div className="flex items-center justify-center -space-x-4 mb-10">
            {artistAvatars.map((artist, i) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-bg-dark overflow-hidden bg-bg-accent ring-2 ring-white/5 group-hover:ring-brand transition-all duration-300 group-hover:z-30 group-hover:scale-110">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand text-[8px] font-black uppercase px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {artist.name}
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-bg-dark bg-white/5 flex items-center justify-center text-white/40 text-xs font-black ring-2 ring-white/5"
            >
              +50
            </motion.div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden py-4">
            <motion.div
              className="flex gap-12 md:gap-24 shrink-0"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            >
              {loopedArtists.map((artist, i) => (
                <span
                  key={`${artist}-${i}`}
                  className="text-3xl md:text-7xl font-display font-black text-white/5 hover:text-brand transition-all duration-500 cursor-default uppercase tracking-tight whitespace-nowrap italic hover:scale-110"
                >
                  {artist}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
