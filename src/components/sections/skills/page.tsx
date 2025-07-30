export default function SkillsPage() {
  return (
  <>
  <section id="skills" className="py-24">
          <div className="container mx-auto px-5">
            <div className="bg-[#0f0f0f] border border-green-400/20 my-8">
              <div className="p-8 md:p-16">
                <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent relative">
                  SKILLS
                  <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mt-6" />
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                  {[
                    { icon: 'HTML', title: 'HTML5', description: 'Semantisches Markup und progressive Web-Standards' },
                    { icon: 'CSS', title: 'CSS3', description: 'Advanced Styling, Animations und responsive Design' },
                    { icon: 'JS', title: 'JavaScript', description: 'ES6+, Performance-Optimierung und moderne Patterns' },
                    { icon: 'Next.js', title: 'Next.js', description: 'Server-Side Rendering, Static Site Generation und optimierte Performance für moderne Webanwendungen' },
                    { icon: 'Docker', title: 'Docker', description: 'Containerisierung' },
                    { icon: 'mariaDB', title: 'mariaDB', description: 'Open-Source relationale Datenbank mit hoher Kompatibilität zu MySQL' },
                    { icon: 'Git', title: 'Git', description: 'Versionskontrolle, Branch-Strategien und kollaborative Entwicklungsworkflows' }
                  ].map((skill, index) => (
                    <div key={index} className="bg-[#141414] p-8 border border-green-400/20 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white clip-polygon">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{skill.title}</h3>
                      <p className="text-gray-300 text-sm">{skill.description}</p>
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
