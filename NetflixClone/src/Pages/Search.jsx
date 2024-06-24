import React from 'react'
import { useState, useEffect, useRef } from 'react'

import REQUEST_END_POINTS from '../data/RequestEndPoints'

import useFetchData from '../Hooks/useFetchData'
import GridDisplay from '../Components/GridDisplay'

const Search = () => {
    const query = useRef()
    const [request, setRequest] = useState(REQUEST_END_POINTS.movie.popular)

    let data = useFetchData(request)

    const handleSubmit = (e) => {
        e.preventDefault()
        setRequest(REQUEST_END_POINTS.search(query.current.value))
    }

    return (
        <div className='search'>
            <div className="search_container">
                <form onSubmit={(e) => handleSubmit(e)}>  
                    <input 
                        type="text" 
                        ref={query}
                        placeholder='Search for a movie or a tv serie'
                    />
                    <button><i className='bi bi-search'></i></button>
                </form>
            </div>
            <GridDisplay data={data?.results} />
        </div>  
    )
}

export default Search