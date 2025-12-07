import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex justify-center w-full px-4 md:px-[73px] pt-[20px]">
      <div className="flex items-center justify-between w-full max-w-[1320px] h-[58px] px-3.5 bg-[#0C1B43] rounded-full ">

        {/* Title */}
        <div className="flex flex-col justify-center px-3.5 gap-2.5">
          <div className="text-white font-bold text-base leading-[18px]">
            DEPARTEMEN INFORMATIKA
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          {[
            { name: 'Beranda', path: '/' },
            { name: 'Profil', path: '/profil' },
            { name: 'Akademik', path: '/akademik' },
            { name: 'Fasilitas', path: '/fasilitas' },
            { name: 'Organisasi', path: '/organization'},
            { name: 'Berita', path: '/news' }
          ].map((item) => (
            <Link key={item.name} href={item.path} className="flex items-center justify-center h-[50px] px-4 cursor-pointer">
              <div className="text-white text-center font-medium text-base leading-3 hover:text-gray-300 transition-colors">
                {item.name}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}

