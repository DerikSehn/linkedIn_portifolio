const PostData = ({src, description } : {src?: string, description?: string}) => {
  return (
    <div className="border-t">
      <p className="text-gray-700 mb-4 p-4 ">
        {description}
      </p>
      <img
        src={src} // Substitua pela URL real da imagem do post
        alt="Post"
        className="w-full h-48 object-cover rounded"
      />
    </div>
  );
};

export default PostData;
