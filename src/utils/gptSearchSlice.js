import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:'gptSearch',
    initialState:{
        searchEnabled:false,
        gptSearchMovieList:null,
        gptSearchMovieListDetails:null
    },
    reducers:{
        toggleSearchEnabled:(state)=>{
            state.searchEnabled=!state.searchEnabled;
        },
        addGptSearchMovieList:(state,action)=>{
            state.gptSearchMovieList=action.payload;
        },
        addGptSearchMovieListDetails:(state,action)=>{
            state.gptSearchMovieListDetails=action.payload;
        },
        removeGptSearchMovieListDetails:(state)=>{
            state.gptSearchMovieListDetails=null;
        },
        removegptSearchMovieList:(state)=>{
            state.gptSearchMovieList=null;
        },
    }

});

export const {toggleSearchEnabled,addGptSearchMovieList,addGptSearchMovieListDetails,removeGptSearchMovieListDetails,removegptSearchMovieList}=gptSearchSlice.actions;

export default gptSearchSlice.reducer;