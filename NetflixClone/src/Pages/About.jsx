import React, { useEffect, useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import { useNavigate, useParams } from "react-router-dom";

import Carousel from "../Components/Carousel";
import AboutHeader from "../Components/AboutHeader";

import REQUEST_END_POINTS from "../data/RequestEndPoints";
import Cast from "../Components/Cast";

const About = () => {
  //-------------------------------------------------------
  let { showFormat, id } = useParams();
  //-------------------------------------------------------

  const {data: trailerResults, isLoading: isLoadingTrailer} = useFetchData(REQUEST_END_POINTS[showFormat].trailer(id));

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const trailerPath = trailerResults?.results.find((video) => video.type === "Trailer");

  useEffect(() => {
    goToTop();
  }, [id]);
  console.log(REQUEST_END_POINTS[showFormat].similar(id))
  const [watchingTrailer, setWatchingTrailer] = useState();

  const navigate = useNavigate();

  return (
    <>
      <div className="about">
        <button id="go_back_btn" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left-short"></i>
        </button>
        {watchingTrailer && trailerPath && (
          <div
            className="trailer_container"
            onClick={() => setWatchingTrailer(false)}
          >
            <iframe
              className="trailer"
              src={`https://www.youtube.com/embed/${trailerPath.key}?rel=0&showinfo=0&autohide=1&controls=0&autoplay=1&disablekb=1&cc_load_policy=3&modestbranding=1`}
              frameborder="0"
              showinfo="0"
            ></iframe>
            <button id="close_trailer">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>
        )}

        <AboutHeader showFormat={showFormat} id={id} />

        {trailerPath && (
          <div className="link_trailer_container">
            <button disabled={isLoadingTrailer} onClick={() => setWatchingTrailer(true)}>
              <div>
                <p>Watch the trailer </p>
                <i class="bx bx-movie-play"></i>
              </div>
            </button>
          </div>
        )}

        <Cast showFormat={showFormat} id={id} />

        <div className="carousel_container">
          <div className="carousel">
            <h3>Resembling</h3>
            <Carousel endPoint={REQUEST_END_POINTS[showFormat].similar(id)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
