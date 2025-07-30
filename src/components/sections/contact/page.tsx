export default function ContactPage() {
    return (<>
    <section id="contact" className="py-24">
          <div className="container mx-auto px-5">
            <div className="bg-[#0f0f0f] border border-green-400/20 my-8">
              <div className="p-8 md:p-16">
                <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent relative">
                  KONTAKT
                  <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mt-6" />
                </h2>
                <form className="max-w-2xl mx-auto">
                  <div className="mb-8">
                    <label htmlFor="name" className="block mb-2 font-semibold uppercase tracking-wider text-sm">Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 bg-[#141414] border border-green-400/20 text-white" />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="email" className="block mb-2 font-semibold uppercase tracking-wider text-sm">E-Mail</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 bg-[#141414] border border-green-400/20 text-white" />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="subject" className="block mb-2 font-semibold uppercase tracking-wider text-sm">Betreff</label>
                    <input type="text" id="subject" required className="w-full px-4 py-3 bg-[#141414] border border-green-400/20 text-white" />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="block mb-2 font-semibold uppercase tracking-wider text-sm">Nachricht</label>
                    <textarea id="message" rows={5} required className="w-full px-4 py-3 bg-[#141414] border border-green-400/20 text-white" />
                  </div>
                  <button type="submit" className="w-full px-6 py-5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white text-lg font-bold uppercase tracking-wider">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
    </>);
};