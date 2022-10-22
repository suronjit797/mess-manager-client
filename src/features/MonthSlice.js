import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    monthList: [],
    error: {}
}
export const monthSlice = createSlice({
    name: 'month',
    initialState,
    reducers: {
        getMonthData: (state, action) => {
            const data = action.payload
            state.monthList = data
        },
    },
})
export const { getMonthData } = monthSlice.actions
export default monthSlice.reducer