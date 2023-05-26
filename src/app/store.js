import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducers/userSlice'

// reducer config
export default configureStore({
  reducer: {
    user: userReducer
  }
})
