import { createSlice } from "@reduxjs/toolkit";

const searchSlicer = createSlice({
    name:'searchSlice',
    initialState:{
        visible:false,
        sign:false
    },
    reducers:{
        show:(state)=>{
            state.visible = true;
        },
        hide:(state)=>{
            state.visible = false;
        },
        showSign:(state)=>{
            state.sign = true;
        },
        hideSign:(state)=>{
            state.sign = false;
        }
    }
})

export const {show,hide,showSign,hideSign} = searchSlicer.actions;
export default searchSlicer.reducer;