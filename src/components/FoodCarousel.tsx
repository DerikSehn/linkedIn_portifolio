import { Card, Carousel } from 'flowbite-react'
import img1 from '../assets/landing_page/carousel/food_1.jpeg'
import img10 from '../assets/landing_page/carousel/food_10.jpeg'
import img11 from '../assets/landing_page/carousel/food_11.jpg'
import img2 from '../assets/landing_page/carousel/food_2.jpeg'
import img3 from '../assets/landing_page/carousel/food_3.jpeg'
import img4 from '../assets/landing_page/carousel/food_4.jpeg'
import img5 from '../assets/landing_page/carousel/food_5.jpeg'
import img6 from '../assets/landing_page/carousel/food_6.jpeg'
import img7 from '../assets/landing_page/carousel/food_7.jpeg'
import img8 from '../assets/landing_page/carousel/food_8.jpeg'
import img9 from '../assets/landing_page/carousel/food_9.jpeg'

export default function FoodCarousel({className}: {className?: string}) {
        const imgArray = [
    [img1, '🍕 Finger Food'],
    [img2, '🍔 Salgados Finos'],
    [img3, '🍔 Canapés'],
    [img4, '🍩 Copos de chocolate'],
    [img5, '🍩 Doces Gourmet'],
    [img6, 'Brigadeiros Gourmet'  ],
    [img7, 'M&M\'s'],
    [img8, 'Diversas Variedades' ],
    [img9, 'Aquele capricho'],
    [img10, 'Decoração especial' ],
    [img11, 'Bolos Deliciosos']
        ]

  return (
    <div className={"container mx-auto sm:px-4 h-full text-gray-700 " + className}>
          <div className="text-xl text-gray-200 md:col-span-2 col-span-4" >
            <Carousel leftControl={'<'} rightControl={'>'} indicators={false} className='h-[600px] w-full  mx-auto' >
              {imgArray.map(([src, title]) => 
                 <Card  
                  className="rounded-lg"
                  
                 renderImage={() => <img className='shadow-m h-[500px] object-cover w-full rounded-t-lg' src={src} alt=' . . . '/>}
                 >
                  <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h6>
                  
                </Card>
                )}
            </Carousel>
          </div>
         </div>
  )
}
