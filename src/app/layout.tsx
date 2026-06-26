import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brado.example"),
  title: {
    default: "BRADO — Hamburgeria alla brace · Modena",
    template: "%s · BRADO",
  },
  description:
    "Hamburger alla brace di faggio, carne 100% brada italiana e pane fatto in casa. Banco e cucina a Modena. Carne brada, fuoco vero.",
  keywords: [
    "hamburgeria",
    "burger Modena",
    "hamburger alla brace",
    "manzo italiano",
    "BRADO",
  ],
  openGraph: {
    title: "BRADO — Hamburgeria alla brace",
    description: "Carne brada, fuoco vero. Hamburger alla brace a Modena.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${bricolage.variable} ${hanken.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
