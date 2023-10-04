import { useState, useEffect } from "react";

const useFetchData = (movie = null, similar = null, params = null, number = 20, id = null) => {

    const [data, setData] = useState()

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzM3MTIxZTE0MzZiOTVhNjlhZTc5Y2NkNmJjOGY0ZSIsInN1YiI6IjYzOTEwNTk5MDkxZTYyMDA3ZmE0ZWE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iVOBV5t6MX4Y3sZu1EKYcU5IVZ_jvQUMRHALDvT-8pY'
        }
      };

      let query = ''

      const buildQuery = () => {
        if (similar) {
          return `movie/${id}/similar?language=en-US&page=1`;
        } else if (movie) {
          return buildMovieQuery();
        } else {
          return buildTVQuery();
        }
      };
      
      const buildMovieQuery = () => {
        switch (params) {
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
                return `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`;
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
          .then(response => setData(response.results.slice(0, number)))
          .catch(err => console.error(err));

          
        
        // if(!similar)
        //     {if(movie){
        //         if(status){
        //             switch(status){
        //                 case 'Now Playing':
        //                     query = 'movie/now_playing?language=en-US&page=1'
        //                     break;
        //                 case 'Popular':
        //                     query = 'movie/popular?language=en-US&page=1'
        //                     break;
        //                 case 'Top Rated':
        //                     query = 'movie/top_rated?language=en-US&page=1' 
        //                     console.log("TopRAted")
        //                     break;
        //                 case 'Upcoming':
        //                     query = 'movie/upcoming?language=en-US&page=1'
        //                 default:
        //                     query = 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
        //                     break
        //             }
        //         }else if(genre){
        //             console.log("genre")
        //             query =`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`
        //         }  else {
        //             query = 'movie/popular?language=en-US&page=1' 
        //         }
        //     }else{
        //         switch(status){
        //             case 'Airing Today':
        //                 query = 'tv/airing_today?language=en-US&page=1'
        //                 break;
        //             case 'On The Air':
        //                 query = 'tv/on_the_air?language=en-US&page=1'
        //                 break;
        //             case 'Popular':
        //                 query = 'tv/popular?language=en-US&region=US&page=2' 
        //                 break;
        //             case 'Top Rated':
        //                 query = 'tv/top_rated?language=en-US&page=1'
        //             default: 
        //                 query = 'discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
        //                 break
        //         }
        //     }
        // } else{
        //     query = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
        //     console.log(id)
        // }

        

      }, [movie, params])
      console.log(data)

      return {data}
}

export default useFetchData