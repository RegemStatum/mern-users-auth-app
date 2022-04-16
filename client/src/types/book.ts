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
  singleBook: IBook;
}

enum booksReducerActions {
  SET_BOOKS = "SET_BOOKS",
  SET_SINGLE_BOOK = "SET_SINGLE_BOOK",
}

interface SetBooksAction {
  type: booksReducerActions.SET_BOOKS;
  payload: Array<FormattedBook>;
}

interface SetSingleBookAction {
  type: booksReducerActions.SET_SINGLE_BOOK;
  payload: IBook;
}

type booksActions = SetBooksAction | SetSingleBookAction;

export type { MongoBook, IBook, FormattedBook, BooksState, booksActions };
export { booksReducerActions };
