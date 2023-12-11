/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from 'flowbite-react';
import img1 from '../assets/landing_page/liminal1.jpg';
import img2 from '../assets/landing_page/liminal2.jpg';
import img3 from '../assets/landing_page/liminal3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';
 

const imgList = [
    {title: 'Liminal Spaces', 
    text: `Liminal spaces are places suspended in transition, bridging two distinct locations or states of being.
     Often characterized by emptiness and silence, they evoke an unsettling yet strangely familiar feeling.
      Think empty hallways, deserted airports, or abandoned buildings
    `, 
    src: img1},
    {title: 'A place between two worlds', 
    text: `Imagine yourself in a dimly-lit hallway, rows of doors stretching endlessly on either side. 
    The air is thick with silence, punctuated only by the faint hum of unseen machinery. 
    This is a liminal space, a place between two worlds, filled with both anticipation and uncertainty`, 
    src: img2},
    {title: 'Psychological', 
    text: `While usually physical, liminal spaces can also be psychological.
     Think of the feeling of standing on the cusp of adulthood, 
     or the moment between waking and dreaming. These are times of transition, where the familiar gives way to the unknown`, 
    src: img3}

]

export default function Hero({SwiperProps, SwiperSlideProps, imgProps}: {SwiperProps?: SwiperProps, SwiperSlideProps?: SwiperSlideProps, imgProps?: JSX.Element}) {

  const handleSlideChange = (e: any) => {
  console.log(e)
  }

  return (<>
    <Swiper
      direction={'vertical'}
      mousewheel={true}
      speed={1200}
      fadeEffect={{
        crossFade: true
      }}
      parallax
      modules={[Pagination, Mousewheel, EffectFade]} className='top-0 left-0 right-0 h-[100dvh] z-[0] animate-fade animate-duration-500'
      {...SwiperProps}
      onSlideChange={handleSlideChange}
      >
      {imgList.map(({src, title, text}) => 
      <SwiperSlide key={src + title} {...SwiperSlideProps}>
        <div className='relative w-full h-[100dvh] '>
         <img  className='w-full h-[100dvh] bg-cover bg-center brightness-50 object-cover z-0' src={src} {...imgProps}/>
         <div  className='absolute grid lg:grid-cols-2  text-slate-200 w-full left-1/2 right-1/2 -translate-x-1/2 container top-1/4'>
          <Card className='animate-fade animate-delay-300 aspect-square rounded-[1.5rem] bg-transparent border-none' >
            <h1 >
              {title}
            </h1>
            <p >
             {text}
            </p>
          </Card>
         </div>
        </div>
      </SwiperSlide>
        )}
    </Swiper>
  </>
  )
}
