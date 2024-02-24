import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import InfoLogo from "../assets/info-circle.svg?react";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      setError(null);
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        setError("Incorrect username or password");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <main className="w-full px-5">
      <div className="w-full max-w-96 my-8 mx-auto flex flex-col items-center px-10 py-8">
        <h2 className="text-3xl font-semibold mb-2">Welcome Back!</h2>
        <p className="mb-10">Please log in to your account</p>
        {error && (
          <div className="mb-5 text-red-600 flex items-center gap-2">
            <InfoLogo width="1rem" height="1rem" />
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="bg-neutral-100 border border-neutral-400 py-3 px-4 outline-none focus:bg-white focus:border-gray-900 rounded-lg"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-neutral-100 border border-neutral-400 py-3 px-4 outline-none focus:bg-white focus:border-gray-900 rounded-lg"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 px-5 font-semibold rounded-lg cursor-pointer hover:bg-white hover:border hover:border-gray-900 hover:text-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
