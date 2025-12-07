'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, Variants } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const yConfig = { damping: 15, stiffness: 100 };
  
  const bgY = useTransform(scrollY, [0, 500], [0, 200]);
  const springBgY = useSpring(bgY, yConfig);
  
  const bgScale = useTransform(scrollY, [0, 500], [1.1, 1.2]);
  const springBgScale = useSpring(bgScale, yConfig);

  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX / width - 0.5) * 2; 
    const yPct = (clientY / height - 0.5) * 2; 
    
    mouseX.set(xPct * 20); 
    mouseY.set(yPct * 20);
  };
  
  const springMouseX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const springMouseY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0, filter: "blur(10px)" },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100 
      } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900" 
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: springBgY, scale: springBgScale }}
      >
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/703a0f935045c8001648e17e505d95e40d8c117b?width=2600" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1B43]/70 to-[#1e3a8a]/60" />
      </motion.div>

      <motion.div 
        className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center gap-6"
        style={{ x: springMouseX, y: springMouseY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col items-center gap-2 overflow-hidden pb-2"> 
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight drop-shadow-2xl">
            Teknik Informatika
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-medium text-gray-200 tracking-tight leading-tight">
            Universitas Hasanuddin
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-2xl text-gray-300 max-w-3xl font-medium leading-relaxed drop-shadow-md"
        >
          Pusat keunggulan dalam pendidikan, penelitian, dan penerapan teknologi informasi.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        style={{ opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm tracking-widest uppercase">Gulir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
