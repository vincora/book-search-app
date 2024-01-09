import "./App.css";
import { Input } from "./components/ui/input";
import { useApiBooks } from "./api/useApiBooks";

function App() {

  const booksQuery = useApiBooks()

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl">Search for books</h1>
        <Input></Input>
      </div>
      books
      <ul>
        {booksQuery?.data?.items.map((item, index) => {
          return <li key={item.id}>{index+1}. {item.volumeInfo.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
