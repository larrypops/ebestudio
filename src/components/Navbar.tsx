"use client";

import { motion, AnimatePresence } from "motion/react";
import { STUDIO_INFO } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "ACCUEIL", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "A PROPOS", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/60 backdrop-blur-xl border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform hover:scale-102"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden glow-red shadow-lg border border-white/10 bg-white/5">
              <img
                src="/medias/images/logo.png"
                alt="Logo Ekie Bozeur Entertainment"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter uppercase italic leading-none">
              Ekie Bozeur <br className="sm:hidden" />
              <span className="text-brand">Entertainment</span>
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                className={`text-[10px] font-black tracking-[0.2em] transition-all relative group ${
                  pathname === link.href
                    ? "text-brand"
                    : "text-white/50 hover:text-brand"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-brand transition-all group-hover:w-full ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
          <motion.a
            href={STUDIO_INFO.whatsapp}
            className="px-8 py-3 bg-white text-bg-dark text-xs font-black rounded-full hover:bg-brand hover:text-white transition-all glow-red shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            RESERVER
          </motion.a>
        </div>

        <button
          className="md:hidden text-white p-2 relative z-50 overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={32} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={32} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-bg-dark z-40 px-6 py-32 flex flex-col gap-10"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col gap-8">
              {links.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className={`text-5xl font-display font-black tracking-tighter italic uppercase transition-colors ${
                      pathname === link.href
                        ? "text-brand"
                        : "text-white hover:text-brand"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-auto" variants={linkVariants}>
              <a
                href={STUDIO_INFO.whatsapp}
                className="w-full py-6 bg-brand text-white text-center font-black rounded-2xl glow-red text-xl uppercase italic shadow-2xl block"
              >
                Reserver sur WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
