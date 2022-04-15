import React, { FC, useContext } from "react";

const Context = React.createContext({});

interface AppContextProps {
  children: React.ReactNode;
}

const AppContext: FC<AppContextProps> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppContext;
