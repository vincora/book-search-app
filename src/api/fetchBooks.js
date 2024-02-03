const apiKey = encodeURI(import.meta.env.VITE_GOOGLE_BOOKS_API_KEY);

export const fetchBooks = async ({input, category, sort}) => {
  const query = [ input ];
  if( category !== 'all'){
    query.push(`subject:${category}`);
  }
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query.join('+'))}&orderBy=${sort}&maxResults=30&key=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return  {
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
