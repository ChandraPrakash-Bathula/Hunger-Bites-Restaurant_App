import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header"; //We can do this too instead of the below two import structures.
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";

const WebsiteLayout = () => {
  return (
    // <React.Fragment>
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
    // </React.Fragment>
  );
};

/* <About />
<BodyComponent />
<Contact /> */

// const appRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <WebsiteLayout />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);

//All the children in the routes goes into the outlet.
