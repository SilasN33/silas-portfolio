const baseProps = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function FrontendGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <rect x="4" y="6" width="20" height="14" rx="2" />
      <rect x="8" y="10" width="20" height="14" rx="2" opacity="0.5" />
      <line x1="12" y1="14" x2="22" y2="14" />
      <line x1="12" y1="18" x2="18" y2="18" />
    </svg>
  );
}

export function BackendGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <rect x="5" y="6" width="22" height="6" rx="1.5" />
      <rect x="5" y="14" width="22" height="6" rx="1.5" />
      <rect x="5" y="22" width="22" height="6" rx="1.5" opacity="0.5" />
      <circle cx="9" cy="9" r="1" fill={color} />
      <circle cx="9" cy="17" r="1" fill={color} />
      <circle cx="9" cy="25" r="1" fill={color} />
    </svg>
  );
}

export function DataGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <line x1="6" y1="26" x2="6" y2="20" />
      <line x1="12" y1="26" x2="12" y2="14" />
      <line x1="18" y1="26" x2="18" y2="10" />
      <line x1="24" y1="26" x2="24" y2="6" />
      <line x1="4" y1="28" x2="28" y2="28" opacity="0.5" />
    </svg>
  );
}

export function AIGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <circle cx="16" cy="16" r="3" />
      <circle cx="6" cy="8" r="2" />
      <circle cx="26" cy="8" r="2" />
      <circle cx="6" cy="24" r="2" />
      <circle cx="26" cy="24" r="2" />
      <line x1="8" y1="9.5" x2="13.5" y2="14.5" />
      <line x1="24" y1="9.5" x2="18.5" y2="14.5" />
      <line x1="8" y1="22.5" x2="13.5" y2="17.5" />
      <line x1="24" y1="22.5" x2="18.5" y2="17.5" />
    </svg>
  );
}

export function CloudGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <path d="M9 22 H23 a5 5 0 0 0 0 -10 a6 6 0 0 0 -11.5 -1.5 a4 4 0 0 0 -2.5 11.5 z" />
      <line x1="12" y1="26" x2="20" y2="26" opacity="0.5" />
      <line x1="14" y1="28" x2="18" y2="28" opacity="0.3" />
    </svg>
  );
}

export const GLYPHS = {
  frontend: FrontendGlyph,
  backend: BackendGlyph,
  data: DataGlyph,
  ai: AIGlyph,
  cloud: CloudGlyph,
};
