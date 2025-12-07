
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ProgramCardProps {
  title: string;
  icon: ReactNode;
  link: string;
}

export default function ProgramCard({ title, icon, link }: ProgramCardProps) {
  return (
    <div className="bg-[#E6EAF6] rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 min-h-[160px]">
      <div className="flex flex-col gap-3">
        <div className="text-slate-700">
            {icon}
        </div>
        <h3 className="text-slate-900 font-bold text-xl leading-tight w-2/3">
          {title}
        </h3>
      </div>
      
      <div className="flex justify-end mt-4">
        <Link 
          href={link} 
          className="flex items-center gap-2 text-xs text-slate-600 hover:text-blue-900 transition-colors group"
        >
          see details
          <div className="bg-slate-900 rounded-full p-0.5 text-white group-hover:bg-blue-900 transition-colors">
             <ArrowRight size={12} />
          </div>
         
        </Link>
      </div>
    </div>
  );
}
