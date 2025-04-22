import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
    name:'placeSlice',
    initialState:{
        lat:28.6327,
        lng:77.2198
    },
    reducers:{
        changeLat:(state,action)=>{
            state.lat = action.payload;
        },
        changeLng:(state,action)=>{
            state.lng = action.payload;
        }
    }
})


export const {changeLat,changeLng} = placeSlice.actions;
export default placeSlice.reducer;