import React from 'react'
import { useState, useEffect } from 'react'

import useFetchData from '../../Hooks/useFetchData'
import GridDisplay from '../../Components/GridDisplay'

const Search = () => {
    const [query, setQuery] = useState("")
    const [tempQuery, setTempQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(tempQuery)
        setTempQuery('')
    }

    return (
        <div className='search'>
            <div className="search_container">
                <form onSubmit={(e) => handleSubmit(e)}>  
                    <input 
                        type="text" 
                        onChange={(e) => setTempQuery(e.target.value)}
                        value={tempQuery}
                        placeholder='Search for a movie or a tv serie'
                    />
                    <button><i className='bi bi-search'></i></button>
                </form>
            </div>
            <GridDisplay query={query} />
        </div>  
    )
}

export default Search