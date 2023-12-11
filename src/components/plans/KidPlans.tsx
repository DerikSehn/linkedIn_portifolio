import { Card } from 'flowbite-react';
import React from 'react';
import img1 from '../../assets/landing_page/cardapios/classico.jpeg';
import img2 from '../../assets/landing_page/cardapios/premium.jpeg';
import img3 from '../../assets/landing_page/cardapios/tortas.jpeg';
import bgImg from '../../assets/landing_page/child_party.jpg';



const KidPlans: React.FC = () => {

  const arrCardapios = [
    img1, img2, img3
  ]


    return (
    <section className="bg-gray-100 2xl:h-[900px] lg:h-[1800px] h-[2500px]  ">
      <div className='absolute min-w-full 2xl:h-[900px] lg:h-[1800px] h-[2500px] z-0'>
        <img className='container object-cover z-0 brightness-[.2] min-w-full 2xl:h-[900px] lg:h-[1800px] h-[2500px]'
          style={{zIndex: 0}}
        src={bgImg}/>
      </div>
      <div className='absolute w-full max-h-[600px] z-10 mt-10'>
       <div className='container mx-auto px-2'>
         <h2 className="text-6xl text-zinc-300 text-center font-semibold ">Cardápio Infantil</h2>
         <div className='container mt-10 flex gap-20 flex-wrap justify-center'>
          {arrCardapios.map((src) => 

            <Card  key={src}
                  className="bg-black border-none rounded-lg 
                  hover:shadow-[20px 20px 20px] hover:sm:scale-110 w-full max-w-md 
                  origin-top hover:z-10 transition duration-300"
                 renderImage={() => <img className='shadow-m object-cover w-full rounded-t-lg' src={src} alt=' . . . '/>}
                 >
                 {/*  <Button href='#contato' className='bg-slate-100 text-yellow-600' onClick={() => handleCardMenuPlanClick(src, index)}>
                    Selecionar
                  </Button> */}
                </Card>
           )}
        </div>
       </div>
      </div>
    </section>
  );
};

export default KidPlans