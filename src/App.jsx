import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "@fontsource-variable/inter";
import "@fontsource/merriweather";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
