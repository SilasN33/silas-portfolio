import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { PROCESS_GLYPHS } from './glyphs.jsx';

const springConfig = { stiffness: 220, damping: 22, mass: 0.4 };

export default function ProcessCard({ step, index }) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['20%', '80%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['20%', '80%']);

  function handleMouseMove(e) {
    if (prefersReducedMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const Glyph = PROCESS_GLYPHS[step.id];

  return (
    <motion.article
      ref={cardRef}
      className="process-card-3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        '--card-accent': step.accent,
        '--card-soft': step.accentSoft,
      }}
    >
      <motion.span
        className="process-card-3d-glare"
        aria-hidden="true"
        style={
          prefersReducedMotion
            ? { opacity: 0 }
            : {
                background: useTransform(
                  [glareX, glareY],
                  ([x, y]) =>
                    `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.12), transparent 50%)`
                ),
              }
        }
      />

      <div className="process-card-3d-frame" aria-hidden="true">
        <span className="process-card-3d-corner tl" />
        <span className="process-card-3d-corner tr" />
        <span className="process-card-3d-corner bl" />
        <span className="process-card-3d-corner br" />
      </div>

      <span className="process-card-3d-number" aria-hidden="true">
        {step.number}
      </span>

      <div className="process-card-3d-layers">
        <div className="process-card-3d-icon">
          {Glyph && <Glyph color={step.accent} />}
        </div>

        <span className="process-card-3d-tag">
          <span className="process-card-3d-tag-dot" aria-hidden="true" />
          {step.tag}
        </span>

        <h3 className="process-card-3d-title">{step.title}</h3>
        <p className="process-card-3d-desc">{step.desc}</p>
      </div>
    </motion.article>
  );
}
