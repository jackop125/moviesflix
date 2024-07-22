import { createRoot } from "react-dom/client";
import App from "./App";
import {  StrictMode } from "react";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import MoviePlayer from "./components/MoviePlayer";
import SeriesPlayer from "./components/SeriesPlayer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
    ],
    errorElement:<ErrorPage/>
  },
  {
    path:"/movieplayer/:id",
    element:<MoviePlayer/>
  },
  {
    path:"/seriesplayer/:id",
    element:<SeriesPlayer/>
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>
);
