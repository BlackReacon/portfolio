export default function ContactPage() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-5 max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-2">Kontakt</h2>
        <p className="text-gray-400 mb-8">
          Ich bin freue mich auf Deine Nachricht.<br/>
          Egal ob es für Projektanfragen, fachlichen Austausch oder konstruktives Feedback.
        </p>

        <div className="mt-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Dein Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition duration-200 hover:border-gray-500"
                placeholder="Name eingeben"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Deine Email-Adresse
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition duration-200 hover:border-gray-500"
                placeholder="Email eingeben"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Deine Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition duration-200 hover:border-gray-500"
                placeholder="Nachricht eingeben"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200 font-medium cursor-pointer"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
