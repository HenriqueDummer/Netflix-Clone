import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useFetchData from "../Hooks/useFetchData";

import LoadingSpin from "./LoadingSpin";
import "react-multi-carousel/lib/styles.css";

const Carousel = ({ dataProps }) => {
  console.log(dataProps)
  const fetchedData = useFetchData(dataProps);
  const data = fetchedData?.results;
  const [carouselPosition, setCarouselPostition] = useState(0)

  const carouselWidth = document.getElementById("carousel_wrapper")?.offsetWidth;
  const carouselOffset = Math.round(carouselWidth / 3);
  const maxWidth = data?.length * 250 - 30

  console.log((maxWidth - carouselWidth) * -1)

  const moveCarouselRight = () => {
    if((carouselPosition - carouselOffset) > ((maxWidth - carouselWidth) * -1)){
      setCarouselPostition(prev => prev - carouselOffset)
    } else {
      setCarouselPostition((maxWidth - carouselWidth) * - 1)
    }
  };

  // console.log(`Position => ${carouselPosition}`)

  const moveCarouselLeft = (e) => {
    if((carouselPosition + carouselOffset) < 0 ){
      setCarouselPostition(prev => prev + carouselOffset)
    } else {
      setCarouselPostition(0)
    }
  };

  const goToTop = () => {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  };

  return (
    <div className="carousel_wrapper" id="carousel_wrapper">
      <div className="carousel_controls">
        {(carouselPosition != 0) && (
          <button id="move_left" onClick={moveCarouselLeft}>
            <i className="bi bi-arrow-left-short"></i>
          </button>
        )}
        {(carouselPosition > (maxWidth - carouselWidth) * -1) && (
          <button id="move_right" onClick={moveCarouselRight}>
            <i className="bi bi-arrow-right-short"></i>
          </button>
        )}
      </div>

      <div
        className="movies"
        id="movies"
        style={{ transform: `translateX(${carouselPosition}px)` }}
      >
        {data ? (
          data.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <Link
                  className="movie_link"
                  onClick={goToTop}
                  to={`/about/${
                    movie.first_air_date ? `s${movie.id}` : `m${movie.id}`
                  }`}
                >
                  <div
                    className="poster"
                    style={{
                      backgroundImage: `url(${
                        movie.poster_path != null
                          ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                          : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                      })`,
                    }}
                  ></div>
                </Link>
                <div className="movie_info">
                  <p>
                    {movie.original_title ? movie.original_title : movie.name}
                  </p>
                  <div className="movie_props">
                    <p>2018</p>
                    <div
                      className="circular_progress"
                      style={{
                        background: `conic-gradient(#535bf2 ${
                          (movie.vote_average * 360) / 10
                        }deg, transparent 0deg)`,
                      }}
                    >
                      <span>{Math.round(movie.vote_average * 10) / 10}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <LoadingSpin />
        )}
      </div>
    </div>
  );
};

export default Carousel;
