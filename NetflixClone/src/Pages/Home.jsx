import React, { useState, useEffect } from "react";

import Carousel from "../Components/Carousel";
import HomeHeader from "../Components/HomeHeader";
import REQUEST_END_POINTS from "../data/RequestEndPoints";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <div className="carousel_container">
        <div className="carousel">
          <h3>Discover</h3>
          <Carousel endPoint={REQUEST_END_POINTS.movie.discover} />
        </div>
        <div className="carousel">
          <h3>Top Rated</h3>
          <Carousel endPoint={REQUEST_END_POINTS.movie.topRated} />
        </div>
        <div className="carousel">
          <h3>Popular Series</h3>
          <Carousel endPoint={REQUEST_END_POINTS.tv.popular} />
        </div>
        <div className="carousel">
          <h3>Now Playing</h3>
          <Carousel endPoint={REQUEST_END_POINTS.movie.nowPlaying} />
        </div>
      </div>
      <div className="footer">
        <p>Coded by Henrique Dummer</p>
      </div>
    </div>
  );
};

export default Home;
