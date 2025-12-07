const curriculum = {
  program: "S1 Informatika",

  semesters: [
    // =========================
    // SEMESTER 1
    // =========================
    {
      semester: 1,
      total_sks: 20,
      courses: [
        { code: "23H01110103", name: "Matematika Dasar I", sks: 3 },
        { code: "23U01110802", name: "Pendidikan Kewarganegaraan", sks: 2 },
        { code: "23U01111102", name: "Bahasa Inggris", sks: 2 },
        { code: "23U01111002", name: "Wawasan Budaya dan IPTEKS BMI", sks: 2 },
        { code: "23D12110102", name: "Pengantar Teknologi Informasi", sks: 2 },
        { code: "23D12110203", name: "Dasar Pemrograman Komputer", sks: 3 },
        { code: "23D12110303", name: "Sistem Digital", sks: 3 },
        { code: "23D12110403", name: "Dasar Listrik dan Elektronika", sks: 3 }
      ]
    },

    // =========================
    // SEMESTER 2
    // =========================
    {
      semester: 2,
      total_sks: 20,
      courses: [
        { code: "23U01110102", name: "Pendidikan Agama", sks: 2 },
        { code: "23H01110303", name: "Matematika Dasar II", sks: 3 },
        { code: "23U01110702", name: "Pancasila", sks: 2 },
        { code: "23U01110902", name: "Bahasa Indonesia", sks: 2 },
        { code: "23D12110503", name: "Matematika Diskrit", sks: 3 },
        { code: "23D12110604", name: "Algoritma dan Struktur Data", sks: 4 },
        { code: "23D12110702", name: "Dasar Multimedia", sks: 2 },
        { code: "23D12110802", name: "Interaksi Manusia dan Komputer", sks: 2 }
      ]
    },

    // =========================
    // SEMESTER 3
    // =========================
    {
      semester: 3,
      total_sks: 21,
      courses: [
        { code: "23D12120103", name: "Aljabar Linear", sks: 3 },
        { code: "23D12120202", name: "Basis Data", sks: 2 },
        { code: "23D12120303", name: "Arsitektur dan Organisasi Komputer", sks: 3 },
        { code: "23D12120403", name: "Pemrograman Berorientasi Obyek", sks: 3 },
        { code: "23D12120503", name: "Kecerdasan Buatan", sks: 3 },
        { code: "23D12120602", name: "Teori Bahasa dan Otomata", sks: 2 },
        { code: "23D12120702", name: "Pemrograman Script", sks: 2 },
        { code: "23D12120803", name: "Probabilitas dan Statistika", sks: 3 }
      ]
    },

    // =========================
    // SEMESTER 4
    // =========================
    {
      semester: 4,
      total_sks: 20,
      courses: [
        { code: "23D12120902", name: "Manajemen Basis Data", sks: 2 },
        { code: "23D12121003", name: "Metode Komputasi Numerik", sks: 3 },
        { code: "23D12121103", name: "Sistem Operasi", sks: 3 },
        { code: "23D12121203", name: "Rekayasa Perangkat Lunak", sks: 3 },
        { code: "23D12121303", name: "Keamanan Digital", sks: 3 },
        { code: "23D12121403", name: "Jaringan Komputer", sks: 3 },
        { code: "23D12121503", name: "Technopreneurship", sks: 3 }
      ]
    },

    // =========================
    // SEMESTER 5
    // =========================
    {
      semester: 5,
      total_sks: 22,
      courses: [
        { code: "23D12130103", name: "Pemrograman Web", sks: 3 },
        { code: "23D12130203", name: "Pemrograman Mobile", sks: 3 },
        { code: "23D12130303", name: "Metode Penelitian", sks: 3 },
        { code: "23D12130403", name: "Pemodelan dan Simulasi", sks: 3 },
        { code: "23D12130502", name: "Sistem Informasi", sks: 2 },
        { code: null, name: "Mata Kuliah Pilihan 1", sks: 2 },
        { code: null, name: "Mata Kuliah Pilihan 2", sks: 2 },
        { code: null, name: "Mata Kuliah Pilihan 3", sks: 2 }
      ]
    },

    // =========================
    // SEMESTER 6 (PEMINATAN)
    // =========================
    {
      semester: 6,
      total_sks: 20,
      tracks: [
        {
          name: "Big Data & Cloud Computing",
          courses: [
            { code: "23D12134004", name: "Teknologi Virtualisasi dan Komputasi Awan", sks: 4 },
            { code: "23D12134104", name: "Analisis Data", sks: 4 },
            { code: "23D12134204", name: "Sistem Big Data", sks: 4 },
            { code: "23D12134304", name: "Proyek RPL", sks: 4 },
            { code: null, name: "MKPK", sks: 4 }
          ]
        },
        {
          name: "Artificial Intelligence & Robotics",
          courses: [
            { code: "23D12134404", name: "Visi Komputer", sks: 4 },
            { code: "23D12134504", name: "Data Science", sks: 4 },
            { code: "23D12134604", name: "Kecerdasan Buatan dan Robotika", sks: 4 },
            { code: "23D12134304", name: "Proyek RPL", sks: 4 },
            { code: null, name: "MKPK", sks: 4 }
          ]
        },
        {
          name: "Internet of Things",
          courses: [
            { code: "23D12134704", name: "Sistem Tersemat", sks: 4 },
            { code: "23D12134804", name: "Wireless Sensor Network", sks: 4 },
            { code: "23D12134904", name: "Pemrograman Paralel", sks: 4 },
            { code: "23D12134304", name: "Proyek RPL", sks: 4 },
            { code: null, name: "MKPK", sks: 4 }
          ]
        },
        {
          name: "MBKM",
          courses: [
            { code: null, name: "MKPK - Merdeka Belajar", sks: 20 }
          ]
        }
      ]
    },

    // =========================
    // SEMESTER 7
    // =========================
    {
      semester: 7,
      total_sks: 22,
      courses: [
        { code: null, name: "MKPK - Magang/Praktek Kerja", sks: 4 },
        { code: null, name: "MKPK - KKN", sks: 4 },
        { code: "23D12140102", name: "Seminar Hasil", sks: 2 },
        { code: "23D12140204", name: "Skripsi", sks: 4 },
        { code: null, name: "MKPK (Others)", sks: 8 }
      ]
    }
  ],

  // =========================
  // ELECTIVE MODULES
  // =========================
  elective_modules: [
    { code: "23D12130602", name: "Analisis Jejaring Sosial", sks: 2 },
    { code: "23D12130702", name: "Animasi dan Pemodelan 3D", sks: 2 },
    { code: "23D12130802", name: "Augmented Reality", sks: 2 },
    { code: "23D12130902", name: "Bisnis IT", sks: 2 },
    { code: "23D12131002", name: "Cyber Physical System", sks: 2 },
    { code: "23D12131102", name: "Forensik Digital", sks: 2 },
    { code: "23D12131202", name: "Grafika Komputer", sks: 2 },
    { code: "23D12131302", name: "Jaringan Multimedia", sks: 2 },
    { code: "23D12131402", name: "Kecerdasan Buatan Hybrid", sks: 2 },
    { code: "23D12131502", name: "Komputasi Biomedik", sks: 2 },
    { code: "23D12131602", name: "Komputasi GPU", sks: 2 },
    { code: "23D12131702", name: "Komputasi Pervasive", sks: 2 },
    { code: "23D12131802", name: "Komunikasi Antar Personal", sks: 2 },
    { code: "23D12131902", name: "Kriptografi", sks: 2 },
    { code: "23D12132002", name: "Manajemen Pengelolaan TI", sks: 2 },
    { code: "23D12132102", name: "Natural Language Processing", sks: 2 },
    { code: "23D12132202", name: "Pemrograman Visual", sks: 2 },
    { code: "23D12132302", name: "Pengkodean dan Kompresi", sks: 2 },
    { code: "23D12132402", name: "Rekayasa Web", sks: 2 },
    { code: "23D12132502", name: "Simulasi dan Game Komputer", sks: 2 },
    { code: "23D12132602", name: "Sistem Enterprise", sks: 2 },
    { code: "23D12132702", name: "Sistem Temu Kembali Informasi", sks: 2 },
    { code: "23D12132802", name: "Sistem Transportasi Cerdas", sks: 2 },
    { code: "23D12132902", name: "Teknologi Aplikasi Bergerak", sks: 2 },
    { code: "23D12133002", name: "Teknologi Telekomunikasi", sks: 2 },
    { code: "23D12133102", name: "Topik Khusus Cloud Computing", sks: 2 },
    { code: "23D12133202", name: "Topik Khusus IoT", sks: 2 },
    { code: "23D12133302", name: "Topik Khusus Jaringan Komputer", sks: 2 },
    { code: "23D12133402", name: "Topik Khusus Kecerdasan Buatan", sks: 2 },
    { code: "23D12133502", name: "Topik Khusus RPL", sks: 2 },
    { code: "23D12133602", name: "Topik Khusus Sistem Komputer", sks: 2 },
    { code: "23D12133702", name: "Sistem Terdistribusi", sks: 2 },
    { code: "23D12133802", name: "Topik Khusus Robotik", sks: 2 },
    { code: "23D12133902", name: "Topik Khusus Big Data", sks: 2 }
  ],

  // =========================
  // MKPK MODULES
  // =========================
  mkpk_modules: [
    { code: "23U02130102", name: "Komunikasi dan Kerjasama", sks: 2 },
    { code: "23U02130202", name: "Manajemen Kegiatan", sks: 2 },
    { code: "23U02130302", name: "Strategi Negosiasi", sks: 2 },
    { code: "23U02130402", name: "Pembelajaran Aktif", sks: 2 },
    { code: "23U02130502", name: "Komunikasi Digital", sks: 2 },
    { code: "23U02130602", name: "Empati Sosial", sks: 2 },
    { code: "23U02130702", name: "Keberagaman Budaya", sks: 2 },
    { code: "23U02130802", name: "Pengembangan Masyarakat", sks: 2 },
    { code: "23U02130902", name: "Kewirausahaan Rintisan", sks: 2 },
    { code: "23U02131004", name: "Kewirausahaan Rintisan", sks: 4 },
    { code: "23U02131102", name: "Kepemimpinan Inovatif", sks: 2 },
    { code: "23U02131202", name: "Pengambilan Keputusan", sks: 2 },
    { code: "23U02131302", name: "Pemecahan Masalah", sks: 2 },
    { code: "23U02131402", name: "Etika Profesi", sks: 2 },
    { code: "23U02131502", name: "Berfikir Kritis dan Kreatif", sks: 2 },
    { code: "23U02131602", name: "Kreativitas Solutif", sks: 2 },
    { code: "23U02131702", name: "Inovasi dan Pemikiran Desain", sks: 2 },
    { code: "23U02131801", name: "Pengembangan Talenta", sks: 1 },
    { code: "23U02131902", name: "Pengembangan Talenta", sks: 2 },
    { code: "23U02132002", name: "Literasi dan Presentasi Ilmiah", sks: 2 },
    { code: "23U02132102", name: "Magang/Praktek Kerja", sks: 2 },
    { code: "23U02132203", name: "Magang/Praktek Kerja", sks: 3 },
    { code: "23U02132304", name: "Magang/Praktek Kerja", sks: 4 },
    { code: "23U02132406", name: "Magang/Praktek Kerja", sks: 6 },
    { code: "23U02132509", name: "Magang/Praktek Kerja", sks: 9 },
    { code: "23U02132602", name: "Studi/Proyek Independen", sks: 2 },
    { code: "23U02132704", name: "Studi/Proyek Independen", sks: 4 },
    { code: "23U02132806", name: "Studi/Proyek Independen", sks: 6 },
    { code: "23U02132904", name: "Kuliah Kerja Nyata", sks: 4 },
    { code: "23U02133020", name: "Riset Mandiri", sks: 20 },
    { code: "23U02133120", name: "Pengembangan Kreativitas dan Inovasi", sks: 20 },
    { code: "23U02133220", name: "Kepemimpinan dan Karakter Bela Negara", sks: 20 },
    { code: "23U02133320", name: "Kemaslahatan BMI", sks: 20 },
    { code: "23U02133420", name: "Pengembangan dan Penguatan Kewirausahaan", sks: 20 },
    { code: "23U02133520", name: "Praktek Dunia Usaha/Dunia Industri", sks: 20 },
    { code: "23U02133620", name: "Pengembangan Karakter Humanis", sks: 20 },
    { code: "23U02133720", name: "Komunikasi dan Interaksi Sosial", sks: 20 }
  ]
};

export default curriculum;
