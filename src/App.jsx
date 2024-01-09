import "./App.css";
import { Input } from "./components/ui/input";
import { useApiBooks } from "./api/useApiBooks";
import BookCard from "./components/BookCard";
import { useState } from "react";

function App() {
  const booksQuery = useApiBooks();
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl">Search for books</h1>
        <Input placeholder=""></Input>
      </div>
      books
      <ul>
        {booksQuery?.data?.items.map((item) => {
          return (
            <li key={item.id}>
              <BookCard
                imageUrl={item?.volumeInfo?.imageLinks?.smallThumbnail}
                title={item.volumeInfo.title}
                authors={item.volumeInfo.authors}
                category={item.volumeInfo.categories[0]}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
