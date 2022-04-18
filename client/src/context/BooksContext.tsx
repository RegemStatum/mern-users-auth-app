import React, { FC, useCallback, useContext, useReducer } from "react";
import {
  booksReducerActions,
  BooksState,
  IBook,
  MongoBook,
} from "../types/book";
import reducer from "../reducer/books-reducer";
import { formatBooks, formatSingleBook } from "../utils/formatBooks";

const booksInitialState: BooksState = {
  books: [],
  booksToShow: [],
  singleBook: {
    name: "",
    author: "",
    publisher: "",
    publishingYear: 0,
    pagesAmount: 0,
    categories: [],
    cover: "paperback",
    price: 0,
    isbn13: "0000000000000",
    bookId: "-1",
  },
};

const contextInitialState = {
  ...booksInitialState,
  setBooks: () => {},
  setSingleBook: (id: string) => {},
  filterBooksToShow: (name: string) => {},
  showAllBooks: () => {},
  createBook: (book: Omit<IBook, "bookId">) =>
    new Promise<{ isCreated: boolean; message: string }>((resolve) => {
      resolve({
        isCreated: false,
        message: "",
      });
    }),
  updateBook: (book: Omit<IBook, "bookId">) =>
    new Promise<{ isUpdated: boolean; message: string }>((resolve) => {
      resolve({
        isUpdated: false,
        message: "",
      });
    }),
  deleteBook: (isbn13: string) =>
    new Promise<{ isDeleted: boolean; message: string }>((resolve) => {
      resolve({
        isDeleted: false,
        message: "",
      });
    }),
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

  const filterBooksToShow = (name: string) => {
    const filteredBooks = state.books.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
    dispatch({
      type: booksReducerActions.SET_BOOKS_TO_SHOW,
      payload: filteredBooks,
    });
  };

  const showAllBooks = () => {
    dispatch({
      type: booksReducerActions.SET_BOOKS_TO_SHOW,
      payload: state.books,
    });
  };

  const createBook = async (book: Omit<IBook, "bookId">) => {
    const responseObj = {
      isCreated: false,
      message: "Something went wrong",
    };
    try {
      const response = await fetch("http://localhost:8079/api/v1/books", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!data.book) {
        responseObj.message =
          data.message || "Book was not created, please try again later";
        return responseObj;
      } else {
        const newBooks = [...state.books, data.book];
        dispatch({ type: booksReducerActions.SET_BOOKS, payload: newBooks });
        responseObj.isCreated = true;
        responseObj.message = "Book created";
        return responseObj;
      }
    } catch (error: any) {
      console.log(error);
      responseObj.message =
        error?.message || "Book was not created, please try again later";
      return responseObj;
    }
  };

  const updateBook = async (bookObj: Omit<IBook, "bookId">) => {
    const responseObj = {
      isUpdated: false,
      message: "Something went wrong",
    };

    const book = state.books.find((book) => book.isbn13 === bookObj.isbn13);

    if (!book) {
      responseObj.message = "There is no book with such isbn";
      return responseObj;
    }
    const id = book.bookId;

    try {
      const response = await fetch(`http://localhost:8079/api/v1/books/${id}`, {
        method: "PATCH",
        body: JSON.stringify(bookObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!data.book) {
        responseObj.message =
          data.message || "Book was not updated, please try again later";
        return responseObj;
      } else {
        const filteredBooks = state.books.filter(
          (book) => book.isbn13 !== bookObj.isbn13
        );
        const formattedBook = formatSingleBook({
          ...bookObj,
          _id: id,
          bookId: id,
          updatedAt: "",
          createdAt: "",
          __v: 0,
        });
        const newBooks = [...filteredBooks, formattedBook];

        dispatch({ type: booksReducerActions.SET_BOOKS, payload: newBooks });
        responseObj.isUpdated = true;
        responseObj.message = "Book updated";
        return responseObj;
      }
    } catch (error: any) {
      console.log(error);
      responseObj.message =
        error?.message || "Book was not updated, please try again later";
      return responseObj;
    }
  };

  const deleteBook = async (isbn13: string) => {
    const isDeletedObj = {
      isDeleted: false,
      message: "Something went wrong",
    };
    const book = state.books.find((book) => book.isbn13 === isbn13);

    if (!book) {
      isDeletedObj.message = "There is no book with such isbn";
      return isDeletedObj;
    }
    const id = book.bookId;

    try {
      const response = await fetch(`http://localhost:8079/api/v1/books/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (!data.book) {
        isDeletedObj.message =
          data.message || "Book was not delete, please try again later";
        return isDeletedObj;
      } else {
        dispatch({ type: booksReducerActions.DELETE_BOOK, payload: isbn13 });
        isDeletedObj.isDeleted = true;
        isDeletedObj.message = "Book deleted";
        console.log("successfully deleted", isDeletedObj);
        return isDeletedObj;
      }
    } catch (e: any) {
      console.log(e);
      isDeletedObj.message =
        e?.message || "Book was not delete, please try again later";
      return isDeletedObj;
    }
  };

  return (
    <Context.Provider
      value={{
        books: state.books,
        booksToShow: state.booksToShow,
        singleBook: state.singleBook,
        setBooks,
        setSingleBook,
        filterBooksToShow,
        showAllBooks,
        createBook,
        updateBook,
        deleteBook,
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
