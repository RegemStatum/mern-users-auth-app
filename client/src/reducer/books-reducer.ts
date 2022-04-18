import { booksActions, booksReducerActions, BooksState } from "../types/book";

const reducer = (state: BooksState, action: booksActions): BooksState => {
  if (action.type === booksReducerActions.SET_BOOKS) {
    return { ...state, books: action.payload, booksToShow: action.payload };
  }
  if (action.type === booksReducerActions.SET_SINGLE_BOOK) {
    return { ...state, singleBook: action.payload };
  }
  if (action.type === booksReducerActions.SET_BOOKS_TO_SHOW) {
    return {
      ...state,
      booksToShow: action.payload,
    };
  }
  if (action.type === booksReducerActions.DELETE_BOOK) {
    const filteredBooks = state.books.filter(
      (book) => book.isbn13 !== action.payload
    );
    return {
      ...state,
      books: filteredBooks,
      booksToShow: filteredBooks,
    };
  }
  return { ...state };
};

export default reducer;
