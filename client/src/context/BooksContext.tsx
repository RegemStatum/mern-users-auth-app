import React, { FC, useCallback, useContext, useReducer } from "react";
import { booksReducerActions, BooksState, MongoBook } from "../types/book";
import reducer from "../reducer/books-reducer";
import formatBooks from "../utils/formatBooks";

const booksInitialState: BooksState = {
  books: [],
};

const contextInitialState = {
  ...booksInitialState,
  setBooks: () => {},
};

const Context = React.createContext(contextInitialState);

interface BooksContextProps {
  children: React.ReactNode;
}

const BooksContext: FC<BooksContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, booksInitialState);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:8079/api/v1/books/");
      const data = await response.json();
      return data.books;
    } catch (e) {
      console.log(e);
    }
  };

  const setBooks = useCallback(async () => {
    const books: MongoBook[] = await fetchBooks();
    const formattedBooks = formatBooks(books);
    dispatch({ type: booksReducerActions.SET_BOOKS, payload: formattedBooks });
  }, []);

  return (
    <Context.Provider value={{ books: state.books, setBooks }}>
      {children}
    </Context.Provider>
  );
};

export const useBookContext = () => {
  return useContext(Context);
};

export default BooksContext;
