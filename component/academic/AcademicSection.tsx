"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AcademicSectionProps {
  title: string;
  children: ReactNode;
  reversed?: boolean;
}

export default function AcademicSection({ title, children, reversed = false }: AcademicSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // Check if element is below the viewport (scrolling up)
      // When scrolling down, the element goes above the viewport (top < 0) - we keep it visible
      // When scrolling up, the element goes below the viewport (top > 0) - we reset it
      if (ref.current) {
        const rect = (ref.current as HTMLElement).getBoundingClientRect();
        if (rect.top > 0) {
          controls.start("hidden");
        }
      }
    }
  }, [isInView, controls]);

  return (
    <motion.div 
      ref={ref}
      className="w-full flex justify-center px-4 md:px-[73px] py-6"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: reversed ? 100 : -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
    >
      <div className="w-full max-w-[1320px] bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div 
          className={`flex flex-col gap-8 md:gap-16 items-center ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Title Section */}
          <div className={`w-full md:w-1/3 flex ${reversed ? "justify-end text-right" : "justify-start text-left"}`}>
            <h2 className="text-3xl md:text-3xl font-bold text-slate-900 leading-snug w-full md:w-4/5">
              {title}
            </h2>
          </div>

          {/* Cards Section */}
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
