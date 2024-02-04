import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import BookCard from "./components/BookCard";
import SearchForm from "./components/Header/SearchForm";
import { Button } from "./components/ui/button";
import { setBooks, resetBooks } from "./app/booksSlice";
import { fetchBooks } from "./api/fetchBooks";
import { useEffect, useState } from "react";

function App() {
  const booksData = useSelector((state) => state.books);
  const totalBooks = useSelector((state) => state.total);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState({
    input: "",
    category: "all",
    sort: "relevance",
  });

  const resetPage = () => setPage(0);

  const handleSearch = async (data) => {
    dispatch(resetBooks());
    resetPage();
    setIsLoading(true);
    setSearchQuery(data);
    console.log("handle search");
    const response = await fetchBooks(data);
    dispatch(setBooks(response));
    setIsLoading(false);
  };

  useEffect(() => {
    if (!searchQuery.input || page === 0) {
      return;
    }
    async function loadMoreBooks() {
      console.log("load more");
      setIsLoadingMore(true);
      const response = await fetchBooks(searchQuery, page);
      dispatch(setBooks(response));
      setIsLoadingMore(false);
    }
    loadMoreBooks();
  }, [page]);

  return (
    <div className="space-y-4">
      <SearchForm onSearch={handleSearch} />
      <p>{totalBooks && `Found ${totalBooks} results`}</p>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="space-y-8">
          <ul className="flex flex-wrap gap-5 justify-center">
            {booksData?.map((item, index) => {
              return (
                <li key={item.id + index}>
                  <BookCard
                    imageUrl={item.imageUrl}
                    title={item.title}
                    authors={item.authors}
                    category={item.category}
                  />
                </li>
              );
            })}
          </ul>
          {booksData.length > 0 && (
            <Button disabled={isLoadingMore} onClick={() => setPage((num) => num + 1)}>Load more</Button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
