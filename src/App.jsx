import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import BookCard from "./components/BookCard";
import Header from "./components/Header/Header";
import { setBooks } from "./app/booksSlice";
import { fetchBooks } from "./api/fetchBooks";
import { useEffect, useState } from "react";

function App() {
  const booksData = useSelector((state) => state.books);
  const totalBooks = useSelector((state) => state.total);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (data) => {
    setIsLoading(true)
    const reponse = await fetchBooks(data);
    dispatch(setBooks(reponse));
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <Header onSearch={handleSearch} />
      <p>{totalBooks && `Found ${totalBooks} results`}</p>
      {isLoading ? "Loading..." : <ul className="flex flex-wrap gap-5 justify-center">
        {booksData?.map((item, index) => {
          return (
            <li key={item.id+index}>
              <BookCard
                imageUrl={item.imageUrl}
                title={item.title}
                authors={item.authors}
                category={item.category}
              />
            </li>
          );
        })}
      </ul>}
      
    </div>
  );
}

export default App;
