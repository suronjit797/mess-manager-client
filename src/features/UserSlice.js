import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    error: {}
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserData: (state, action) => {
            const data = action.payload
            state.user = data
        },
    },
})
export const { getUserData } = userSlice.actions
export default userSlice.reducer