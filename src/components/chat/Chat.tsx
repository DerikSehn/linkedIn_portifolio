import React, { useState } from 'react'
import img1 from '../../assets/landing_page/avatar/img1.png'
import img2 from '../../assets/landing_page/avatar/img2.png'
import img3 from '../../assets/landing_page/avatar/img3.jpg'
import PostOwner from '../timeline/feed/PostOwner';
import CloseButton from '../CloseButton';
export default function Chat() {

    const [open, setOpen] = useState(false);

    function toggle(){
        setOpen(!open);
    }

    const messages = {
        1: {
            lastMessage: {
               description: 'Hi'
            },
            owner: 'John Doe',
            avatar: img1,
        },
        2: {
            lastMessage: {
               description: 'Hi, how are you?'
            },
            owner: 'Vick',
            avatar: img2,
        },
        3: {
            lastMessage: {
               description: 'Hello'
            },
            owner: 'Albalama',
            avatar: img3,
        },
      
        
    }

  return (
    <main className="fixed bottom-0 w-full">
        <section className='rounded-t-xls shadow-md border absolute right-2 w-[calc(200px+8vw)] bottom-0   bg-zinc-50 '>
          <CloseButton className='absolute right-0 top-1 scale-75'/>
           <span className='absolute right-8 top-[10px]  material-icons text-zinc-500'>
           more_horiz
           </span>
        <div role='button' onClick={toggle} id='chat-header' className=" hover:bg-zinc-100 bg-zinc-50 border flex rounded-t-xl items-center justify-between ">
          <span className="font-extrabold text-lg p-2  ">Chat</span>
       </div>
       <nav className='flex flex-col ' style={open ? {  transitionDelay: '0.3s',transition: 'height 0.5s', height: '80vh', opacity: 1} : { transition: 'height 0.5s',height: '0vh', opacity: 0}}>
        {open ?
    Object.entries(messages).map(([id, value]) => 
        <>
        <div key={id} className="flex justify-between rounded-xl w-full bg-zinc-50  ">
          <PostOwner src={value.avatar} name={value.owner} subtitle={value.lastMessage.description} />
          {/* time */}

          <span className="flex items-center text-zinc-600 text-xs pr-2 font-normal ">
                12:00 
            </span>
        </div>
        <br/>
        </>
    )
    : null
    }
       </nav>
       
        </section>
         
    </main>
  )
}
