"use client";

import { ReactNode, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { Footer } from "./Contact";
import WhatsAppButton from "./WhatsAppButton";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative selection:bg-brand selection:text-white min-h-screen flex flex-col">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <div className="flex-1">{children}</div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
