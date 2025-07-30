export default function ProjectsPage() {
  return (
    <>
      <section id="projects" className="py-24">
        <div className="container mx-auto px-5">
          <div className="bg-[#0f0f0f] border border-green-400/20 my-8">
            <div className="p-8 md:p-16">
              <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent relative">
                PROJECTS
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mt-6" />
              </h2>
              {/* Project items will go here */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                  {[
                    { emoji: '🛒', title: 'E-COMMERCE NEXUS', description: 'Vollständige E-Commerce-Platform mit React, Node.js und MongoDB. Real-time Inventory, Payment-Processing und Advanced Analytics Dashboard.' },
                    { emoji: '📱', title: 'PRODUCTIVITY MATRIX', description: 'High-Performance Task Management mit Real-time Collaboration, AI-powered Scheduling und Advanced Team Analytics.' },
                    { emoji: '🌐', title: 'DIGITAL COSMOS', description: 'Ultra-moderne Portfolio-Website mit Custom Animations, Performance-Optimierung und Progressive Web App Features.' },
                    { emoji: '🎵', title: 'AUDIO SPECTRUM', description: 'Advanced Music Streaming Platform mit AI-Recommendations, Social Features und Real-time Audio Processing.' }
                  ].map((project, index) => (
                    <div key={index} className="bg-[#141414] border border-green-400/20 overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-[#1a1a1a] to-[#333] flex items-center justify-center text-7xl font-bold">
                        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">{project.emoji}</span>
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{project.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}