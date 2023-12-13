
const PostActions = () => {
  return (
    <div className="p-3 flex">
      <div className="flex justify-center items-center ">
        <div className="flex p-2  hover:bg-zinc-200  transition-colors items-center cursor-pointer text-sm  font-bold gap-2 text-zinc-500 max-w-[200px] animate-duration-150 justify-around">
          <span className='material-icons text-zinc-500'>
            thumb_up
          </span>
          <span className='truncate'>
          Gostei
          </span>
        </div>
        <div className="flex p-2  hover:bg-zinc-200  transition-colors items-center cursor-pointer text-sm  font-bold gap-2 text-zinc-500 max-w-[200px] animate-duration-150 justify-around">
          <span className='material-icons text-zinc-500'>
            message
          </span>
          <span className='truncate'>
          Comentar
          </span>
        </div>
        <div className="flex p-2  hover:bg-zinc-200  transition-colors items-center cursor-pointer text-sm  font-bold gap-2 text-zinc-500 max-w-[200px] animate-duration-150 justify-around">
          <span className='material-icons text-zinc-500 '>
            repeat
          </span>
          <span className='truncate'>
          Compartilhar
          </span>
        </div> 
        <div className="flex p-2  hover:bg-zinc-200  transition-colors items-center cursor-pointer text-sm  font-bold gap-2 text-zinc-500 max-w-[200px] animate-duration-150 justify-around">
          <span className='material-icons text-zinc-500 -rotate-[50deg] translate-x-2'>
            send
          </span>
          <span className='truncate'>
          Enviar
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostActions;
