import { PayloadAction, createSlice } from '@reduxjs/toolkit'

/* 
  TODO 2 estado
*/

export interface user {
  id:number
  name: string
  username: string
  email: string
}

export interface userValue {
  users: user[]
  copyUsers: user[]
}

const initialState : userValue = {
  users: [],
  copyUsers: []
}

export const contSlice = createSlice({
  name: "const",
  initialState,
  reducers: {
    addAll: (state, action: PayloadAction<user[]>) => {
      state.users = action.payload;
      state.copyUsers = action.payload
    },
    removeAll: (state) => {
      state.users = [];
    },
    filtro: (state, action: PayloadAction<string>) => {
      state.users = state.copyUsers.filter((e) => e.name.startsWith(action.payload.toUpperCase()))
    }
  },
})


export const { addAll,removeAll,filtro } = contSlice.actions;

export default contSlice.reducer