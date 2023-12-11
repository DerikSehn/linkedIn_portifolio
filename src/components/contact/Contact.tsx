// src/components/Contact.tsx
import React from 'react';
import { isMobile } from 'react-device-detect';
import MailForm from './MailForm';
import SocialMedia from './SocialMedia';

const Contact: React.FC = () => {
  
  return (
    <section id="contact" className="bg-zinc-950 p-4 py-8 h-[1750px] sm:h-[850px]">
      <div className="container mx-auto">
        <div className='grid content-center'>
        <h2 className="text-5xl font-semibold mb-4 text-zinc-100">Contato</h2>
        <p className='text-2xl text-zinc-200'>Gostou? Nos envie uma mensagem</p>
        </div>
        <div className="grid sm:grid-cols-11 gap-10 content-between justify-items-center items-center">
         <MailForm className='col-span-5'/> 
         {isMobile ? null :
         <div className="w-[2px] h-1/2 my-2 bg-gray-400"/>
         }
         <SocialMedia className='col-span-5'/>  
        </div>
      </div>
    </section>
  );
};

export default Contact;
