import {createSlice} from "@reduxjs/toolkit";
import {getTokenStorage} from "../../storage";
import {TOKEN} from "../../utils";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: !!getTokenStorage(TOKEN.ACCESS_TOKEN) || false,
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