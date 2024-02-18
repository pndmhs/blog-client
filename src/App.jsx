import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "@fontsource-variable/inter";
import "@fontsource/merriweather";
import PostsList from "./components/PostsList";
import PostDetail from "./components/PostDetail";
import LoginForm from "./components/LoginForm";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/posts/:post_id" element={<PostDetail />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
