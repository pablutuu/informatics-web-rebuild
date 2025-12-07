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
        title="Kurikulum"
        description="Kurikulum kami dirancang untuk menjadi praktis, terstruktur, dan relevan dengan industri. Mahasiswa belajar melalui proyek langsung, studi kasus nyata, dan praktik terbimbing dari tingkat dasar hingga lanjutan untuk membangun keterampilan siap kerja dengan percaya diri."
        imageSrc="/images/placeholder-card-bachelor.png"
        imageAlt="Students working on projects"
        imagePosition="right"
        learnMoreLink="/academic/bachelor/curriculum"
      />

      {/* 4. Admission Requirement Section */}
      <InfoSection
        title="Persyaratan Penerimaan"
        description="Penerimaan ke universitas dilakukan melalui beberapa jalur seleksi nasional dan institusional, masing-masing dengan persyaratan khusus. Ini termasuk prestasi akademik, ujian masuk, dan jalur afirmasi khusus atau berbasis bakat untuk memastikan kesempatan yang sama bagi semua pelamar."
        imageSrc="/images/placeholder-card-admission-bachelor.png"
        imageAlt="Students in computer lab"
        imagePosition="left"
        onLearnMoreClick={() => setIsAdmissionModalOpen(true)}
      />

      {/* 5. Activity Guidelines Section */}
      <InfoSection
        title="Panduan Kegiatan"
        description="Kami menyediakan instruksi yang jelas untuk persyaratan Kuliah Kerja Nyata (KKN), Magang, dan Tugas Akhir. Mahasiswa dapat mengakses prosedur resmi, format laporan, dan peraturan khusus untuk memastikan semua kegiatan akademik berjalan lancar dan sesuai dengan standar universitas."
        imageSrc="/images/placeholder-card-activity-bachelor.png"
        imageAlt="Students interacting with equipment"
        imagePosition="right"
        onLearnMoreClick={() => setIsActivityModalOpen(true)}
      />

      {/* 6. Contact Information Section */}
      <section className="w-full flex justify-center px-4 md:px-[73px] py-12">
           <div className="w-full max-w-[1320px] bg-white border border-slate-200 rounded-[30px] p-8 md:p-12 shadow-sm flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 uppercase">Informasi Kontak</h2>
                
                <div className="space-y-2 text-slate-600 text-lg">
                    <p className="flex items-center justify-center gap-2">
                         Kontak: <span className="font-semibold text-slate-800">0812-6666-6666 (Admin)</span>
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
                    <h3 className="text-2xl font-bold text-slate-900">Persyaratan Penerimaan</h3>
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
                        Penerimaan mahasiswa baru mengacu pada kebijakan penerimaan universitas. Penerimaan ini dilaksanakan sekali setiap tahun. Penerimaan dilakukan melalui 4 jalur masuk. Setiap jalur masuk memiliki persyaratan penerimaan yang berbeda seperti yang dijelaskan di bawah ini.
                    </p>
                    
                    <ol className="list-decimal pl-5 space-y-4 marker:font-bold marker:text-slate-900">
                        <li>
                            <strong className="font-bold text-slate-900">SNMPTN (Seleksi Nasional Masuk Perguruan Tinggi Negeri)</strong> - SNMPTN adalah seleksi nasional masuk perguruan tinggi negeri yang dilaksanakan oleh Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan Indonesia, berdasarkan prestasi akademik dan pencapaian kegiatan ekstrakurikuler siswa selama sekolah menengah (kelas 10-12 atau SMA)
                        </li>
                        <li>
                            <strong className="font-bold text-slate-900">SBMPTN (Seleksi Bersama Masuk Perguruan Tinggi Negeri)</strong> - SBMPTN adalah ujian masuk nasional untuk perguruan tinggi negeri yang dilaksanakan oleh Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan Indonesia, berdasarkan tes tertulis berbasis komputer. SBMPTN dilaksanakan setelah SNMPTN.
                        </li>
                        <li>
                            <strong className="font-bold text-slate-900">ADik-3T (Jalur Afirmasi)</strong> Direktorat Jenderal Pendidikan Tinggi membuka jalur penerimaan khusus ADik-3T untuk siswa yang tinggal di daerah terpencil dan tertinggal di Indonesia untuk memberikan kesempatan yang sama di antara masyarakat di Indonesia.
                        </li>
                        <li>
                            <strong className="font-bold text-slate-900">Jalur Mandiri (Jalur Penerimaan Lokal Universitas)</strong> Selain seleksi nasional yang dilakukan oleh Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan Indonesia seperti yang dijelaskan di atas, universitas juga melakukan dua jalur penerimaan lokal setelah SNMPTN, SBMPTN, dan ADik-3T dilaksanakan:
                            <ol className="list-decimal pl-5 mt-3 space-y-3 marker:text-slate-500">
                                <li>
                                    <strong className="font-semibold text-slate-800">JNS (Jalur Seleksi Mahasiswa Non-Subsidi)</strong> - JNS adalah seleksi masuk mandiri yang diselenggarakan oleh Universitas Hasanuddin untuk merekrut calon mahasiswa yang memiliki prestasi akademik dan mampu membayar biaya kuliah penuh tanpa subsidi pemerintah. Seleksi dilaksanakan setelah hasil SBMPTN diumumkan.
                                </li>
                                <li>
                                    <strong className="font-semibold text-slate-800">POSK (Jalur Seleksi Berbasis Bakat)</strong> - POSK adalah seleksi masuk mandiri yang juga diselenggarakan oleh Universitas Hasanuddin berdasarkan prestasi olahraga, seni, dan sains. Penilaian POSK didasarkan pada nilai SBMPTN dan signifikansi keterampilan/bakat yang dibuktikan dengan sertifikat prestasi atau bukti yang diberikan oleh pelamar.
                                </li>
                            </ol>
                        </li>
                    </ol>

                    <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 border border-slate-100">
                        <p className="mb-2">
                            Semua proses penerimaan di atas dikoordinasikan secara terpusat melalui universitas. Informasi penerimaan untuk calon mahasiswa dapat diakses di:
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
                    <h3 className="text-2xl font-bold text-slate-900">Panduan Kegiatan</h3>
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
                        <h4 className="text-xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">Kuliah Kerja Nyata (KKN)</h4>
                        <ol className="list-decimal pl-5 space-y-2 marker:font-medium marker:text-slate-500">
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/jurnal_kkn_unhas_3ff95553d7.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Formulir, Laporan, dan Mekanisme</a>
                             </li>
                             <li>
                                Website Resmi KKN: <a href="https://web.unhas.ac.id/kkn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">https://web.unhas.ac.id/kkn/</a>
                             </li>
                             <li>
                                <a href="https://drive.google.com/file/d/1ywqQ7BMU8RsykBYIeEP0O0kgmIoF_JGo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Mekanisme KKN selama pandemi Covid-19</a>
                             </li>
                        </ol>
                    </section>

                    {/* Internship */}
                    <section className="space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">Magang</h4>
                        <ol className="list-decimal pl-5 space-y-2 marker:font-medium marker:text-slate-500">
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/SOP_Internship_afa443312d.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Panduan Magang</a>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/FORMAT_2020_Logbook_KP_0620670104.xlsx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Format Logbook</a>
                             </li>
                             <li>
                                <a href="https://drive.google.com/file/d/1ywqQ7BMU8RsykBYIeEP0O0kgmIoF_JGo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Panduan Khusus selama pandemi Covid-19</a>
                             </li>
                        </ol>
                    </section>
                    
                    {/* Final Project */}
                    <section className="space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">Tugas Akhir</h4>
                         <ol className="list-decimal pl-5 space-y-2 marker:font-medium marker:text-slate-500">
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/ProposalGuideline_12102022.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Panduan Proposal Topik dan Pembimbing</a>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/Guideline_Mahasiswa_SI_Penilaian_Proposal_2021_7566376bcf.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Buku Manual Aplikasi Proposal Topik</a>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/SOP_Final_Project_Seminar_Administration_9215139ea2.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Proses Administrasi</a>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/Format_sampul_dan_lembar_pengesahan_Skripsi_2021_982b7fe4d9.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Format Sampul dan Lembar Pengesahan Skripsi</a>
                             </li>
                             <li>
                                <span className="font-medium text-slate-800">Panduan Khusus selama pandemi Covid-19</span>
                                <ol className="list-[lower-alpha] pl-5 mt-1 space-y-1">
                                    <li><a href="https://eng.unhas.ac.id/informatics/s/uploads/rev01_Petunjuk_Pelaksanaan_Seminar_Hasil_Online_1_7fc780804e.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Panduan Seminar Online</a></li>
                                    <li><a href="https://eng.unhas.ac.id/informatics/s/uploads/sop_pengurusan_izin_ujian_akhir_online_2_3b73ae2904.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Panduan Administrasi Ujian Akhir</a></li>
                                    <li><a href="https://eng.unhas.ac.id/informatics/s/uploads/persyaratan_izin_ujian_akhir_online_1_c57132207f.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Persyaratan Administrasi Ujian Akhir</a></li>
                                </ol>
                             </li>
                             <li>
                                <a href="https://eng.unhas.ac.id/informatics/s/uploads/Manual_Book_Dosen_dan_Mahasiswa_v1_1_Digital_Library_3f6f612a02.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Manual Unggah Draft Skripsi ke Perpustakaan Digital</a>
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
