import React from 'react'

export default function Sponsor() {
  return (
    <div className="rounded-xl w-full bg-zinc-50 h-96 border ">
        <div className=" mb-2 mx-2 flex items-center justify-between ">
          <span className="font-extrabold text-lg p-2  ">Patrocinadores</span>
       </div>
      
         <div className="flex flex-col items-center justify-center h-full ">
            <span className="text-sm text-gray-500 ">Nenhum patrocinador encontrado</span>
         </div>
         
         
    </div>
    )
}