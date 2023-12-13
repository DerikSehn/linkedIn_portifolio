import profileAvatar from '../../assets/landing_page/profile_avatar.jpeg'

export default function NewPost() {
  return (
    <div className="rounded-xl w-full bg-zinc-50 p-1 border ">
      <section className='p-3 pb-0'>

        <div className='h-16 flex'>
          <img src={profileAvatar} alt='user settings' 
            className='w-[48px] h-[48px] border-slate-100  rounded-full' />
          <input placeholder='Começar publicação' 
            className='rounded-[2rem] w-full hover:bg-zinc-200 bg-zinc-50 cursor-pointer transition-colors border-zinc-300 border h-[48px] ml-2 text-sm font-bold py-[10px] pl-4 pr-2'/>
        </div>
            </section>
      <section className='flex p-0 justify-around '>
        <div className="flex p-2 hover:bg-zinc-200 transition-colors items-center cursor-pointer font-bold text-sm gap-2 text-zinc-500 max-w-[85px] animate-duration-150 justify-around">
          <span className='material-icons text-blue-500'>
            photo 
          </span>
          Mídia
        </div>
        <div className="flex p-2 hover:bg-zinc-200 transition-colors items-center cursor-pointer font-bold gap-2 text-sm  text-zinc-500 max-w-[85px] animate-duration-150 justify-around">
          <span className='material-icons text-purple-500'>
            business_center
          </span>
          Vaga
        </div>
        <div className="flex p-2 hover:bg-zinc-200 transition-colors items-center cursor-pointer text-sm  font-bold gap-2 text-zinc-500 max-w-[200px] animate-duration-150 justify-around">
          <span className='material-icons text-orange-500'>
            subject
          </span>
          <span className='truncate'>
          Escrever Artigo
          </span>
        </div>
      </section>
    </div>
    )
}
