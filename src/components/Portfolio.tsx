
import { useState } from 'react';
import { Project } from '@/types/portfolio';
import { PROJECTS } from '@/constants/projects';
import { PortfolioItem } from './portfolio/PortfolioItem';
import { ProjectModal } from './portfolio/ProjectModal';
import { FilterButtons } from './portfolio/FilterButtons';

export function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ui'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-portfolio-purple/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 after:left-1/2 after:-translate-x-1/2 animate-on-scroll">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Check out some of my latest projects. Each project is unique and reflects my passion for creating beautiful, functional web experiences.
          </p>
          
          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioItem 
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
