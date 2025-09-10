'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function VerticalScrollProgress() {
  const [isBrowser, setIsBrowser] = useState(false);
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return (
    <div className="fixed right-0 top-0 h-screen w-2.5 bg-gray-800 rounded-full z-50 hidden md:block">
      <motion.div
        className="w-full bg-gradient-to-b from-purple-500 to-red-500 rounded-full origin-top"
        style={{ height }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}