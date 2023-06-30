import React from "react";
import ReactDOM from "react-dom/client";

// import './index.css'

import { Provider } from "react-redux";
import store from "./stores";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <App />,
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
