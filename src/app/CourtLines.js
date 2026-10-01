// Full basketball court outline, drawn in currentColor so it adapts to the theme.
export default function CourtLines({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="20" y="20" width="960" height="560" />
      <line x1="500" y1="20" x2="500" y2="580" />
      <circle cx="500" cy="300" r="70" />
      <circle cx="500" cy="300" r="22" />
      {/* Left half */}
      <rect x="20" y="210" width="190" height="180" />
      <path d="M210 230 A70 70 0 0 1 210 370" />
      <path d="M20 60 H90 A250 240 0 0 1 90 540 H20" />
      {/* Right half */}
      <rect x="790" y="210" width="190" height="180" />
      <path d="M790 230 A70 70 0 0 0 790 370" />
      <path d="M980 60 H910 A250 240 0 0 0 910 540 H980" />
    </svg>
  );
}
