import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects';
import WorkCard from '../common/WorkCard';
import WorkModal from '../common/WorkModal';
import type { Project } from '../../types/project';

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="work" className="min-h-screen flex flex-col justify-center py-20">
      <h2 className="text-6xl font-serif mb-4">WORK</h2>
      <p className="text-lg text-gray-400 mb-16">showcase of creations</p>

      <div className="relative bg-[#1A1A1A] rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
            <WorkCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <WorkModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}