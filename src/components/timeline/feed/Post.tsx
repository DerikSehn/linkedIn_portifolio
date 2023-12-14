/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export type ChildrenProp = {children?: JSX.Element[] | JSX.Element} 

export default function Post({children} : ChildrenProp) {
  return (
    <div className="rounded-xl my-2 w-full bg-zinc-50  border  " data-aos={'fade-in'}  data-aos-offset="200">
        {children}
    </div>
    )
}
