

import AcademicHero from "@/component/academic/AcademicHero";
import AcademicSection from "@/component/academic/AcademicSection";
import ProgramCard from "@/component/academic/ProgramCard";
import { BookOpen, FileText, Map } from "lucide-react";

export default function AcademicPage() {
  const s1Cards = [
    {
      title: "Program Information",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/bachelor/information", // Placeholder link
    },
    {
      title: "PMB Brochure",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/bachelor/brochure", // Placeholder link
    },
    {
      title: "Leaflet",
      icon: <Map className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/bachelor/leaflet", // Placeholder link
    },
  ];

  const s2Cards = [
    {
      title: "Program Information",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/master/information",
    },
    {
      title: "PMB Brochure",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/master/brochure",
    },
    {
      title: "Leaflet",
      icon: <Map className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/master/leaflet",
    },
  ];

  const s3Cards = [
    {
      title: "Program Information",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/doctoral/information",
    },
    {
      title: "PMB Brochure",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/doctoral/brochure",
    },
    {
      title: "Leaflet",
      icon: <Map className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
      link: "/academic/doctoral/leaflet",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      
      <main className="flex flex-col">
        <AcademicHero />

        {/* Bachelor (S1) Section - Text Left, Cards Right */}
        <AcademicSection title="Bachelor (S1) Program Academic Information">
          {s1Cards.map((card, index) => (
            <ProgramCard
              key={index}
              title={card.title}
              icon={card.icon}
              link={card.link}
            />
          ))}
        </AcademicSection>

        {/* Master (S2) Section - Cards Left, Text Right */}
        <AcademicSection 
          title="Master (S2) Program Academic Information" 
          reversed={true}
        >
          {s2Cards.map((card, index) => (
            <ProgramCard
              key={index}
              title={card.title}
              icon={card.icon}
              link={card.link}
            />
          ))}
        </AcademicSection>

        {/* Doctoral (S3) Section - Text Left, Cards Right */}
        <AcademicSection title="Informatics Doctoral (S3) Study Program Academic Information">
           {s3Cards.map((card, index) => (
            <ProgramCard
              key={index}
              title={card.title}
              icon={card.icon}
              link={card.link}
            />
          ))}
        </AcademicSection>
      </main>


    </div>
  );
}
