import { ProjectsGrid } from '@/components/sections/projects/components/project_grid';

export default function ProjectsPage() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border-t border-b border-purple-400/30">
      {/* Projekte - Container */}
      <div className="container mx-auto px-5 relative z-10">
        <div className="group bg-gray-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg my-8 overflow-hidden">
          <div className="p-8 md:p-16">

            {/* project - title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter inline-block relative group">
                  <span className="bg-gradient-to-r from-red-300 via-red-400 to-purple-600 bg-clip-text text-transparent">
                   Projekte
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400/30 to-transparent group-hover:via-red-400/80 transition-colors duration-500 ease-in-out" />
                  </div>
                </h2>
              </div>

            {/* projects - grid */}
            <ProjectsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}