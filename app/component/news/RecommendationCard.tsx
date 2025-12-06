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
  onClick?: () => void;
}

export function RecommendationCard({ id, image, title, category, author, date, onClick }: RecommendationCardProps) {
  return (
      <div className="flex gap-3 md:gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100 relative overflow-hidden">
        
        {/* Image Wrapper dengan Next Image */}
        <div className="relative w-[120px] h-[90px] md:w-[140px] md:h-[105px] flex-shrink-0 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
        </div>
        
        <div className="flex-1 flex flex-col justify-center relative min-w-0">
          <span className="text-blue-600 text-xs font-bold mb-1 uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-xl font-bold text-[#0C1B43] line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="truncate">{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          
          {/* Arrow Icon */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </div>
  );
}