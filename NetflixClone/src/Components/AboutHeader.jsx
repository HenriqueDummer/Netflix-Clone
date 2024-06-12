import React from "react";

import { useEffect, useState } from "react";

import useScreenWidth from "../Hooks/useScreenWitdh";

import LoadingSpin from "./LoadingSpin";
import useFetchData from "../Hooks/useFetchData";
import REQUEST_END_POINTS from "../data/RequestEndPoints";

const AboutHeader = ({showFormat, id}) => {
  
  const data = useFetchData(REQUEST_END_POINTS[showFormat].info(id))
  const screenWidth = useScreenWidth();

  return (
    <div className="header_container">
      <div className="header_wrapper">
        {data ? (
          <>
            <div
              className="header_movie"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  screenWidth > 1000 ? data.backdrop_path : data.poster_path
                })`,
              }}
            >
              <div className="header_filter2"></div>
              <div className="header_movie_infos">
                <div className="infos_text">
                  <h2>
                    {data.original_title ? data.original_title : data.name}
                  </h2>
                  <p>{data.overview}</p>
                  <div className="details">
                    <p>
                      {data.release_date
                        ? data.release_date.split("").slice(0, 4).join("")
                        : data.first_air_date.split("").slice(0, 4).join("")}
                    </p>
                    <div id="slash"></div>
                    {data.genres.slice(0, 3).map((genre) => (
                      <span>{genre.name}</span>
                    ))}
                  </div>
                </div>
                <div className="vote_container">
                  <div
                    className="circular_progress"
                    style={{
                      background: `conic-gradient(#535bf2 ${
                        (data.vote_average * 360) / 10
                      }deg, transparent 0deg)`,
                    }}
                  >
                    <span>{Math.round(data.vote_average * 10) / 10}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <LoadingSpin />
        )}
      </div>
    </div>
  );
};

export default AboutHeader;
