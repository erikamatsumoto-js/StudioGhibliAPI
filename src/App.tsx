import Home from "./Home";
import Login from "./Login";
import Header from "./components/Header";
import FilmDetail from "./FilmDetail";
import Footer from "./components/Footer";

import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

function Homepage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "filmdetail/:id", element: <FilmDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
