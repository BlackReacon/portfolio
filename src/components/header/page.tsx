
export default function Header() {
    return (
      <>
<header className="fixed w-full top-0 z-50 bg-[#0a0a0a] border-b border-b-green-400/30">
        <div className="container mx-auto px-5">
          <nav className="flex justify-between items-center py-4">
            <div className="text-3xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent relative">
              Portfolio
              <div className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500" />
            </div>
            <ul className="hidden md:flex gap-12">
              <li><a href="#home" className="text-white font-semibold uppercase tracking-wider text-sm">Home</a></li>
              <li><a href="#about" className="text-white font-semibold uppercase tracking-wider text-sm">Über mich</a></li>
              <li><a href="#skills" className="text-white font-semibold uppercase tracking-wider text-sm">Skills</a></li>
              <li><a href="#projects" className="text-white font-semibold uppercase tracking-wider text-sm">Projekte</a></li>
              <li><a href="#contact" className="text-white font-semibold uppercase tracking-wider text-sm">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>
      </>
    );
  }