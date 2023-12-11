// src/components/ServicesSection.tsx
import React from 'react';
import FoodCarousel from './FoodCarousel';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-gray-200 p-4 py-8">
      <div className="container grid sm:grid-cols-2 mx-auto">
        <div className='grid content-center'>
        <h2 className="text-5xl font-semibold mb-4 text-zinc-700">Produtos</h2>
        <p className='text-2xl text-zinc-600'>Descubra nossas deliciosas produções de finger food para eventos especiais.</p>
        </div>
         <FoodCarousel className='w-full  '/> 
      </div>
    </section>
  );
};

export default ServicesSection;
