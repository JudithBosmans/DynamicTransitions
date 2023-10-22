import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./error-page";
import App from "./components/App";

import Cherry from "./components/Cherry";
import Bonsai from "./components/Bonsai";
import Chamomile from "./components/Chamomile";
import Lilly from "./components/Lilly";
import Chrys from "./components/Chrys";
import Outro from "./components/Outro";
import Button from "./components/Button";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/CherryPage",
        element: <Cherry />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/BonsaiPage",
        element: <Bonsai />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/ChamomilePage",
        element: <Chamomile />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/LillyPage",
        element: <Lilly />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/ChrysPage",
        element: <Chrys />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/OutroPage",
        element: <Outro />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/ButtonPage",
        element: <Button />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
