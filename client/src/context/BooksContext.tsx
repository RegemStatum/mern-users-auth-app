import React, { FC, useCallback, useContext, useReducer } from "react";
import { booksReducerActions, BooksState, MongoBook } from "../types/book";
import reducer from "../reducer/books-reducer";
import { formatBooks, formatSingleBook } from "../utils/formatBooks";

const booksInitialState: BooksState = {
  books: [],
  singleBook: {
    name: "",
    author: "",
    publisher: "",
    publishingYear: 0,
    pagesAmount: 0,
    categories: [],
    cover: "paperback",
    price: 0,
    isbn13: "",
    bookId: "-1",
  },
};

const contextInitialState = {
  ...booksInitialState,
  setBooks: () => {},
  setSingleBook: (id: string) => {},
};

const Context = React.createContext(contextInitialState);

interface BooksContextProps {
  children: React.ReactNode;
}

const BooksContext: FC<BooksContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, booksInitialState);

  const fetchBooks = async (): Promise<MongoBook[] | undefined> => {
    try {
      const response = await fetch("http://localhost:8079/api/v1/books/");
      const data = await response.json();
      return data.books;
    } catch (e) {
      console.log(e);
    }
  };

  const setBooks = useCallback(async () => {
    const books = await fetchBooks();
    if (books) {
      const formattedBooks = formatBooks(books);
      dispatch({
        type: booksReducerActions.SET_BOOKS,
        payload: formattedBooks,
      });
    }
  }, []);

  const fetchSingleBook = async (
    id: string
  ): Promise<MongoBook | undefined> => {
    try {
      const response = await fetch(`http://localhost:8079/api/v1/books/${id}`);
      const data = await response.json();
      return data.book;
    } catch (error) {
      console.log(error);
    }
  };

  const setSingleBook = useCallback(async (id: string) => {
    let book = await fetchSingleBook(id);
    if (book) {
      const formattedBook = formatSingleBook(book);
      dispatch({
        type: booksReducerActions.SET_SINGLE_BOOK,
        payload: formattedBook,
      });
    }
  }, []);

  return (
    <Context.Provider
      value={{
        books: state.books,
        singleBook: state.singleBook,
        setBooks,
        setSingleBook,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useBookContext = () => {
  return useContext(Context);
};

export default BooksContext;
