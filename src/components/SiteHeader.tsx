"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Menù", href: "/menu" },
  { label: "Materia prima", href: "/#materia" },
  { label: "Il banco", href: "/#numeri" },
  { label: "Dove siamo", href: "/#locale" },
];

export default function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the menu page (solid) the header is always in its light/paper state.
  const onDark = !solid && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onDark
          ? "bg-transparent text-bone"
          : "border-b border-ink/10 bg-paper/90 text-ink backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="BRADO — home">
          <span className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            BRADO
          </span>
          <span
            className={`hidden font-mono text-[0.6rem] uppercase tracking-[0.2em] sm:inline ${
              onDark ? "text-mustard" : "text-ketchup"
            }`}
          >
            alla&nbsp;brace
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative font-mono text-xs uppercase tracking-[0.14em] transition-opacity hover:opacity-100 opacity-80"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/#prenota"
            className="btn-notch bg-ketchup px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-bone transition-transform hover:-translate-y-0.5 hover:bg-ketchup-2"
          >
            Prenota
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Chiudi menù" : "Apri menù"}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile panel */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-char text-bone transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-bone/10 py-3 font-mono text-sm uppercase tracking-[0.14em]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#prenota"
            onClick={() => setOpen(false)}
            className="mt-3 btn-notch bg-ketchup px-4 py-3 text-center font-mono text-sm font-bold uppercase tracking-[0.12em] text-bone"
          >
            Prenota un tavolo
          </Link>
        </nav>
      </div>
    </header>
  );
}
