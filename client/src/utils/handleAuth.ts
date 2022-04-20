import { NavigateFunction } from "react-router-dom";
import { IUser } from "../types/user";

export interface UserPostBody {
  name?: string;
  email: string;
  password: string;
}

type SetAppUserInfo = (user: IUser, token: string) => void;

const handleAuth = async (
  type: string,
  postBody: UserPostBody,
  setAppUserInfo: SetAppUserInfo,
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction,
  navigateTo: string
) => {
  try {
    const response = await fetch(`http://localhost:8079/api/v1/auth/${type}`, {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setErrorMsg(data.message || "Something went wrong");
      setIsLoading(false);
      return;
    }

    const { user, token } = data;
    setAppUserInfo(user, token);
    setIsSuccess(true);
    setIsLoading(false);
    navigate(navigateTo);
  } catch (error: any) {
    setErrorMsg(error.message || "Something went wrong");
    setIsLoading(false);
  }
};

export default handleAuth;
