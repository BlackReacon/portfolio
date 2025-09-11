interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="block relative bg-gray-800/50 border border-purple-400/20 rounded-lg overflow-hidden group hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 no-underline">
      <div className="h-64 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <img
          src={project.image}
          alt={`Screenshot des Projekts ${project.title}`}
          className="max-h-full max-w-full object-contain mx-auto"
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
          {project.technologies.map((technology, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-gray-900/50 border border-purple-400/20 rounded-full text-purple-300"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-4">
        <a href={project.link}>
          <button className="px-3 py-1 bg-white/60 border font-semibold border-purple-400/40 rounded-md justify-center mt-4 text-black hover:bg-purple-400/60 hover:border-purple-400/60 hover:text-white transition-all duration-300">
            GitHub
          </button>
        </a>
        <a >
          <button className="px-3 py-1 bg-purple-200/60 border font-semibold border-purple-400/40 rounded-md justify-center mt-4 text-black hover:bg-purple-400/60 hover:border-purple-400/60 hover:text-white transition-all duration-300">
            Live
          </button>
        </a>
        </div>
      </div>
    </div>
  );
}
