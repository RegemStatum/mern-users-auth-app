import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  BooksPage,
  ErrorPage,
  UserPage,
} from "./all-pages";

const PagesRouting: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* auth and user pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user" element={<UserPage />} />
          {/* content pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          {/* error page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default PagesRouting;
