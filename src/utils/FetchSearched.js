
import axios from 'axios';
const FetchSearched = async (name,searchFor) => {
    try {
        let searchUrl = "";
        if (searchFor == "SERIES") {
          searchUrl = `https://api.themoviedb.org/3/search/tv?query=${Name}`;
        } else if (searchFor == "MOVIE") {
          searchUrl = `https://api.themoviedb.org/3/search/movie?query=${Name}`;
        } else {
          searchUrl = `https://api.themoviedb.org/3/search/multi?query=${Name}`;
        }
        const options = {
          method: "GET",
          url: searchUrl,
          headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_API_TOKEN,
          },
        };
        const response = await axios.request(options);
        console.log(response.data.results);
        setData(response.data.results);
      } catch (err) {
        alert(err);
      }
}

export default FetchSearched