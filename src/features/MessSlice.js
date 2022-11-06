import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messData: {},
    error: {}
}
export const messSlice = createSlice({
    name: 'mess',
    initialState,
    reducers: {
        getMessData: (state, action) => {
            const data = action.payload

            // make string to number
            state.messData = data
            state.messData.total_deposit = Number(data.total_deposit)
            state.messData.total_meal = Number(data.total_meal)
            state.messData.total_meal_cost = Number(data.total_meal_cost)
            state.messData.total_other_cost = Number(data.total_other_cost)
            state.messData.total_solo_cost = Number(data.total_solo_cost)
            state.messData.meal_rate = (Number(data.total_meal_cost) / Number(data.total_meal)) || 0
            state.messData.sharedCost = Number(data.total_other_cost) / data.members.length || 0
        },
    },
})
export const { getMessData } = messSlice.actions
export default messSlice.reducer