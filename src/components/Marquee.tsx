const ITEMS = [
  "Alla brace di faggio",
  "Manzo 100% italiano",
  "Pane fatto in casa",
  "Allevamento brado",
  "Niente surgelati",
  "Salse di nostra produzione",
];

export default function Marquee() {
  // duplicated once so the -50% translate loops seamlessly
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ketchup py-3 text-bone">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-sm font-bold uppercase tracking-[0.16em]"
          >
            <span className="px-6">{item}</span>
            <span aria-hidden className="text-mustard">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
