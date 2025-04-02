import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPalyingMovies';
import TrendingMovieTrailer from './TrendingMovieTrailer';
import SecondaryContainer from './SecondaryContainer';
import useGetHorrorMovieList from '../Hooks/useGetHorrorMovieList';
import useGetMysteryMovieList from '../Hooks/useGetMysteryMovieList';
import useGetscifiMovieList from '../Hooks/useGetscifiMovieList';
import useGetThrillerMovieList from '../Hooks/useGetThrillerMovieList';

const Browse = () => {
  useNowPlayingMovies();
  useGetHorrorMovieList();
  useGetMysteryMovieList();
  useGetscifiMovieList();
  useGetThrillerMovieList();
  return (
    <div>
      <Header/>
      <div className='pt-96'>
        <TrendingMovieTrailer/>
        <SecondaryContainer/>
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