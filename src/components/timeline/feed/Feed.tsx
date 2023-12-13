import React from 'react'
import patrocinadora from '../../../assets/landing_page/patrocinadora.jpeg'
import dealImg from '../../../assets/landing_page/deal.png'
import CloseButton from '../../CloseButton'
import PostOwner from './PostOwner'
import PostData from './PostData'
import PostActions from './PostActions'
import PostLikes from './PostLikes'

export default function Feed() {
  return (
    <div className="rounded-xl w-full bg-zinc-50  border ">
        <section className='relative h-10 mx-4 p-2 pl-0 pr-10 border-b-2 flex gap-1 items-center'>
          <img src={patrocinadora} alt='user settings' 
              className='w-[25px] h-[25px] border-slate-100 rounded-full' />
              <span className="block font-bold text-[.7rem] text-center cursor-pointer text-gray-800" >Ellen Cassol</span>
        <span className="block text-xs font-light text-[.7rem] text-zinc-700 text-center">parabenizou isso</span>
           <CloseButton className='absolute -right-2 top-1 scale-75'/>
           <span className='absolute right-8 top-[10px]  material-icons text-zinc-500'>
           more_horiz
           </span>
        </section>
        <section className=" ">
          <PostOwner src={patrocinadora} name={'Ellen Cassol'} 
          subtitle={"Analista de suporte técnico"} time={'agora mesmo'}  />
          <PostData description='opa bao?' src={dealImg} />
          <PostLikes likesCount={42} />
          <PostActions />
        </section>
    </div>
    )
}
