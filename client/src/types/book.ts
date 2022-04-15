interface IBook {
  name: string;
  author: string;
  publisher: string;
  publishingYear: number;
  pagesAmount: number;
  categories: string[];
  cover: "paperback" | "hardcover";
  price: number;
  isbn13: string;
  bookId: string;
}

type FormattedBook = Pick<IBook, "name" | "author" | "price" | "bookId">;

interface MongoBook extends IBook {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BooksState {
  books: Array<FormattedBook>;
}

enum booksReducerActions {
  SET_BOOKS = "SET_BOOKS",
}

interface SetBooksAction {
  type: booksReducerActions.SET_BOOKS;
  payload: Array<FormattedBook>;
}

type booksActions = SetBooksAction;

export type { MongoBook, IBook, FormattedBook, BooksState, booksActions };
export { booksReducerActions };
