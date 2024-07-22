import Navbar from "./components/Navbar";
import MovieOrSeries from "./components/MovieOrSeries";
import { Outlet } from "react-router-dom";

const App = () => {
  
  return (
        <div className="">
          <Navbar />
          <MovieOrSeries />
          <Outlet/>
        </div>
  );
};

export default App;
