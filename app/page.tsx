'use client';

import Navbar from '../component/navbar';
import Footer from '../component/footer';
import SmoothScroll from '../component/home/smooth-scroll';
import HeroSection from '../component/home/hero-section';
import LatestInfo from '../component/home/latest-info';
import { Academic } from '../component/home/academic';
import Facilities from '../component/home/facilities';
import VisiMisi from '../component/home/visi-misi';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-white min-h-screen">
        <Navbar />
        <HeroSection />
        <VisiMisi />
        <Academic />
        <Facilities />
        <LatestInfo />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
