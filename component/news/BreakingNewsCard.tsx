import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BreakingNewsCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  date: string;
  // onClick tidak wajib lagi karena kita pakai Link, tapi bisa disimpan jika butuh tracking
  onClick?: () => void; 
}

export function BreakingNewsCard({ id, image, title, category, date, onClick }: BreakingNewsCardProps) {
  return (
      <div className="relative rounded-3xl overflow-hidden cursor-pointer h-[280px] md:h-[400px] lg:h-[500px] w-full group isolate">
        {/* Next.js Image Component */}
        <img
          src={image} 
          alt={title} 
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/95 z-10" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-all duration-500 ease-out group-hover:translate-y-[-8px] z-20">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
            {category}
          </span>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2 leading-tight transition-colors duration-300 group-hover:text-blue-100">
            {title}
          </h3>
          <p className="text-white/70 text-sm font-medium">{date}</p>
        </div>
        
        {/* Shine Effect (Optional, using CSS for perf) */}
        <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>
      </div>
  );
}