
import React from 'react'

{/* make a list of news for a component that is similar to the news section on linkedin */} 



export default function News() {
  return (
    <div className="rounded-xl w-full bg-zinc-50 h-96 border ">
       <div className=" mb-2 mx-2 flex items-center justify-between ">
          <span className="font-extrabold text-lg p-2  ">PortIn Notícias</span>
       </div>
      
         <div className="flex flex-col items-center justify-center h-full ">
            <span className="text-sm text-gray-500 ">Nenhuma notícia encontrada</span>
         </div>
         
         
    </div>
    )
}
