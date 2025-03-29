import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlaying:null,
        trending:null,
        trendingMovieTrailerInfo:null
    },
    reducers:{
        addNowPalying:(state,action)=>{
            state.nowPlaying=action.payload;
        },
        removeNowPlaying:(state)=>{
            return state.nowPlaying=null;
        },
        addTrending:(state,action)=>{
            state.trending=action.payload;
        },
        removeTrending:(state)=>{
            return state.trending=null;
        },
        addTrendingMovieTrailer:(state,action)=>{
            state.trendingMovieTrailerInfo=action.payload;
        }
        
    }

});
export const{addNowPalying,addTrending,removeNowPlaying,removeTrending,addTrendingMovieTrailer}=movieSlice.actions;

export default movieSlice.reducer;