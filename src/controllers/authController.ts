import { Request, Response } from "express";
import IUser from "../types/user";
import User from "../models/User.js";
import { BadRequestError } from "../error/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const login = async (req: Request, res: Response) => {
  const body: Omit<IUser, "name"> = req.body;

  const { email, password } = body;

  if (!email || !password) {
    throw new BadRequestError("Not valid values");
  }

  const user = await User.findOne({ email });
  if (!user || !user?.email) {
    throw new BadRequestError("There is no user with such an email");
  }

  const dbHashedPassword = user.password;

  const isCorrectPassword = bcrypt.compareSync(password, dbHashedPassword);
  if (!isCorrectPassword) {
    throw new BadRequestError("Wrong password");
  }
  const token = user.createJWT();

  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
    },
    token,
    message: "Successful login",
  });
};

const register = async (req: Request, res: Response) => {
  const body: IUser = req.body;
  const { name, password, email } = body;

  if (!name || !password || !email) {
    throw new BadRequestError("Provide valid values");
  }

  if (password.length < 8) {
    throw new BadRequestError("Password should have 8 characters and more");
  }

  const isUserAlreadyExists = await User.findOne({ email });
  if (isUserAlreadyExists) {
    throw new BadRequestError("User with such an email already exists");
  }

  // create new user
  const user = new User({ ...body });
  const newUser = await user.save();

  // create token for user
  const token = user.createJWT();

  res.status(201).json({
    user: { email: newUser.email, name: newUser.name },
    token,
    message: "Successful registration",
  });
};

const getInfo = async (req: Request, res: Response) => {
  if (!req.user) {
    throw new BadRequestError("Something went wrong, please, try again later");
  }

  const { userId } = req.user as { userId: string };

  const user = await User.findById(userId);

  if (!user) {
    throw new BadRequestError("There is no such user");
  }

  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
    },
    message: "User info",
  });
};

const verifyToken = (req: Request, res: Response) => {
  const token = req.body.token;

  if (!token) {
    throw new BadRequestError("No token provided");
  }

  const isValid = jwt.verify(token, process.env.JWT_SECRET!);
  // jwt will throw a custom error if token is not valid
  // this is double check
  if (!isValid) {
    res.status(400).json({ isValid: false, message: "Token is not valid" });
    return;
  }

  res.status(200).json({ isValid: true, message: "Token is valid" });
};

export { login, register, getInfo, verifyToken };
