import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    // Placeholder for future properties
    // imageUrl: string;
    // projectUrl: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card relative bg-gray-800/50 border border-purple-400/20 rounded-lg overflow-hidden group hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50">
      {/* Placeholder for screenshots  */}
      <div className="h-64 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-4xl text-gray-500">Coming Soon</div>
        {/*         <Image
          src={project.imageUrl}
          alt={`Screenshot des Projekts ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          placeholder="blur" 
        /> */}
      </div>
      

      <div className="p-6">
        <h3 className="text-xl font-bold uppercase tracking-wider mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium bg-gray-900/50 border border-purple-400/20 rounded-full text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
{/*         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          {project.projectUrl && (
            <Link 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-red-500 rounded-md text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Live ansehen
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
}