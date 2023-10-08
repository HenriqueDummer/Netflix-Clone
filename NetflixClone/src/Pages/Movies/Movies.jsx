import React from 'react'
import { useState } from 'react'

const Movies = () => {
  const [genreSelected, setGenreSelected] = useState()
  const [filterPosition, setFilterPosition] = useState(-2360)

  console.log(genreSelected)
  const handleChange = (e) => {
    setGenreSelected(e.target.id)
  }

  const moveRight = () => {
    if((filterPosition - 660) < -2360){
      setFilterPosition(-2360)
    }else{  
      setFilterPosition(prev => prev - 660)
    }
  }

  const moveLeft = () => {
    if((filterPosition + 660) > 0){
      setFilterPosition(0)
    }else{  
      setFilterPosition(prev => prev + 660)
    }
  }


  return (
    <div className='movies_page'>
      <div className="filters">
        <div className="filters_controls">
        <input 
          type='radio'
          name='action'
          id='28'
          checked={genreSelected === '28'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='adventure'
          id='12'
          checked={genreSelected === '12'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='animation'
          id='16'
          checked={genreSelected === '16'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='comedy'
          id='35'
          checked={genreSelected === '35'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='crime'
          id='80'
          checked={genreSelected === '80'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='documentary'
          id='99'
          checked={genreSelected === '99'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='drama'
          id='18'
          checked={genreSelected === '18'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='family'
          id='10751'
          checked={genreSelected === '10751'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='fantasy'
          id='14'
          checked={genreSelected === '14'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='history'
          id='36'
          checked={genreSelected === '36'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='horror'
          id='27'
          checked={genreSelected === '27'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='music'
          id='10402'
          checked={genreSelected === '10402'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='mistery'
          id='9648'
          checked={genreSelected === '9648'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='romance'
          id='10749'
          checked={genreSelected === '10749'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='science fiction'
          id='878'
          checked={genreSelected === '878'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='tv movie'
          id='10770'
          checked={genreSelected === '10770'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='thriller'
          id='53'
          checked={genreSelected === '53'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='war'
          id='10752'
          checked={genreSelected === '10752'} 
          onChange={(e) => handleChange(e)} 
        />
        <input 
          type='radio'
          name='western'
          id='37'
          checked={genreSelected === '37'} 
          onChange={(e) => handleChange(e)} 
        />
        </div>
        <div className="filters_navigation" >
          {filterPosition != 0 && <button onClick={moveLeft} id='move_left'><i className='bi bi-arrow-left-short'></i></button>}
          {filterPosition != -2360 && <button onClick={moveRight} id='move_right'><i className='bi bi-arrow-right-short'></i></button>}
          <div className="filters_wrapper" style={{transform: `translateX(${filterPosition}px)`}}>
            <label htmlFor="28">
              <div className="option"  style={{backgroundColor: genreSelected === '28' ? '#2d37eb' : ''}}>
                <p>Action</p>
              </div> 
            </label>
            <label htmlFor="12">
              <div className="option"  style={{backgroundColor: genreSelected === '12' ? '#2d37eb' : ''}}>
                <p>Adventure</p>
              </div> 
            </label>
            <label htmlFor="16">
              <div className="option"  style={{backgroundColor: genreSelected === '16' ? '#2d37eb' : ''}}>
                <p>Animation</p>
              </div> 
            </label>
            <label htmlFor="35">
              <div className="option"  style={{backgroundColor: genreSelected === '35' ? '#2d37eb' : ''}}>
                <p>Comedy</p>
              </div> 
            </label>
            <label htmlFor="80">
              <div className="option"  style={{backgroundColor: genreSelected === '80' ? '#2d37eb' : ''}}>
                <p>Crime</p>
              </div> 
            </label>
            <label htmlFor="99">
              <div className="option"  style={{backgroundColor: genreSelected === '99' ? '#2d37eb' : ''}}>
                <p>Documentary</p>
              </div> 
            </label>
            <label htmlFor="18">
              <div className="option"  style={{backgroundColor: genreSelected === '18' ? '#2d37eb' : ''}}>
                <p>Drama</p>
              </div> 
            </label>
            <label htmlFor="10751">
              <div className="option"  style={{backgroundColor: genreSelected === '10751' ? '#2d37eb' : ''}}>
                <p>Family</p>
              </div> 
            </label>
            <label htmlFor="14">
              <div className="option"  style={{backgroundColor: genreSelected === '14' ? '#2d37eb' : ''}}>
                <p>Fantasy</p>
              </div> 
            </label>
            <label htmlFor="36">
              <div className="option"  style={{backgroundColor: genreSelected === '36' ? '#2d37eb' : ''}}>
                <p>History</p>
              </div> 
            </label>
            <label htmlFor="27">
              <div className="option"  style={{backgroundColor: genreSelected === '27' ? '#2d37eb' : ''}}>
                <p>Horror</p>
              </div> 
            </label>
            <label htmlFor="10402">
              <div className="option"  style={{backgroundColor: genreSelected === '10402' ? '#2d37eb' : ''}}>
                <p>Music</p>
              </div> 
            </label>
            <label htmlFor="9648">
              <div className="option"  style={{backgroundColor: genreSelected === '9648' ? '#2d37eb' : ''}}>
                <p>Mystery</p>
              </div> 
            </label>
            <label htmlFor="10749">
              <div className="option"  style={{backgroundColor: genreSelected === '10749' ? '#2d37eb' : ''}}>
                <p>Romance</p>
              </div> 
            </label>
            <label htmlFor="878">
              <div className="option"  style={{backgroundColor: genreSelected === '10749' ? '#2d37eb' : ''}}>
                <p>Science Fiction</p>
              </div> 
            </label>
            <label htmlFor="10770">
              <div className="option"  style={{backgroundColor: genreSelected === '10770' ? '#2d37eb' : ''}}>
                <p>TV Movie</p>
              </div> 
            </label>
            <label htmlFor="53">
              <div className="option"  style={{backgroundColor: genreSelected === '53' ? '#2d37eb' : ''}}>
                <p>Thriller</p>
              </div> 
            </label>
            <label htmlFor="10752">
              <div className="option"  style={{backgroundColor: genreSelected === '10752' ? '#2d37eb' : ''}}>
                <p>War</p>
              </div> 
            </label>
            <label htmlFor="37">
              <div className="option"  style={{backgroundColor: genreSelected === '37' ? '#2d37eb' : ''}}>
                <p>Western</p>
              </div> 
            </label>
          </div>
          
        </div>
      </div>  
    </div>
  )
}

export default Movies