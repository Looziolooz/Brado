type StampProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
};

/** Hand-pressed ink stamp. Color comes from `text-*` on the element. */
export default function Stamp({ children, className = "", rotate = -4 }: StampProps) {
  return (
    <span
      className={`stamp text-[0.72rem] sm:text-xs ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
