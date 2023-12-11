// src/components/Header.tsx
import React from 'react';
const Header: React.FC = () => {
  
  return (
    <header className="fixed h-20 top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center p-2 h-full">
          <h1 className='text-3xl text-slate-300 hover:text-slate-200 transition-colors'>
             Albyon
          </h1> 
           <h1 className='text-3xl text-slate-200 hover:text-slate-200 transition-colors'>
             <button className='material-icons backdrop-filter bg-transparent'>
                menu
              </button>
          </h1>
      </div>
    </header>
  );
};

export default Header;
