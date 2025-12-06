'use client';

import React from 'react';
import Navbar from './component/navbar';
import Footer from './component/footer';
import SmoothScroll from './component/home/smooth-scroll';
import { Academic } from './component/home/academic';
import VisiMisi from './component/home/visi-misi';
import Facilities from './component/home/facilities';
import LatestInfo from './component/home/latest-info';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="w-full bg-white text-[#1E1E1E]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/703a0f935045c8001648e17e505d95e40d8c117b?width=2600" 
              alt="Hero Background" 
              className="w-full h-full object-cover scale-110" // Slight scale for parallax feel if we added it
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 opacity-60" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-8">
            <motion.h1 
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight drop-shadow-2xl"
            >
              Teknik Informatika <br/> 
              <span className="text-4xl md:text-6xl font-medium text-gray-200">Universitas Hasanuddin</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-gray-200 text-lg md:text-2xl font-light max-w-2xl drop-shadow-md leading-relaxed"
            >
              Center of excellence in education, research, and application of information technology.
            </motion.p>
          </div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce"
          >
            Scroll to explore
          </motion.div>
        </section>

        {/* New Visi Misi Section */}
        <VisiMisi />

        {/* New Academic Scrollytelling Section */}
        <Academic />

        {/* New Facilities 3D Tilt Section */}
        <Facilities />

        {/* New Latest Info Marquee Section */}
        <LatestInfo />

        <Footer />
      </div>
    </SmoothScroll>
  );
}
