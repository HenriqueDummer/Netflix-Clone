import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useFetchData from "../../Hooks/useFetchData";

import Carousel from "../../Components/Carousel";
import HomeHeader from "../../Components/HomeHeader";

const Home = () => {


  return (
    <div className="home">
      <HomeHeader />
      <div className="carousel_container">
        <div className="carousel">
          <h3>Discover</h3>
          <Carousel
            dataProps = {{ movie: true, params: null}}
          />
        </div>
        <div className="carousel">
          <h3>Top Rated</h3>
          <Carousel
            dataProps={{ movie: true, params: "Top Rated" }}
          />
        </div>
        <div className="carousel">
          <h3>Popular Series</h3>
          <Carousel
            dataProps={{ movie: false, params: "Popular" }}
          />
        </div>
        <div className="carousel">
          <h3>Now Playing</h3>
          <Carousel
            dataProps={{ movie: true, params: "Now Playing" }}
          />
        </div>
      </div>
      <div className="footer">
        <p>Coded by Henrique Dummer</p>
      </div>
    </div>
  );
};

export default Home;
