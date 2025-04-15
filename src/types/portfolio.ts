
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ui';
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}
