'use client';

import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import SmoothScroll from '../../component/home/smooth-scroll';


export default function FasilitasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SmoothScroll>
      <div className="w-full bg-white text-[#1E1E1E]">
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}