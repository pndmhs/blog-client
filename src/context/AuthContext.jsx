import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../api/api";

export const AuthContext = createContext();

const useAuth = () => {
  const user = localStorage.getItem("user");
  const [authed, setAuthed] = useState(user ? true : false);

  const navigate = useNavigate();

  const login = async (loginData) => {
    try {
      const userData = await authUser(loginData);
      localStorage.setItem("user", JSON.stringify(userData));
      setAuthed(true);
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuthed(false);
    navigate("/");
  };

  return {
    authed,
    login,
    logout,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
