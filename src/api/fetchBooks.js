const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const fetchBooks = async () => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=potter&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data
}
