import ProfileStatus from './ProfileStatus'
import DiscoverMore from './DiscoverMore'
import NewPost from './NewPost'
import Feed from './feed/Feed'
import News from './News'
import Sponsor from './Sponsor'

export default function Timeline() {
  return (
    <div className='w-full pt-[73px] container mx-auto max-w-[1128px] items-center px-0 sm:px-3 '>
        <div className="grid sm:max-w-2xl md:max-w-3xl lg:max-w-[1128px] gap-5 grid-cols-1 md:grid-cols-12 mx-auto">
        <div className=' lg:col-span-3 md:col-span-4 col-span-12'>
            <ProfileStatus/>
            <br/>
            <DiscoverMore />
        </div>
        <div className='lg:col-span-5 md:col-span-8 col-span-12'>
            <NewPost/>
            <div className='my-3 scale-[.98] h-[.1px] bg-slate-400 w-full'/>
            <Feed />
        </div>
        <div className='md:col-span-4 col-span-12'>
            <News/><br/>
            <Sponsor/>
        </div>
        
        </div>
    </div>
  )
}
