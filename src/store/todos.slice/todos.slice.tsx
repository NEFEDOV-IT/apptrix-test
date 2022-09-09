import {createSlice} from "@reduxjs/toolkit";
import {ITodos} from "../../types/types";

const initialState: ITodos[] = []

const todosSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addTodos(state, action) {
      return state = action.payload
    },
    filterTodos(state, action) {
      const filterTodos = state.filter(item =>
        item.project.name.toLowerCase().includes(action.payload.toLowerCase())
      )
      return state = filterTodos
    }
  }
})

export const todosReducer = todosSlice.reducer
export const {addTodos, filterTodos} = todosSlice.actions