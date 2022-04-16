import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage, ErrorPage } from "../pages/public";
import { BooksPage, UserPage } from "../pages/protected";
import ProtectedPage from "./protected/ProtectedPage";
import SingleBookPage from "./protected/SingleBookPage";

const PagesRouting: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {/* home page */}
          <Route index element={<HomePage />} />
          {/* auth pages */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* protected pages */}
          <Route
            path="user"
            element={
              <ProtectedPage>
                <UserPage />
              </ProtectedPage>
            }
          />
          <Route path="books">
            <Route
              index
              element={
                <ProtectedPage>
                  <BooksPage />
                </ProtectedPage>
              }
            />
            <Route
              path=":bookId"
              element={
                <ProtectedPage>
                  <SingleBookPage />
                </ProtectedPage>
              }
            />
          </Route>
        </Route>
        {/* error page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default PagesRouting;
