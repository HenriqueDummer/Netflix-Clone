import React, { useState } from "react";

const GenresFilter = ({ genres, selectedGenre, setSelectedGenre }) => {
  const [filterPosition, setFilterPosition] = useState(0);

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

  const handleChange = (e) => {
    setSelectedGenre(e.target.id);
  };

  return (
    genres && (
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
                        (selectedGenre ?? initialGenre) == genre.id
                          ? "#535bf2"
                          : "",
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
    )
  );
};

export default GenresFilter;
