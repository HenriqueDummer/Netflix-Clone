import { useState, useEffect } from "react";

const useFetchData = (endPoint, genre) => {
  const [data, setData] = useState();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzM3MTIxZTE0MzZiOTVhNjlhZTc5Y2NkNmJjOGY0ZSIsInN1YiI6IjYzOTEwNTk5MDkxZTYyMDA3ZmE0ZWE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iVOBV5t6MX4Y3sZu1EKYcU5IVZ_jvQUMRHALDvT-8pY",
    },
  };

  useEffect(() => {
    async function fetchData() {

      const response = await fetch(
        `https://api.themoviedb.org/3/${endPoint}`,
        options
      );
      const data = await response.json();

      if (data) {
        setData(data);
      }

      console.log(data)
    }

    fetchData();
  }, [endPoint, genre]);

  return data;
};

export default useFetchData;
