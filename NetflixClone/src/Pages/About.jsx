import React, { useEffect, useState } from 'react'
import useFetchData from '../Hooks/useFetchData'
import { useNavigate, useParams } from 'react-router-dom'

import Carousel from '../Components/Carousel'
import LoadingSpin from '../Components/LoadingSpin'
import AboutHeader from '../Components/AboutHeader'

import REQUEST_END_POINTS from '../data/RequestEndPoints'

const About = () => {

  //-------------------------------------------------------
    let {id} = useParams()
    const showFormat = id.split('')[0] === "m" ? "movie" : "tv"
    id = id.split('').slice(1, id.length).join('')
  //-------------------------------------------------------

    const movieInfo = useFetchData(REQUEST_END_POINTS[showFormat].info(id))
    let trailerPath = useFetchData(REQUEST_END_POINTS[showFormat].trailer(id))
    let castData = useFetchData(REQUEST_END_POINTS[showFormat].cast(id))

    castData = castData?.cast.splice(0, 10)
    trailerPath = trailerPath?.results.find(video => video.type === "Trailer")

    console.log(trailerPath)

    const [videos, setVideos] = useState([])

    const [moviesOnCarousel, setMoviesOnCarousel] = useState(Math.round(((window.innerWidth - 85) / 4) / 100))
    
    const [watchingTrailer, setWatchingTrailer] = useState()
    
    const navigate = useNavigate()
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
              <iframe className='trailer' src={`https://www.youtube.com/embed/${trailerPath.key}?rel=0&showinfo=0&autohide=1&controls=0&autoplay=1&disablekb=1&cc_load_policy=3&modestbranding=1`}
                    frameborder="0"
                    showinfo="0"
                >
              </iframe>
              <button id='close_trailer'><i class="bi bi-x-circle-fill"></i></button>
          </div>
        }

        <AboutHeader showFormat={showFormat} id={id}/> 

          {trailerPath && 
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
              <Carousel dataProps = {REQUEST_END_POINTS[showFormat].similar(id)}/>
            </div>
          </div>
        </div> 
    </>
    
  )
}

export default About