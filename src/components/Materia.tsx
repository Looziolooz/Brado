import BackgroundVideo from "./BackgroundVideo";
import Reveal from "./Reveal";
import Stamp from "./Stamp";

const PILLARS = [
  {
    label: "La carne",
    text: "Manzo 100% italiano da allevamenti bradi dell'Appennino. Macinata ogni mattina al banco, mai surgelata.",
  },
  {
    label: "Il pane",
    text: "Brioche salata, lievitata 48 ore e cotta in casa. Regge il sugo e la brace fino all'ultimo morso.",
  },
  {
    label: "Il fuoco",
    text: "Brace di faggio, una cottura sola. È il fuoco a dare la crosta e il profumo — non la piastra.",
  },
];

export default function Materia() {
  return (
    <section id="materia" className="relative overflow-hidden bg-char text-bone">
      {/* raw-beef-on-the-grill background loop (watermark removed in-file) */}
      <BackgroundVideo
        src="/materia-smash.mp4"
        poster="/materia-poster.jpg"
        alt="Polpetta di manzo che fuma sulla brace"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,14,9,0.94) 0%, rgba(20,14,9,0.82) 50%, rgba(20,14,9,0.9) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-mustard">
            Materia prima
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
            Tre cose,
            <br />
            fatte bene.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/70">
            Non inseguiamo la lista degli ingredienti più lunga. Scegliamo
            pochi fornitori, li trattiamo bene e lasciamo che siano la carne, il
            pane e la brace a parlare.
          </p>
          <div className="mt-8 text-mustard">
            <Stamp rotate={-3}>Km 0 dove possiamo</Stamp>
          </div>
        </Reveal>

        <div className="lg:pt-2">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 90}
              className="border-t border-bone/15 py-7 first:border-t-0 first:pt-0"
            >
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-bone">
                {p.label}
              </h3>
              <p className="mt-2 max-w-md leading-relaxed text-bone/65">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
