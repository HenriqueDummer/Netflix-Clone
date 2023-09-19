import React from 'react'

const Carousel = (props) => {

    const {data} = props.data
   return(

  
      <div className="carousel_wrapper">
        {data && data.map((movie) => {
            return(
              <div className="movie">
                  <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
              </div>
            )  
          })}
      </div>  
  
    

   )     
}

export default Carousel