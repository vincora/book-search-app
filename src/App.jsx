import "./App.css";
import { useState } from "react";
import { useApiBooks } from "./api/useApiBooks";
import BookCard from "./components/BookCard";
import Header from "./components/Header/Header";

function App() {
  const booksQuery = useApiBooks();
  const [query, setQuery] = useState("");
  return (
    <div className="space-y-4">
      <Header />
      <ul className="flex flex-wrap gap-5 justify-center">
        {booksQuery?.data?.items.map((item) => {
          return (
            <li key={item.id} >
              <BookCard
                imageUrl={item?.volumeInfo?.imageLinks?.smallThumbnail}
                title={item.volumeInfo.title}
                authors={item.volumeInfo.authors}
                category={item.volumeInfo.categories}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
