
import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    textElement.classList.add('animate-fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white to-portfolio-blue-light/30 z-0" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-portfolio-purple/10 animate-pulse-slow blur-3xl z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-portfolio-blue-light/20 animate-float blur-3xl z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <p className="text-portfolio-purple font-medium mb-4 animate-fade-in">Hello, I'm</p>
            <h1 ref={textRef} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span>Creative </span>
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-gray-700 text-xl mb-8 max-w-lg animate-on-scroll">
              I design and develop experiences that make people's lives simple through Web and Mobile apps.
              I work with Figma, HTML5, CSS3, JavaScript, React, Tailwind and more.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 animate-on-scroll">
              <a href="#portfolio" className="btn-primary">
                View My Work
                <ArrowDown size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
            </div>
            
            <div className="flex gap-4 mt-8 animate-on-scroll">
              <a href="#" className="social-icon">
                <Github size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative animate-on-scroll">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-portfolio-purple/20 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-white shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500"
                  alt="Developer profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating skill badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg animate-float">
                <span className="font-semibold text-portfolio-purple">React</span>
              </div>
              <div className="absolute -bottom-2 -left-6 bg-white rounded-full px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="font-semibold text-portfolio-purple">Tailwind</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-full px-4 py-2 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="font-semibold text-portfolio-purple">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 hover:text-portfolio-purple transition-colors"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Scroll Down</span>
        <ArrowDown className="mt-2 animate-bounce" />
      </a>
    </section>
  );
}
