import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex items-center py-4 lg:py-6 px-5">
      <div className="w-full max-w-[820px] mx-auto flex items-center">
        <h1 className="text-xl font-semibold mr-auto">
          <Link to="/" className="font-medium">
            Simple Blog
          </Link>
        </h1>
        <nav>
          <Link to="/login" className="font-medium">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
