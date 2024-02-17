import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import PostsList from "../components/PostsList";
import LoginForm from "../components/LoginForm";
import PostDetail from "../components/PostDetail";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <PostsList /> },
        { path: "/login", element: <LoginForm /> },
        { path: "/posts/:post_id", element: <PostDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
