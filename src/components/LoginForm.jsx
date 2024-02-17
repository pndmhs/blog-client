const LoginForm = () => {
  return (
    <main className="w-full px-5">
      <div className="w-full max-w-96 my-8 mx-auto flex flex-col items-center px-10 py-8">
        <h2 className="text-3xl font-semibold mb-2">Welcome Back!</h2>
        <p className="mb-10">Please log in to your account</p>
        <form action="post" className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="bg-neutral-100 border border-neutral-400 py-3 px-4 outline-none focus:bg-white focus:border-gray-900 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-neutral-100 border border-neutral-400 py-3 px-4 outline-none focus:bg-white focus:border-gray-900 rounded-lg"
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
