import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import HomeView from "./views/HomeView";
import LoginView from "./views/loginView";
import RegisterCustomerView from "./views/RegisterCustomerView";
import LandingPage from "./views/LandingPage";
import MyTrip from "./views/MyTripMyAdventure";
import TalkChat from "./views/TalkChat";
import ImageUploader from "./views/example";
import TripDetail from "./views/TripDetail";

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
      },
      {
        path: "/chat",
        element: <TalkChat />,
      },
      {
        path: "/trip/:id",
        element: <TripDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
    // loader: () => {
    //   let token = localStorage.userId;
    //   if (token) {
    //     return redirect("/menu");
    //   }
    //   return null;
    // },
  },
  {
    path: "/register",
    element: <RegisterCustomerView />,
  },
  {
    path: "/test",
    element: <ImageUploader />,
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
