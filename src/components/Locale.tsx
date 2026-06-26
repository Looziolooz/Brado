import Reveal from "./Reveal";

const HOURS = [
  { day: "Lunedì", time: "chiuso", closed: true },
  { day: "Mar – Gio", time: "18:30 – 23:00" },
  { day: "Ven – Sab", time: "12:30 – 15:00 · 18:30 – 24:00" },
  { day: "Domenica", time: "12:30 – 15:00 · 18:30 – 23:00" },
];

export default function Locale() {
  return (
    <section id="locale" className="bg-char text-bone">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-mustard">
            Dove siamo
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
            Vieni al banco.
          </h2>

          <div className="mt-8 space-y-1">
            <p className="font-display text-2xl font-bold">Via dei Macelli 7</p>
            <p className="text-bone/70">41121 Modena (MO)</p>
            <a
              href="tel:+39059000000"
              className="mt-2 inline-block font-mono text-sm tracking-[0.06em] text-mustard hover:underline"
            >
              +39 059 000 000
            </a>
          </div>

          <dl className="mt-8 max-w-sm border-t border-bone/15">
            {HOURS.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between gap-4 border-b border-bone/10 py-3"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-bone/70">
                  {h.day}
                </dt>
                <dd
                  className={`font-mono text-sm ${
                    h.closed ? "text-ketchup" : "text-bone"
                  }`}
                >
                  {h.time}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-sm font-mono text-[0.7rem] uppercase tracking-[0.12em] text-bone/50">
            La sera consigliamo la prenotazione · cucina aperta fino a mezz'ora
            prima della chiusura
          </p>
        </Reveal>

        {/* stylised map card */}
        <Reveal delay={120}>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-bone/15 bg-char-2">
            <svg
              viewBox="0 0 400 300"
              className="h-full w-full"
              aria-label="Mappa illustrativa: Via dei Macelli 7, Modena"
              role="img"
            >
              <rect width="400" height="300" fill="#2d2017" />
              {/* river / park block */}
              <rect x="0" y="0" width="120" height="300" fill="#3c5a3b" opacity="0.22" />
              {/* streets */}
              <g stroke="#f7f2e7" strokeOpacity="0.16" strokeWidth="10">
                <line x1="0" y1="90" x2="400" y2="90" />
                <line x1="0" y1="200" x2="400" y2="200" />
                <line x1="160" y1="0" x2="160" y2="300" />
                <line x1="290" y1="0" x2="290" y2="300" />
              </g>
              <g stroke="#f7f2e7" strokeOpacity="0.08" strokeWidth="4">
                <line x1="0" y1="145" x2="400" y2="145" />
                <line x1="225" y1="0" x2="225" y2="300" />
              </g>
              {/* the pin location */}
              <circle cx="225" cy="145" r="34" fill="#bd3320" opacity="0.18" />
              <g transform="translate(225 145)">
                <path
                  d="M0 -22 C12 -22 20 -13 20 -2 C20 12 0 26 0 26 C0 26 -20 12 -20 -2 C-20 -13 -12 -22 0 -22 Z"
                  fill="#bd3320"
                />
                <circle cy="-2" r="6.5" fill="#f7f2e7" />
              </g>
            </svg>
            <span className="absolute bottom-3 left-3 bg-bone px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink">
              Modena · centro
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
