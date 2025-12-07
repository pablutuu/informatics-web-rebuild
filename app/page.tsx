'use client';

import SmoothScroll from './component/home/smooth-scroll';
import { Academic } from './component/home/academic';
import VisiMisi from './component/home/visi-misi';
import Facilities from './component/home/facilities';
import LatestInfo from './component/home/latest-info';
import { motion } from 'framer-motion';
import HeroSection from './component/home/hero-section';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="w-full bg-white text-[#1E1E1E]">
        <HeroSection />

        <VisiMisi />

        <Academic />

        <Facilities />

        <LatestInfo />
      </div>
    </SmoothScroll>
  );
}
