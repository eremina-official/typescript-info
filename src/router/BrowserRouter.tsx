import {
  createBrowserRouter,
} from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

export default browserRouter;
