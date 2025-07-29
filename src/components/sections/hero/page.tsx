export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="py-40 text-center bg-gradient-to-r from-green-400/20 via-transparent to-transparent"
      >
        <div className="container mx-auto px-5">
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wider">
            Hallo, ich bin
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-wider uppercase mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Daria Schmidt
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wider">
            Staatlich gerpüfte Technikerin Mechatronik
            <br />&<br />
            Fullstack-Webentwickler
          </p>
          <a
            href="#contact"
            className="px-12 py-5 tracking-wider bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-bold uppercase rounded-md"
          >
            Schreib mir!
          </a>
        </div>
      </section>
    </>
  );
}
