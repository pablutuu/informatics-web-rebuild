import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  variant?: 'default' | 'subpage';
  backLink?: string;
  icon?: React.ReactNode;
  cta?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  variant = 'default',
  backLink,
  icon,
  cta 
}: HeroProps) {
  const isSubPage = variant === 'subpage';

  return (
    <div className={`relative w-full overflow-hidden flex ${isSubPage ? 'h-[45vh] md:h-[55vh] items-center justify-start' : 'min-h-[85vh] items-start justify-center pt-32 md:pt-40 text-center'}`}>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center" // Pastikan object-center agar gambar tetap di tengah
          priority
        />
        {/* Overlay tipis supaya teks terbaca, tapi gambar tetap clear */}
        <div className="absolute inset-0 bg-black/10" /> 
        
        {/* Gradient bawah halus supaya transisi ke card putih lebih mulus (opsional) */}
        {!isSubPage && (
          <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/30 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white">

        {/* Tombol Back (Hanya Subpage) */}
        {isSubPage && backLink && (
          <Link href={backLink} className="group flex items-center space-x-2 text-sm md:text-base font-medium mb-6 opacity-90 hover:opacity-100 transition-opacity w-fit">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Facilities</span>
          </Link>
        )}

        {/* Wrapper Judul */}
        <div className={`${isSubPage ? 'flex items-center space-x-4 md:space-x-6 h-full mt-auto mb-auto' : 'max-w-5xl mx-auto'}`}>
          
          {/* Ikon Subpage */}
          {isSubPage && icon && (
            <div className="bg-white/10 p-3 md:p-4 rounded-2xl backdrop-blur-md border border-white/20 hidden md:block">
               <div className="text-white [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10">
                 {icon}
               </div>
            </div>
          )}
          
          {/* Teks Judul */}
          <div className="w-full">
             <h1 className={`${isSubPage ? 'text-4xl md:text-6xl text-left' : 'text-5xl md:text-7xl'} font-bold drop-shadow-2xl tracking-tight leading-tight`}>
              {title}
             </h1>
             {subtitle && (
              <p className={`${isSubPage ? 'text-lg text-left max-w-2xl' : 'text-xl md:text-2xl mx-auto max-w-3xl'} font-light opacity-95 mt-6 drop-shadow-md leading-relaxed`}>
                {subtitle}
              </p>
             )}

             {/* AREA TOMBOL CTA */}
             {!isSubPage && cta && (
                <div className="mt-10 flex justify-center">
                  {cta}
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}