import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LoadingSpin from "./LoadingSpin";

const GridDisplay = ({ data }) => {
  return (
    <div className="movies_page">
      <div className="movies_container">
        <div className="movies_grid">
          {data.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <Link
                  className="movie_link"
                  to={`/about/${movie.first_air_date ? `show` : `movie`}/${
                    movie.id
                  }`}
                >
                  <div
                    className="poster"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
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
    </div>
  );
};

export default GridDisplay;
