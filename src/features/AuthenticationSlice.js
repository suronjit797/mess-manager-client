import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    error: {  password: 'please provide password' },
    isAuthenticated: false
}
export const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})
// export const { increment, decrement, incrementByAmount } = authenticationSlice.actions
export default authenticationSlice.reducer