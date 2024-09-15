import { useEffect,useState } from "react";
import axios from "axios";

const useFetchData = (url,page) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    fetchInitialData();
  },[]);

  useEffect(() => {
    if (page === 1) return; // Skip the initial fetch
    fetchMoreData();
  }, [page]);

 

  const fetchInitialData = async () => {
    try {
      const options = {
        method: "GET",
        url: `${url}?page=${page}`,
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

  const fetchMoreData = async () => {
    try {
      const options = {
        method: "GET",
        url:  `${url}?page=${page}`,
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

  return [data,error];
}

export default useFetchData;