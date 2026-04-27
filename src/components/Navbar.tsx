"use client";

import { STUDIO_INFO } from "../constants";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "ACCUEIL", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "À PROPOS", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/60 backdrop-blur-xl border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="transition-opacity duration-300">
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105 active:scale-105"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/medias/images/logo.png"
              alt="Logo Ekie Bozeur Entertainment"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] object-contain drop-shadow-[0_10px_30px_rgba(229,9,20,0.25)]"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
                className={`text-[10px] font-black tracking-[0.2em] transition-all relative group ${
                  pathname === link.href
                    ? "text-brand"
                    : "text-white/50 hover:text-brand active:text-brand"
                }`}
              >
                {link.name}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-brand transition-all group-hover:w-full group-active:w-full ${
                  pathname === link.href ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
          <a
            href={STUDIO_INFO.whatsapp}
            className="px-8 py-3 bg-white text-bg-dark text-xs font-black rounded-full hover:bg-brand hover:text-white active:bg-brand active:text-white transition-all glow-red shadow-lg"
          >
            RÉSERVER
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 relative z-50 overflow-hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-bg-dark z-40 px-6 py-32 flex flex-col gap-10 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-5xl font-display font-black tracking-tighter italic uppercase transition-colors ${
                pathname === link.href ? "text-brand" : "text-white hover:text-brand active:text-brand"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href={STUDIO_INFO.whatsapp}
            className="w-full py-6 bg-brand text-white text-center font-black rounded-2xl glow-red text-xl uppercase italic shadow-2xl block"
          >
            Réserver sur WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
