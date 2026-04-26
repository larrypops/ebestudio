import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <main className="relative selection:bg-brand selection:text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">{children}</div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
