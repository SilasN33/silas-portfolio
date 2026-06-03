import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SKILL_CATEGORIES } from './data.js';

const SIZE = 360;
const CENTER = SIZE / 2;
const RADIUS = 130;
const RINGS = 4;

function polarToXY(angle, radius) {
  const a = angle - Math.PI / 2;
  return {
    x: CENTER + Math.cos(a) * radius,
    y: CENTER + Math.sin(a) * radius,
  };
}

export default function SkillRadar({ activeId, onSelect }) {
  const prefersReducedMotion = useReducedMotion();

  const axes = useMemo(() => {
    const n = SKILL_CATEGORIES.length;
    return SKILL_CATEGORIES.map((cat, i) => {
      const angle = (i / n) * Math.PI * 2;
      const outer = polarToXY(angle, RADIUS);
      const labelPos = polarToXY(angle, RADIUS + 30);
      const valuePos = polarToXY(angle, (cat.score / 100) * RADIUS);
      return { ...cat, angle, outer, labelPos, valuePos };
    });
  }, []);

  const polygonPoints = axes
    .map(({ valuePos }) => `${valuePos.x},${valuePos.y}`)
    .join(' ');

  const rings = Array.from({ length: RINGS }, (_, i) => ((i + 1) / RINGS) * RADIUS);

  return (
    <div className="skill-radar" role="img" aria-label="Radar de competências por categoria">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="radar-bg" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.12)" />
            <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
          </radialGradient>
          <linearGradient id="radar-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="radar-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>

        <circle cx={CENTER} cy={CENTER} r={RADIUS + 8} fill="url(#radar-bg)" />

        {rings.map((r, i) => (
          <circle
            key={i}
            cx={CENTER}
            cy={CENTER}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
          />
        ))}

        {axes.map((a) => (
          <line
            key={`axis-${a.id}`}
            x1={CENTER}
            y1={CENTER}
            x2={a.outer.x}
            y2={a.outer.y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
        ))}

        <motion.polygon
          points={polygonPoints}
          fill="url(#radar-fill)"
          stroke="url(#radar-stroke)"
          strokeWidth={2}
          strokeLinejoin="round"
          initial={prefersReducedMotion ? false : { scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {axes.map((a) => {
          const isActive = a.id === activeId;
          return (
            <motion.g
              key={`node-${a.id}`}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {isActive && !prefersReducedMotion && (
                <motion.circle
                  cx={a.valuePos.x}
                  cy={a.valuePos.y}
                  fill={a.accent}
                  initial={{ r: 10, opacity: 0.35 }}
                  animate={{ r: [10, 20, 10], opacity: [0.35, 0, 0.35] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              <motion.circle
                cx={a.valuePos.x}
                cy={a.valuePos.y}
                r={isActive ? 7 : 5}
                fill={a.accent}
                stroke="#0a0a0f"
                strokeWidth={2}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.3 }}
              />
            </motion.g>
          );
        })}

        {axes.map((a) => {
          const isActive = a.id === activeId;
          const anchor =
            a.labelPos.x < CENTER - 10
              ? 'end'
              : a.labelPos.x > CENTER + 10
              ? 'start'
              : 'middle';
          return (
            <g
              key={`label-${a.id}`}
              onClick={() => onSelect(a.id)}
              style={{ cursor: 'pointer' }}
            >
              <rect
                x={anchor === 'end' ? a.labelPos.x - 80 : anchor === 'start' ? a.labelPos.x : a.labelPos.x - 40}
                y={a.labelPos.y - 14}
                width={80}
                height={28}
                fill="transparent"
              />
              <text
                x={a.labelPos.x}
                y={a.labelPos.y + 4}
                textAnchor={anchor}
                fontSize={12}
                fontWeight={600}
                fill={isActive ? a.accent : 'rgba(241, 245, 249, 0.7)'}
                style={{ transition: 'fill 0.25s ease', letterSpacing: '0.5px' }}
              >
                {(a.radarLabel || a.label).toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="skill-radar-buttons">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`skill-radar-chip ${activeId === cat.id ? 'is-active' : ''}`}
            onClick={() => onSelect(cat.id)}
            aria-pressed={activeId === cat.id}
            style={{
              '--chip-accent': cat.accent,
              '--chip-soft': cat.accentSoft,
            }}
          >
            <span className="skill-radar-chip-dot" aria-hidden="true" />
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
