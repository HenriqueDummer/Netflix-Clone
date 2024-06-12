import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import useFetchData from '../Hooks/useFetchData'
import useScreenWidth from '../Hooks/useScreenWitdh'

import REQUEST_END_POINTS from '../RequestEndPoints'

import LoadingSpin from './LoadingSpin'

const HomeHeader = () => {

    const screenWidth = useScreenWidth()
    const headerData = useFetchData(REQUEST_END_POINTS.movie.nowPlaying)

    const [headerPosition, setHeaderPosition] = useState(0)
    const [selectedOption, setSelectedOption] = useState('slide1')


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
    
    const handleRadioChange = (e) => {
        setHeaderPosition(e.target.value)
        setSelectedOption(e.target.id)
    }
        
  return (
    <div className="header_container">
          <div className="header_controls">
              <input 
                type="radio"  
                name='slide' 
                id='slide1' 
                value={0} 
                checked={selectedOption === 'slide1'}
                onChange={(e) => handleRadioChange(e)}
              />
              <input 
                type="radio"  
                name='slide' 
                id='slide2' 
                value={-100} 
                checked={selectedOption === 'slide2'}
                onChange={(e) => handleRadioChange(e)}/>
              <input 
                type="radio"  
                name='slide' 
                id='slide3' 
                value={-200} 
                checked={selectedOption === 'slide3'}
                onChange={(e) => handleRadioChange(e)}/>
              <input 
                type="radio"  
                name='slide' 
                id='slide4' 
                value={-300} 
                checked={selectedOption === 'slide4'}
                onChange={(e) => handleRadioChange(e)}/>
              <input 
                type="radio"  
                name='slide' 
                id='slide5' 
                value={-400} 
                checked={selectedOption === 'slide5'}
                onChange={(e) => handleRadioChange(e)}/>
            </div>
          <div className="header_navigation">
              <label 
                htmlFor="slide1" 
                className='nav_header' 
                id='s1'
                style={{backgroundColor: selectedOption === 'slide1' ? '#535bf2' : ""}}
                >
              </label>
              <label 
                htmlFor="slide2" 
                className='nav_header' 
                id='s2'
                style={{backgroundColor: selectedOption === 'slide2' ? '#535bf2' : ""}}
              >
                </label>
              <label 
                htmlFor="slide3" 
                className='nav_header' 
                id='s3'
                style={{backgroundColor: selectedOption === 'slide3' ? '#535bf2' : ""}}
              >
                </label>
              <label 
                htmlFor="slide4" 
                className='nav_header' 
                id='s4'
                style={{backgroundColor: selectedOption === 'slide4' ? '#535bf2' : ""}}
              >
                </label>
              <label 
                htmlFor="slide5" 
                className='nav_header' 
                id='s5'
                style={{backgroundColor: selectedOption === 'slide5' ? '#535bf2' : ""}}
              >
                </label>
            </div>
          <div className="header_wrapper" style={{transform: `translateX(${headerPosition}%)`}}>
          {headerData ? headerData.results.map((movie) => {
            return(
              <div key={movie.id} className="header_movie" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${screenWidth  > 1000 ? movie.backdrop_path : movie.poster_path})`}}>
                <div className="header_filter1"></div>
                <div className="header_filter2"></div>
                <div className="header_movie_infos">
                  <div className="infos_text">
                    <h2>{movie.original_title}</h2>
                    <p>{movie.overview}</p>
                    <div className='details'>
                      <p>{movie.release_date.split('').slice(0,4)}</p>
                      <div id='slash'></div>
                        {movie.genre_ids.slice(0, 3).map((genre_id) => {
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
                    </div>
                  </div>
                  <Link className='about_btn' to={`about/${movie.first_air_date ? `s${movie.id}` : `m${movie.id}`}`}>ABOUT</Link>
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

export default HomeHeader