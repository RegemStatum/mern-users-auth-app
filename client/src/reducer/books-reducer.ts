import { booksActions, booksReducerActions, BooksState } from "../types/book";

const reducer = (state: BooksState, action: booksActions): BooksState => {
  if (action.type === booksReducerActions.SET_BOOKS) {
    return { ...state, books: action.payload };
  }
  if (action.type === booksReducerActions.SET_SINGLE_BOOK) {
    return { ...state, singleBook: action.payload };
  }
  return { ...state };
};

export default reducer;
