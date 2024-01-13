import React from "react";

const BookCard = ({ imageUrl, title, category, authors }) => {
  return (
    <div className="rounded-m w-56 h-80 p-4 mx-auto bg-neutral-100">
      <div className="h-2/3 aspect-w-3 aspect-h-4">
        <img
          src={imageUrl}
          alt={title}
          className="h-full mx-auto drop-shadow-[7px_5px_7px_rgba(0,0,0,0.35)]"
        />
      </div>
      <div className="h-1/3 text-start pt-3">
        <div className="text-xs leading-none text-gray-400 underline min-h-5 ">
          {category?.[0] ?? " "}
        </div>
        <div className="text-sm leading-none font-bold line-clamp-2 mt-3 ">
          {title}
        </div>
        <div className="text-xs leading-none line-clamp-2 mt-1 text-gray-400 ">
          {authors.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default BookCard;  
