import React from 'react'

import { useEffect, useState } from 'react'

import LoadingSpin from './LoadingSpin'

const AboutHeader = (props) => {
    const [data, setData] = useState()

    const isMovie = props.isMovie
    const id = props.id

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
            const response = await fetch(`https://api.themoviedb.org/3/${isMovie ? "movie" : "tv"}/${id}?language=en-US`, options);
            const movieData = await response.json();
            setData(movieData);
        } catch (error) {
            console.log(error);
        }
        }
        fetchData()
        
    }, [])

    return (
        <div className="about_header_container">
            <div className="header_wrapper">
                {data ? 
                    <>
                        <div className='header_movie'  style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}}>
                            <div className="header_filter2"></div>       
                        </div>
                        <div className="movie_infos">
                        <div className="infos_text">
                        <h2>{data.original_title ? data.original_title : data.name}</h2>
                            <p>{data.overview}</p>
                            <span>
                                <p>{data.release_date ? data.release_date.split('').slice(0,4).join('') : data.first_air_date.split('').slice(0,4).join('')}</p>
                                <div id='slash'></div>
                                {data.genres.map((genre) => <span>{genre.name}</span>)}
                            </span>
                        </div>
                            <div className="vote_container">
                                <div className="circular_progress" style={{background:`conic-gradient(#535bf2 ${(data.vote_average * 360) / 10}deg, transparent 0deg)`}}>
                                    <span>{Math.round(data.vote_average * 10) / 10}</span>
                                </div>
                            </div>  
                        </div>
                        </>
                    :
                    <LoadingSpin />
                }
            </div>  
        </div>
    )
}

export default AboutHeader