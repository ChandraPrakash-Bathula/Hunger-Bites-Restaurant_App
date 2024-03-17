import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header"; //We can do this too instead of the below two import structures.
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

const WebsiteLayout = () => {
  return (
    // <React.Fragment>
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
    // </React.Fragment>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
