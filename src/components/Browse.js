import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPalyingMovies';
import TrendingMovieTrailer from './TrendingMovieTrailer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <div className='pt-96 pl-16'>
        <TrendingMovieTrailer/>
      </div>
      {
        /*
        Trailer area
        Movies List
          - Now Palying
          - top 10
          - genre top
          - more
        */
      }
    </div>
  )
}

export default Browse