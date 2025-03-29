import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../Configuration/Constants';
import {addTrending } from '../utils/movieSlice';

const useGetTrendingMovieDetails = () => {
    const dispatch= useDispatch();

    useEffect(()=>{
        const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        fetch(url, API_options)
        .then(res => res.json())
        .then(json => {
            //console.log("inside movie trailer")
            //console.log(json.results[0]);
            dispatch(addTrending(json.results[2]));
        })
        .catch(err => console.error(err));
    },[]);
    
}

export default useGetTrendingMovieDetails