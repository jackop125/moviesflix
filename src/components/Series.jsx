import React, { useEffect, useState } from "react";
// import axios from "axios";
import Card from "./Card";
// import CardShimmer from "./CardShimmer";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
const Series = () => {

  const [page, setPage] = useState(1);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  const [data,error] = useFetchData(process.env.REACT_APP_SERIES_URL,page);
  // Fetch initial data
  // useEffect(() => {
  //   const fetchInitialData = async () => {
  //     try {
  //       const options = {
  //         method: "GET",
  //         url: `${process.env.REACT_APP_SERIES_URL}?page=1`,
  //         params: { language: "en-US" },
  //         headers: {
  //           accept: "application/json",
  //           Authorization: process.env.REACT_APP_API_TOKEN,
  //         },
  //       };
  //       const response = await axios.request(options);
  //       console.log(response.data.results);
  //       setData(response.data.results);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   };

  //   fetchInitialData();
  // }, []);

  // // Fetch data when page is updated
  // useEffect(() => {
  //   if (page === 1) return; // Skip the initial fetch

  //   const fetchMoreData = async () => {
  //     try {
  //       const options = {
  //         method: "GET",
  //         url: `${process.env.REACT_APP_SERIES_URL}?page=${page}`,
  //         params: { language: "en-US" },
  //         headers: {
  //           accept: "application/json",
  //           Authorization: process.env.REACT_APP_API_TOKEN,
  //         },
  //       };
  //       const response = await axios.request(options);
  //       setData((prevData) => [...prevData, ...response.data.results]);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   };

  //   fetchMoreData();
  // }, [page]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return (
        <Loading/>
    );
  }

  return (
    <div className="px-2 py-4">
      <h1 className="text-xl py-2 border-b-2 border-cyan-300 inline-block">
        Trending Web-Series 
      </h1>
      <div className="py-4 md:flex md:flex-wrap md:justify-center">
        {data.map((item, index) => (
          <Link key={`${item.id}-${index}`} to={`/seriesplayer/${item.id}`}>
          <Card  cardData={item} media_type="tv"></Card>
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
  )
}

export default Series;