import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { MainLayout } from "./layouts/main.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { Product } from "./pages/OneProduct/OneProduct.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([


  
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
