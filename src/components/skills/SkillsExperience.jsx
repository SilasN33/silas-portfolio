import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from './data.js';
import SkillRadar from './SkillRadar.jsx';
import SkillsPanel from './SkillsPanel.jsx';

export default function SkillsExperience() {
  const [activeId, setActiveId] = useState(SKILL_CATEGORIES[0].id);
  const activeCategory =
    SKILL_CATEGORIES.find((c) => c.id === activeId) || SKILL_CATEGORIES[0];

  return (
    <motion.div
      className="skills-experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="skills-experience-grid">
        <div className="skills-experience-radar-wrap">
          <div className="skills-experience-radar-glow" aria-hidden="true" />
          <SkillRadar activeId={activeId} onSelect={setActiveId} />
        </div>

        <SkillsPanel category={activeCategory} />
      </div>
    </motion.div>
  );
}
