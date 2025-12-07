import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '#' },
    { name: 'Akademik', path: '/academic' ,
      dropdown: [
        { name: 'Program Sarjana (S1)', path: '/academic/bachelor' },
        { name: 'Program Magister (S2)', path: '/academic/master' },
        { name: 'Program Doktoral (S3)', path: '/academic/doctoral' },
      ]
    },
    { 
      name: 'Fasilitas', 
      path: '/fasilitas',
      dropdown: [
        { name: 'Tur Virtual Kampus', path: 'https://unhas.ac.id/petakampus/virtualtour/index.php?scene=mainbridge', external: true },
        { name: 'Fasilitas Pembelajaran', path: '/fasilitas/learning' },
        { name: 'Perpustakaan', path: '/fasilitas/library' },
        { name: 'Dukungan Mahasiswa', path: '/fasilitas/dukungan-mahasiswa' },
        { name: 'Penunjang Lainnya', path: '/fasilitas/fasilitas-penunjang' },
      ]
    },
    { name: 'Organisasi', path: '/organization'},
    { name: 'Berita', path: '/news' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex justify-center w-full px-4 md:px-[73px] pt-[20px]">
      <div className="flex items-center justify-between w-full max-w-[1320px] h-[58px] px-3.5 bg-[#0C1B43] rounded-full shadow-lg">

        {/* Title */}
        <div className="flex flex-col justify-center px-3.5 gap-2.5">
          <Link href="/" className="text-white font-bold text-base leading-[18px] cursor-pointer">
            DEPARTEMEN INFORMATIKA
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link 
                href={item.path} 
                className="flex items-center justify-center h-[50px] px-4 cursor-pointer"
                target={item.dropdown ? undefined : undefined} // Don't mistakenly open dropdown parents in new tab
              >
                <div className="text-white text-center font-medium text-base leading-3 hover:text-gray-300 transition-colors flex items-center gap-1">
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </div>
              </Link>
              
              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-[90%] left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 min-w-[220px]">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden py-2 border border-gray-100">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.path}
                        target={subItem.external ? "_blank" : undefined}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0C1B43] transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}