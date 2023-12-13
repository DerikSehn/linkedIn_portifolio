import React from 'react'

export default function Post({children}) {
  return (
    <div className="rounded-xl my-2 w-full bg-zinc-50  border  " data-aos={'fade-in'}  data-aos-offset="200">
        {children}
    </div>
    )
}
