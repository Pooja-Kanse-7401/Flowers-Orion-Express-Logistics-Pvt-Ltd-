import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducer: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1; 
            }
        },
    }
})

export const { increment, decrement } = cardSlice.actions;
export default cardSlice.reducer;