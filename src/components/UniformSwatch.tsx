interface UniformSwatchProps {
  top: string;
  bottom: string;
}

export default function UniformSwatch({ top, bottom }: UniformSwatchProps) {
  return (
    <svg viewBox="0 0 60 74" width="44" height="54" aria-hidden="true">
      {/* Manches */}
      <path d="M10 22 L2 34 L9 39 L16 28 Z" fill={top} />
      <path d="M50 22 L58 34 L51 39 L44 28 Z" fill={top} />
      {/* Col */}
      <path d="M23 12 L30 18 L37 12 L33 8 L27 8 Z" fill="#fff" opacity={0.55} />
      {/* Haut (chemise) */}
      <rect x="14" y="12" width="32" height="26" rx="5" fill={top} />
      {/* Bas (jupe / pantalon) */}
      <path d="M15 38 L45 38 L41 70 L19 70 Z" fill={bottom} />
    </svg>
  );
}
