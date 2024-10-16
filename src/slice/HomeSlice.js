import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    darkMode : true,
    currentStage : 1
}
export const HomeSlice =  createSlice({
    name :'portflio',
    initialState,
    reducers: {
        changeMode : (state,action)=>{
            state.darkMode = !state.darkMode
        },
        changeCurrentStage : (state,action)=>{
            state.currentStage = action.payload
        }
    }
}
)

export const {changeMode,changeCurrentStage} = HomeSlice.actions;
export default HomeSlice.reducer;