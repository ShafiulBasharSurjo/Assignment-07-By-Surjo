import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import FriendProvider from "./Context/FriendProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={Routes} />,
      <ToastContainer />
    </FriendProvider>
  </StrictMode>,
);
