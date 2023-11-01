import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LoadingSpin from './LoadingSpin'

const Carousel = (props) => {

    const {data} = props.data

    const [moviesOnCarousel, setMoviesOnCarousel] = useState()
    const [carouselPosition, setCarouselPostition] = useState(0)
    const carouselWitdh = document.getElementById("carousel_wrapper")?.offsetWidth

    const movieWidth = 250

    let maxWidth = 0

    if(props.data.data){
      maxWidth = data.length * - movieWidth
    }

    console.log(`Movie Witdh => ${maxWidth}`)
    console.log(`Carousel Witdh => ${carouselPosition}`)
    console.log(`Movies on => ${moviesOnCarousel}`)


    useEffect(() => {
      const handleResize = () => {
        if(carouselWitdh){
          setMoviesOnCarousel(Math.floor((carouselWitdh / 2.6) / 100));
        }
      };
    
      window.addEventListener('resize', handleResize);
    
      handleResize();
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [carouselWitdh]); 

    const moveCarouselRight = () => {
      if(carouselPosition - (moviesOnCarousel * movieWidth) > maxWidth + moviesOnCarousel * movieWidth){
        setCarouselPostition(prev => prev + moviesOnCarousel * - movieWidth)
      } else {
        setCarouselPostition(maxWidth + carouselWitdh + 30)
      }
    }

    // console.log(`Position => ${carouselPosition}`)


    const moveCarouselLeft= (e) => {
      if(carouselPosition + (moviesOnCarousel * movieWidth) < 0){
        setCarouselPostition(prev => prev + moviesOnCarousel * movieWidth)
      } else {
        setCarouselPostition(0)
      }
    }

    const goToTop = () => {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
    
   return(
      <div className="carousel_wrapper" id='carousel_wrapper'>
        {carouselPosition != 0 &&<button id='move_left' onClick={() => moveCarouselLeft()}><i className='bi bi-arrow-left-short'></i></button>}
        {carouselPosition != maxWidth + carouselWitdh + 30 && <button id='move_right' onClick={() => moveCarouselRight()}><i className='bi bi-arrow-right-short'></i></button>}
        <div className="movies" style={{transform: `translateX(${carouselPosition}px)`}}>
          {data ? data.map((movie) => {
              return(
                <div key={movie.id} className="movie">
                  <Link className='movie_link' onClick={goToTop} to={`/about/${movie.first_air_date ? `s${movie.id}` : `m${movie.id}`}`}>
                    <div className="poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}></div>
                  </Link>  
                  <div className="movie_info">
                    <p>{movie.original_title ? movie.original_title : movie.name}</p>
                    <div className='movie_props'>
                      <p>2018</p>
                      <div className="movie_actions">
                        <button><i class="bi bi-heart-fill"></i></button>
                        <button><i class="bi bi-plus-circle-fill"></i></button>
                      </div>
                      <div className="circular_progress" style={{background:`conic-gradient(#535bf2 ${(movie.vote_average * 360) / 10}deg, transparent 0deg)`}}>
                        <span>{Math.round(movie.vote_average * 10) / 10}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )  
            })
            :
            <LoadingSpin />
          }
        </div>
        
      </div>  
  
    

   )     
}

export default Carousel