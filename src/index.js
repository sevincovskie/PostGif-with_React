import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import PostProvider from "./context/Postprovider";
import Home from "./components/Home"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />, 

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PostProvider>
    <RouterProvider router={router} />
  </PostProvider>
);
