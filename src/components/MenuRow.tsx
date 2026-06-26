import type { Burger } from "@/lib/menu";
import { tagStyles } from "@/lib/menu";
import Stamp from "./Stamp";

function formatPrice(n: number) {
  return Number.isInteger(n) ? `${n}` : n.toFixed(2).replace(".", ",");
}

export default function MenuRow({ burger }: { burger: Burger }) {
  return (
    <article className="group py-6 transition-colors">
      <div className="leader items-center">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-xs font-bold tracking-[0.12em] text-ketchup">
            {burger.code}
          </span>
          <h3 className="font-display text-2xl font-extrabold leading-none tracking-tight sm:text-3xl">
            {burger.name}
          </h3>
          {burger.tag && (
            <span className={tagStyles[burger.tag]}>
              <Stamp rotate={-3}>{burger.tag}</Stamp>
            </span>
          )}
        </div>
        <span className="leader-fill" />
        <span className="whitespace-nowrap font-mono text-xl font-bold sm:text-2xl">
          € {formatPrice(burger.price)}
        </span>
      </div>

      <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">
        {burger.blurb}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink/55">
        <span className="bg-ink/[0.06] px-2 py-1 font-bold text-ink/70">
          {burger.weight}
        </span>
        {burger.ingredients.map((ing) => (
          <span key={ing} className="after:ml-2 after:text-ink/25 after:content-['·'] last:after:content-['']">
            {ing}
          </span>
        ))}
      </div>
    </article>
  );
}
