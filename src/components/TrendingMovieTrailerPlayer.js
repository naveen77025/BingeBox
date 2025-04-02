import React from 'react'
import { useSelector } from 'react-redux'

const TrendingMovieTrailerPlayer = () => {
    const trendingMovieInfo=useSelector(store=>store.movie.trendingMovieTrailerInfo);
    if(!trendingMovieInfo) return;
    const {key}=trendingMovieInfo;
   // console.log(key);
  return (
    <div className='absolute top-0 left-0 w-screen aspect-video h-full -z-10 overflow-hidden'>
        <iframe className='w-screen aspect-video h-full object-cover' 
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${key}&showinfo=0&disablekb=1`}
        title="YouTube video player"
        frameBorder="0" 
        allow="autoplay; fullscreen"  
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
        
        <div className="absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
  
}

export default TrendingMovieTrailerPlayer