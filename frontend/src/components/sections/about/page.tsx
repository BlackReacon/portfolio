import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section
        id="about"
        className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border-t border-b border-purple-400/30"
      >
        {/* about me - container */}
        <div className="container mx-auto px-5 relative">
          <div className="group bg-gray-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg my-8 overflow-hidden">
            <div className="p-8 md:p-16">
              {/* about me - title */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter inline-block relative group">
                  <span className="bg-gradient-to-r from-red-300 via-red-400 to-purple-600 bg-clip-text text-transparent">
                    Über mich
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400/30 to-transparent group-hover:via-red-400/80 transition-colors duration-500 ease-in-out" />
                  </div>
                </h2>
              </div>

              {/* about me - image */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                <div className="relative mx-auto">
                  <div className="w-48 h-48 lg:w-72 lg:h-72 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-purple-500 to-purple-600 rounded-full p-1 animate-[spin_4s_linear_infinite]">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-purple-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-700"></div>
                    </div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-purple-500/30 transition-all duration-500">
                      <Image
                        src="/profilpicture.png"
                        alt="Profil Bild von Daria"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* about me - text */}
                <div className="md:col-span-2 space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Ich bin Daria, eine Fullstack-Webentwicklerin aus Bad
                    Hersfeld und programmiere unfassbar gerne. Nach meiner
                    Tätigkeit in der Automatisierungstechnik und Programmierung
                    von SPS-Systemen suche ich nach einer kreativeren und
                    herausfordernden Aufgabe - und fand sie in der
                    Webentwicklung.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Besonders gerne arbeite ich mit Next.js und Tailwind CSS, da
                    mir diese Technologien ermöglichen, schnelle und moderne
                    Anwendungen zu entwickeln, die nicht nur funktional, sondern
                    auch optisch ansprechend sind. Meine Vorliebe für kleine
                    CSS-Details und Animationen spiegelt sich in meinen
                    Projekten wieder.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Abseits des Codes bin ich ein kreativer Kopf mit
                    vielfältigen Interessen – von 3D-Druck bis hin zu meinen
                    Tieren, die mich täglich begleiten und inspirieren. Für mich
                    ist Programmieren nicht nur ein Beruf, sondern eine
                    Möglichkeit, Ideen in digitale Erlebnisse zu verwandeln.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
