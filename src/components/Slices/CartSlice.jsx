import { createSlice } from "@reduxjs/toolkit";

const  Slicer = createSlice({
    name:'cartSlice',
    initialState:{
        items:[],
        count:0,
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push({...action.payload,quantity:1});
            state.count++;
        },

        increaseItem:(state,action)=>{
            const element = state.items.find((value)=>value.id===action.payload.id);
            element.quantity++;
            state.count++
        },

        decreaseItem:(state,action)=>{
            const element = state.items.find((value)=>value.id === action.payload.id);
            if(element.quantity>1){
                element.quantity--;
            }else{
                state.items = state.items.filter((value) => value.id!==action.payload.id)
            }
            state.count--;
        }

    }

})

export const {addItem,increaseItem,decreaseItem} = Slicer.actions;

export default Slicer.reducer;