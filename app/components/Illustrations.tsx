// Placeholder illustrations for the home cards.
// To use real photos instead, drop images into /public and swap these
// components for <Image src="/your-photo.jpg" ... /> in app/page.js.

export function ConsultationIllustration() {
  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label="Prescription bottle and capsules"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="240" fill="#dceefa" />
      <circle cx="330" cy="40" r="75" fill="#bfdff5" />
      <circle cx="50" cy="215" r="65" fill="#bfdff5" />

      {/* Bottle */}
      <rect x="150" y="34" width="100" height="32" rx="6" fill="#14396f" />
      <rect x="158" y="64" width="84" height="16" fill="#2e5fb0" />
      <rect x="140" y="78" width="120" height="144" rx="14" fill="#3871c1" />
      <rect x="152" y="104" width="96" height="84" rx="8" fill="#fff" />
      <rect x="192" y="120" width="16" height="44" rx="2" fill="#50ade5" />
      <rect x="178" y="134" width="44" height="16" rx="2" fill="#50ade5" />

      {/* Capsules */}
      <g transform="rotate(-30 305 175)">
        <rect x="265" y="159" width="80" height="32" rx="16" fill="#fff" />
        <path d="M305 159H281A16 16 0 0 0 281 191H305Z" fill="#50ade5" />
      </g>
      <g transform="rotate(25 90 150)">
        <rect x="55" y="136" width="70" height="28" rx="14" fill="#fff" />
        <path d="M90 136H69A14 14 0 0 0 69 164H90Z" fill="#3871c1" />
      </g>
    </svg>
  );
}

export function VaccinationIllustration() {
  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label="Syringe and health shield"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="240" fill="#dceefa" />
      <circle cx="70" cy="40" r="70" fill="#bfdff5" />
      <circle cx="360" cy="220" r="70" fill="#bfdff5" />

      {/* Syringe */}
      <g transform="rotate(-25 140 120)">
        <rect x="40" y="118" width="46" height="4" fill="#14396f" />
        <rect x="82" y="108" width="10" height="24" rx="2" fill="#14396f" />
        <rect
          x="92"
          y="102"
          width="100"
          height="36"
          rx="6"
          fill="#fff"
          stroke="#3871c1"
          strokeWidth="4"
        />
        <rect x="98" y="108" width="62" height="24" fill="#50ade5" />
        <rect x="186" y="96" width="8" height="48" rx="3" fill="#3871c1" />
        <rect x="192" y="115" width="44" height="10" fill="#14396f" />
        <rect x="234" y="102" width="10" height="36" rx="3" fill="#14396f" />
      </g>

      {/* Shield */}
      <path
        d="M310 60l48 16v42c0 30-22 48-48 58-26-10-48-28-48-58V76z"
        fill="#3871c1"
      />
      <rect x="302" y="84" width="16" height="48" rx="2" fill="#fff" />
      <rect x="286" y="100" width="48" height="16" rx="2" fill="#fff" />
    </svg>
  );
}
