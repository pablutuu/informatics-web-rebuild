import Image from 'next/image';
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

// --- Data Halaman ---
const IntroductionData = {
  description: [
   "Program Studi Doktor Informatika (PSDIF) berada di bawah naungan Departemen Teknik Informatika, Fakultas Teknik, Universitas Hasanuddin.",
   "Program ini dirancang untuk menghasilkan lulusan yang memiliki kompetensi teknis yang kuat, etika bisnis, dan kemampuan untuk memberikan solusi inovatif dalam bidang ilmu komputer."
  ],
};

const EducationalPathData = {
  list: [
    "Lecture-Based",
    "Research-Based",
    "Thematic Research Group",
  ],
  totalStudyLoad: "64 Credits",
};


const curriculumData = {
  description: [
    "Kurikulum ini didasarkan pada KKNI (Kerangka Kualifikasi Nasional Indonesia) dan OBE (Pendidikan Berbasis Hasil).",
    "Tujuannya adalah untuk memberikan kompetensi teknis dan keahlian praktis, serta pengetahuan ilmiah dan keilmuan.",
    "Ilmu data merupakan komponen utama dari tugas akhir."
  ],
  image: "/image.png", 
};

const ScientificFocusData = {
  description: [
    "Artificial Intelligence & Machine Learning",
    "Data Science & Big Data",
    "Cloud Computing & Distributed Systems",
    "Internet of Things (IoT)",
    "Cybersecurity & Parallel Computing",
  ],
  image: "/image.png", 
};

const laboratoriesData = {
  description: [
    "Artificial Intelligence",
    "Internet of Things & Parallel Computing",
    "Data Science and Business Process Solutions",
    "Computer Vision & Robotics",
    "Distributed Systems & Internet Security",
    "Advanced System Software & Ubiquity Computing",
  ],
  image: "/image.png", 
};


const StudyLoadData = {
  description: [
    "Jumlah SKS yang harus diselesaikan: 64 SKS", 
    "Periode Studi:",
    "Minimum: 5 semester",
    "Normal: 6 semester",
    "Maksimum: 10 semester",
  ],
  image: "/image.png", 
};

    // --- Akhir Data Halaman ---
    const ProgramInfoPage = () => {
      return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <section className="relative w-full pt-28 flex justify-center"></section>
      {/* Header mengikuti ukuran navbar */}
      <div className="w-[100%] mx-auto mt-6">
        <header 
          className="relative h-[450px] w-full overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/gedung-unhas.png')" }}
        >
          <div className="absolute inset-0 bg-custom-navy bg-opacity-70 flex items-center justify-center">
            <h1 className="text-6xl font-extrabold text-white tracking-widest text-center uppercase leading-tight">
              <span className="block">PROGRAM</span>
              <span className="block">INFORMATION</span>
            </h1>
          </div>
        </header>
      </div>


      {/* 2. Main Content Container */}
      <main className="w-[90%] mx-auto mt-12">
        {/* --- INTRODUCTION + EDUCATIONAL PATH --- */}
        <section className="mb-16">
          {/* Judul di atas kotak */}
          <h2 className="text-3xl font-bold text-black mb-4">
            INTRODUCTION
          </h2>
          {/* Kotak utama dengan stroke hitam */}
          <div className="bg-white rounded-xl p-6 flex flex-col lg:flex-row gap-6 border-[1px] border-[#CCCCCC]">
            {/* LEFT — INTRODUCTION */}
            <div className="flex-1">
              <ul className="text-gray-700 space-y-3 list-none">
                {IntroductionData.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — EDUCATIONAL PATH (tetap di kanan, teks rata kiri) */}
            <div className="flex-1 flex flex-col ml-20">
              <h3 className="text-xl font-semibold text-custom-navy mb-4 text-black">Educational Path:</h3>
              <ul className="space-y-3 text-gray-700">
                {EducationalPathData.list.map((item, index) => (
                  <li key={index} className="flex items-center font-medium">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <span className="inline-block text-sm px-2 py-1 rounded-full bg-[#E1E4F8] transition duration-150 text-black">
                  Total Study Load: {EducationalPathData.totalStudyLoad}
                </span>
              </div>
            </div>
          </div>
        </section>


        
        {/* --- CURRICULUM --- */}
        <h2 className="text-3xl font-bold text-black mb-4">
          CURRICULUM
        </h2>
        <section className="mb-16">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-xl border-[1px] border-[#CCCCCC]"> 
            {/* Teks Curriculum (2/3 lebar) */}
             <div className="md:col-span-2">
              <ul className="text-gray-700 space-y-3 list-none">
                {curriculumData.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black font-semibold mr-2">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Gambar Curriculum (1/3 lebar) */}
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl md:col-span-1">
              <Image src={curriculumData.image} alt="Curriculum" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>


         {/* --- SCIENTIFIC FOCUS --- */}
        <h2 className="text-3xl font-bold text-black mb-4">
          SCIENTIFIC FOCUS
        </h2>
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-xl border-[1px] border-[#CCCCCC]">
            {/* Teks Scientific Focus (2/3 lebar) */}
             <div className="md:col-span-2">
              <ul className="text-gray-700 space-y-3 list-none">
                {ScientificFocusData.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black font-semibold mr-2">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Gambar Scientific Focus (1/3 lebar) */}
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl md:col-span-1">
              <Image src={ScientificFocusData.image} alt="Curriculum" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>


        {/* --- SUPPORTING LABORATORIES --- */}
        <h2 className="text-3xl font-bold text-black mb-4">
          SUPPORTING LABORATORIES
        </h2>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-xl border-[1px] border-[#CCCCCC]">
            
            {/* Teks Supporting Laboratories (2/3 lebar) */}
             <div className="md:col-span-2">
              <ul className="text-gray-700 space-y-3 list-none">
                {laboratoriesData.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black font-semibold mr-2">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Gambar Supporting Laboratories (1/3 lebar) */}
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl md:col-span-1">
              <Image src={laboratoriesData.image} alt="Curriculum" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>



         {/* --- STUDY LOAD --- */}
        <h2 className="text-3xl font-bold text-black mb-4">
          STUDY LOAD
        </h2>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-xl border-[1px] border-[#CCCCCC]">
            
            {/* Teks Study Load (2/3 lebar) */}
             <div className="md:col-span-2">
              <ul className="text-gray-700 space-y-3 list-none">
                {StudyLoadData.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black font-semibold mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Gambar Study Load (1/3 lebar) */}
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl md:col-span-1">
              <Image src={StudyLoadData.image} alt="Curriculum" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
         

          {/* --- REGISTRATION + CONTACT INFORMATION (Sejajar Kotak Terpisah) --- */}
          <section className="grid cols-1 md:grid-cols-2 gap-10">
                {/* LEFT BOX: Registration Info */}
                <div className="bg-white rounded-xl border-[1px] border-[#CCCCCC] p-6 flex flex-col">
                  <h3 className="text-3xl font-bold text-black mb-4">REGISTRATION INFORMATION</h3>

                  <div className="flex flex-col justify-center flex-1">
                  <p className="text-gray-700 mb-1">Register now via:</p>
                  <a href="https://website.unhas.ac.id"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-bold transition duration-150">
                    https://website.unhas.ac.id
                  </a>
                </div>
              </div>

              {/* RIGHT BOX: Contact Info */}
                <div className="bg-white rounded-xl border-[1px] border-[#CCCCCC] p-6 flex flex-col items-end">
                  <h3 className="text-3xl font-bold text-black mb-4">CONTACT INFORMATION</h3>

                <div className="flex flex-col justify-center flex-1 items-end">
                  <p className="text-gray-700 leading-relaxed mb-1">
                    Contact Person: 0811-4519-91 (Novy)
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-1">
                    Email: doktor.informatika@unhas.ac.id
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Instagram: @doktor.informatika.unhas
                  </p>
                </div>
              </div>
              </section>

      </main>
      <Footer/> 
    </div>
  );
};

export default ProgramInfoPage;
