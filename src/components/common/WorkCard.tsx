import { motion } from 'framer-motion';
import type { Project } from '../../types/project';

interface WorkCardProps {
  project: Project;
  onClick: () => void;
}

export default function WorkCard({ project, onClick }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>
      </div>
    </motion.div>
  );
}