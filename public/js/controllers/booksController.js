var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import NotFoundError from "../error/NotFoundError.js";
import Book from "../models/Book.js";
const createOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const book = new Book(Object.assign({}, body));
    const newBook = yield book.save();
    res.status(201).json({ message: "Book created", book: newBook });
});
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allBooks = yield Book.find();
    res.status(200).json({ message: "All books", books: allBooks });
});
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const book = yield Book.findById(bookId);
    if (!book) {
        throwBookDoesNotExistError(bookId);
    }
    res
        .status(200)
        .json({ message: `Single book id: ${req.params.bookId}`, book });
});
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const book = yield Book.findByIdAndRemove(bookId);
    if (!book) {
        throwBookDoesNotExistError(bookId);
    }
    res.status(200).json({ message: `Book deleted ${req.params.bookId}`, book });
});
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const book = req.body;
    const oldBook = yield Book.findByIdAndUpdate(bookId, book);
    if (!oldBook) {
        throwBookDoesNotExistError(bookId);
    }
    res
        .status(200)
        .json({ message: `Book updated ${req.params.bookId}`, book: oldBook });
});
function throwBookDoesNotExistError(bookId) {
    throw new NotFoundError(`Book with id: ${bookId} does not exist`);
}
export { createOne, updateOne, deleteOne, getAll, getOne };
