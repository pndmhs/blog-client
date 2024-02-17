const Header = () => {
  return (
    <header className="w-full flex items-center py-4 lg:py-6 px-5">
      <div className="w-full max-w-[820px] mx-auto flex items-center">
        <h1 className="text-xl font-semibold mr-auto">
          <a href="/">Simple Blog</a>
        </h1>
        <nav>
          <a href="/login" className="font-medium">
            Log In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
