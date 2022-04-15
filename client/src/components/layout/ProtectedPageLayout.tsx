import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface ProtectedPageLayoutProps {
  children: React.ReactNode;
}

const ProtectedPageLayout: FC<ProtectedPageLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default ProtectedPageLayout;
