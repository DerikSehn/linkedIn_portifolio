import React from 'react';
import bgImage from '../assets/landing_page/main_section/candies.jpg'

const MainSection: React.FC = () => {
  
  
    return (
    <section id='inicio' className="h-[700px] lg:h-[750px] bg-black mt-[-96px] relative">
      <div className='absolute w-full max-h-[650px] pt-24 z-0'>
        <img className='container mx-auto object-cover z-0 brightness-110 w-full max-h-[650px] sm:w-96 md:w-[700px] mt-10'
          style={{zIndex: 0}}
        src={bgImage}/>
      </div>
      <div className='absolute w-full max-h-[650px] pt-24 z-0'>   
       <h2 style={{zIndex: 10}} className='text-gray-300 text-4xl text-center font-thin leading-tight mt-[400px] sm:mt-[400px] md:mt-[490px] px-2  w-full '  >
         A qualidade fina que
         <h2 className='text-white text-5xl font-bold'>
          Você Merece
          </h2> 
       </h2>
      </div>
    
    </section>
  );
};

export default MainSection