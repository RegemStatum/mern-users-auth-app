import { FormattedBook, MongoBook } from "../types/book";

const formatBooks = (books: MongoBook[]): FormattedBook[] => {
  return books.map((book) => {
    const { _id: bookId, name, author, price } = book;
    return {
      bookId,
      name,
      author,
      price,
    };
  });
};

export default formatBooks;
