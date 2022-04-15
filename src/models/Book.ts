import mongoose from "mongoose";
import IBook from "../types/book.js";
import { MongoError } from "mongodb";

const { Schema, model, Error } = mongoose;

const bookSchema = new Schema<IBook>(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    publishingYear: {
      type: Number,
      required: true,
    },
    pagesAmount: {
      type: Number,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isbn13: {
      type: String,
      required: true,
      unique: true,
      minlength: 13,
      maxlength: 13,
    },
  },
  { timestamps: true }
);

export default model<IBook>("Book", bookSchema);
