import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import useFetchData from "../Hooks/useFetchData";
import useScreenWidth from "../Hooks/useScreenWitdh";

import REQUEST_END_POINTS from "../data/RequestEndPoints";

import LoadingSpin from "./LoadingSpin";

import { movieGenres as genres } from "../data/genresData.js";

const HomeHeader = () => {
  const screenWidth = useScreenWidth();
  const { data: headerData, isLoading } = useFetchData(
    REQUEST_END_POINTS.movie.nowPlaying
  );

  const [headerPosition, setHeaderPosition] = useState(0);
  const [selectedOption, setSelectedOption] = useState("slide1");

  const handleRadioChange = (e) => {
    setHeaderPosition(e.target.value);
    setSelectedOption(e.target.id);
  };

  if (isLoading) return <LoadingSpin />;

  return (
    <div className="header_container">
      <div className="header_controls">
        <input
          type="radio"
          name="slide"
          id="slide1"
          value={0}
          checked={selectedOption === "slide1"}
          onChange={(e) => handleRadioChange(e)}
        />
        <input
          type="radio"
          name="slide"
          id="slide2"
          value={-100}
          checked={selectedOption === "slide2"}
          onChange={(e) => handleRadioChange(e)}
        />
        <input
          type="radio"
          name="slide"
          id="slide3"
          value={-200}
          checked={selectedOption === "slide3"}
          onChange={(e) => handleRadioChange(e)}
        />
        <input
          type="radio"
          name="slide"
          id="slide4"
          value={-300}
          checked={selectedOption === "slide4"}
          onChange={(e) => handleRadioChange(e)}
        />
        <input
          type="radio"
          name="slide"
          id="slide5"
          value={-400}
          checked={selectedOption === "slide5"}
          onChange={(e) => handleRadioChange(e)}
        />
      </div>
      <div className="header_navigation">
        <label
          htmlFor="slide1"
          className="nav_header"
          id="s1"
          style={{
            backgroundColor: selectedOption === "slide1" ? "#535bf2" : "",
          }}
        ></label>
        <label
          htmlFor="slide2"
          className="nav_header"
          id="s2"
          style={{
            backgroundColor: selectedOption === "slide2" ? "#535bf2" : "",
          }}
        ></label>
        <label
          htmlFor="slide3"
          className="nav_header"
          id="s3"
          style={{
            backgroundColor: selectedOption === "slide3" ? "#535bf2" : "",
          }}
        ></label>
        <label
          htmlFor="slide4"
          className="nav_header"
          id="s4"
          style={{
            backgroundColor: selectedOption === "slide4" ? "#535bf2" : "",
          }}
        ></label>
        <label
          htmlFor="slide5"
          className="nav_header"
          id="s5"
          style={{
            backgroundColor: selectedOption === "slide5" ? "#535bf2" : "",
          }}
        ></label>
      </div>
      <div
        className="header_wrapper"
        style={{ transform: `translateX(${headerPosition}%)` }}
      >
        {headerData ? (
          headerData.results.map((movie) => {
            return (
              <div
                key={movie.id}
                className="header_movie"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                    screenWidth > 1000 ? movie.backdrop_path : movie.poster_path
                  })`,
                }}
              >
                <div className="header_filter1"></div>
                <div className="header_filter2"></div>
                <div className="header_movie_infos">
                  <div className="infos_text">
                    <h2>{movie.original_title}</h2>
                    <p>{movie.overview}</p>
                    <div className="details">
                      <p>{movie.release_date.split("").slice(0, 4)}</p>
                      <div id="slash"></div>
                      {movie.genre_ids.slice(0, 3).map((genre_id) => {
                        return genres.map((genre) => {
                          if (genre.id === genre_id) {
                            return <span key={genre_id}>{genre.name}</span>;
                          }
                        });
                      })}
                    </div>
                  </div>
                  <Link
                    className="about_btn"
                    to={`/about/${movie.first_air_date ? `show` : `movie`}/${
                      movie.id
                    }`}
                  >
                    ABOUT
                  </Link>
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

export default HomeHeader;
