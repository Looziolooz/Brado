"use client";

import { useState } from "react";
import Stamp from "./Stamp";

const COVERS = ["1", "2", "3", "4", "5", "6", "7", "8+"];

const fieldClass =
  "w-full border-b-2 border-ink/20 bg-transparent py-2 font-body text-base text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-ketchup";
const labelClass =
  "block font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink/60";

export default function Prenota() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefono: "",
    persone: "2",
    data: "",
    ora: "20:00",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const ticketNo = `R-${form.ora.replace(":", "")}`;

  return (
    <section id="prenota" className="bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ketchup">
            Prenota
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
            Tieniti il tavolo,
            <br />
            al fuoco pensiamo noi.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            Lascia i tuoi dati e ti confermiamo entro un'ora. Per gruppi oltre
            le 8 persone chiamaci: ti prepariamo il banco tutto per voi.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="tel:+39059000000"
              className="font-mono text-sm tracking-[0.06em] text-ink underline-offset-4 hover:underline"
            >
              +39 059 000 000
            </a>
            <span className="text-pickle">
              <Stamp rotate={-4}>Conferma in 1h</Stamp>
            </span>
          </div>
        </div>

        {/* the form / confirmation ticket */}
        <div
          className="tear-top relative bg-bone p-6 shadow-xl sm:p-8"
          style={{ "--tear": "var(--color-paper)" } as React.CSSProperties}
        >
          <div className="flex items-center justify-between border-b border-ink/10 pb-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/55">
            <span>{submitted ? "Prenotazione" : "Nuova prenotazione"}</span>
            <span>{submitted ? ticketNo : "BRADO"}</span>
          </div>

          {submitted ? (
            <div className="py-2">
              <p className="mt-5 font-display text-3xl font-extrabold leading-none text-ink">
                Grazie{form.nome ? `, ${form.nome.split(" ")[0]}` : ""}!
              </p>
              <p className="mt-3 max-w-sm leading-relaxed text-ink/70">
                Abbiamo ricevuto la richiesta. Ti scriviamo o chiamiamo a breve
                per confermare.
              </p>

              <dl className="mt-6 space-y-3 font-mono text-sm">
                {[
                  ["Persone", form.persone],
                  ["Giorno", form.data || "—"],
                  ["Ora", form.ora],
                  ["Telefono", form.telefono || "—"],
                ].map(([k, v]) => (
                  <div key={k} className="leader">
                    <span className="text-ink/55">{k}</span>
                    <span className="leader-fill" />
                    <span className="font-bold text-ink">{v}</span>
                  </div>
                ))}
              </dl>

              <div className="mt-6 text-ketchup">
                <Stamp rotate={-5}>In attesa di conferma</Stamp>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-ink/60 underline-offset-4 hover:text-ink hover:underline"
              >
                ← Modifica i dati
              </button>
            </div>
          ) : (
            <form
              className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="nome">
                  Nome
                </label>
                <input
                  id="nome"
                  required
                  value={form.nome}
                  onChange={update("nome")}
                  placeholder="Come ti chiami?"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="telefono">
                  Telefono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={update("telefono")}
                  placeholder="+39 …"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="persone">
                  Persone
                </label>
                <select
                  id="persone"
                  value={form.persone}
                  onChange={update("persone")}
                  className={`${fieldClass} appearance-none`}
                >
                  {COVERS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="data">
                  Giorno
                </label>
                <input
                  id="data"
                  type="date"
                  required
                  value={form.data}
                  onChange={update("data")}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="ora">
                  Ora
                </label>
                <input
                  id="ora"
                  type="time"
                  required
                  value={form.ora}
                  onChange={update("ora")}
                  className={fieldClass}
                />
              </div>

              <button
                type="submit"
                className="btn-notch sm:col-span-2 mt-2 w-full bg-ketchup px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-bone transition-transform hover:-translate-y-0.5 hover:bg-ketchup-2"
              >
                Invia la richiesta
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
