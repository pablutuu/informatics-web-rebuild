'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const visiContent = "Menjadi pusat unggulan dalam bidang pendidikan, penelitian, dan penerapan teknologi informasi yang memanfaatkan jaringan komputer dan sistem cerdas berbasis Benua Maritim Indonesia.";

const misiItems = [
  "Menghasilkan lulusan yang memiliki sikap dan nilai baik, keterampilan umum, keterampilan khusus, dan pengetahuan di bidang Informatika dan komputer.",
  "Mengembangkan penelitian inovatif dalam kecerdasan buatan dan sistem cerdas untuk mendukung pembangunan nasional.",
  "Melaksanakan program pengabdian kepada masyarakat yang menerapkan teknologi informasi untuk memecahkan masalah nyata.",
  "Membangun kemitraan strategis dengan industri dan pemerintah untuk meningkatkan kualitas pendidikan dan penelitian."
];

const STICKY_TOP_POSITION = 140;

export default function VisiMisi() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rightColumnRef,
    offset: ['start center', 'end center']
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="w-full bg-[#FAFAFA] relative py-20 lg:py-40">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
                
                <div className="lg:sticky lg:top-[120px] lg:self-start mb-12 lg:mb-0">
                      <div className="relative z-10">
                         <h2 className="text-5xl lg:text-6xl font-bold text-[#0C1B43] mb-8 tracking-tight">Visi</h2>
                         <motion.div 
                             className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg hover:rotate-1 transition-all duration-500"
                             whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                         >
                             <div className="absolute top-0 left-0 w-3 h-full bg-[#0C1B43]" />
                             <p className="text-xl lg:text-xl leading-relaxed text-gray-700 font-normal relative z-10">
                                 {visiContent}
                             </p>
                             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />
                         </motion.div>
                    </div>
                </div>
                
                <div ref={rightColumnRef} className="relative flex flex-col gap-0 lg:pt-0 min-h-[150vh] lg:min-h-0 pl-8 lg:pl-12">
                    
                    <div className="hidden lg:block absolute left-0 h-full w-[6px]">
                         <div 
                            className="sticky w-[6px] bg-gray-200 rounded-full overflow-hidden"
                            style={{ 
                                top: STICKY_TOP_POSITION + 80, 
                                height: '500px' 
                            }}
                        >
                            <motion.div 
                                style={{ scaleY: smoothProgress, originY: 0 }}
                                className="w-full h-full bg-[#0C1B43] rounded-full"
                            />
                        </div>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-[#0C1B43] mb-8 tracking-tight lg:sticky lg:top-[120px] lg:z-30 bg-[#FAFAFA] py-2">
                        Misi
                    </h2>

                    {misiItems.map((item, index) => {
                          return <Card key={index} item={item} index={index} total={misiItems.length} />;
                    })}
                </div>

            </div>
        </div>
    </section>
  );
}

function Card({ item, index, total }: { item: string, index: number, total: number }) {
    const cardContainerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress: stickyProgress } = useScroll({
        target: cardContainerRef,
        offset: ['start start', 'end start'] 
    });
    
    const scale = useTransform(stickyProgress, [0, 1], [1, 0.90]);
    
    const topOffset = 220 + index * 20;

    return (
        <div 
            ref={cardContainerRef}
            className="h-[50vh] sticky flex items-start justify-center" 
            style={{ top: topOffset }} 
        >
            <motion.div 
                className="w-full origin-top"
                style={{ scale: scale }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
                <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300 group cursor-pointer">
                     <div className="flex items-start gap-6">
                        <div className="hidden lg:flex flex-shrink-0 w-12 h-12 items-center justify-center bg-[#F3F4F6] text-[#0C1B43] rounded-xl font-bold text-xl border border-gray-100 group-hover:bg-[#0C1B43] group-hover:text-white transition-colors duration-300">
                            {index + 1}
                        </div>
                        <div className="flex-1">
                             <div className="flex items-center gap-4 mb-4 lg:hidden">
                                 <div className="w-10 h-10 flex items-center justify-center bg-[#0C1B43] text-white rounded-lg font-bold text-lg">
                                    {index + 1}
                                </div>
                                <span className="font-bold text-[#0C1B43]">Misi {index + 1}</span>
                             </div>
                             <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-normal group-hover:text-gray-900 transition-colors">
                                {item}
                             </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}