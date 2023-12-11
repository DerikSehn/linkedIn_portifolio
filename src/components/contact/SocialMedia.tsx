import env from '../../env';
import imgInsta from '../../assets/landing_page/insta_icon.webp'
import imgWhats from '../../assets/landing_page/whatsapp-logo.png'
import qrWhats from '../../assets/landing_page/qrcode_whats.png'
import DeviceMockup from '../DeviceMockup';
import { Tooltip } from 'flowbite-react';


export default function SocialMedia({className} : {className: string}) {


  return (
    <div  className={"m-auto  min-w-[80%] h-full " + className}>
      <DeviceMockup className="relative shadow-xl" >
        <div className="w-full text-center mx-auto bg-zinc-600 h-4"/>
        <div className="w-full text-center mx-auto">
            <h2 className="bold text-zinc-500 font-extrabold text-3xl h-20 mt-10 ">Redes Sociais</h2>
        </div>
      <div className="flex w-full h-30 items-center justify-center gap-5">
        <Tooltip content="Instagram">
            <a className='hover:scale-125 transition' href={env.links.instagram} target='_blank'>
            <img className="max-w-[100px]" src={imgInsta} alt='insta'/>
            </a>
        </Tooltip>

        <Tooltip content='WhatsApp'>
            <a className='hover:scale-125 transition' href={env.links.whatsapp} target='_blank'>
            <img className="max-w-[100px]" src={imgWhats} alt='whats'/>
            </a>
        </Tooltip>
        </div> 
        <div className="flex w-full justify-center mt-10">
        <img alt='qrWhats' src={qrWhats} className='w-60 max-h-60 shadow-xl rounded-md'/>  
        </div>
      </DeviceMockup>
    </div>

  )
}
