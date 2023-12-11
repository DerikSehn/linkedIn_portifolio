import React from 'react';
import bgImg from '../../assets/foto_derik.jpg'
import imgAdicionais from '../../assets/food_coxinha.jpg'
import imgPlus from '../../assets/landing_page/carousel/food_11.jpg'
import imgExecutivo from '../../assets/food_hamburguer.jpg'
import CardPricingPlan, { PricingPlanProps } from '../CardPricingPlan';
import { handleCardMenuPlanClick } from '../../functions/handlers/plan';

const AdultPlans: React.FC = () => {

const plansList: PricingPlanProps[] = [
    {
      title: 'Menu Executivo',
      color: 'black',
      image: imgExecutivo,
      categories: [{
        categoryName: 'Entrada (Massas)',
        items: [
          'Ao Molho Branco',
          'Com Iscas de Carne',
          'Com Calabresa'
        ],
      },
      {
        categoryName: 'Fritos e Assados',
        items: [
          'Mini Hamburguer',
          'Mini Pizza',
          'Pastéis de massa caseira',
          'Cachorrinho-quente',
          'Batata frita',
          'Polenta'
        ],
      },
      {
        categoryName: 'Doces tradicionais',
        items: [
          'Brigadeiro',
          'Amendoim',
          'Branquinho',
          'Morango',
          'Casadinho'
        ],
      },
      {
        categoryName: 'Doces Gourmet',
        items: [
          'Ninho c/ Nutella',
          'Churros',
          'Estikadinho'
        ],
      }
      
    ],

    },   
    {
      title: 'Menu Plus',
      color: 'gray',
      image: imgPlus,
      categories: [
        {
          categoryName: 'Entrada (Massas)',
          items: [
            'Ao Molho Branco',
            'Com Iscas de Carne',
            'Com Calabresa',
            'Ao Molho de Camarão',
            'Risoto de Camarão',
          ],
        },
        {
          categoryName: 'Fritos e Assados',
          items: [
            'Mini Hamburguer',
            'Mini Pizza',
            'Pastéis de massa caseira',
            'Cachorrinho-quente',
            'Batata frita',
          ],
        },
        {
          categoryName: 'Doces',
          items: [
            'Brigadeiro',
            'Branquinho',
            'Ninho com Nutella',
            'Churros',
            'Casadinho'
          ],
        },
        {
          categoryName: 'Doces Gourmet',
          items: [
            'Copinhos de Chocolate',
          ],
        },  
        {
          categoryName: 'Opcionais (Unidade)',
          items: [
            'Cup Cake',
            'Cachorro Quente',
            'Mini Hamburguer',
            'Espetinho de Camarão',
            'Espetinho de MarshMellow',
            'Espetinho de Morango Negro',
            'Alfajor'

          ],
        },
      ],
    },
    {
      title: 'Adicionais',
      color: 'darkOrange',
      image: imgAdicionais,
      categories: [
        {
          categoryName: 'Salgados',
          items: [
            'Mini Hamburguer',
            'Mini Pizza',
            'Pão de queijo',
            'Cachorro-Quente',
            'Espetinho de Camarão',
            'Espetinho de marshimelow'
          ],
        },
        {
          categoryName: 'Doces',
          items: [
            'Alfajor de bolacha maria banhado',
            'Espetinho de morango c/ chocolate',
            'Cup Cake',
            'Brigadeiro',
            'Branquinho',
            'Ninho c/ Nutella',
            'Churros',
            'Estikadinho',
            'Copinho de Chocolate'
          ],
        },
        {
          categoryName: 'Bebidas',
          items: [
            'Água',
            'Refrigerante',
            'Cerveja',
            'Vinho',
            'Café',
            'Suco'
          ],
        },
      ],
    },
  
  ]

    return (
    <section id='plans'  className="bg-gray-100 xl:h-[900px] lg:h-[1500px] h-[2200px]">
      <div className='absolute min-w-full xl:h-[900px] lg:h-[1500px] h-[2200px] z-0'>
        <img className='container object-cover z-0 brightness-[.2] min-w-full xl:h-[900px] lg:h-[1500px] h-[2200px]  '
          style={{zIndex: 0}}
        src={bgImg}/>
      </div>
      <div className='absolute w-full max-h-[600px] z-10 mt-10'>
       <div className='container mx-auto px-2'>
         <h2 className="text-6xl text-zinc-300 text-center font-semibold ">Cardápio Adulto</h2>
         <div className='container mt-10 flex gap-10 flex-wrap justify-center'>
          {plansList.map((plan, index) => 
                  <CardPricingPlan {...plan} key={plan.title} onClick={() => handleCardMenuPlanClick(plan.image || '', index)}/> 
          )}
        </div>
       </div>
      </div>
    </section>
  );
};

export default AdultPlans