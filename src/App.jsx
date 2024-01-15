import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import BookCard from "./components/BookCard";
import Header from "./components/Header/Header";
import { setBooks } from "./app/appSlice";
import { fetchBooks } from "./api/fetchBooks";

function App() {
  const booksData = useSelector((state) => state.books);
  const totalBooks = useSelector(state => state.total)
  const dispatch = useDispatch();

  const handleSearch = async (data) => {
    const reponse = await fetchBooks(data);
    dispatch(setBooks(reponse));
  };

  return (
    <div className="space-y-4">
      <Header onSearch={handleSearch} />
      <p>{totalBooks && `Found ${totalBooks} results`}</p>
      <ul className="flex flex-wrap gap-5 justify-center">
        {booksData?.map((item) => {
          return (
            <li key={item.id}>
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
    </div>
  );
}

export default App;
