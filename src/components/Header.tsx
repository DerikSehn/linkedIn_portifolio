// src/components/Header.tsx
import React from 'react';
import logo from '../assets/landing_page/icons8-linkedin-48.png'
import SearchInput from './SearchInput';
import IconButton from './utils/IconButton';
import Profile from './Profile';
import ArrowDown from './ArrowDown';
import Drawer from './utils/Drawer';

const Header: React.FC = () => {

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent bg-zinc-50 border">
      <div className="container mx-auto flex max-w-[1128px] items-center px-3 h-[53px] font-thin">
          <img src={logo} className='text-3xl text-slate-300 hover:text-slate-200 transition-colors'/>
          <div className='lg:visible invisible lg:w-64 w-0'>
            <SearchInput />
          </div> 
          <div className='xl:invisible visible lg:w-0 xl:w-0 lg:opacity-0 '>
          <IconButton label="Pesquisar">
            search
          </IconButton>
          </div>
          <IconButton label="Início">
            home
          </IconButton>
          <IconButton label="Minha rede">
            people
          </IconButton>
           <IconButton label="Vagas">
            work
          </IconButton>
           <IconButton label="Mensagens">
            message
          </IconButton>
           <IconButton label="Notificações" className='rotate-12'>
            notifications
          </IconButton>
           <Profile />
          <Drawer>
           <div className='flex border-l-2 justify-center w-[125px]'>
           <IconButton label={<div role='button' className='flex text-center items-center'>Para negócios <ArrowDown/> </div>} labelClassName='truncate'>
            apps
           </IconButton> 
           </div>
          </Drawer>
           <div className='flex justify-center w-[125px]'>
            <IconButton labelClassName='truncate min-w-[200px]' label="Anunciar vaga de graça">
           badge
          </IconButton>
           </div>
      </div>

   
    </header>
  );
};

export default Header;
