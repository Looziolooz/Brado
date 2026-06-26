import type { SideItem } from "@/lib/menu";

function formatPrice(n: number) {
  return Number.isInteger(n) ? `${n}` : n.toFixed(2).replace(".", ",");
}

export default function PriceList({
  title,
  items,
}: {
  title: string;
  items: SideItem[];
}) {
  return (
    <div>
      <h3 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-ketchup">
        {title}
      </h3>
      <ul className="mt-5 border-t border-ink/15">
        {items.map((item) => (
          <li key={item.name} className="border-b border-ink/10 py-3.5">
            <div className="leader items-baseline">
              <span className="font-display text-lg font-bold leading-none">
                {item.name}
              </span>
              <span className="leader-fill" />
              <span className="whitespace-nowrap font-mono text-base font-bold">
                € {formatPrice(item.price)}
              </span>
            </div>
            {item.note && (
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink/50">
                {item.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
