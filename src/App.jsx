import { FaReact } from "react-icons/fa";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

// Layout
import MainLayout from "./Layout/MainLayout";

// pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/product";
import Info from "./pages/Info";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/info",
          element: <Info />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
