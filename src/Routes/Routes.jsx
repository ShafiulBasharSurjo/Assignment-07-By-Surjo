import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Stats from "../pages/Stats/Stats";
import FreindsDetails from "../pages/FriendsDetails/FreindsDetails";
import TimeLine from "../pages/TimeLine/TimeLine";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/fdetails",
        element: <FreindsDetails />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
