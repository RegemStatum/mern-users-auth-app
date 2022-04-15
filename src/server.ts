import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import cors from "cors";

// routers
import authRouter from "./routes/authRoutes.js";
import booksRouter from "./routes/booksRouter.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// db
import connectDB from "./db/connect.js";

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/books", booksRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8081;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL || "");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
