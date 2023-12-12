import React from 'react'
import ProfileStatus from './ProfileStatus'
import DiscoverMore from './DiscoverMore'
import NewPost from './NewPost'
import Feed from './Feed'
import News from './News'
import Sponsor from './Sponsor'

export default function Timeline() {
  return (
    <div className='w-full pt-[73px] container mx-auto max-w-[1128px] items-center px-0 sm:px-3 '>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-12">
        <div className='md:col-span-3 col-span-12'>
            <ProfileStatus/>
            <br/>
            <DiscoverMore />
        </div>
        <div className='md:col-span-5 col-span-12'>
            <NewPost/><br/>
            <Feed />
        </div>
        <div className='md:col-span-3 col-span-12'>
            <News/><br/>
            <Sponsor/>
        </div>
        
        </div>
    </div>
  )
}
