import Link from "next/link";

export default function HeroPage() {
  return (
    <section
      id="home"
      className="py-40 text-center bg-gradient-to-r from-red-700/20 via-transparent to-transparent"
    >
      <div className="container mx-auto px-5 z-10">
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wider">
          Hallo, ich bin
        </p>
        <h1 className="text-6xl md:text-8xl font-black tracking-wider uppercase mb-4 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-100 bg-clip-text text-transparent">
          Daria Schmidt
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wider">
          Staatlich gerpüfte Technikerin Mechatronik
          <br />&<br />
          Fullstack-Webentwickler
        </p>
        <Link
          href="/#contact"
          className="px-12 py-5 tracking-wider bg-gradient-to-r from-gray-700 to-gray-500 text-white font-bold uppercase rounded-md"
        >
          Schreib mir!
        </Link>
      </div>
    </section>
  );
}
