/* eslint-disable @typescript-eslint/no-explicit-any */

export default function IconButton({ label, labelClassName = '', className = '', children } : {label?: any, className?: string, labelClassName?: string, children: any}) {
  return (<a href='#' className='flex md:flex-col items-center place-content-center group w-[80px] h-[52px] '>
        <span className={'block button  group-hover:text-slate-900 border-none p-0 material-icons backdrop-filter scale-110 bg-transparent text-slate-600 ' + className}>
            {children}    
          </span>
          <small className={'block text-slate-600 w-0 invisible md:w-full md:visible font-normal text-center group-hover:text-slate-900 ' + labelClassName } >
            {label}
          </small>  
  </a>
          )
}
