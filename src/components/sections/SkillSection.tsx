import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { skillCategories } from '../../data/skills';
import type { Skill } from '../../data/skills';
import SkillModal from '../common/SkillModal';
import SkillCard from '../common/SkillCard';

export default function SkillSection() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="skill" className="min-h-screen flex flex-col justify-center py-20">
      <h2 className="text-6xl font-serif mb-4">SKILL</h2>
      <p className="text-lg text-gray-400 mb-16">my technical proficiency</p>

      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h3 className="text-2xl mb-8 text-[#C5A572]">{category.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard
                key={skillIndex}
                skill={skill}
                onClick={() => setSelectedSkill(skill)}
              />
            ))}
          </div>
        </div>
      ))}

      <AnimatePresence>
        {selectedSkill && (
          <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}