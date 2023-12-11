// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-semibold m-4">Dani Bosing Eventos</span>
          <p className="text-sm m-4">Deliciosa comida para seus eventos especiais</p>
        </div>
        <div className="text-sm ">
          <p>&copy; {new Date().getFullYear()} Dani Bosing Eventos</p>
          <p>Todos os direitos reservados</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex space-x-4 m-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
