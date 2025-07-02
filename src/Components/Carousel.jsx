import React, { useState, useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";

import useFetchData from "../Hooks/useFetchData";

import LoadingSpin from "./LoadingSpin";
import "react-multi-carousel/lib/styles.css";

const Carousel = ({ endPoint }) => {
  const { data: fetchedData, isLoading } = useFetchData(endPoint);
  const data = fetchedData?.results;

  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = 220 * 4;

    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (isLoading) return <LoadingSpin />;

  return (
    <div className="carousel_wrapper">
      <div className="carousel_controls">
        <button id="move_left" onClick={() => scrollCarousel("left")}>
          <i className="bi bi-arrow-left-short"></i>
        </button>

        <button id="move_right" onClick={() => scrollCarousel("right")}>
          <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>

      <div className="movies" id="movies" ref={carouselRef}>
        {data.map((movie) => {
          return (
            // Make a separate component
            <div key={movie.id} id="movie" className="movie">
              <Link
                className="movie_link"
                to={`/about/${movie.first_air_date ? `show` : `movie`}/${
                  movie.id
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
        })}
      </div>
    </div>
  );
};

export default Carousel;
