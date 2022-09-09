import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./users.slice/users.slice";
import {authReducer} from "./auth.slice/auth.slice";

export const store = configureStore({
  reducer: {
    usersReducer,
    authReducer,
  }
})