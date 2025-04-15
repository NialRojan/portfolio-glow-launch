
import { Code, GraduationCap, Briefcase, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-0" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-portfolio-purple/5 z-0" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-portfolio-blue-light/10 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-title mb-6 after:left-1/2 after:-translate-x-1/2 animate-on-scroll">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            I'm a passionate web developer with expertise in creating beautiful, functional, and responsive websites.
            My journey in web development started 5 years ago and I've been loving every moment of it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="order-2 md:order-1 animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-portfolio-purple rounded-xl" />
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=600"
                  alt="About Me"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-display font-bold mb-4 animate-on-scroll">
              My Story
            </h3>
            <p className="text-gray-600 mb-6 animate-on-scroll">
              I believe in the power of code to transform ideas into reality. My approach combines technical expertise with an eye for design, creating solutions that are both functional and visually appealing.
            </p>
            <p className="text-gray-600 mb-8 animate-on-scroll">
              Over the years, I've worked on diverse projects that have sharpened my skills and broadened my perspective. I'm particularly passionate about creating user-centric designs that prioritize accessibility and intuitive interactions.
            </p>
            
            {/* Experience Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md transition-all hover:shadow-lg animate-on-scroll">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-gray-600">BSc in Computer Science, University of Technology</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md transition-all hover:shadow-lg animate-on-scroll">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-gray-600">5+ years of experience in web development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md transition-all hover:shadow-lg animate-on-scroll">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Skills</h4>
                  <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS, Node.js</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-md transition-all hover:shadow-lg animate-on-scroll">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Interests</h4>
                  <p className="text-sm text-gray-600">Photography, Travel, Music, Reading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
