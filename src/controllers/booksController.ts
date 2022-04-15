import { Request, Response } from "express";
import NotFoundError from "../error/NotFoundError.js";
import Book from "../models/Book.js";
import IBook from "../types/book";

const createOne = async (req: Request, res: Response) => {
  const body: IBook = req.body;
  const book = new Book({ ...body });

  const newBook = await book.save();

  res.status(201).json({ message: "Book created", book: newBook });
};

const getAll = async (req: Request, res: Response) => {
  const allBooks = await Book.find();

  res.status(200).json({ message: "All books", books: allBooks });
};

const getOne = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book = await Book.findById(bookId);

  if (!book) {
    throwBookDoesNotExistError(bookId);
  }

  res
    .status(200)
    .json({ message: `Single book id: ${req.params.bookId}`, book });
};

const deleteOne = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book = await Book.findByIdAndRemove(bookId);

  if (!book) {
    throwBookDoesNotExistError(bookId);
  }

  res.status(200).json({ message: `Book deleted ${req.params.bookId}`, book });
};

const updateOne = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book: IBook = req.body;

  const oldBook = await Book.findByIdAndUpdate(bookId, book);

  if (!oldBook) {
    throwBookDoesNotExistError(bookId);
  }

  res
    .status(200)
    .json({ message: `Book updated ${req.params.bookId}`, book: oldBook });
};

function throwBookDoesNotExistError(bookId: string): void {
  throw new NotFoundError(`Book with id: ${bookId} does not exist`);
}

export { createOne, updateOne, deleteOne, getAll, getOne };
