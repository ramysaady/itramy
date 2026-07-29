export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="IT Ramy logo"
    >
      <defs>
        <linearGradient id="itramy-logo" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F80FF" />
          <stop offset="1" stopColor="#7DD3FC" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#itramy-logo)" />
      <circle cx="24" cy="24" r="4" fill="#05080F" />
      <circle cx="12" cy="12" r="2.75" fill="#05080F" />
      <circle cx="36" cy="12" r="2.75" fill="#05080F" />
      <circle cx="12" cy="36" r="2.75" fill="#05080F" />
      <circle cx="36" cy="36" r="2.75" fill="#05080F" />
      <path
        d="M14 14l7 7m13-7l-7 7m-6 6l-7 7m13-7l7 7"
        stroke="#05080F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
