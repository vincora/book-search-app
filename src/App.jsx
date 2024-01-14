import "./App.css";
import { useEffect, useState } from "react";
import { useApiBooks } from "./api/useApiBooks";
import BookCard from "./components/BookCard";
import Header from "./components/Header/Header";
import { fetchBooks } from "./api/fetchBooks";

function App() {
  const booksQuery = useApiBooks();
  const [query, setQuery] = useState({
    input: '',
    category: 'all',
    sorting: 'relevance'
  });

  const handleSearch = (data) => {
    console.log(data)
    setQuery({
      input: data.query,
      category: data.category,
      sorting: data.sorting
    })
  }


  useEffect(() => {
    fetchBooks(query)
  }, [query])

  return (
    <div className="space-y-4">
      <Header onSearch={handleSearch}/>
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
