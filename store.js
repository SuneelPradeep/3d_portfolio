import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from './src/slice/HomeSlice'
export const store = configureStore({
    // name : 'portfolio',
    reducer : HomeReducer
})