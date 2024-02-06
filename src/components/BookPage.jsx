import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookPage = () => {
  let { bookId } = useParams();
  const booksData = useSelector((state) => state.books);

  const book = booksData.find((element) => element.id === bookId);
  const { imageUrlBig, category, title, authors, description } = book;

  return (
    <div className="flex">
      <div className="basis-2/5 ">
        <div className="aspect-w-3 aspect-h-4 p-8 bg-neutral-100">
          <img
            src={imageUrlBig}
            alt={title}
            className="min-h-80 mx-auto drop-shadow-[7px_5px_7px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
      <div className="basis-3/5 p-8 space-y-4">
        {category && (
          <div className="text-sm  text-gray-400">{category?.join("/ ")}</div>
        )}
        <div className="text-xl font-bold ">{title}</div>
        <div className="text-sm underline text-gray-400 ">
          {authors?.join(", ")}
        </div>
        
        {description && <div className="border p-5 text-sm">{description}</div>}
      </div>
    </div>
  );
};

export default BookPage;
