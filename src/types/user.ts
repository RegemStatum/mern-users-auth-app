import { Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createJWT: () => string;
}

export default IUser;
