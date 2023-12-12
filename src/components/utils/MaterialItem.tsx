/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export default function MaterialItem({ iconName = 'groups', label= 'groups' }: any) {
  return (<a href="#plans" className="flex p-[.5px] px-3 items-center text-gray-600 font-bold text-xs hover:text-gray-700 hover:bg-gray-200">
          <span className='scale-75 material-icons pr-1' >
            {iconName}
            </span> 
            {label} 
          </a>
  )
}
