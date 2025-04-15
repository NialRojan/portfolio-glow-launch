
import { useEffect } from 'react';

export function ScrollAnimator() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // When element is in viewport
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animated');
        }
      });
    };
    
    // Run once on mount
    setTimeout(animateOnScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return null;
}
