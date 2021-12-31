import React, { useState } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.lesngth - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return <header></header>;
}

export default Banner;
