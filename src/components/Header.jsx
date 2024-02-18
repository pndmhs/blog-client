import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="w-full flex items-center py-4 lg:py-6 px-5">
      <div className="w-full max-w-[820px] mx-auto flex items-center">
        <h1 className="text-xl font-semibold mr-auto">
          <Link to="/">Simple Blog</Link>
        </h1>
        <nav>
          {user ? (
            <button
              className="font-medium cursor-pointer"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <Link to="/login" className="font-medium">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
