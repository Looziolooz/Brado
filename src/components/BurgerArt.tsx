type BurgerArtProps = {
  className?: string;
  title?: string;
};

/**
 * Stylised side-view burger, drawn flat in the BRADO palette.
 * Self-contained SVG — swap for a real photo later if wanted.
 */
export default function BurgerArt({ className = "", title = "Hamburger BRADO" }: BurgerArtProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>

      {/* plate shadow */}
      <ellipse cx="200" cy="276" rx="150" ry="13" fill="#19110b" opacity="0.18" />

      {/* top bun */}
      <path d="M64 124 C64 56 336 56 336 124 Z" fill="#e0a93a" />
      <path
        d="M108 86 C160 60 240 60 292 86"
        fill="none"
        stroke="#f2c768"
        strokeWidth="11"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* sesame seeds */}
      <g fill="#f7f2e7">
        <ellipse cx="150" cy="92" rx="6" ry="3.4" transform="rotate(-22 150 92)" />
        <ellipse cx="200" cy="80" rx="6" ry="3.4" transform="rotate(8 200 80)" />
        <ellipse cx="250" cy="94" rx="6" ry="3.4" transform="rotate(26 250 94)" />
        <ellipse cx="176" cy="106" rx="6" ry="3.4" transform="rotate(-8 176 106)" />
        <ellipse cx="226" cy="106" rx="6" ry="3.4" transform="rotate(14 226 106)" />
        <ellipse cx="120" cy="110" rx="6" ry="3.4" transform="rotate(-30 120 110)" />
        <ellipse cx="282" cy="110" rx="6" ry="3.4" transform="rotate(34 282 110)" />
      </g>

      {/* lettuce ruffle */}
      <path
        d="M52 126 q14 22 30 6 q16 22 32 4 q14 24 30 6 q16 22 32 4 q14 24 30 6 q16 22 32 4 q16 20 30 2 l0 14 q-160 16 -278 0 Z"
        fill="#4f7a4d"
      />
      <path
        d="M52 126 q14 22 30 6 q16 22 32 4 q14 24 30 6 q16 22 32 4 q14 24 30 6 q16 22 32 4 q16 20 30 2"
        fill="none"
        stroke="#3c5a3b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* tomato */}
      <ellipse cx="200" cy="158" rx="124" ry="15" fill="#bd3320" />
      <ellipse cx="200" cy="158" rx="124" ry="15" fill="none" stroke="#9c2715" strokeWidth="3" />

      {/* cheese with drips */}
      <path
        d="M70 168 q130 -16 260 0 l0 14 l-22 0 l-10 22 l-12 -22 l-150 0 l-12 24 l-12 -24 l-30 0 Z"
        fill="#f0b743"
      />

      {/* patty */}
      <rect x="66" y="186" width="268" height="42" rx="18" fill="#3a2418" />
      <g stroke="#1f130b" strokeWidth="4" strokeLinecap="round" opacity="0.8">
        <line x1="96" y1="198" x2="128" y2="216" />
        <line x1="186" y1="196" x2="218" y2="218" />
        <line x1="270" y1="198" x2="302" y2="216" />
      </g>
      <rect x="66" y="186" width="268" height="14" rx="10" fill="#5a3a26" opacity="0.5" />

      {/* bottom bun */}
      <path d="M64 226 L336 226 C336 272 64 272 64 226 Z" fill="#d99f33" />
      <path d="M64 226 L336 226 C336 236 64 236 64 226 Z" fill="#c98e26" opacity="0.7" />
    </svg>
  );
}
