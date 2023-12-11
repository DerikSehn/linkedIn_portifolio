// src/components/Header.tsx
import React from 'react';
import imglogo from '../assets/logo_dani.png'
import imgPerfil from '../assets/foto_dani.jpg'

import { Avatar, Dropdown } from 'flowbite-react';
import { isMobile } from 'react-device-detect';

const Header: React.FC = () => {
  
  return (
    <header className="bg-black to-100% sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="text-2xl font-semibold text-gray-100 px-4">
            <img src={imglogo} alt='logo' className='w-60 max-h-20 object-cover' />
        </div>
        {isMobile ?
       <nav className="space-x-4 w-fit overflow-hidden md:w-0" >
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={imgPerfil} rounded className='min-w-[40px]' />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Daniela Beatris Bosing</span>
            <span className="block truncate text-sm font-medium">danibosing@gmail.com</span>
            <span className="block truncate text-sm font-medium">{`(51) 9 99930-0707`}</span>
          </Dropdown.Header>
          <Dropdown.Item><a href="#inicio" className="text-gray-400 hover:text-gray-100">Início</a></Dropdown.Item>
          <Dropdown.Item><a href="#about" className="text-gray-400 hover:text-gray-100">Sobre Nós</a></Dropdown.Item>
          <Dropdown.Item><a href="#services" className="text-gray-400 hover:text-gray-100">Serviços</a></Dropdown.Item>
          <Dropdown.Item><a href="#plans" className="text-gray-400 hover:text-gray-100">Cardápio</a></Dropdown.Item>
          <Dropdown.Item><a href="#contact" className="text-gray-400 hover:text-gray-100">Contato</a></Dropdown.Item>
          <Dropdown.Divider />
        </Dropdown>
        </nav>
      :  
        <nav className="space-x-4 w-0 overflow-hidden md:w-fit" >
          <a href="#inicio" className="text-gray-400 hover:text-gray-100">Início</a>
          <a href="#about" className="text-gray-400 hover:text-gray-100">Sobre Nós</a>
          <a href="#services" className="text-gray-400 hover:text-gray-100">Serviços</a>
          <a href="#plans" className="text-gray-400 hover:text-gray-100">Cardápio</a>
          <a href="#contact" className="text-gray-400 hover:text-gray-100">Contato</a>
        </nav>
      }
        
      </div>
    </header>
  );
};

export default Header;
