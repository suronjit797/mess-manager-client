import { configureStore } from "@reduxjs/toolkit";
import MessReducer from "../features/MessSlice";
import UserReducer from "../features/UserSlice";
import MonthReducer from "../features/MonthSlice";



export const store = configureStore({
    reducer:{
        mess: MessReducer,
        user: UserReducer,
        months: MonthReducer,
    }
})