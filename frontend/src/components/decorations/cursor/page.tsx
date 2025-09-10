"use client"

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export const CustomCursor = () => {
  const size = 24;
  const dotSize = 4;
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1000] hidden md:block">

      <motion.div
        className="absolute bg-red-500 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          width: dotSize,
          height: dotSize,
          translateX: -dotSize/2,
          translateY: -dotSize/2,
        }}
      />
      

      <motion.div
        className="absolute bg-white opacity-80"
        style={{
          x: mouseX,
          y: mouseY,
          width: size,
          height: 1,
          translateX: -size/2,
          translateY: -0.5,
        }}
      />
      
      {/* Vertikale Linie (1px präzise) */}
      <motion.div
        className="absolute bg-white opacity-80"
        style={{
          x: mouseX,
          y: mouseY,
          width: 1,
          height: size,
          translateX: -0.5,
          translateY: -size/2,
        }}
      />
    </div>
  );
};