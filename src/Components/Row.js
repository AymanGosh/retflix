import React, { useState, useEffect } from "react";
import axios from "../axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img key={movie.id} src={movie.poster_path} alt={movie.name} />
        ))}
      </div>
    </div>
  );
}

export default Row;
