// src/components/MenuSection.tsx
import React from 'react';
/* import imgEventos from '../assets/card_evento.jpg'
 */

const MenuSection: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Kit 1',
      description: 'Uma descrição do Kit 1.',
      price: '$10.99',
    },
    {
      id: 2,
      name: 'Kit 2',
      description: 'Uma descrição do Kit 2.',
      price: '$12.99',
    },
    {
      id: 3,
      name: 'Kit 3',
      description: 'Uma descrição do Kit 3.',
      price: '$9.99',
    },
  ];
{/* <img className='w-[300px] md:w-full max-w-[550px] rounded-b-lg shadow-zinc-900 shadow-xl' src={imgEventos} alt='services'/> */}
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8">Kits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((menuItem) => (
            <div
              key={menuItem.id}
              className="bg-white rounded-lg shadow-md p-6 m-4"
            >
              <h3 className="text-xl font-semibold mb-2">{menuItem.name}</h3>
              <p className="text-gray-600 mb-4">{menuItem.description}</p>
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{menuItem.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
