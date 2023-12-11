import { Carousel } from "flowbite-react";

import img1 from '../assets/landing_page/about/about_us_1.jpg'
import img2 from '../assets/landing_page/about/about_us_2.jpg'
import img3 from '../assets/landing_page/about/about_us_3.jpg'
import img4 from '../assets/landing_page/about/about_us_4.jpg'
import img5 from '../assets/landing_page/about/about_us_5.jpg'
import img6 from '../assets/landing_page/about/about_us_6.jpg'
import img7 from '../assets/landing_page/about/about_us_7.jpg'

export default function AboutUs() {
    const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
    ]
  return (
  <section id='inicio' className="h-[700px] lg:h-[750px] bg-zinc-900 pt-10 relative">
    <div className="container grid sm:grid-cols-2 mx-auto px-2 pt-8 ">
         <div className="text-zinc-300 font-thin text-2xl mr-2">
            <h2 className="text-5xl font-semibold mb-4 text-zinc-200">Sobre nós</h2>
        <br/>
        <p>
            Nós somos uma empresa especializada em produção de salgados, 
            doces e tortas para eventos, coquetéis e festas em geral.
        </p>
        <br/>
        <p>
            Nossa equipe é formada por profissionais experientes e qualificados, 
            que estão sempre buscando as melhores receitas e técnicas para garantir 
            o sabor e a apresentação perfeitos para cada evento.
        </p>
        <br/>
        <p>
            Trabalhamos com uma variedade de opções de salgados, 
            doces e tortas, para atender a todos os gostos e ocasiões.
        </p>
        <br/>

        <p className="text-zinc-300 font-bold text-2xl">
           Entre em contato conosco e solicite um orçamento. Será um prazer atender você!

        </p>
         </div>

              <Carousel  indicators={false} className="w-full h-[600px] mx-auto" >
              {imgArray.map((src) => 
                  <img className='shadow-m object-contain w-full rounded-t-lg max-h-[600px]' src={src} alt=' . . . '/>
            )  }
            </Carousel> 
       
      </div>

  </section>

  )
}
