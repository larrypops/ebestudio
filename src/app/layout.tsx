import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../index.css";
import AppShell from "../components/AppShell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ekie Bozeur Entertainment",
  description:
    "Studio musical et audiovisuel à Yaoundé: enregistrement, mixage, mastering, clip vidéo et communication digitale.",
  icons: {
    icon: "/medias/images/logo.png",
    shortcut: "/medias/images/logo.png",
    apple: "/medias/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
