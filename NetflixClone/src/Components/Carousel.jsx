import React, { useState } from 'react'

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

    console.log(carouselPosition)

    const moveCarouselLeft= (e) => {
      if(carouselPosition + (moviesOnCarousel * 400) < 0){
        setCarouselPostition(prev => prev + moviesOnCarousel * 400)
      } else {
        setCarouselPostition(0)
      }
    }

    
   return(
      <div className="carousel_wrapper" id='carousel_wrapper'>
        <div className="carousel_controls">
          <button onClick={() => moveCarouselLeft()}><i className='bi bi-arrow-left-short'></i></button>
          <button onClick={() => moveCarouselRight()}><i className='bi bi-arrow-right-short'></i></button>
        </div>
        <div className="movies" style={{transform: `translateX(${carouselPosition}px)`}}>
          {data && data.map((movie) => {
              return(
                <div key={movie.id} className="movie">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                </div>
              )  
            })}
        </div>
        
      </div>  
  
    

   )     
}

export default Carousel