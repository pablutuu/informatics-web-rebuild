'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { IoMdArrowForward } from 'react-icons/io';

const programs = [
  {
    title: "Program Sarjana",
    description: "Program Sarjana Teknik Informatika dirancang untuk membekali mahasiswa dengan dasar keilmuan yang kuat, kemampuan analitis, dan keterampilan praktis dalam pengembangan teknologi informasi. Lulusan diharapkan mampu merancang solusi inovatif dan siap berkontribusi di dunia industri maupun penelitian.",
    id: 1
  },
  {
    title: "Program Magister",
    description: "Program Magister berfokus pada pengembangan riset mendalam dan spesialisasi dalam bidang kecerdasan buatan, rekayasa perangkat lunak, dan infrastruktur jaringan. Mahasiswa didorong untuk mempublikasikan penelitian yang berdampak global.",
    id: 2
  },
  {
    title: "Program Doktor",
    description: "Program Doktor bertujuan mencetak ilmuwan dan akademisi unggul yang mampu menciptakan pengetahuan baru melalui penelitian orisinal. Kurikulum menekankan pada inovasi teknologi dan kontribusi terhadap komunitas ilmiah internasional.",
    id: 3
  }
];

export const Academic = () => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const [activeProgram, setActiveProgram] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.33) {
            setActiveProgram(0);
        } else if (latest < 0.66) {
            setActiveProgram(1);
        } else {
            setActiveProgram(2);
        }
    });

    const scrollToProgram = (index: number) => {
        if (container.current) {
            const totalHeight = container.current.clientHeight;
            const sectionHeight = totalHeight / 3;
            const topPos = container.current.offsetTop;
            const targetScroll = topPos + (index * sectionHeight) + 50;

            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div 
                    className="absolute inset-0 w-full h-full bg-[url(/bg-academic-lp.svg)] bg-cover bg-center opacity-100 z-0 pointer-events-none mix-blend-screen"
                />

                <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6 md:px-12 relative z-10">
                    
                    <div className="flex flex-col gap-10 pt-12">
                        {programs.map((program, index) => (
                            <div 
                                key={program.id}
                                onClick={() => scrollToProgram(index)}
                                className={`flex items-center gap-6 transition-all duration-500 cursor-pointer group ${activeProgram === index ? 'opacity-100 translate-x-0' : 'opacity-30 hover:opacity-60 -translate-x-4'}`}
                            >
                                <IoMdArrowForward className={`text-white text-3xl transition-opacity duration-300 ${activeProgram === index ? 'opacity-100' : 'opacity-0'}`} />
                                <div className={`text-white text-5xl md:text-6xl lg:text-6xl font-semibold leading-[1.1] font-sans tracking-tight`}>
                                    {program.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>{word} <br/></React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative h-[300px] pt-36 flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProgram}
                                className="flex flex-col gap-10"
                                initial={{ opacity: 0, y: 20 }}     
                                animate={{ opacity: 1, y: 0 }}      
                                exit={{ opacity: 0, y: -20 }}       
                                transition={{ 
                                    duration: 0.5, 
                                    ease: "easeInOut" 
                                }}
                            >
                                <p className="text-[#f6feff]/90 text-lg md:text-xl lg:text-2xl leading-relaxed font-sans font-light">
                                    {programs[activeProgram].description}
                                </p>
                                <div className="flex items-center gap-5 cursor-pointer group w-fit">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                                        <IoMdArrowForward className="text-black text-2xl" />
                                    </div>
                                    <span className="text-white text-xl font-medium tracking-wide group-hover:underline decoration-1 underline-offset-4">
                                        Lihat selengkapnya
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
};