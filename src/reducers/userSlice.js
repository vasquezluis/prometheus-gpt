import { createSlice } from '@reduxjs/toolkit'

// * initial state of user y reducer
// * slice = reducers + actions

const initialState = {
  id: '',
  email: '',
  token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // * function that take the state and action y does something to the state
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.token = action.payload.token
    },
    unSetUser: (state, action) => {
      state.id = ''
      state.email = ''
      state.token = ''
    }
  }
})

// * export actions
export const { setUser, unSetUser } = userSlice.actions

// * export reducer to the store
export default userSlice.reducer
