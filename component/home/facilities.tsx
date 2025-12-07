'use client';

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { IoMdArrowForward } from 'react-icons/io';
import Link from 'next/link';

const facilities = [
  {
    title: 'Laboratorium Cloud Computing',
    description: 'Infrastruktur cloud canggih untuk penelitian dan pengembangan.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/4ab8bf62395e9bd845c46c5dda0f40bdb3d1578d?width=698'
  },
  {
    title: 'Laboratorium AI',
    description: 'Peralatan mutakhir untuk studi kecerdasan buatan.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/98872d8311656292e85b4e6165bda0591f21276a?width=772'
  },
  {
    title: 'Laboratorium IoT',
    description: 'Peralatan lengkap untuk prototyping Internet of Things.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/8a562026cc9a75a6a0421b9e985ffc96d2abf826?width=698'
  }
];

const ROTATION_RANGE = 20.5; 
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ title, description, image }: { title: string, description: string, image: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-full rounded-2xl bg-white cursor-pointer group"
    >
      <div 
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg overflow-hidden"
      >
        <img 
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div 
            style={{ transform: "translateZ(50px)" }}
            className="absolute bottom-6 left-6 right-6 text-white"
        >
             <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
             <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Facilities() {
  return (
    <section className="py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-16">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-5xl font-bold text-[#0C1B43] mb-4">Fasilitas</h2>
                    <p className="text-gray-500 text-xl font-light">Mendukung perjalanan belajar Anda dengan laboratorium kelas dunia.</p>
                </div>
                <Link href="/fasilitas" className="flex gap-2 items-center text-[#0C1B43] font-medium text-lg group cursor-pointer">
                    <span>Lihat Semua</span>
                    <IoMdArrowForward className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((fac, i) => (
                    <TiltCard key={i} {...fac} />
                ))}
            </div>
        </div>
    </section>
  );
}
