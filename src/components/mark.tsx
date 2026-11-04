export function Mark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="31" fill="#121816" />
      <path fill="#E31C79" d="M32 5 A27 27 0 0 0 5 32 L32 32 Z" />
      <path fill="#00A3E0" d="M32 5 A27 27 0 0 1 59 32 L32 32 Z" />
      <path fill="#FFE14A" d="M5 32 A27 27 0 0 0 32 59 L32 32 Z" />
      <path fill="#1b1b1b" d="M59 32 A27 27 0 0 1 32 59 L32 32 Z" />
      <circle cx="32" cy="32" r="13.5" fill="#f4f0e6" />
      <path
        fill="#14211c"
        d="M23.2 41.2 V24.6 h4.3 l4.5 8.8 4.5-8.8 h4.3 v16.6 h-3.5 V30.2 l-3.7 7.2 h-3.2 l-3.7-7.2 v11 z"
      />
    </svg>
  );
}
