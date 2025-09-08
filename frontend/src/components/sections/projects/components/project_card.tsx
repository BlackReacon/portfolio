import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card relative bg-gray-800/50 border border-purple-400/20 rounded-lg overflow-hidden group hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50">
      <div className="h-64 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        {/*         <Image
          src={project.image}
          alt={`Screenshot des Projekts ${project.title}`}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          width={828}
          height={512}
        /> */}
        <img
          src={project.image}
          alt={`Screenshot des Projekts ${project.title}`}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold uppercase tracking-wider mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technologies, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-gray-900/50 border border-purple-400/20 rounded-full text-purple-300"
            >
              {technologies}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
