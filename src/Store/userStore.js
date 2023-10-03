import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userCounter: 500,
    userName: 'Rahul',
}

const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.counter = state.counter + 1 },
        decrement: (state) => { state.counter = state.counter - 1 },
    }
})
console.log("userSlice.reducer", userSlice.reducer);
export default userSlice.reducer
export const { increment, decrement } = userSlice.actions;