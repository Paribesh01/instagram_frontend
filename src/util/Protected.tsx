import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface ProtectedProps {
  children: React.ReactNode;
}
export function Protected({ children }: ProtectedProps) {
  console.log(localStorage.getItem("token"));
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/login"} />;
  } else {
    return <>{children};</>;
  }
}
