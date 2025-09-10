"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function BurgerMenu({ links }: { links: { href: string; text: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Burger Button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
      >
        <FiMenu className="w-6 h-6" />
      </button>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40"
          >
            {/* close button */}
            <div className="absolute top-4 right-5">
              <button
                onClick={closeMenu}
                className="text-white p-2 focus:outline-none"
                aria-label="Menü schließen"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* mobile menu list */}
            <div className="pt-24 px-5 h-full">
              <ul className="flex flex-col gap-8">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white text-2xl font-semibold uppercase tracking-wider relative group py-2 block"
                      onClick={closeMenu}
                    >
                      <span className="relative transition-colors duration-300">
                        {link.text}
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all duration-500"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}