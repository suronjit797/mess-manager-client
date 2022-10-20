import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: {},
    error: { password: 'please provide password' },
    isAuthenticated: false
}
export const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        login: async (state, action) => {
            const { email, password } = action.payload
            const result = await axios.post('/users/login', { email, password })
            console.log(result)
            state.user = result.data
        },

        register: (state) => {

        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})
export const { login, register } = authenticationSlice.actions
export default authenticationSlice.reducer