import express from "express";
const router = express.Router();
import { getAll, getOne, createOne, updateOne, deleteOne, } from "../controllers/booksController.js";
router.route("/").get(getAll).post(createOne);
router.route("/:bookId").get(getOne).patch(updateOne).delete(deleteOne);
export default router;
