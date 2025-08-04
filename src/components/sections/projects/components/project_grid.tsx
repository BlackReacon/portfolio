import { ProjectCard } from '@/components/sections/projects/components/project_card';

const PROJECTS = [
  { 
    title: 'E-COMMERCE NEXUS', 
    description: 'Vollständige E-Commerce-Platform mit React, Node.js und MariaDB.',
    tags: ['React', 'Node.js', 'MariaDB']
  },
  { 
    title: 'PRODUCTIVITY MATRIX', 
    description: 'High-Performance Task Management mit Real-time Collaboration.',
    tags: ['Next.js', 'TypeScript', 'Tailwind']
  },
/* With Image and URL
  { 
    title: 'E-COMMERCE NEXUS', 
    description: 'Vollständige E-Commerce-Platform mit React, Node.js und MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/projects/ecommerce.jpg', 
    projectUrl: 'https://ecommerce-beispiel.de' 
  }, */
];

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} project={project} />
      ))}
    </div>
  );
}