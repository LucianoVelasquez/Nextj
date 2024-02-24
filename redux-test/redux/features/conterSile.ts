import { PayloadAction, createSlice } from '@reduxjs/toolkit'
/* 
  TODO: Estado 1
*/
export interface CounterState {
  counter : number
}

const initialState : CounterState = {
  counter: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement : (state) => {
      state.counter -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    }
  },
})


export const { decrement, increment, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer