import { createRoot } from "react-dom/client";
import App from "./App";
import {  lazy, StrictMode } from "react";
import Home from "./components/Home";
// import Movies from "./components/Movies";
// import Series from "./components/Series";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import MoviePlayer from "./components/MoviePlayer";
import SeriesPlayer from "./components/SeriesPlayer";
// import Search from "./components/Search";
import { Suspense } from "react";
const Movies = lazy(()=>import("./components/Movies"));
const Series = lazy(()=>import("./components/Series"));
const Search = lazy(()=>import("./components/Search"));
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
        element: <Suspense fallback={<p>Loading...</p>}><Movies /></Suspense>,
      },
      {
        path: "/series",
        element:<Suspense fallback={<p>Loading...</p>}><Series /></Suspense>,
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
  },
  {
    path:"/search",
    element:<Suspense fallback={<p>Loading...</p>}><Search/></Suspense>
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>
);
