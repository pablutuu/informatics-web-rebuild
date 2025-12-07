import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SliderProps {
  children: React.ReactNode[]; // Fixed type definition
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export function BreakingNewsSlider({ children, autoplay = true, autoplaySpeed = 5000 }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  // Autoplay Logic
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(goToNext, autoplaySpeed);
    return () => clearInterval(timer);
  }, [currentIndex, autoplay, autoplaySpeed]);

  // Framer Motion Variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="relative group w-full overflow-hidden rounded-3xl h-[280px] md:h-[400px] lg:h-[500px]">
      <AnimatePresence initial={false} custom={direction} mode='popLayout'>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x; // detected swipe distance
            if (swipe < -50) goToNext();
            else if (swipe > 50) goToPrevious();
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 z-20">
        <button
          onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          className="pointer-events-auto bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 duration-300 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          className="pointer-events-auto bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0 duration-300 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
            }}
            className={`transition-all duration-300 rounded-full h-2 ${
              index === currentIndex
                ? 'w-8 bg-blue-500'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}