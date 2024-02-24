import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { authed } = useContext(AuthContext);

  return authed ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
