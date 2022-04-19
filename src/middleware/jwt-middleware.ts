import exJwt from "express-jwt";
import dotenv from "dotenv";
dotenv.config();

const jwtMW = exJwt({
  secret: process.env.JWT_SECRET!,
  algorithms: ["HS256"],
});

export default jwtMW;
