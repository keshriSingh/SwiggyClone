import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Slices/CartSlice'

const store = configureStore({
    reducer:{
        cartSlice:cartReducer
    }
})

export default store;