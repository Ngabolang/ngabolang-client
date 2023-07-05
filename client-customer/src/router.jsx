import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import HomeView from "./views/HomeView";
import LoginView from "./views/loginView";
import RegisterCustomerView from "./views/RegisterCustomerView";
import LandingPage from "./views/LandingPage";
import MyTrip from "./views/MyTripMyAdventure";
import TalkChat from "./views/TalkChat";
import TripDetail from "./views/TripDetail";
import Categories from "./views/CategoriesView";
import Trips from "./views/TripsView";

const router = createBrowserRouter([
  {
    element: <App />,
    // loader: () => {
    //   let token = localStorage.access_token;
    //   if (!token) {
    //     return redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <HomeView />,
      },
      {
        path: "/mytrip",
        element: <MyTrip />,
        loader: () => {
          let token = localStorage.access_token;
          if (!token) {
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "/chat/:chatId",
        element: <TalkChat />,
      },
      {
        path: "/trip/detail/:id",
        element: <TripDetail />,
      },
      {
        path: "/trip/",
        element: <Trips />,
      },
      {
        path: "/trip/:category",
        element: <Trips />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
    loader: () => {
      let token = localStorage.access_token;
      if (token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterCustomerView />,
    loader: () => {
      let token = localStorage.access_token;
      if (token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
