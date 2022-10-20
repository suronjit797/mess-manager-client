import { configureStore } from "@reduxjs/toolkit";
import MessReducer from "../features/MessSlice";
import UserReducer from "../features/UserSlice";



export const store = configureStore({
    reducer:{
        mess: MessReducer,
        user: UserReducer,
    }
})