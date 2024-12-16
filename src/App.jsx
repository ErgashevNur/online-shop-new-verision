import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import React from "react";

// Layout
import MainLayout from "./Layout/MainLayout";

// pages
import {
  Info,
  Cart,
  Contact,
  Home,
  Login,
  Register,
  SingleProduct,
  Product,
} from "./pages";

// Loader
import { loader as HomeLoader } from "./pages/Home";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

import ProtectRoutes from "./components/ProtectRoutes";

import { useGlobalContext } from "./hooks/useGlobalContext";

function App() {
  const { user, authReady } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoutes user={user}>
          <MainLayout />
        </ProtectRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
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
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/singleproduct/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
