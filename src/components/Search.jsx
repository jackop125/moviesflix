import React,{useEffect, useState} from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import { scrollToTop } from "./constants";
const Search = () => {
    const [searchName,setSearchName] = useState("")
    const [searchFor,setSearchFor] = useState("ALL")
    const [data,setData] = useState([]);
    const getSearchResult = async(Name)=>{
        try{
            const options = {
                method:"GET",
                url:`https://api.themoviedb.org/3/search/multi?query=${Name}`,
                headers: {
                    accept: "application/json",
                    Authorization: process.env.REACT_APP_API_TOKEN,
                  }
            }
            const response = await axios.request(options);
            console.log(response.data.results);
            setData(response.data.results)
        }catch(err){
            alert(err)
        }
    }
    useEffect(()=>{
        // getSearchResult(searchName);
    },[searchName,searchFor])
    return (
      <>
        <Navbar />
        <div className="md:flex md:justify-center p-2">
          <input
            type="text"
            className="w-3/4 text-lg py-1 md:w-5/12 outline-none text-black px-2 rounded-l-3xl"
            value={searchName}
            onChange={(e)=>{setSearchName(e.target.value)}}
          />
          <button className="p-2 bg-green-500 w-1/4 rounded-r-3xl" onClick={()=>{
            getSearchResult(searchName);
          }}>Search</button>
        </div>
        <div className="flex justify-center">
          <div className="border  border-cyan-300">
            <button className={`m-1 p-1 ${searchFor === "ALL"?"bg-cyan-300 text-black":""}` } onClick={()=>{setSearchFor("ALL")}}>ALL</button>
            <button className={`m-1 p-1 ${searchFor === "MOVIE"?"bg-cyan-300 text-black":""}` } onClick={()=>{setSearchFor("MOVIE")}}>MOVIE</button>
            <button className={`m-1 p-1 ${searchFor === "SERIES"?"bg-cyan-300 text-black":""}` } onClick={()=>{setSearchFor("SERIES")}}>SERIES</button>
          </div>
        </div>

        <div className="py-4 md:flex md:flex-wrap md:justify-center">
        {data.map((item, index) => (
          <Link key={`${item.id}-${index}`} to={item.media_type == "movie" ? `/movieplayer/${item.id}`:(item.media_type == "tv"? `/seriesplayer/${item.id}` : "")} onClick={scrollToTop} >
            {
              (()=>{
                console.log(item);
              })()
            }
          <Card  cardData={item}></Card>
          </Link>
        ))}
      </div>
      </>
    );
}

export default Search