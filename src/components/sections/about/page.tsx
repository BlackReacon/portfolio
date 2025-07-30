import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section id="about" className="py-24">
        <div className="container mx-auto px-5">
          <div className="bg-[#0f0f0f] border border-green-400/20 my-8">
            <div className="p-8 md:p-16">
              <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Über mich
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mt-6" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
                {/* Profilpicture */}
                <div className="w-48 h-48 md:w-72 md:h-72 relative mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full p-1">
                    <div className="relative w-full h-full  rounded-full overflow-hidden">
                      <Image
                        src="/profilpicture.png"
                        alt="Profil Bild von Daria"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 text-gray-300 text-lg">
                  <p className="mb-6">
                    Ich bin Daria, eine Fullstack-Webentwicklerin aus Bad
                    Hersfeld und programmiere unfassbar gerne. Nach meiner
                    Tätigkeit in der Automatisierungstechnik und Programmierung
                    von SPS-Systemen suche ich nach einer kreativeren und
                    herausfordernden Aufgabe - und fand sie in der
                    Webentwicklung.
                  </p>
                  <p className="mb-6">
                    Besonders gerne arbeite ich mit Next.js und Tailwind CSS, da
                    mir diese Technologien ermöglichen, schnelle und moderne
                    Anwendungen zu entwickeln, die nicht nur funktional, sondern
                    auch optisch ansprechend sind. Meine Vorliebe für kleine
                    CSS-Details und Animationen spiegelt sich in meinen
                    Projekten wieder.
                  </p>
                  <p>
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
