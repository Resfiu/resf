import React from 'react';
import { Item } from './Item';

const Navbar: React.FC = () => {
  return (
    <nav className="-mb-14 flex items-center justify-center pt-8 text-[#e6e6e6]">
      <div className="z-10 w-fit rounded-full border border-[#161616] bg-[#3b3b3b] bg-opacity-50 shadow-lg backdrop-blur-xl">
        <div className="flex flex-row items-center space-x-12 px-5 py-4">
          <Item href={'/'}>Anasyfa</Item>
          <Item href={'/#about'}>Hakkımda</Item>
          <Item href={'/#prev-work'}>Hedeflerim</Item>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
