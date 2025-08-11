import Link from "next/link";
import BurgerMenu from "./mobilemenu/page";

export default function Header() {
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "Über mich" },
    { href: "/#skills", text: "Skills" },
    { href: "/#projects", text: "Projekte" },
    { href: "/#contact", text: "Kontakt" },
  ];

  return (
    <header className="fixed w-full top-0 bg-gradient-to-l from-red-700/20 via-gray-900 to-gray-900 bg-gray-900 border-b border-b-purple-400/30 z-50">
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          {/* Logo Link */}
          <Link href="/" className="group relative inline-block">
            <h1 className="text-3xl font-extrabold uppercase tracking-tighter bg-gradient-to-r from-red-300 via-red-400 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-110">
              Daria&apos;s Portfolio
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400/30 to-transparent group-hover:via-red-400/80 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-300 to-purple-600 group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-purple-600/10 blur-md opacity-0 group-hover:opacity-100 group-hover:scale-x-105 transition-all duration-700" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex gap-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white font-semibold uppercase tracking-wider text-sm relative group px-2 py-1"
                  >
                    <span className="relative transition-colors duration-300 group-hover:text-purple-300">
                      {link.text}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all duration-500 group-hover:w-full"></span>
                    <span className="absolute inset-0 rounded bg-purple-400/10 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <BurgerMenu links={navLinks} />
        </nav>
      </div>
    </header>
  );
}