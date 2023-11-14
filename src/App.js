import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Error } from "./Components/Error";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Children } from "react/cjs/react.production.min";

// food ordering app

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
       <Outlet/>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>, // parent
    errorElement: <Error/>,
    children : [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
