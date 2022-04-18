import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import ProtectedPageLayout from "../../components/layout/ProtectedPageLayout";

interface ProtectedPageProps {
  children: React.ReactNode;
  redirectPath?: string;
}

const ProtectedPage: FC<ProtectedPageProps> = ({
  children,
  redirectPath = "/login",
}) => {
  const isUser = false;

  return isUser ? (
    <ProtectedPageLayout>{children}</ProtectedPageLayout>
  ) : (
    <Navigate to={redirectPath} replace />
  );
};

export default ProtectedPage;
