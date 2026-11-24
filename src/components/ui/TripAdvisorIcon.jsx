export default function TripAdvisorIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 7.5C7 6.5 9.5 6 12 6s5 .5 7 1.5" />
      <circle cx="8" cy="13" r="3.5" />
      <circle cx="16" cy="13" r="3.5" />
      <circle cx="8" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 14.5 10.6 17h2.8L12 14.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
