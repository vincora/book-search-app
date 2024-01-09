import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "./fetchBooks";

export const useApiBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });
};
