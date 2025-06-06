import React, { useEffect } from "react";
import useFetchData from "../Hooks/useFetchData";
import REQUEST_END_POINTS from "../data/RequestEndPoints";
import LoadingSpin from "./LoadingSpin";
import defaultAvatar from "../assets/default_avatar.jpg";

const Cast = ({ showFormat, id }) => {
  const { data: castResult, isLoading } = useFetchData(
    REQUEST_END_POINTS[showFormat].cast(id)
  );

  if (isLoading) return <LoadingSpin />;

  const castData = castResult?.cast;
  return (
    <div className="cast_container">
      <div className="cast_actors">
        {castData.map((actor, idx) => {
          if (idx < 10) {
            return (
              <div className="actor" key={idx}>
                <div
                  className="actor_image"
                  style={{
                    backgroundImage: `url(${
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                        : defaultAvatar
                    })`,
                  }}
                ></div>
                <p>{actor.name}</p>
                <span>as {actor.character}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cast;
