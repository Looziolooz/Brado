import Reveal from "./Reveal";

const STATS = [
  { value: "48h", label: "lievitazione del pane" },
  { value: "100%", label: "manzo italiano brado" },
  { value: "1", label: "sola cottura: la brace" },
  { value: "2016", label: "al banco da" },
];

export default function Numeri() {
  return (
    <section id="numeri" className="bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-ketchup">
            Il banco, in numeri
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-y-10 border-y border-ink/15 py-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="flex flex-col items-center px-4 text-center lg:border-l lg:border-ink/12 lg:first:border-l-0"
            >
              <span className="font-display text-5xl font-extrabold leading-none tracking-tight text-ketchup sm:text-6xl">
                {s.value}
              </span>
              <span className="mt-3 max-w-[10rem] font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.12em] text-ink/65">
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
