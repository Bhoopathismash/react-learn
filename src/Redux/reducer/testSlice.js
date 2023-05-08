import {createSlice} from '@reduxjs/toolkit';


export const testReducer = createSlice({
    name: 'test',
    initialState: {value: 0},
    reducers: {
        testIncrement: (state, actions) => {
            state.value = state.value + 1 + actions.payload.user
        },
        testDecrement: (state, actions) => {
            state.value = state.value - 1 - actions.payload.user 
        }
    }
})

export const {testIncrement, testDecrement} = testReducer.actions;

export default testReducer.reducer;

