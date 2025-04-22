import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Slices/CartSlice'
import searchReducer from '../Slices/SearchSlice'
import placeReducer from '../Slices/PlaceSlice'

const store = configureStore({
    reducer:{
        cartSlice:cartReducer,
        searchSlice:searchReducer,
        placeSlice:placeReducer

    }
})

export default store;