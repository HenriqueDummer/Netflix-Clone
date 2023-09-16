import React from 'react'

import useFetchData from '../../Hooks/useFetchData'

import Carousel from '../../Components/Carousel'

const Home = () => {
    const {data} = useFetchData(null, true, null)

    console.log(data)
  return (
    <>
        {data && data.map((movie) => {
            return(
            <Carousel key={movie.id} poster={movie.backdrop_path} />
            )
        })}
    </>
  )
}

export default Home