import { FormattedBook, IBook, MongoBook } from "../types/book";

const formatSingleBook = (book: MongoBook): IBook => {
  const {
    _id: bookId,
    name,
    author,
    publisher,
    publishingYear,
    pagesAmount,
    categories,
    cover,
    price,
    isbn13,
  } = book;
  return {
    bookId,
    name,
    author,
    publisher,
    publishingYear,
    pagesAmount,
    categories,
    cover,
    price,
    isbn13,
  };
};

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

export { formatBooks, formatSingleBook };
