const PostData = ({src, description } : {src?: string, description?: string | JSX.Element}) => {
  return (
    <div className="border-t">
      <p className="text-gray-700 mb-4 p-4 ">
        {description}
      </p>
      <img
        src={src} // Substitua pela URL real da imagem do post
        alt="Post"
        className="w-full object-contain rounded"
      />
    </div>
  );
};

export default PostData;
