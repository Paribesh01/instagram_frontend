import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { axiosClient } from "../lib/httpClient";
import { AxiosError, AxiosResponse } from "axios";

interface ProtectedProps {
  children: React.ReactNode;
}
export function Protected({ children }: ProtectedProps) {
  const navigate = useNavigate();
  useEffect(() => {
    const profile = async () => {
      const response = (await axiosClient
        .get("/auth/me")
        .catch((err: AxiosError) => {
          if (err.response?.status) {
            localStorage.removeItem("token");
            navigate("/login");
          }
        })) as AxiosResponse;
      // const data = response.data;
    };
    profile();
  }, [0]);
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/login"} />;
  } else {
    return <>{children};</>;
  }
}
