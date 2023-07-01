import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import HomeView from "./views/HomeView";
import MenuFormView from "./views/MenuFormView";
import CategoryView from "./views/CategoryView";
import LoginView from "./views/loginView";
import CategoryFormView from "./views/CategoryFormView";
import RegisterCustomerView from "./views/RegisterCustomerView";
import LandingPage from "./views/LandingPage";

const router = createBrowserRouter([
  {
    element: <App />,
    // loader: () => {
    //   let token = localStorage.userId;
    //   if (!token) {
    //     return redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/home",
        element: <HomeView />,
      },
      {
        path: "/menu/form",
        element: <MenuFormView />,
      },
      {
        path: "/menu/form/:id",
        element: <MenuFormView />,
      },
      {
        path: "/category",
        element: <CategoryView />,
      },
      {
        path: "/category/form",
        element: <CategoryFormView />,
      },
      {
        path: "/category/form/:id",
        element: <CategoryFormView />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
    loader: () => {
      let token = localStorage.userId;
      if (token) {
        return redirect("/menu");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterCustomerView />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },




  
  // {
  //   path: "/",
  //   loader: () => {
  //     let token = localStorage.userId;
  //     if (token) {
  //       return redirect("/menu");
  //     } else {
  //       return redirect("/login");
  //     }
  //     return null;
  //   },
  // },
]);

export default router;
