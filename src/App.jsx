import "@fontsource-variable/inter";
import "@fontsource/merriweather";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./context/AuthContext";
import EditPost from "./pages/EditPost";
import PostsList from "./pages/Home";
import LoginForm from "./pages/Login";
import NewPost from "./pages/NewPost";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/posts/:post_id" element={<PostDetail />} />
        <Route
          path="/posts/new"
          element={
            <RequireAuth>
              <NewPost />
            </RequireAuth>
          }
        />
        <Route
          path="/posts/:post_id/edit"
          element={
            <RequireAuth>
              <EditPost />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
