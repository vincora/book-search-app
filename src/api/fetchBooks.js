const apiKey = encodeURI(import.meta.env.VITE_GOOGLE_BOOKS_API_KEY);

export const fetchBooks = async (searchQuery, page) => {

  const maxResults = 5;
  const startIndex = page ? page * maxResults : 0;

  const { input, category, sort } = searchQuery;
  const query = [input];
  if (category !== "all") {
    query.push(`subject:${category}`);
  }

  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query.join("+")}&orderBy=${sort}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return {
    total: data.totalItems,
    items: data.items.map((item) => ({
      title: item.volumeInfo.title,
      imageUrl: item.volumeInfo.imageLinks?.smallThumbnail,
      authors: item.volumeInfo.authors,
      category: item.volumeInfo.categories,
      id: item.id,
    })),
  };
};
