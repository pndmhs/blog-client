import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const useAuth = () => {
  const user = localStorage.getItem("user");
  const [authed, setAuthed] = useState(user ? true : false);
  const [error, setError] = useState(null);

  const login = async (loginData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/auth",
        loginData
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      setError(null);
      setAuthed(true);
    } catch (err) {
      setError(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuthed(false);
  };

  return {
    authed,
    login,
    logout,
    error,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
