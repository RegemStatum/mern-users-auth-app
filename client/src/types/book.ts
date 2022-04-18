interface IBook {
  name: string;
  author: string;
  publisher: string;
  publishingYear: number;
  pagesAmount: number;
  categories: string[];
  cover: "paperback" | "hardcover";
  price: number;
  isbn13: `${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}`;
  bookId: string;
}

type FormattedBook = Pick<
  IBook,
  "name" | "author" | "price" | "bookId" | "isbn13"
>;

interface MongoBook extends IBook {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BooksState {
  books: Array<FormattedBook>;
  booksToShow: Array<FormattedBook>;
  singleBook: IBook;
}

enum booksReducerActions {
  SET_BOOKS = "SET_BOOKS",
  SET_SINGLE_BOOK = "SET_SINGLE_BOOK",
  SET_BOOKS_TO_SHOW = "SET_BOOKS_TO_SHOW",
  DELETE_BOOK = "DELETE_BOOK",
}

interface SetBooksAction {
  type: booksReducerActions.SET_BOOKS;
  payload: Array<FormattedBook>;
}

interface SetSingleBookAction {
  type: booksReducerActions.SET_SINGLE_BOOK;
  payload: IBook;
}

interface SetBooksToShow {
  type: booksReducerActions.SET_BOOKS_TO_SHOW;
  payload: Array<FormattedBook>;
}

interface DeleteBook {
  type: booksReducerActions.DELETE_BOOK;
  payload: string;
}

type booksActions =
  | SetBooksAction
  | SetSingleBookAction
  | SetBooksToShow
  | DeleteBook;

export type { MongoBook, IBook, FormattedBook, BooksState, booksActions };
export { booksReducerActions };
