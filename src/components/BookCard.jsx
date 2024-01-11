import React from "react";

const BookCard = ({ imageUrl, title, category, authors }) => {
  return (
    <div className="rounded-md bg-neutral-100 p-6 h-full">
      <div className="h-2/3">
        <img
          src={imageUrl}
          alt={title}
          className="h-full p-2 mx-auto drop-shadow-[7px_5px_7px_rgba(0,0,0,0.35)]"
        />
      </div>
      <div className="text-start mt-3">
        <div className="text-sm text-gray-400 underline min-h-5">
          {category?.[0] ?? " "}
        </div>
        <div className="text-md font-bold leading-none line-clamp-2 mt-3">
          {title}
        </div>
        <div className="text-sm leading-none line-clamp-2 mt-1 text-gray-400">
          {authors}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
