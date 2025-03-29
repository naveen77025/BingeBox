import React, { useEffect } from 'react'
import { useSelector, useStore } from 'react-redux'
import useGetTrendingMovieDetails from '../Hooks/useGetTrendingMovieDetails';
import useGetTrendingMovieTrailer from '../Hooks/useGetTrendingMovieTrailer';
import { FaPlay,FaInfoCircle } from "react-icons/fa";

const TrendingMovieTrailerDetails = () => {
    useGetTrendingMovieDetails();
    useGetTrendingMovieTrailer();
    const trendingMovie= useSelector(store=>store.movie.trending);
    //console.log(trendingMovie?.trending);
    if (!trendingMovie) return null;  // wait until data is ready

    const { original_title, overview } = trendingMovie;

    return (
        <div className='ml-14'>
            <h1 className='font-bold text-6xl text-white'>{original_title}</h1>
            <p className='my-3 w-1/3 text-white'>{overview}</p>
            <div className='flex py-2'>
                <button className="flex items-center gap-2 bg-white text-black font-bold py-2 px-2 rounded hover:bg-opacity-80 transition">
                    <FaPlay /> Play 
                </button>
                <button className='flex items-center gap-2 bg-white text-black font-bold py-2 px-2 mx-2 rounded hover:bg-opacity-80 transition'>
                    <FaInfoCircle/>more info
                </button>
            </div>

        </div>
    );  
}

export default TrendingMovieTrailerDetails