import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import CardShimmer from "./CardShimmer";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const options = {
          method: "GET",
          url: `${process.env.REACT_APP_HOME_URL}?page=1`,
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        };
        const response = await axios.request(options);
        setData(response.data.results);
      } catch (err) {
        setError(err);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch data when page is updated
  useEffect(() => {
    if (page === 1) return; // Skip the initial fetch

    const fetchMoreData = async () => {
      try {
        const options = {
          method: "GET",
          url: `${process.env.REACT_APP_HOME_URL}?page=${page}`,
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        };
        const response = await axios.request(options);
        setData((prevData) => [...prevData, ...response.data.results]);
      } catch (err) {
        setError(err);
      }
    };

    fetchMoreData();
  }, [page]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.length) {
    return (
        <Loading/>
    );
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scroll smooth
    });
  };

  return (
    <div className="px-2 py-4">
      <h1 className="text-xl py-2 border-b-2 border-cyan-300 inline-block">
        Trending Movies and Shows
      </h1>
      <div className="py-4 md:flex md:flex-wrap md:justify-center">
        {data.map((item, index) => (
          <Link key={`${item.id}-${index}`} to={item.media_type == "movie" ? `/movieplayer/${item.id}`:(item.media_type == "tv"? `/seriesplayer/${item.id}` : "")}  onClick={scrollToTop} >
            {
              (()=>{
                console.log(item);
              })()
            }
          <Card  cardData={item}></Card>
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

export default Home;
