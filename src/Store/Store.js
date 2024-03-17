import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './FetchData';
const store=configureStore({
    reducer:{
        dataslice:dataReducer,
    },
});
export default store;