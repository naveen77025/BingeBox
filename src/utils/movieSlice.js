import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlaying:null,
        trending:null,
        trendingMovieTrailerInfo:null,
        horrorMoviesList:null,
        mysteryMovieList:null,
        scifiMovieList:null,
        ThrillerMovieList:null
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
        },
        addHorrorMovielist:(state,action)=>{
            state.horrorMoviesList=action.payload;
        },
        addMysteryMovielist:(state,action)=>{
            state.mysteryMovieList=action.payload;
        },
        addScifiMovielist:(state,action)=>{
            state.scifiMovieList=action.payload;
        },
        addThrillerMovielist:(state,action)=>{
            state.ThrillerMovieList=action.payload;
        }
    }
});
export const{addNowPalying,addTrending,removeNowPlaying,removeTrending,addTrendingMovieTrailer,addHorrorMovielist,addMysteryMovielist,addScifiMovielist,addThrillerMovielist}=movieSlice.actions;

export default movieSlice.reducer;