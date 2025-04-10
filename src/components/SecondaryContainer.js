import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movie);
  //console.log(movieData);
  return (
    <div className=" mt-10 relative z-20 bg-black flex flex-col gap-6">
      <MovieList
        title="Now Playing"
        movieData={movieData.nowPlaying?.results}
      />
      <MovieList title="Horror" movieData={movieData.horrorMoviesList} />
      <MovieList title="Mystery" movieData={movieData.mysteryMovieList} />
      <MovieList title="Sci-fi" movieData={movieData.scifiMovieList} />
      <MovieList title="Thriller" movieData={movieData.ThrillerMovieList} />
    </div>
  );
};

export default SecondaryContainer;
