import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPalyingMovies';
import TrendingMovieTrailer from './TrendingMovieTrailer';
import SecondaryContainer from './SecondaryContainer';
import useGetHorrorMovieList from '../Hooks/useGetHorrorMovieList';
import useGetMysteryMovieList from '../Hooks/useGetMysteryMovieList';
import useGetscifiMovieList from '../Hooks/useGetscifiMovieList';
import useGetThrillerMovieList from '../Hooks/useGetThrillerMovieList';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  useNowPlayingMovies();
  useGetHorrorMovieList();
  useGetMysteryMovieList();
  useGetscifiMovieList();
  useGetThrillerMovieList();
  const gptSearch= useSelector(store=>store.gptSearch);
  const gptSearchEnabled=gptSearch.searchEnabled;
  return (
    <div>
      <Header/>
      {
        gptSearchEnabled?<GptSearch/>:<div className='pt-96'>
        <TrendingMovieTrailer/>
        <SecondaryContainer/>
      </div>
      }
    </div>
  )
}

export default Browse