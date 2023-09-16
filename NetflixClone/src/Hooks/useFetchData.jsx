import { useState, useEffect } from "react";

const useFetchData = (movie, series, genre ) => {

    const [data, setData] = useState()

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzM3MTIxZTE0MzZiOTVhNjlhZTc5Y2NkNmJjOGY0ZSIsInN1YiI6IjYzOTEwNTk5MDkxZTYyMDA3ZmE0ZWE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iVOBV5t6MX4Y3sZu1EKYcU5IVZ_jvQUMRHALDvT-8pY'
        }
      };

      let query = ''

      
      
      useEffect(() => {

        if(movie){
            if(!genre){
                query = "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
            }
            else{
                console.log("genre")
                query =`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`
            }  
        }

        if(series){
            if(!genre){
                query = "tv/top_rated?language=en-US&page=1"
            }
            else{
                query =`/tv/popular?language=en-US&page=1`
            }  
        }

        fetch(`https://api.themoviedb.org/3/${query}`, options)
          .then(response => response.json())
          .then(response => setData(response.results))
          .catch(err => console.error(err));

      }, [movie, series, genre])

      return {data}
}

export default useFetchData