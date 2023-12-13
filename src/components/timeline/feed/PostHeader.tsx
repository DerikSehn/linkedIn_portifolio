import React from 'react'
import CloseButton from '../../CloseButton'

export default function PostHeader({children}) {
  return (
    
    <section className='relative h-10 mx-4 p-2 pl-0 pr-10 border-b-2 flex gap-1 items-center'>
        {children}
        <CloseButton className='absolute -right-2 top-1 scale-75'/>
           <span className='absolute right-8 top-[10px]  material-icons text-zinc-500'>
           more_horiz
           </span>
    </section>
         
    
  )
}
