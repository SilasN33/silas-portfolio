const baseProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 32 32',
  fill: 'none',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function DiscoveryGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <circle cx="14" cy="14" r="7" />
      <line x1="19" y1="19" x2="25" y2="25" />
      <line x1="11" y1="14" x2="17" y2="14" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

function DesignGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <path d="M6 26 L16 6 L26 26 Z" />
      <line x1="11" y1="16" x2="21" y2="16" opacity="0.6" />
      <circle cx="16" cy="6" r="1.3" fill={color} />
      <circle cx="6" cy="26" r="1.3" fill={color} />
      <circle cx="26" cy="26" r="1.3" fill={color} />
    </svg>
  );
}

function BuildGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <polyline points="11,11 6,16 11,21" />
      <polyline points="21,11 26,16 21,21" />
      <line x1="18" y1="9" x2="14" y2="23" opacity="0.7" />
    </svg>
  );
}

function ScaleGlyph({ color = 'currentColor' }) {
  return (
    <svg {...baseProps} stroke={color}>
      <line x1="6" y1="24" x2="26" y2="24" opacity="0.4" />
      <polyline points="7,20 13,14 18,18 25,9" />
      <polyline points="20,9 25,9 25,14" />
      <circle cx="13" cy="14" r="1.3" fill={color} />
      <circle cx="18" cy="18" r="1.3" fill={color} />
    </svg>
  );
}

export const PROCESS_GLYPHS = {
  discovery: DiscoveryGlyph,
  design: DesignGlyph,
  build: BuildGlyph,
  scale: ScaleGlyph,
};
