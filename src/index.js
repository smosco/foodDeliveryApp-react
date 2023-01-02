import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/Feed";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import NotFound from "./pages/NotFound";
import CreateItem from "./pages/CreateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Feed /> },
      {
        path: "/createItem",
        element: <CreateItem />,
      },
      {
        path: "/mycart/:userId",
        element: <MyCart />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
