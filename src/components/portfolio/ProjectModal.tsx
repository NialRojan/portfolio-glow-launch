
import { X, ExternalLink, Code } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-500 hover:text-portfolio-purple hover:bg-gray-100 transition-colors"
        >
          <X size={18} />
        </button>
        
        <div className="aspect-video w-full">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm inline-block px-3 py-1 rounded-full bg-portfolio-purple/10 text-portfolio-purple mb-4 capitalize">
            {project.category}
          </p>
          <p className="text-gray-600 mb-6">{project.description}</p>
          
          <div className="flex gap-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                View Live Demo
              </a>
            )}
            {project.codeUrl && (
              <a 
                href={project.codeUrl} 
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code size={18} />
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
