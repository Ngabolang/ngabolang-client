import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

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
import AddAdminPage from "./pages/AddAdminPage";
import CategoriesPage from "./pages/CategoriesPage";
import ClosedTripsPage from "./pages/ClosedTripsPage";
import ChatPage from "./pages/ChatPage";
import GroupChat from "./pages/GroupChat";
import AddCategory from "./pages/AddCategory";
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
      {
        path: "/newAdmin",
        element: <AddAdminPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/tripClose",
        element: <ClosedTripsPage />,
      },
      {
        path: "/chats",
        element: <ChatPage />,
      },
      {
        path: "/groupChats/:tripId",
        element: <GroupChat />,
      },
      {
        path: "/newCategory",
        element: <AddCategory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
