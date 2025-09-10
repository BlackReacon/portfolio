import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { href: "/impressum", text: "Impressum" },
    { href: "/privatpolicy", text: "Datenschutzerklärung" },
  ];

  return (
    <footer className="w-full bg-gradient-to-l from-red-700/20 via-gray-900 to-gray-900 bg-gray-900 border-t border-t-purple-400/30 z-50">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-4 px-4 md:px-10 gap-4 md:gap-0">
          <h2 className="text-lg md:text-1xl uppercase tracking-tighter text-center md:text-left">
            © Daria Schmidt 2025
          </h2>
          <ul className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white font-semibold uppercase tracking-wider text-sm relative group px-2 py-1 block text-center"
                >
                  <span className="relative transition-colors duration-300 group-hover:text-purple-300">
                    {link.text}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}