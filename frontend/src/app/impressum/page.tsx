export default function Impressum() {
  return (
    <section className="py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-5 max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-300">Angaben gemäß § 5 TMG</h2>
            <p className="bg-gray-700 p-4 rounded-md">
              Daria Schmidt
              <br />
              Am Lax 31
              <br />
              36251 Bad Hersfeld
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-300">Kontakt</h2>
            <p className="bg-gray-700 p-4 rounded-md">
              Telefon: +49 152 25827496
              <br />
              E-Mail: kontakt@dariaschmidt.de
            </p>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Quelle: <a href="https://www.e-recht24.de" className="text-blue-400 hover:text-blue-300">eRecht24</a>
            </p>
          </div>
        </div>
      </div>
    </section>
      );
}