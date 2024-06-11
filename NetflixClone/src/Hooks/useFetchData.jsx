import { useState, useEffect } from "react";

const useFetchData = (props) => {
  const [data, setData] = useState();
  const page = props.page ? `${props.page}` : "1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzM3MTIxZTE0MzZiOTVhNjlhZTc5Y2NkNmJjOGY0ZSIsInN1YiI6IjYzOTEwNTk5MDkxZTYyMDA3ZmE0ZWE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iVOBV5t6MX4Y3sZu1EKYcU5IVZ_jvQUMRHALDvT-8pY",
    },
  };

  const buildQuery = () => {
    if (props.similar) {
      return `${props.movie ? "movie" : "tv"}/${
        props.id
      }/similar?language=en-US&page=1`;
    } else if (props.search) {
      return `search/multi?query=${props.search}&include_adult=false&language=en-US&page=1`;
    } else {
      return props.movie ? buildMovieQuery() : buildTVQuery()
    }
  };

  const buildMovieQuery = () => {
    switch (props.params) {
      case "Now Playing":
        return "movie/now_playing?language=en-US&page=1";
      case "Popular":
        return "movie/popular?language=en-US&page=1";
      case "Top Rated":
        return "movie/top_rated?language=en-US&page=1";
      case "Upcoming":
        return "movie/upcoming?language=en-US&page=1";
      case null:
        return "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
      default:
        return `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${props.params}`;

    }
  };

  const buildTVQuery = () => {
    switch (props.params) {
      case "Airing Today":
        return "tv/airing_today?language=en-US&page=1";
      case "On The Air":
        return "tv/on_the_air?language=en-US&page=1";
      case "Popular":
        
        return "tv/popular?language=en-US&region=US&page=1";
      case "Top Rated":
        return "tv/top_rated?language=en-US&page=1";
      case null:
        return "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
      default:
        return `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${props.params}`;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${buildQuery()}`,
        options
      );
      console.log(buildQuery());
      const data = await response.json();

      setData(data);
    }

    fetchData();
  }, [props.movie, props.params, props.page, props.search]);

  return data;
};

export default useFetchData;
