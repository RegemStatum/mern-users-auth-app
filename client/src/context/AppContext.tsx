import React, { FC, useContext, useReducer } from "react";
import reducer from "../reducer/app-reducer";
import { AppReducerState, IUser, AppReducerActions } from "../types/user";
import { getLocalStorage, saveInLocalStorage } from "../utils/storage";

const appReducerInitialState: AppReducerState = {
  user: getLocalStorage().user,
  token: getLocalStorage().token,
  isAdmin: false,
};

const Context = React.createContext({
  ...appReducerInitialState,
  setUserInfo: (user: IUser, token: string) => {},
  setAdmin: (isAdmin: boolean) => {},
  logOut: () => {},
});

interface AppContextProps {
  children: React.ReactNode;
}

const AppContext: FC<AppContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appReducerInitialState);

  const setUserInfo = (user: IUser, token: string) => {
    saveInLocalStorage("user", user);
    saveInLocalStorage("token", token);

    dispatch({
      type: AppReducerActions.SET_USER_INFO,
      payload: {
        user,
        token,
      },
    });
  };

  const setAdmin = (isAdmin: boolean) => {
    dispatch({ type: AppReducerActions.SET_ADMIN, payload: isAdmin });
  };

  const logOut = () => {
    dispatch({ type: AppReducerActions.LOG_OUT });
  };

  return (
    <Context.Provider
      value={{
        user: state.user,
        token: state.token,
        isAdmin: state.isAdmin,
        setUserInfo,
        setAdmin,
        logOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppContext;
