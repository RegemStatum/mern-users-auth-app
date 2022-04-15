import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
