
import { ReactNode } from "react";

interface AcademicSectionProps {
  title: string;
  children: ReactNode;
  reversed?: boolean;
}

export default function AcademicSection({ title, children, reversed = false }: AcademicSectionProps) {
  return (
    <div className="w-full flex justify-center px-4 md:px-[73px] py-6">
      <div className="w-full max-w-[1320px] bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div 
          className={`flex flex-col gap-8 md:gap-16 items-center ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Title Section */}
          <div className={`w-full md:w-1/3 flex ${reversed ? "justify-end text-right" : "justify-start text-left"}`}>
            <h2 className="text-3xl md:text-3xl font-bold text-slate-900 leading-snug w-full md:w-4/5">
              {title}
            </h2>
          </div>

          {/* Cards Section */}
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
