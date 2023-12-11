import React from 'react'
import { Avatar, Dropdown } from 'flowbite-react';
import profileAvatar from '../assets/landing_page/profile_avatar.jpeg'
import ArrowDown from './ArrowDown';

export default function Profile() {
  return (
<nav className="space-x-4 overflow-hidden" >
          <Dropdown
          arrowIcon={false}
          inline
          className='p-2'
          size={'sm'}
          label={ <div className='p-0 scale-75'>
            <Avatar alt="User settings" className='w-10 h-5' img={profileAvatar} rounded />
             
             <small className='text-slate-800 flex text-center items-center pt-2 text-lg font-light ' >
            Eu 
            <ArrowDown/>
          </small>  
          </div>
          }
        >
          <Dropdown.Header className='grid grid-cols-4 w-64 p-0'>
            <img src={profileAvatar } alt='user settings' className='w-[56px] rounded-full' />
            <div className='col-span-3'>
                <span className="block font-extrabold text-lg">Derik B. Sehn</span>
                <span className="block text-sm font-normal">Desenvolvedor React | Typescript</span>
            </div>
          </Dropdown.Header>
          <Dropdown.Item className="border-sky-700 rounded-xl flex  justify-center text-sky-700 p-[2px]"> Ver Perfil</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Header>                
            <span className="block font-extrabold text-lg">Conta</span>
            <section className='p-1'>
            <a href="#plans" className="block text-gray-500 font-normal hover:text-gray-700">Configurações e privacidade</a>
            <a href="#plans" className="block text-gray-500 font-normal hover:text-gray-700">Ajuda</a>
            <a href="#plans" className="block text-gray-500 font-normal hover:text-gray-700">Idioma</a>
            </section>
            
            </Dropdown.Header>
            <Dropdown.Header>                
            <span className="block font-extrabold text-lg">Gerenciar</span>
            <section className='p-1'>
            <a href="#plans" className="block text-gray-500 font-normal hover:text-gray-700">Publicações e atividades</a>
            <a href="#plans" className="block text-gray-500 font-normal hover:text-gray-700">Conta de anúncio de vaga</a>
            </section>
            </Dropdown.Header>
             <Dropdown.Header>                
            <span className="block text-gray-500 font-normal hover:text-gray-700">
                <a href="#plans" className="block text-gray-500 font-normal hover:text-gray-700">Sair</a>
            </span>
            </Dropdown.Header>
        </Dropdown>
        </nav> 
        
        )
}
