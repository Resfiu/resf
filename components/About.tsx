import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HERO_LINKS } from '@/lib/consts';
import { IoDocumentTextOutline } from 'react-icons/io5';

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center space-y-8 overflow-hidden px-4 py-8 text-[#f0f0f0] sm:space-y-12 sm:py-12 md:py-16"
    >
      <div className="flex w-full max-w-6xl flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
        <div className="flex w-full flex-col items-start justify-center space-y-4 rounded-xl border border-[#292929] p-4 sm:space-y-6 sm:p-6 md:space-y-8">
          <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">Genç Yazlımcı</h1>
          <div className="space-y-2 text-sm text-[#8b8b8b] sm:text-base md:text-lg lg:text-xl">
            <p>
            Gelişime açık, öğrenmeye hevesli, teknolojiye ve yazılıma ilgi duyan bir öğrenciyim. Disiplinli çalışmayı ve üretkenliği ön planda tutuyorum.
            </p>
           
          </div>
          
        </div>
        
        <div className="aspect-video h-full w-full overflow-hidden rounded-xl border border-[#292929] md:aspect-square md:w-fit">
          
        </div>
      </div>
      <div className="flex space-x-4">
          {HERO_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.src}
              target={link.src === '/resume' ? undefined : '_blank'}
              className="rounded-xl border border-[#d1d1d1] bg-[#EEECEC] p-3 text-[#494949] transition-all duration-300 hover:scale-110 hover:bg-opacity-80"
            >
              {link.icon} 
            </Link>
          ))}
         
        </div>
    </div>
  );
};

export default About;
