import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface RecommendationCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  author: string;
  date: string;
}

export function RecommendationCard({ id, image, title, category, author, date}: RecommendationCardProps) {
  return (
    <div 
      className="flex gap-3 md:gap-4 p-3 rounded-2xl group cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-slate-100"
    >
      
      {/* 1. Background Shimmer Effect (Animasi Kilauan) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0" />
      
      {/* Image Wrapper */}
      <div className="relative w-[120px] h-[90px] md:w-[140px] md:h-[105px] flex-shrink-0 rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 z-10">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        {/* 2. Image Overlay (Gelap sedikit saat hover agar teks lebih kontras) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex-1 flex flex-col justify-center relative min-w-0 z-10">
        <span className="text-blue-600 text-xs font-bold mb-1 uppercase tracking-wider transition-colors duration-300 group-hover:text-blue-500">
          {category}
        </span>
        
        <h3 className="text-xl font-bold text-[#0C1B43] line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium transition-colors duration-300 group-hover:text-slate-700">
          <span className="truncate">{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        
        {/* 3. Arrow Icon Slide Animation */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 text-blue-500" />
        </div>
      </div>
    </div>
  );
}