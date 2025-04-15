import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollAnimator } from '@/components/ScrollAnimator';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Creative Portfolio | Web Developer & Designer';
  }, []);

  return (
    <div className="min-h-screen">
      {/* ScrollAnimator handles scroll-based animations */}
      <ScrollAnimator />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Gallery />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
