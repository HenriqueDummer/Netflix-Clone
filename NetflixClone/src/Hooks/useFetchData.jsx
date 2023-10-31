import { useState, useEffect } from "react";

const useFetchData = (props) => {

    const [data, setData] = useState()

    const genres = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzM3MTIxZTE0MzZiOTVhNjlhZTc5Y2NkNmJjOGY0ZSIsInN1YiI6IjYzOTEwNTk5MDkxZTYyMDA3ZmE0ZWE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iVOBV5t6MX4Y3sZu1EKYcU5IVZ_jvQUMRHALDvT-8pY'
        }
      };

      const buildQuery = () => {
        if (props.similar) {
          return `movie/${props.id}/similar?language=en-US&page=1`;
        } else if (props.movie) {
          return buildMovieQuery();
        } else {
          return buildTVQuery();
        }
      };
      
      const buildMovieQuery = () => {
        switch (props.params) {
            case 'Now Playing':
                return 'movie/now_playing?language=en-US&page=1';
            case 'Popular':
                return 'movie/popular?language=en-US&page=1';
            case 'Top Rated':
                return 'movie/top_rated?language=en-US&page=1';
            case 'Upcoming':
                return 'movie/upcoming?language=en-US&page=1';
            case null:
                return 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
            default:
                return `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${props.params}`;
        }
      };
      
      const buildTVQuery = () => {
        switch (options.status) {
          case 'Airing Today':
            return 'tv/airing_today?language=en-US&page=1';
          case 'On The Air':
            return 'tv/on_the_air?language=en-US&page=1';
          case 'Popular':
            return 'tv/popular?language=en-US&region=US&page=2';
          case 'Top Rated':
            return 'tv/top_rated?language=en-US&page=1';
          default:
            return 'discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
        }
      };
      
      useEffect(() => {

        fetch(`https://api.themoviedb.org/3/${buildQuery()}`, options)
          .then(response => response.json())
          .then(response => setData(response.results.slice(0, props.number)))
          .catch(err => console.error(err));

      }, [props.movie, props.params])


      return {data}
}

export default useFetchData