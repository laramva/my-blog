import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

const nippo = localFont({
  src: "../public/fonts/Nippo-Variable.ttf",
  variable: "--font-nippo",
  display: "swap",
});

const supreme = localFont({
  src: "../public/fonts/Supreme-Variable.ttf",
  variable: "--font-supreme",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lara • UI/UX Blog",
    template: "%s • Lara",
  },
  description: "Blog sobre UI/UX e dicas visuais, com rotas dinâmicas e SEO no Next.js (App Router).",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nippo.variable} ${supreme.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
