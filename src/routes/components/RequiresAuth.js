import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";

const RequiresAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated) {
      return <>{children}</>;
    }
  }, [token]);

  if (!isAuthenticated && false) {
    return <Navigate to="/login" />;
  } else if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default RequiresAuth;
