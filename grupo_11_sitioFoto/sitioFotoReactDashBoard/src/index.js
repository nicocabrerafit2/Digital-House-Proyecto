import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

import NotFound from "./components/NotFound";
import Users from "./components/Users";
import Products from "./components/Products";
import MainBody from "./components/MainBody";
import UserById from "./components/UserById";
import ProductById from "./components/ProductByld";
import TopBar from "./components/TopBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody />,
    errorElement: <NotFound />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/users/:usuarioID",
    element: <UserById />,
  },
  {
    path: "product/:productoID",
    element: <ProductById />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
