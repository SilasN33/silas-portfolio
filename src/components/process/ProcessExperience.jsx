import { motion, useReducedMotion } from 'framer-motion';
import { PROCESS_STEPS } from './data.js';
import ProcessCard from './ProcessCard.jsx';

function AmbientWireframe() {
  return (
    <svg
      className="process-ambient"
      viewBox="-50 -50 100 100"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wireframe-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#wireframe-stroke)"
        strokeWidth="0.4"
        fill="none"
        strokeLinejoin="round"
      >
        <polygon points="0,-36 32,-12 20,28 -20,28 -32,-12" />
        <polygon points="0,-36 20,28 -32,-12" opacity="0.55" />
        <polygon points="0,-36 -20,28 32,-12" opacity="0.55" />
        <polygon points="32,-12 -32,-12 0,28" opacity="0.4" />
        <circle r="36" opacity="0.18" />
      </g>
    </svg>
  );
}

export default function ProcessExperience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="process-experience">
      <div className="process-experience-ambient" aria-hidden="true">
        <div className="process-ambient-wrap">
          <AmbientWireframe />
        </div>
      </div>

      <motion.svg
        className="process-connector"
        viewBox="0 0 1000 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="connector-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="33%" stopColor="#60a5fa" />
            <stop offset="66%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 20 20 Q 250 0, 500 20 T 980 20"
          stroke="url(#connector-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.65 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }
          }
        />
      </motion.svg>

      <div className="process-experience-grid">
        {PROCESS_STEPS.map((step, i) => (
          <ProcessCard key={step.id} step={step} index={i} />
        ))}
      </div>
    </div>
  );
}
