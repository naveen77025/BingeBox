import React from 'react'
import useGetTrendingMovieDetails from '../Hooks/useGetTrendingMovieDetails';
import useGetTrendingMovieTrailer from '../Hooks/useGetTrendingMovieTrailer';
import TrendingMovieTrailerDetails from './TrendingMovieTrailerDetails';
import TrendingMovieTrailerPlayer from './TrendingMovieTrailerPlayer';

const TrendingMovieTrailer =  () => {
    

    return (
        <div>
            <TrendingMovieTrailerDetails/>
            <TrendingMovieTrailerPlayer/>
        </div>
    )
    }

export default TrendingMovieTrailer