import { motion } from 'framer-motion';
import type { Skill } from '../../data/skills';

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
}

export default function SkillCard({ skill, onClick }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#1A1A1A] p-4 rounded-lg text-center cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-12 h-12 mx-auto mb-3"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/assets/media/default-icon.png'; // フォールバックアイコン
        }}
      />
      <p className="text-sm">{skill.name}</p>
    </motion.div>
  );
}