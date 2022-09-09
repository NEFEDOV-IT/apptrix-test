import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers(state, action) {
      return state = action.payload
    }
  }
})

export const usersReducer = usersSlice.reducer
export const {addUsers} = usersSlice.actions