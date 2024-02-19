import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { authed } = useContext(AuthContext);

  return authed ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
