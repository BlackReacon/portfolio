import { sendMail } from "@/lib/send-mail";

export default function ContactPage() {
  async function handleFormSubmit(formData: FormData) {
    "use server";
    try {
      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const message = formData.get("message")?.toString() || "";
      const privacyAccepted = formData.get("privacy") === "on";

      if (!privacyAccepted) {
        throw new Error("Datenschutzerklärung muss akzeptiert werden");
      }

      const mailText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

      await sendMail({
        email,
        subject: "Neue Kontaktanfrage",
        text: mailText,
      });
    } catch (error) {
      throw new Error(`SMTP-Fehler: ${error}`);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-5 max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-2">Kontakt</h2>
        <p className="text-gray-400 mb-8">
          Ich freue mich auf Deine Nachricht.
          <br />
          Egal ob Projektanfragen, fachlicher Austausch oder Feedback.
          <br />
          Nutze gerne das Kontaktformular oder schreibe mir direkt eine E-Mail
          an: kontakt@dariaschmidt.de
        </p>

        <form action={handleFormSubmit} className="space-y-6">
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
              className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md"
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
              className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md"
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
              className="resize-none mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md"
              placeholder="Nachricht eingeben"
              rows={5}
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="privacy" className="text-gray-300">
                Ich habe die{" "}
                <a href="/privatpolicy" className="text-blue-400 hover:text-blue-300 underline">
                  Datenschutzerklärung
                </a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten wie dort beschrieben zu.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  );
}