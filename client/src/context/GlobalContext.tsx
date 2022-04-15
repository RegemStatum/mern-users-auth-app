import React, { FC } from "react";
import AppContext from "./AppContext";
import BooksContext from "./BooksContext";

interface GlobalContextProps {
  children: React.ReactNode;
}

const GlobalContext: FC<GlobalContextProps> = ({ children }) => {
  return (
    <AppContext>
      <BooksContext>{children}</BooksContext>
    </AppContext>
  );
};

export default GlobalContext;
