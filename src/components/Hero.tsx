import Link from "next/link";
import BackgroundVideo from "./BackgroundVideo";
import Stamp from "./Stamp";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-char text-bone">
      {/* full-bleed background video (watermark removed in-file via delogo) */}
      <BackgroundVideo
        src="/hero-burger.mp4"
        poster="/burger-hero.jpg"
        alt="Hamburger che si compone in explosion view"
      />

      {/* legibility overlay — darker on the left where the text sits,
          lets the burger show through on the right */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,14,9,0.94) 0%, rgba(20,14,9,0.80) 34%, rgba(20,14,9,0.42) 64%, rgba(20,14,9,0.30) 100%)",
        }}
      />
      {/* top + bottom vignette to seat the header and blend into the marquee */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-char/70 via-transparent to-char"
      />
      {/* warm ember tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 z-[1] h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(227,167,44,0.6) 0%, rgba(189,51,32,0.3) 50%, transparent 72%)",
        }}
      />

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-28 sm:px-8 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.22em] text-mustard">
            <span>Hamburgeria</span>
            <span className="text-bone/40">/</span>
            <span>Modena</span>
            <span className="text-bone/40">/</span>
            <span>dal 2016</span>
          </p>

          <h1 className="mt-6 font-display text-[3.6rem] font-extrabold leading-[0.9] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-7xl lg:text-[6rem]">
            Carne brada,
            <br />
            <span className="text-ketchup">fuoco</span>{" "}
            <span className="text-mustard">vero.</span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-bone/85">
            Hamburger cotti sulla brace di faggio, con manzo 100% italiano da
            allevamento brado e pane lievitato 48 ore in casa. Niente fronzoli:
            il fuoco fa il resto.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/menu"
              className="btn-notch inline-flex items-center justify-center gap-2 bg-ketchup px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-bone transition-transform hover:-translate-y-0.5 hover:bg-ketchup-2"
            >
              Vedi il menù
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/#prenota"
              className="inline-flex items-center justify-center border border-bone/40 bg-char/20 px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-bone backdrop-blur-sm transition-colors hover:border-bone hover:bg-bone/10"
            >
              Prenota un tavolo
            </Link>
          </div>
        </div>
      </div>

      {/* signature ticket, floating bottom-right on large screens */}
      <div
        className="tear-top absolute bottom-10 right-8 z-10 hidden w-56 -rotate-3 bg-bone p-5 text-ink shadow-2xl xl:block"
        style={{ "--tear": "var(--color-char)" } as React.CSSProperties}
      >
        <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink/60">
          <span>Ticket #001</span>
          <span>tav. 7</span>
        </div>
        <p className="mt-3 font-display text-2xl font-extrabold leading-none">Il Brado</p>
        <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ketchup">
          doppio manzo · 2× 90g
        </p>
        <div className="mt-4 leader font-mono text-sm">
          <span className="font-bold">€ 14</span>
          <span className="leader-fill" />
          <span className="text-ink/60">x1</span>
        </div>
        <div className="mt-4 text-ketchup">
          <Stamp rotate={-6}>Manzo 100%</Stamp>
        </div>
      </div>
    </section>
  );
}
