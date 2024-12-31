import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import type { Skill } from '../../data/skills';

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
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1A1A1A] p-4 rounded-lg text-center cursor-pointer"
                onClick={() => setSelectedSkill(skill)}
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-3" />
                <p className="text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1A1A1A] p-8 rounded-lg max-w-md w-full mx-4 relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#222222] rounded-lg p-4">
                  <img
                    src={selectedSkill.icon}
                    alt={selectedSkill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{selectedSkill.name}</h3>
                <div className="space-y-2 text-gray-300">
                  <p>実務経験: {selectedSkill.experience}</p>
                  <p>個人経験: {selectedSkill.personal}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}