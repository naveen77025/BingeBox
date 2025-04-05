import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import gptSearchReducer from "./gptSearchSlice";

const appStore= configureStore({
    reducer:{
        user:userSliceReducer,
        movie:movieSliceReducer,
        gptSearch:gptSearchReducer
    },
});

export default appStore