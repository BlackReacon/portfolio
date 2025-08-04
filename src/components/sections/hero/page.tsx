import Link from "next/link";

export default function HeroPage() {
  return (
    <section
      id="home"
      className="pt-40 pb-32 text-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border-b border-b-purple-400/30"
    >
      <div className="container mx-auto px-5">
        <p className="cursor-default text-xl md:text-2xl text-gray-300 font-light tracking-wider mb-2">
          Hallo, ich bin
        </p>
     
        <div className="inline-block mb-4">
          <h2 className="cursor-default text-6xl md:text-8xl font-extrabold tracking-tighter uppercase bg-gradient-to-r from-red-300 via-red-400 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-110">
            Daria Schmidt
          </h2>
          <div className="bottom-0 left-0 w-full ">
            <div className="bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />
          </div>
        </div>
     
        <p className="cursor-default text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wider">
          Staatlich geprüfte Technikerin Mechatronik
          <br />&<br />
          Fullstack-Webentwicklerin
        </p>

        <Link
          href="/#contact"
          className="relative px-12 py-4 tracking-wider bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white font-bold uppercase rounded-md group overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-300">
            Schreib mir!
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:rounded-md transition-all duration-500"></span>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </div>
    </section>
  );
}
