import React from "react";
import { Navigate } from "react-router-dom";

type Props = { children: any };

export default function ProtectedRoute({ children }: Props) {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
