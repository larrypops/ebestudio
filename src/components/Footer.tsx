import { STUDIO_INFO } from "../constants";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "Accueil", to: "/" },
    { name: "Services", to: "/services" },
    { name: "À Propos", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="py-24 border-t border-white/[0.03] bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/medias/images/logo.png"
                alt="Logo Ekie Bozeur Entertainment"
                className="h-14 w-auto max-w-[220px] object-contain drop-shadow-[0_10px_30px_rgba(229,9,20,0.25)]"
                loading="lazy"
                decoding="async"
              />
            </Link>
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
              <li className="text-brand">Réservation obligatoire</li>
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
