import capaImg from '../../assets/landing_page/capa.jpeg'
import profileAvatar from '../../assets/landing_page/profile_avatar.jpeg'

export default function ProfileStatus() {
  return (
    <div className="rounded-xl pt-28 z-0 relative w-full bg-zinc-50 border ">
        <img className='w-full z-0 top-0 absolute rounded-t-xl max-h-14 object-cover' src={capaImg} alt='capaImg'/>
        <img src={profileAvatar} alt='user settings' 
        className='absolute w-20 border-2 border-slate-100 top-4 -translate-x-1/2 left-1/2 rounded-full' />
        <section className='py-5 pt-1'>

        <span className="block font-extrabold text-lg text-center cursor-pointer hover:text-gray-900" >Derik B. Sehn</span>
        <span className="block text-sm font-light text-center">Desenvolvedor React | Typescript</span>
       </section>
        <section className='py-4 border-y-2'>

        <a href="#plans" className="flex justify-between p-1 px-3 items-center text-gray-600 font-bold text-xs hover:text-gray-700 hover:bg-gray-200">
          Visualizações do perfil <b className='text-blue-700 text-sm' >99</b>
          </a>
          <a href="#plans" className="flex justify-between p-1 px-3 items-center text-gray-600 font-bold text-xs hover:text-gray-700 hover:bg-gray-200">
          Impressões da publicação <b className='text-blue-700 text-sm' >99</b>
          </a>
        </section>

        <a href="#plans" className="flex p-1 px-3 items-center text-gray-600 font-bold text-xs hover:text-gray-700 hover:bg-gray-200">
          <span className=' scale-75 material-icons to-gray-700'>
            bookmark
          </span>
          Meus itens
          </a>
        
    </div>
    )
}
