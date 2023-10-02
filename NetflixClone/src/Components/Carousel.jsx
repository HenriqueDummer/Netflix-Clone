import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Carousel = (props) => {

    const {data} = props.data

    const moviesOnCarousel = props.moviesOnCarousel

    const [carouselPosition, setCarouselPostition] = useState(0)

    let maxWidth = 0

    if(props.data.data){
      maxWidth = props.data.data.length * - 400
    }
    

    const moveCarouselRight = () => {
      if(carouselPosition - (moviesOnCarousel * 400) > maxWidth + moviesOnCarousel * 400){
        setCarouselPostition(prev => prev + moviesOnCarousel * - 400)
      } else {
        setCarouselPostition(maxWidth + document.getElementById("carousel_wrapper").offsetWidth + 10)
      }
    }


    const moveCarouselLeft= (e) => {
      if(carouselPosition + (moviesOnCarousel * 400) < 0){
        setCarouselPostition(prev => prev + moviesOnCarousel * 400)
      } else {
        setCarouselPostition(0)
      }
    }

    console.log(data)
   return(
      <div className="carousel_wrapper" id='carousel_wrapper'>
        <button id='move_left' onClick={() => moveCarouselLeft()}><i className='bi bi-arrow-left-short'></i></button>
        <button id='move_right' onClick={() => moveCarouselRight()}><i className='bi bi-arrow-right-short'></i></button>
        <div className="movies" style={{transform: `translateX(${carouselPosition}px)`}}>
          {data && data.map((movie) => {
            if(movie.original_language){
              return(
                <Link to={`about/${movie.first_air_date ? `s${movie.id}` : `m${movie.id}`}`}>
                  <div key={movie.id} className="movie">
                      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                      <div className="movie_info">
                        <p>{movie.original_title ? movie.original_title : movie.name}</p>
                        <div className="circular_progress" style={{background:`conic-gradient(#535bf2 ${(movie.vote_average * 360) / 10}deg, transparent 0deg)`}}>
                          <span>{movie.vote_average}</span>
                        </div>

                      </div>
                  </div>
                </Link>
              )  
            }
  
            })}
        </div>
        
      </div>  
  
    

   )     
}

export default Carousel