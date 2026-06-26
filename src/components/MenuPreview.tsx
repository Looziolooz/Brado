import Link from "next/link";
import { burgers } from "@/lib/menu";
import MenuRow from "./MenuRow";
import Reveal from "./Reveal";

export default function MenuPreview() {
  const featured = burgers.slice(0, 4);
  return (
    <section id="menu" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-ketchup">
                La carta · gli irrinunciabili
              </p>
              <h2 className="mt-3 max-w-lg font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
                Dal fuoco al panino, senza scorciatoie.
              </h2>
            </div>
            <Link
              href="/menu"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink"
            >
              Tutto il menù
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 border-y border-ink/15">
          {featured.map((burger, i) => (
            <Reveal
              key={burger.code}
              delay={i * 70}
              className="border-t border-ink/10 first:border-t-0"
            >
              <MenuRow burger={burger} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
