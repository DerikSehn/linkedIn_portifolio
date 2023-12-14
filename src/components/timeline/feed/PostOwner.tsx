/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export default function PostOwner({src, name, subtitle, time}: {src?: string, name?: string, subtitle?: string, time?: string } ) {
  return ( <section className='flex p-3 pb-0 gap-3' >
        <img src={src} alt='user settings' className='w-[52px] h-[52px] rounded-full' />
            <div className=''>
                <span className="block text-zinc-800 font-extrabold text-md">{name}</span>
                <span className="block text-zinc-600 text-sm font-normal">{subtitle}</span>
                <span className="flex items-center text-zinc-600 text-xs font-normal ">
                    {time} 
              { time && <a className='material-icons scale-75 text-zinc-600'>public</a>  } 
                </span>
            </div>
  </section>
    
  )
}
