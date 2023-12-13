const PostLikes = ({ likesCount }: {likesCount?: number}) => {
    return (
      <div className="border-b-2 mx-2">
        <div className="flex items-center text-zinc-600 text-xs font-normal">
          <span className="material-icons border rounded-full bg-blue-600 text-zinc-50 p-1 scale-50">thumb_up</span>
          <span>{likesCount} Curtidas</span>
        </div>
      </div>
    );
  };
  
  export default PostLikes;