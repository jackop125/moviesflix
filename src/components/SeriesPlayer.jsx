import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import SeriesSidebar from "./SeriesSidebar";
const SeriesPlayer = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [SeasonEpisode,setSeasonEpisode] = useState({
    Season:1,
    Episode:1
  })
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}`,
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

      setSeasonEpisode({
        Season:1,
        Episode:1
      })
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="md:flex px-1 " id="MoviePlayer">
        <div className=" md:w-2/3 bg-slate-900 py-3 px-1 mx-1 my-3 aspect-video">
          <iframe
            className="w-full h-60 my-1   md:min-h-[450px] mx-auto"
            src={`https://autoembed.co/tv/tmdb/${id}-${SeasonEpisode.Season}-${SeasonEpisode.Episode}`}
            frameborder="0"
            allowFullScreen
          ></iframe>
          <hr />
          <div className="px-2 py-2">
            <h1 className="text-xl">{movieData.title || movieData.name}</h1>
            <div className="md:flex justify-evenly">
                    <div className="m-1">
                        <button className="px-2 py-1 bg-green-500 text-black mx-1 rounded-md" onClick={()=>{
                            setSeasonEpisode((prevData)=>{
                                return {
                                    ...prevData,
                                    Season:SeasonEpisode.Season-1
                                }
                            })
                        }}>-1</button>
                        <label className="mx-1">Season</label>
                        <input type="number" name="Season" value={ SeasonEpisode.Season} className="text-black px-2 py-1 w-14 outline-none" onChange={(e)=>{
                            setSeasonEpisode((prevData)=>{
                                return {
                                    ...prevData,
                                    Season:e.target.value
                                }
                            })
                        }}/>
                        <button className="px-2 py-1 bg-green-500 text-black mx-1 rounded-md" onClick={()=>{
                            setSeasonEpisode((prevData)=>{
                                return {
                                    ...prevData,
                                    Season:SeasonEpisode.Season+1
                                }
                            })
                        }}>+1</button>
                    </div>
                    <div className="m-1">
                        <button className="px-2 py-1 bg-green-500 text-black mx-1 rounded-md" onClick={()=>{
                            setSeasonEpisode((prevData)=>{
                                return {
                                    ...prevData,
                                    Episode:SeasonEpisode.Episode-1
                                }
                            })
                        }}>-1</button>
                        <label className="mx-1">Episode</label>
                        <input type="number" value={ SeasonEpisode.Episode} className="text-black px-2 py-1 w-14 outline-none" onChange={(e)=>{
                            setSeasonEpisode((prevData)=>{
                                return {
                                    ...prevData,
                                    Episode:e.target.value
                                }
                            })
                        }}/>
                        <button className="px-2 py-1 bg-green-500 text-black mx-1 rounded-md" onClick={()=>{
                            setSeasonEpisode((prevData)=>{
                                return {
                                    ...prevData,
                                    Episode:SeasonEpisode.Episode+1
                                }
                            })
                        }}>+1</button>
                    </div>
                </div>
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
        <div className="md:w-1/3 bg-slate-900 py-3 px-1 mx-1 my-3 md:max-h-screen overflow-y-scroll m">
          <SeriesSidebar id={id} />
        </div>
      </div>
    </>
  );
};

export default SeriesPlayer;
