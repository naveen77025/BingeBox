import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:'gptSearch',
    initialState:{
        searchEnabled:false
    },
    reducers:{
        toggleSearchEnabled:(state)=>{
            state.searchEnabled=!state.searchEnabled;
        }
    }

});

export const {toggleSearchEnabled}=gptSearchSlice.actions;

export default gptSearchSlice.reducer;