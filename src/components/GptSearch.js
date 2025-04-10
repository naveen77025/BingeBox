import React, { useRef, useState } from "react";
import { API_options, netflixLogo } from "../Configuration/Constants";
import openai from "../Configuration/openAi";
import { useDispatch, useSelector } from "react-redux";
import {
  addGptSearchMovieList,
  addGptSearchMovieListDetails,
} from "../utils/gptSearchSlice";
import MovieCard from "./MovieCard";

const GptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const gptSearchMovieListDetailsTmdb = useSelector(
    (store) => store.gptSearch.gptSearchMovieListDetails
  );
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    return json.results[0];
  };
  //console.log("HI");
  const handleGptSearch = async () => {
    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText?.current?.value +
    ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    console.log(gptQuery);
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      temperature: 1,
      top_p: 1,
    });
    const gptSearchResultList = response?.output_text.split(", ");
    console.log(gptSearchResultList);
    dispatch(addGptSearchMovieList(gptSearchResultList));
    const promiseList = gptSearchResultList.map((movie) =>
      searchMovieTMDB(movie)
    );
    const tmdbResults = await Promise.all(promiseList);
    //console.log(tmdbResults);
    dispatch(addGptSearchMovieListDetails(tmdbResults));
  };
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={netflixLogo} />
      </div>
      <div className="relative flex flex-col items-center justify-center h-full p-4">
        {/* Search bar and button container */}
        <div className="flex items-center justify-center w-full">
          <input
            className="w-4/6 bg-white rounded-md py-1 px-2 text-black z-10 h-14 mr-2"
            type="text"
            ref={searchText}
            placeholder="Search for Movie"
          />
          <button
            className="bg-red-600 px-4 py-1 h-14 rounded-md w-28 text-white"
            onClick={handleGptSearch}
          >
            Search
          </button>
        </div>

        {/* Movie list container */}
        <div className="flex flex-wrap justify-center mt-8 w-full gap-2">
          {gptSearchMovieListDetailsTmdb &&
            gptSearchMovieListDetailsTmdb.map((movie) => (movie?.poster_path &&
              <MovieCard key={movie.id} path={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
