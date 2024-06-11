import React, { useEffect, useState } from 'react'
import useFetchData from '../../Hooks/useFetchData'
import { useNavigate, useParams } from 'react-router-dom'

import Carousel from '../../Components/Carousel'
import LoadingSpin from '../../Components/LoadingSpin'
import AboutHeader from '../../Components/AboutHeader'

const About = () => {

    let {id} = useParams()
    const isMovie = id.split('')[0] === "m" ? true : false
    id = id.split('').slice(1, id.length).join('')

    const [castData, setCastData] = useState()
    const [trailerPath, setTrailerPath] = useState()
    const [videos, setVideos] = useState([])

    const [moviesOnCarousel, setMoviesOnCarousel] = useState(Math.round(((window.innerWidth - 85) / 4) / 100))
    
    const [watchingTrailer, setWatchingTrailer] = useState()
    
    const navigate = useNavigate()

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
            const videosResponse = await fetch(`https://api.themoviedb.org/3/${isMovie ? "movie" : "tv"}/${id}/videos?language=en-US`, options);
            const videosData = await videosResponse.json();
            setVideos(videosData.results);

            const castResponse = await fetch(`https://api.themoviedb.org/3/${isMovie ? "movie" : "tv"}/${id}/credits?language=en-US`, options);
            const castDataRes = await castResponse.json();
            setCastData(castDataRes.cast.slice(0, 10));

            if(videosData){
              for (let i = 0; i < videosData.results.length; i++) {
                if (videosData.results[i].type === "Trailer") {
                  setTrailerPath(videosData.results[i].key);
                  break; 
                }
              }
            }
  
          } catch (error) {
            console.log(error);
          }
        };

        
        fetchData();
      }, [id]);

      useEffect(() => {
        const handleResize = () => {
          setMoviesOnCarousel(Math.floor(((window.innerWidth - 85) / 4) / 100));
        };
      
        window.addEventListener('resize', handleResize);
      
        handleResize();
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <>
    {/* {fetchError && <Navigate to="/" />} */}
    <div className='about'>
        <button id='go_back_btn' onClick={() => navigate(-1)}><i className='bi bi-arrow-left-short'></i></button>
        {watchingTrailer && 
          <div className="trailer_container" onClick={() => setWatchingTrailer(false)}>
              <iframe className='trailer' src={`https://www.youtube.com/embed/${trailerPath}?rel=0&showinfo=0&autohide=1&controls=0&autoplay=1&disablekb=1&cc_load_policy=3&modestbranding=1`}
                    frameborder="0"
                    showinfo="0"
                >
              </iframe>
              <button id='close_trailer'><i class="bi bi-x-circle-fill"></i></button>
          </div>
        }

        <AboutHeader isMovie={isMovie} id={id}/> 

          {videos.length != 0 && 
            <div className="link_trailer_container">
              <button onClick={() => setWatchingTrailer(true)}>
                <div>
                  <p>Watch the trailer </p>
                  <i class='bx bx-movie-play' ></i>
                </div>  
              </button>  
            </div>
          }

          {castData &&
            <div className="cast_container">
              <div className="cast_actors">
                {castData.map((actor) => {
                  return(
                    <>
                      <div className="actor">
                        <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt="" />
                        <p>{actor.name}</p>
                        <span>as {actor.character}</span>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          }

          <div className="carousel_container">
            <div className="carousel">
              <h3>Resembling</h3>
              <Carousel dataProps = {{movie: isMovie, similar: true, id: id}}/>
            </div>
          </div>
        </div> 
    </>
    
  )
}

export default About