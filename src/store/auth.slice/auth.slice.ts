import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
  },
  reducers: {
    register(state) {
      state.isLogged = true
    },
    registerFail(state) {
      state.isLogged = false
    },
    logOut(state) {
      state.isLogged = false
    },
  }
})

export const authReducer = authSlice.reducer
export const {register, registerFail, logOut} = authSlice.actions