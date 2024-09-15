import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useFetchData from "../utils/useFetchData";

const Movies = () => {
  const [page, setPage] = useState(1);
  let [data,error]= useFetchData(process.env.REACT_APP_MOVIES_URL,page);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <Loading />;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };

  return (
    <div className="px-2 py-4">
      <h1 className="text-xl py-2 border-b-2 border-cyan-300 inline-block">
        Trending Movies
      </h1>
      <div className="py-4 md:flex md:flex-wrap md:justify-center">
        {data.map((item, index) => (
          <Link
            to={`/movieplayer/${item.id}`}
            key={item.id}
            onClick={scrollToTop}
          >
            <Card cardData={item}></Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="mx-auto bg-green-500 text-black px-4 py-2"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Movies;
