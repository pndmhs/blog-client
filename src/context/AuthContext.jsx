import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const useAuth = () => {
  const user = localStorage.getItem("user");
  const [authed, setAuthed] = useState(user ? true : false);

  const navigate = useNavigate();

  const login = async (loginData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/auth",
        loginData
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      setAuthed(true);
    } catch (err) {
      throw new Error(err);
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
