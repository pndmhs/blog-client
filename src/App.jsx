import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "@fontsource-variable/inter";
import "@fontsource/merriweather";
import PostsList from "./components/PostsList";
import PostDetail from "./components/PostDetail";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./context/AuthContext";
import NewPost from "./components/NewPost";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./components/NotFound";
import EditPost from "./components/EditPost";

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
