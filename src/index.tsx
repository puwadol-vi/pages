import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "./pages/UserPage.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />, // Home page listing users
    },
    {
      path: "/user/:id", // User page with ID
      element: <UserPage />,
    },
    {
      path: "/app",
      element: <App />, // Home page listing users
    },
  ],
  {
    basename: "/pages",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
