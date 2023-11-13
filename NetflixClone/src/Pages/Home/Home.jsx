import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useFetchData from '../../Hooks/useFetchData'

import Carousel from '../../Components/Carousel'
import HomeHeader from '../../Components/HomeHeader'

const Home = () => {

  const [moviesOnCarousel, setMoviesOnCarousel] = useState(Math.round(((window.innerWidth - 85) / 4) / 100))

  

  return (
    <div className='home'>
      <HomeHeader />
      <div className="carousel_container">
        <div className="carousel">
          <h3>Discover</h3>
          <Carousel data = {useFetchData({movie:true})} moviesOnCarousel = {moviesOnCarousel}  />
        </div>
        <div className="carousel">
          <h3>Top Rated</h3>
          <Carousel data = {useFetchData({movie: true, params: "Top Rated"})} moviesOnCarousel = {moviesOnCarousel}  />
        </div>
        <div className="carousel">
          <h3>Popular series</h3>
          <Carousel data = {useFetchData({movie:false, params: "Top Rated"})} moviesOnCarousel = {moviesOnCarousel}  />
        </div>
        <div className="carousel">
          <h3>Now Playing</h3>
          <Carousel data = {useFetchData({movie:true, params: "Now Playing"})} moviesOnCarousel = {moviesOnCarousel}  />
        </div>
      </div>
      <div className="footer">
        <p>Coded by Henrique Dummer</p>
      </div>
    </div>
  )
}

export default Home