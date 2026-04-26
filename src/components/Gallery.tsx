"use client";

import { motion } from "motion/react";

const GALLERY_IMAGES = [
  "/medias/images/gallery/gallery-1.jpg",
  "/medias/images/gallery/gallery-2.jpg",
  "/medias/images/gallery/gallery-3.jpg",
  "/medias/images/gallery/gallery-4.jpg",
  "/medias/images/gallery/gallery-5.jpg",
  "/medias/images/gallery/gallery-6.jpg",
  "/medias/images/gallery/gallery-7.jpg",
  "/medias/images/gallery/gallery-8.jpg",
  "/medias/images/gallery/gallery-9.jpg",
  "/medias/images/gallery/gallery-10.jpg",
  "/medias/images/gallery/gallery-11.jpg",
  "/medias/images/gallery/gallery-12.jpg",
];

export function Gallery() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, rotate: -2 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "circOut" },
    },
  };

  return (
    <section className="py-32 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-brand uppercase text-[10px] sm:text-xs font-black tracking-[0.4em] mb-4 sm:mb-6">
            Visual Identity
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tighter italic uppercase leading-[0.9]">
            IMMERSION <br />
            <span className="text-gradient">STUDIO</span>
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative overflow-hidden rounded-3xl aspect-square border border-white/5 group bg-white/5"
              whileHover={{ scale: 0.98 }}
            >
              <motion.img
                src={img}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.15 }}
                alt="Studio session"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <p className="text-xs font-black tracking-[0.2em] text-brand uppercase mb-2">
                  Backstage
                </p>
                <p className="text-lg font-bold leading-tight">EBE Session vol.{i + 1}</p>
              </div>

              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-brand transition-colors" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-brand transition-colors" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-brand transition-colors" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-brand transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
          >
            Voir toute la galerie sur Instagram <div className="w-8 h-px bg-white/20" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
