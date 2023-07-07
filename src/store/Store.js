import { configureStore } from "@reduxjs/toolkit";
import mm from "./slice/CartSlice"

const store = configureStore({
    reducer:{
        cart : mm
    }
})

export default store;