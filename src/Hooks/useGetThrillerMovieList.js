import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../Configuration/Constants';
import { addThrillerMovielist } from '../utils/movieSlice';

const useGetThrillerMovieList = () => {
    const dispatch= useDispatch();

    useEffect(()=>{
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=53';
                    fetch(url, API_options)
                    .then(res => res.json())
                    .then(json => {
                        dispatch(addThrillerMovielist(json.results));
                    })
                    .catch(err => console.error(err));
    },[]);
    
}

export default useGetThrillerMovieList