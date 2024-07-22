import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import MovieSidebar from "./MovieSidebar";
const MoviePlayer = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_API_TOKEN,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setMovieData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  
  return (
    <>
      <Navbar />
      <div className="md:flex px-1 " id="MoviePlayer">
        <div className=" md:w-2/3 bg-slate-900 py-3 px-1 mx-1 my-3 aspect-video">
          <iframe
            className="w-full h-60 my-1   md:min-h-[450px] mx-auto"
            src={`https://autoembed.co/movie/tmdb/${id}`}
            frameborder="0"
            allowFullScreen
          ></iframe>
          <hr />
          <div className="px-2 py-2">
            <h1 className="text-xl">{movieData.title}</h1>
            <div className="flex justify-evenly text-xs text-slate-300 py-3">
              <p>{movieData?.original_language?.toUpperCase()}</p>
              <p>{movieData?.vote_average} </p>
              <p>
                {new Date(
                  movieData?.release_date || movieData.first_air_date
                ).getFullYear()}
              </p>
              <p>{movieData?.runtime} min</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            OVERVIEW :-&nbsp;{movieData?.overview}
          </p>
        </div>
        <div className="md:w-1/3 bg-slate-900 py-3 px-1 mx-1 my-3 md:max-h-screen overflow-y-scroll m" >
          <MovieSidebar id={id}/>
        </div>
      </div>
    </>
  );
};

export default MoviePlayer;
