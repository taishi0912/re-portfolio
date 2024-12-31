import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Skill } from '../../data/skills';

interface SkillModalProps {
  skill: Skill;
  onClose: () => void;
}

export default function SkillModal({ skill, onClose }: SkillModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1A1A1A] p-8 rounded-lg max-w-md w-full mx-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-[#222222] rounded-lg p-4">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/media/default-icon.png';
              }}
            />
          </div>
          <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
          <div className="space-y-2 text-gray-300">
            <p>{skill.experience}</p>
            <p>{skill.personal}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}