import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MenuRow from "@/components/MenuRow";
import PriceList from "@/components/PriceList";
import Reveal from "@/components/Reveal";
import Stamp from "@/components/Stamp";
import { burgers, sides, drinks, desserts } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Il menù",
  description:
    "Hamburger alla brace, contorni, birre artigianali e dolci di casa. Il menù completo della hamburgeria BRADO a Modena.",
};

export default function MenuPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        {/* menu hero band */}
        <section className="bg-char text-bone">
          <div className="mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-36">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-mustard">
              La carta · BRADO
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl">
              Il menù
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/70">
              Tutto cotto alla brace, montato al momento. I prezzi sono per il
              singolo panino: gli abbinamenti li costruisci tu.
            </p>
            <div className="mt-7 text-mustard">
              <Stamp rotate={-3}>Allergeni su richiesta</Stamp>
            </div>
          </div>
        </section>

        {/* burgers */}
        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="mb-6 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
              <span>Hamburger</span>
              <span className="blade flex-1 text-ink/40" />
            </div>
            <div className="border-y border-ink/15">
              {burgers.map((burger, i) => (
                <Reveal
                  key={burger.code}
                  delay={i * 50}
                  className="border-t border-ink/10 first:border-t-0"
                >
                  <MenuRow burger={burger} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* sides / drinks / desserts */}
        <section className="bg-paper-2">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-14">
            <Reveal>
              <PriceList title="Da spartire" items={sides} />
            </Reveal>
            <Reveal delay={80}>
              <PriceList title="Da bere" items={drinks} />
            </Reveal>
            <Reveal delay={160}>
              <PriceList title="Dolci" items={desserts} />
            </Reveal>
          </div>
        </section>

        {/* closing CTA */}
        <section className="bg-char text-bone">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
            <h2 className="max-w-md font-display text-3xl font-extrabold leading-[0.98] tracking-tight sm:text-4xl">
              Fame? Tieniti il tavolo prima che finisca la brace.
            </h2>
            <Link
              href="/#prenota"
              className="btn-notch inline-flex shrink-0 items-center gap-2 bg-ketchup px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-bone transition-transform hover:-translate-y-0.5 hover:bg-ketchup-2"
            >
              Prenota un tavolo <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
