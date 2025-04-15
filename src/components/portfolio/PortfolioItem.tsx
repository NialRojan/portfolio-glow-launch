
import { Project } from '@/types/portfolio';
import { ExternalLink, Code } from 'lucide-react';

interface PortfolioItemProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function PortfolioItem({ project, onViewDetails }: PortfolioItemProps) {
  return (
    <div className="animate-on-scroll portfolio-item group rounded-xl shadow-lg overflow-hidden card-hover">
      <div className="relative aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="portfolio-overlay">
          <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>
          <button 
            onClick={() => onViewDetails(project)}
            className="px-4 py-2 bg-white text-portfolio-purple-dark rounded-md hover:bg-portfolio-purple-light hover:text-white transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-bold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-2 capitalize">{project.category}</p>
        <div className="flex gap-2">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              className="text-xs flex items-center gap-1 text-portfolio-purple hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              className="text-xs flex items-center gap-1 text-portfolio-purple hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code size={12} />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
