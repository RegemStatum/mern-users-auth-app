import { AppReducerState } from "../types/user";

type StorageState = Pick<AppReducerState, "user" | "token">;

const defaultStorage: StorageState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
};

const STORAGE_NAME = "auth-books-app";

function isStorage(object: unknown): object is StorageState {
  return (
    Object.prototype.hasOwnProperty.call(object, "user") &&
    Object.prototype.hasOwnProperty.call(object, "token")
  );
}

export const getLocalStorage = (): StorageState => {
  const storage = localStorage.getItem(STORAGE_NAME);
  if (!storage) {
    return defaultStorage;
  }
  const parsedStorage = JSON.parse(storage);
  return parsedStorage;
};

export const saveInLocalStorage = (property: string, value: any) => {
  const storage = getLocalStorage();
  const newStorageObj = { ...storage, [property]: value };

  if (!isStorage(newStorageObj)) {
    throw new Error("Storage type is not correct");
  }

  localStorage.setItem(STORAGE_NAME, JSON.stringify(newStorageObj));
};
