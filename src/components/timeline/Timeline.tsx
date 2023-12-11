import React from 'react'
import ProfileStatus from './ProfileStatus'

export default function Timeline() {
  return (
    <div className='w-full pt-[73px] container mx-auto max-w-[1128px] items-center px-0 sm:px-6 '>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-12">
        <div className='md:col-span-3 col-span-12'>
            <ProfileStatus/>
          {/*   <DiscoverMore/> */}
        </div>
        <div className='md:col-span-5 col-span-12'>
           {/*  <NewPost/>
            <Feed/> */}
        </div>
        <div className='md:col-span-3 col-span-12'>
          {/*   <News/>
            <Sponsor/> */}
        </div>
        
        </div>
    </div>
  )
}
