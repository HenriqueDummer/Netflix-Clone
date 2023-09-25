import React, { useEffect, useState } from 'react'
import useFetchData from '../../Hooks/useFetchData'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const About = () => {
    const {id} = useParams()

    const [data, setData] = useState()
    const [trailerPath, setTrailerPath] = useState()
    const [videos, setVideos] = useState([])
   
    
   
    useEffect(() => {
        const fetchData = async () => {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzM3MTIxZTE0MzZiOTVhNjlhZTc5Y2NkNmJjOGY0ZSIsInN1YiI6IjYzOTEwNTk5MDkxZTYyMDA3ZmE0ZWE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iVOBV5t6MX4Y3sZu1EKYcU5IVZ_jvQUMRHALDvT-8pY'
            },
          };
      
          try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
            const movieData = await response.json();
            setData(movieData);
      
            const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
            const videosData = await videosResponse.json();
            setVideos(videosData.results);
      
            for (let i = 0; i < videosData.results.length; i++) {
              if (videosData.results[i].type === "Trailer") {
                setTrailerPath(videosData.results[i].key);
                break; 
              }
            }
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, [id]);

    console.log(data)
  return (
    <div className='watch'>
        <Link to={'/'}><button id='go_back_btn'><i className='bi bi-arrow-left-short'></i></button></Link>
        
            {/* <iframe src={`https://www.youtube.com/embed/${trailerPath}?rel=0&showinfo=0&autohide=1&controls=0&autoplay=1&disablekb=1&cc_load_policy=3&modestbranding=1`}
                frameborder="0"
                showinfo="0"
            >
            </iframe> */}
            <div className="header_container">
                <div className="header_wrapper">
                    {data && 
                        <div className='header_movie'  style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}}>
                            <div className="header_filter2"></div>
                            <div className="movie_infos">
                                <h2>{data.original_title}</h2>
                                <p>{data.overview}</p>
                                <span>
                                    <p>{data.release_date.split('').slice(0,4).join('')}</p>
                                    <div id='slash'></div>
                                    {data.genres.map((genre) => <span>{genre.name}</span>)}
                                </span>
                            </div>
                        </div>
                    }
                </div>  
            </div>
            <div className="link_trailer_container">
                <Link to={'/watch/:path'} className='watch_trailer_btn'>
                    <button>
                        <div>
                            Watch the trailer 
                            <i class='bx bx-movie-play' ></i>
                        </div>  
                    </button></Link>
            </div>
        </div>
  )
}

export default About