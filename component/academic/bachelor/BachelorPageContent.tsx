"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import BachelorHero from "@/component/academic/bachelor/BachelorHero";
import IntroductionSection from "@/component/academic/bachelor/IntroductionSection";
import InfoSection from "@/component/academic/bachelor/InfoSection";

export default function BachelorPageContent() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* 1. Hero Section */}
      <BachelorHero />

      {/* 2. Introduction Section */}
      <IntroductionSection />

      {/* 3. Curriculum Section */}
      <InfoSection
        title="Curriculum"
        description="Our curriculum is designed to be practical, structured, and industry-relevant. Students learn through hands-on projects, real case studies, and guided practice from basic to advanced levels to build job-ready skills with confidence."
        imageSrc="/images/placeholder-card-bachelor.png"
        imageAlt="Students working on projects"
        imagePosition="right"
        learnMoreLink="/akademik/bachelor/curriculum"
      />

      {/* 4. Admission Requirement Section */}
      <InfoSection
        title="Admission Requirement"
        description="Admission to the university is conducted through several national and institutional selection tracks, each with specific requirements. These include academic performance, entrance examinations, and special affirmative or talent-based pathways to ensure equal opportunity for all applicants."
        imageSrc="/images/placeholder-card-admission-bachelor.png"
        imageAlt="Students in computer lab"
        imagePosition="left"
        onLearnMoreClick={() => setIsAdmissionModalOpen(true)}
      />

      {/* 5. Activity Guidelines Section */}
      <InfoSection
        title="Activity Guidelines"
        description="We provide clear instructions for Community Service, Internship, and Final Project requirements. Students can access official procedures, report formats, and special regulations to ensure all academic activities run smoothly and in accordance with university standards."
        imageSrc="/images/placeholder-card-activity-bachelor.png"
        imageAlt="Students interacting with equipment"
        imagePosition="right"
        onLearnMoreClick={() => setIsActivityModalOpen(true)}
      />

      {/* 6. Contact Information Section */}
      <section className="w-full flex justify-center px-4 md:px-[73px] py-12">
           <div className="w-full max-w-[1320px] bg-white border border-slate-200 rounded-[30px] p-8 md:p-12 shadow-sm flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 uppercase">Contact Information</h2>
                
                <div className="space-y-2 text-slate-600 text-lg">
                    <p className="flex items-center justify-center gap-2">
                         Contact Person: <span className="font-semibold text-slate-800">0812-6666-6666 (Admin)</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                         Email: <span className="font-semibold text-slate-800">admin@unhas.ac.id</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                         Instagram: <span className="font-semibold text-slate-800">@informatika.unhas</span>
                    </p>
                </div>
           </div>
      </section>

      {/* Admission Modal */}
      <AnimatePresence>
        {isAdmissionModalOpen && (
          <div 
             className="fixed inset-0 z-[2000] flex items-center justify-center px-4 py-6"
          >
             {/* Backdrop */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsAdmissionModalOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
             />

             {/* Modal Content */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-full flex flex-col"
             >
                {/* Header */}
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-white z-10 sticky top-0">
                    <h3 className="text-2xl font-bold text-slate-900">Admission Requirements</h3>
                    <button 
                        onClick={() => setIsAdmissionModalOpen(false)}
                        className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar leading-relaxed text-slate-700 space-y-6 text-sm md:text-base">
                    <p>
                        The admission for the prospective students refers to the university’s admission policy. This admission takes place once each year. The admission is conducted through 4 tracks of entry. Each track of entry has different admission requirements as described below.
                    </p>
                    
                    <ol className="list-decimal pl-5 space-y-4 marker:font-bold marker:text-slate-900">
                        <li>
                            <strong className="font-bold text-slate-900">SNMPTN (National Selection for Public Universities Entrance)</strong> - SNMPTN is a national selection for public universities entrance, conducted by the General Directorate of Higher Education of the Ministry of Education and Culture of Indonesia, based on the academic records and extra-curricular activity achievement of students during their secondary school (grade 10-12 or Senior High School)
                        </li>
                        <li>
                            <strong className="font-bold text-slate-900">SBMPTN (National Entrance Exams for Public Universities)</strong> - SBMPTN is a national entrance examination for public universities, conducted by the General Directorate of Higher Education of the Ministry of Education and Culture of Indonesia, based on a computer-based written test. The SBMPTN is conducted after SNMPTN.
                        </li>
                        <li>
                            <strong className="font-bold text-slate-900">ADik-3T (Affirmative Track)</strong> The General Directorate of Higher Education opens ADik-3T special admission track for students who live in the remote and the underdeveloped regions of Indonesia to provide an equal opportunity among society in Indonesia.
                        </li>
                        <li>
                            <strong className="font-bold text-slate-900">Jalur Mandiri (University’s Local Admission Track)</strong> In addition to the national selection conducted by the General Directorate of Higher Education of the Ministry of Education and Culture of Indonesia, as described above, the university also conducts two local admission tracks after SNMPTN, SBMPTN, and ADik-3T are conducted:
                            <ol className="list-decimal pl-5 mt-3 space-y-3 marker:text-slate-500">
                                <li>
                                    <strong className="font-semibold text-slate-800">JNS (Entry Selection for Non-Subsidized Student)</strong> - JM is an independent entry selection that is organized by Universitas Hasanuddin to recruit prospective students who have academic achievements and are able to pay full tuition fee without government-subsidised. The selection is conducted after SBMPTN results are announced.
                                </li>
                                <li>
                                    <strong className="font-semibold text-slate-800">POSK (Talent-based Selection Track)</strong> - POSK is an independent entry selection that is also organized by Universitas Hasanuddin based on the sport, art and science achievements. Assessment of POSK is based on the score of SBMPTN and the significance of skills/ talents proven with achievement certificates or tokens that are provided by the applicants.
                                </li>
                            </ol>
                        </li>
                    </ol>

                    <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 border border-slate-100">
                        <p className="mb-2">
                            All the admission processes above are coordinated centrally through the university. The admission information for the prospective students can be accessed in:
                        </p>
                        <ul className="space-y-1">
                            <li>
                                <a href="http://regpmb.unhas.ac.id/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                    http://regpmb.unhas.ac.id/
                                </a>
                            </li>
                            <li>
                                <a href="https://foreignstudent.unhas.ac.id/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                    https://foreignstudent.unhas.ac.id/
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Activity Guidelines Modal */}
      <AnimatePresence>
        {isActivityModalOpen && (
          <div 
             className="fixed inset-0 z-[2000] flex items-center justify-center px-4 py-6"
          >
             {/* Backdrop */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsActivityModalOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
             />

             {/* Modal Content */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-full flex flex-col"
             >
                {/* Header */}
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-white z-10 sticky top-0">
                    <h3 className="text-2xl font-bold text-slate-900">Activity Guidelines</h3>
                    <button 
                        onClick={() => setIsActivityModalOpen(false)}
                        className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar leading-relaxed text-slate-700 space-y-8 text-sm md:text-base">
                    
                    {/* Community Service */}
                    <section className="space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">Community Service</h4>
                        <ol className="list-decimal pl-5 space-y-2 marker:font-medium marker:text-slate-500">
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/jurnal_kkn_unhas_3ff95553d7.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Forms, Reports, and Mechanism</a>
                             </li>
                             <li>
                                Community Service Official Website: <a href="https://web.unhas.ac.id/kkn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">https://web.unhas.ac.id/kkn/</a>
                             </li>
                             <li>
                                <a href="https://drive.google.com/file/d/1ywqQ7BMU8RsykBYIeEP0O0kgmIoF_JGo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Mechanism of Community Service during Covid-19 pandemic</a>
                             </li>
                        </ol>
                    </section>

                    {/* Internship */}
                    <section className="space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">Internship</h4>
                        <ol className="list-decimal pl-5 space-y-2 marker:font-medium marker:text-slate-500">
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/SOP_Internship_afa443312d.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Guideline for Internship</a>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/FORMAT_2020_Logbook_KP_0620670104.xlsx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Logbook Format</a>
                             </li>
                             <li>
                                <a href="https://drive.google.com/file/d/1ywqQ7BMU8RsykBYIeEP0O0kgmIoF_JGo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Specific Guideline during Covid-19 pandemic</a>
                             </li>
                        </ol>
                    </section>
                    
                    {/* Final Project */}
                    <section className="space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">Final Project</h4>
                         <ol className="list-decimal pl-5 space-y-2 marker:font-medium marker:text-slate-500">
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/ProposalGuideline_12102022.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Topic and Advisor Proposal Guideline</a>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/Guideline_Mahasiswa_SI_Penilaian_Proposal_2021_7566376bcf.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Manual Book for Topic Proposal App</a>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/SOP_Final_Project_Seminar_Administration_9215139ea2.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Administration Process</a>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/Format_sampul_dan_lembar_pengesahan_Skripsi_2021_982b7fe4d9.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Format for Thesis Cover and Acknowledgement Sheet</a>
                             </li>
                             <li>
                                <span className="font-medium text-slate-800">Specific Guideline during Covid-19 pandemic</span>
                                <ol className="list-[lower-alpha] pl-5 mt-1 space-y-1">
                                    <li><a href="https://eng.unhas.ac.id/informatics/s/uploads/rev01_Petunjuk_Pelaksanaan_Seminar_Hasil_Online_1_7fc780804e.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Online Seminar Guideline</a></li>
                                    <li><a href="https://eng.unhas.ac.id/informatics/s/uploads/sop_pengurusan_izin_ujian_akhir_online_2_3b73ae2904.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Final Project Administration Guideline</a></li>
                                    <li><a href="https://eng.unhas.ac.id/informatics/s/uploads/persyaratan_izin_ujian_akhir_online_1_c57132207f.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Final Project Administration Requirements</a></li>
                                </ol>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/Manual_Book_Dosen_dan_Mahasiswa_v1_1_Digital_Library_3f6f612a02.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Manual for Thesis Draft Upload to Digital Library</a>
                             </li>
                        </ol>
                    </section>

                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
