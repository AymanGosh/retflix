import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let rand = Math.floor(Math.random() * 10);

      setMovie(request.data.results[rand]);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, numChar) {
    return str?.length > numChar ? str.substr(0, numChar - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play Now</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
