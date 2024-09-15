import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Card from "./Card";

const SeriesSidebar = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${props.id}/recommendations`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_API_TOKEN,
        },
      };
  
      axios
        .request(options)
        .then((response) => {
          // console.log(response.data);
          setData(response.data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }, [props.id]);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // This makes the scroll smooth
      });
    };
  
    if (data.length < 1) {
      return <p>Failed to Fetch</p>
    }
    return (
      <>
      <h2 className="text-lg mx-2"> More Related</h2>
        {data.map((item, index) => (
          <Link to={`/seriesplayer/${item.id}`} key={item.id} onClick={scrollToTop}>
            <Card cardData={item}></Card>
          </Link>
        ))}
      </>
    );
}

export default SeriesSidebar