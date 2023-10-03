import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    counter: 1000,
    name: 'Mitesh',
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.counter = state.counter + 1 },
        decrement: (state) => { state.counter = state.counter - 1 },
        setName: (state, action) => {
            console.log("action", action.payload)
            const { name } = action.payload;
            state.name = name;
        }
    }
})

export default counterSlice.reducer
export const { increment, decrement, setName } = counterSlice.actions;