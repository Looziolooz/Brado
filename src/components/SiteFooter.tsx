import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-char text-bone">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              BRADO
            </p>
            <p className="mt-2 max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-mustard">
              Carne brada, fuoco vero.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-bone/75">
            <Link href="/menu" className="py-1 hover:text-bone">
              Menù completo
            </Link>
            <Link href="/#materia" className="py-1 hover:text-bone">
              Materia prima
            </Link>
            <Link href="/#locale" className="py-1 hover:text-bone">
              Dove siamo
            </Link>
            <Link href="/#prenota" className="py-1 hover:text-bone">
              Prenota
            </Link>
            <a href="https://instagram.com" className="py-1 hover:text-bone">
              Instagram
            </a>
            <a href="mailto:ciao@brado.example" className="py-1 hover:text-bone">
              Scrivici
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-bone/15 pt-6 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-bone/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Via dei Macelli 7 · 41121 Modena (MO)</span>
          <span>© {new Date().getFullYear()} BRADO Hamburgeria · P.IVA 0000000000</span>
        </div>
      </div>
    </footer>
  );
}
