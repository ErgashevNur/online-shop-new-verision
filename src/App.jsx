import { FaReact } from "react-icons/fa";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

// Layout
import MainLayout from "./Layout/MainLayout";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";

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
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
