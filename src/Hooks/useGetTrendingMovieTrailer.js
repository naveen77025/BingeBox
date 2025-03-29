import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_options } from '../Configuration/Constants';
import { addTrendingMovieTrailer } from '../utils/movieSlice';

const useGetTrendingMovieTrailer = () => {
    const trendingMovie= useSelector(store=>store.movie.trending);
    const dispatch = useDispatch();
    const trendingMovieId=trendingMovie?.id;
    //console.log(trendingMovieId);

    useEffect(()=>{
        if(!trendingMovieId) return;
        const url = 'https://api.themoviedb.org/3/movie/'+trendingMovieId+'/videos?language=en-US';
        fetch(url, API_options)
        .then(res => res.json())
        .then(json => {
           // console.log(json);
            const filteredData=json.results.filter(item=>item.type=="Trailer");
            dispatch(addTrendingMovieTrailer(filteredData[0]));
        })
        .catch(err => console.error(err));
    },[trendingMovieId])
    

}

export default useGetTrendingMovieTrailer