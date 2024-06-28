import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import { UserPage } from "./pages/UserPage";
import { BlogPostPages } from "./pages/BlogPostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/blog-post",
        element: <BlogPostPages />,
      },
    ],
  },
  // {
  //   path: "/users",
  //   element: <UserPage />,
  // },
  // {
  //   path: "/blog-post",
  //   element: <BlogPostPages />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
