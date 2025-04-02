import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPalying } from "../utils/movieSlice";

const useNowPlayingMovies=()=>{
    const dispatch= useDispatch();
    useEffect( ()=> {const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzJiYzQwMGZhNzQ0ZTVmYTc2NWZhNjkxMDMyZDUxYSIsIm5iZiI6MTc0MzA4ODY0NC45OTMsInN1YiI6IjY3ZTU2YzA0ZThhMTkxMGU2NTEwYmIwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.460_WA936G0J1jcBclpkDn3vm8XcliIAvVPHcJFJTCw'
        }
        };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        dispatch(addNowPalying(json));
      }
    )
      .catch(err => console.error(err));},[])
}

export default useNowPlayingMovies;