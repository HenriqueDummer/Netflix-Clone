import React, { useState } from "react";

import GridDisplay from "../Components/GridDisplay";

import useFetchData from "../Hooks/useFetchData";

import REQUEST_END_POINTS from "../data/RequestEndPoints";

import { movieGenres as genres } from "../data/genresData";
import GenresFilter from "../Components/GenresFilter";
import LoadingSpin from "../Components/LoadingSpin";
import PageController from "../Components/PageController";

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0].id);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useFetchData(
    REQUEST_END_POINTS.movie.customDiscover(page, selectedGenre ?? initialGenre)
  );


  return (
    <>
      <div className="movies_page">
        <GenresFilter
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
        {isLoading ? <LoadingSpin /> : <GridDisplay data={data?.results} />}
        <PageController page={page} setPage={setPage} />
        
      </div>
    </>
  );
};

export default Movies;
