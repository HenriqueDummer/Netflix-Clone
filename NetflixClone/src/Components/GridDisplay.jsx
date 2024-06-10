import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useFetchData from "../Hooks/useFetchData"

import LoadingSpin from "./LoadingSpin"

const GridDisplay = (props) => {
    const [genreSelected, setGenreSelected] = useState(props.isMovie ? '28' : '10759')
    const [page, setPage] = useState(1)
    const [data, setData] = useState()
    const {data : response} = useFetchData({
      movie: props.isMovie,
      params: genreSelected,
      number: 20,
      page: page,
      search: props.query
    })
    const [filterPosition, setFilterPosition] = useState(0)
    const genres = props.genres

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
    
      const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    
      const changePage = (next) => {
        if(next && page < 5){
          setPage(prev => prev + 1)
          goToTop()
        } else if(page > 1 && !next){
          setPage(prev => prev - 1)
          goToTop()
        }
      }

      
    const handleChange = (e) => {
        setData()
        setGenreSelected(e.target.id)
    }

    useEffect(() => {
        const loadData = async() => {
        if(response && response != null){
            setData(response)
        }
        }
        loadData()
    }, [response])

    return(
        <div className='movies_page'>
            {genres &&
              <div className="filters">
                  <div className="filters_controls">
                  {genres.map((genre) => {
                      return(
                      <input 
                          type='radio'
                          name={genre.name}
                          id={genre.id}
                          checked={genreSelected === genre.id} 
                          onChange={(e) => handleChange(e)} 
                      />
                      )
                  })}
                  
                  </div>
                  <div className="filters_navigation" >
                      {filterPosition != 0 && <button onClick={moveLeft} id='move_left'><i className='bi bi-arrow-left-short'></i></button>}
                      {filterPosition != -2360 && <button onClick={moveRight} id='move_right'><i className='bi bi-arrow-right-short'></i></button>}
                      <div className="filters_wrapper" style={{transform: `translateX(${filterPosition}px)`}}>
                      {genres.map((genre) => {
                          return (
                          <label htmlFor={genre.id}>
                              <div className="option"  style={{backgroundColor: genreSelected == genre.id ? '#535bf2' : ''}}>
                              <p>{genre.name}</p>
                              </div> 
                          </label>
                          )
                      })}
                      </div>
                      
                  </div>
              </div>  
            }
            <div className="movies_container">
                <div className="movies_grid">
                    {data ? data.map((movie) => {
                        return(
                        <div key={movie.id} className="movie">
                            <Link className='movie_link' to={`/about/${movie.first_air_date ? `s${movie.id}` : `m${movie.id}`}`}>
                            <div className="poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}></div>
                            </Link>  
                            <div className="movie_info">
                            <p>{movie.original_title ? movie.original_title : movie.name}</p>
                            <div className='movie_props'>
                              <p>2018</p>
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
            {!props.query &&
            <div className="page_controller">
              <div className="controll">
                  <button onClick={() => changePage(false)}><i className='bi bi-arrow-left-short'></i>Prev</button>
              </div>
              <div className="page">
                  <ul>
                  <li className={page === 1 ? `current_page` : ''}>1</li>
                  <li className={page === 2 ? `current_page` : ''}>2</li>
                  <li className={page === 3 ? `current_page` : ''}>3</li>
                  <li className={page === 4 ? `current_page` : ''}>4</li>
                  <li className={page === 5 ? `current_page` : ''}>5</li>
                  </ul>
              </div>
              <div className="controll">
                  <button onClick={() => changePage(true)}>Next<i className='bi bi-arrow-right-short'></i></button>
              </div>
            </div>
            }
        </div>
    )
}

export default GridDisplay