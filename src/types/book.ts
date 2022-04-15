import { Document } from "mongoose";

interface IBook extends Document {
  name: string;
  author: string;
  publisher: string;
  publishingYear: number;
  pagesAmount: number;
  categories: string[];
  cover: "paperback" | "hardcover";
  price: number;
  isbn13: string;
}

export default IBook;
