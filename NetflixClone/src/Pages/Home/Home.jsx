import React, { useState } from 'react'

import useFetchData from '../../Hooks/useFetchData'

import Carousel from '../../Components/Carousel'

const Home = () => {
  const {data: header_data} = useFetchData(true, null, "Now Playing", null, 5)

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

  const [headerPosition, setHeaderPosition] = useState(0)

  console.log(headerPosition)
  return (
    <div className='home'>
      <div className="header_container">
          <div className="header_controls">
                <input type="radio" name='slide' id='slide1' value={0} onChange={(e) => setHeaderPosition(e.target.value)}/>
                <input type="radio" name='slide' id='slide2' value={-100} onChange={(e) => setHeaderPosition(e.target.value)}/>
                <input type="radio" name='slide' id='slide3' value={-200} onChange={(e) => setHeaderPosition(e.target.value)}/>
                <input type="radio" name='slide' id='slide4' value={-300} onChange={(e) => setHeaderPosition(e.target.value)}/>
                <input type="radio" name='slide' id='slide5' value={-400} onChange={(e) => setHeaderPosition(e.target.value)}/>
            </div>
            <div className="header_navigation">
              <label htmlFor="slide1" className='nav_header' id='s1'></label>
              <label htmlFor="slide2" className='nav_header' id='s2'></label>
              <label htmlFor="slide3" className='nav_header'></label>
              <label htmlFor="slide4" className='nav_header'></label>
              <label htmlFor="slide5" className='nav_header'></label>
            </div>
        <div className="header_wrapper" style={{transform: `translateX(${headerPosition}%)`}}>
          {header_data && header_data.map((movie) => {
            return(
              <div className="header_movie" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
                <div className="header_filter1"></div>
                <div className="header_filter2"></div>
                <div className="header_movie_infos">
                  <h2>{movie.original_title}</h2>
                  <p>{movie.overview}</p>
                  <span>
                    <p>{movie.release_date.split('').slice(0,4).join('')}</p>
                    <div id='slash'></div>
                    {movie.genre_ids.map((genre_id) => {
                      return(
                        genres.map((genre) => {
                          if(genre.id === genre_id){
                            return(
                              <span>{genre.name}</span>
                            )
                          }
                        })
                      )
                    })}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="carousel_container">
        <div className="carousel">
          <h3>Discover</h3>
          <Carousel data = {useFetchData(true)}  />
        </div>
        <div className="carousel">
          <h3>Discover</h3>
          <Carousel data = {useFetchData(true)}  />
        </div>
      </div>
      <div className="footer">
        <p>Coded by Henrique Dummer</p>
      </div>
    </div>
  )
}

export default Home