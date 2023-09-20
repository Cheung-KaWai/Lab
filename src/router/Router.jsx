import React from "react";
import { ImageSlider } from "../lab/ImageSlider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ImageSlider />,
    },
  ]);

  return <RouterProvider router={router} />;
};
