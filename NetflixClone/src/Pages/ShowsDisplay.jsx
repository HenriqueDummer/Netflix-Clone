import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import GridDisplay from "../Components/GridDisplay";

import useFetchData from "../Hooks/useFetchData";

import REQUEST_END_POINTS from "../data/RequestEndPoints";

import { movieGenres, tvGenres } from "../data/genresData";

const ShowsDisplay = () => {
  const showFormat = useParams().showFormat
  const genres = showFormat === "movie" ? movieGenres : tvGenres 
  const initialGenre = genres[0].id
  const [selectedGenre, setSelectedGenre] = useState();
  const [page, setPage] = useState(1);
  const [filterPosition, setFilterPosition] = useState(0);

  const data = useFetchData(
    REQUEST_END_POINTS[showFormat].customDiscover(page, selectedGenre ?? initialGenre),
    selectedGenre
  );
  
  const moveRight = () => {
    if (filterPosition - 660 < -2360) {
      setFilterPosition(-2360);
    } else {
      setFilterPosition((prev) => prev - 660);
    }
  };

  const moveLeft = () => {
    if (filterPosition + 660 > 0) {
      setFilterPosition(0);
    } else {
      setFilterPosition((prev) => prev + 660);
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changePage = (next) => {
    if (next && page < 5) {
      setPage((prev) => prev + 1);
      goToTop();
    } else if (page > 1 && !next) {
      setPage((prev) => prev - 1);
      goToTop();
    }
  };

  const handleChange = (e) => {
    setSelectedGenre(e.target.id);
  };

  return (
    <>
      <div className="movies_page">
        {genres && (
          <div className="filters">
            <div className="filters_controls">
              {genres.map((genre) => {
                return (
                  <input
                    type="radio"
                    name={genre.name}
                    id={genre.id}
                    checked={(selectedGenre ?? initialGenre) === genre.id}
                    onChange={(e) => handleChange(e)}
                  />
                );
              })}
            </div>
            <div className="filters_navigation">
              {filterPosition != 0 && (
                <button onClick={moveLeft} id="move_left">
                  <i className="bi bi-arrow-left-short"></i>
                </button>
              )}
              {filterPosition != -2360 && (
                <button onClick={moveRight} id="move_right">
                  <i className="bi bi-arrow-right-short"></i>
                </button>
              )}
              <div
                className="filters_wrapper"
                style={{ transform: `translateX(${filterPosition}px)` }}
              >
                {genres.map((genre) => {
                  return (
                    <label htmlFor={genre.id}>
                      <div
                        className="option"
                        style={{
                          backgroundColor:
                            (selectedGenre ?? initialGenre) == genre.id ? "#535bf2" : "",
                        }}
                      >
                        <p>{genre.name}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <GridDisplay data={data?.results} />
        <div className="page_controller">
          <div className="controll">
            <button onClick={() => changePage(false)}>
              <i className="bi bi-arrow-left-short"></i>Prev
            </button>
          </div>
          <div className="page">
            <ul>
              <li className={page === 1 ? `current_page` : ""}>1</li>
              <li className={page === 2 ? `current_page` : ""}>2</li>
              <li className={page === 3 ? `current_page` : ""}>3</li>
              <li className={page === 4 ? `current_page` : ""}>4</li>
              <li className={page === 5 ? `current_page` : ""}>5</li>
            </ul>
          </div>
          <div className="controll">
            <button onClick={() => changePage(true)}>
              Next<i className="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsDisplay;
