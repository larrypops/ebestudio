import type { Metadata } from "next";
import "../index.css";
import AppShell from "../components/AppShell";

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
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
