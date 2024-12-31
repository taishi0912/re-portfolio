import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}