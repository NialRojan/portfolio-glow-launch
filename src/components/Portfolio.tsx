
import { useState } from 'react';
import { ExternalLink, Code, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ui';
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A modern e-commerce platform built with React and Node.js. Features include user authentication, product filtering, cart functionality, and payment processing.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'A sleek mobile banking application designed for easy financial management. Includes transaction history, budget tracking, and secure authentication.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 3,
    title: 'Portfolio Design System',
    description: 'A comprehensive design system created for portfolio websites. Includes reusable components, color palettes, and typography guidelines.',
    category: 'ui',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard that displays current conditions and forecasts. Built with React and integrates with a weather API.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects. Features include drag-and-drop organization, deadline reminders, and progress tracking.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 6,
    title: 'Travel Blog UI Kit',
    description: 'A beautiful UI kit designed for travel blogs and websites. Includes components for articles, galleries, and booking interfaces.',
    category: 'ui',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600',
    demoUrl: '#',
    codeUrl: '#'
  }
];

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
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 animate-on-scroll">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'all' 
                  ? 'bg-portfolio-purple text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'web' 
                  ? 'bg-portfolio-purple text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'mobile' 
                  ? 'bg-portfolio-purple text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter('ui')}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === 'ui' 
                  ? 'bg-portfolio-purple text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              UI Design
            </button>
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="animate-on-scroll portfolio-item group rounded-xl shadow-lg overflow-hidden card-hover"
            >
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
                    onClick={() => setSelectedProject(project)}
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
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-500 hover:text-portfolio-purple hover:bg-gray-100 transition-colors"
            >
              <X size={18} />
            </button>
            
            <div className="aspect-video w-full">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-sm inline-block px-3 py-1 rounded-full bg-portfolio-purple/10 text-portfolio-purple mb-4 capitalize">
                {selectedProject.category}
              </p>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="flex gap-4">
                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl} 
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    View Live Demo
                  </a>
                )}
                {selectedProject.codeUrl && (
                  <a 
                    href={selectedProject.codeUrl} 
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
      )}
    </section>
  );
}
