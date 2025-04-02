import React from 'react'
import MovieCard from './MovieCard'

    const MovieList = ({title,movieData}) => {
    console.log(movieData);
    return (
        <div className='px-3 overflow-hidden'>
            <h1 className='text-3xl text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex '>
                {movieData && movieData.map(movie=> <MovieCard key={movie.id} path={movie.poster_path}/>)}
                </div>
            </div>
        </div>
    )
    }

export default MovieList

// movie &&