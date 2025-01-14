import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivetRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
 
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivetRouts;
