import React, { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ProtectedPageLayout from "../../components/layout/ProtectedPageLayout";
import { useAppContext } from "../../context/AppContext";

interface ProtectedPageProps {
  children: React.ReactNode;
  redirectPath?: string;
}

const ProtectedPage: FC<ProtectedPageProps> = ({
  children,
  redirectPath = "/login",
}) => {
  const [isValidUser, setIsValidUser] = useState(true);
  const { token } = useAppContext();

  // this logic will refresh protected page on enter
  // all app state will be lost
  // bad practice
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8079/api/v1/auth/verify-token",
  //         {
  //           method: "POST",
  //           body: JSON.stringify({ token }),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       setIsValidUser(data.isValid);
  //     } catch (error) {
  //       console.log(error);
  //       setIsValidUser(false);
  //     }
  //   })();
  // }, [isValidUser, token]);

  return isValidUser ? (
    <ProtectedPageLayout>{children}</ProtectedPageLayout>
  ) : (
    <Navigate to={redirectPath} replace />
  );
};

export default ProtectedPage;
