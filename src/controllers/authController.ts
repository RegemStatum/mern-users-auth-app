import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "Successful login" });
};

const register = (req: Request, res: Response) => {
  res.status(201).json({ message: "Successful registration" });
};

export { login, register };
