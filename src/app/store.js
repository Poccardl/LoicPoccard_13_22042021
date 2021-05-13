import { configureStore } from '@reduxjs/toolkit'
import SessionReducer from '../reducers/userReducer.js'

export const store = configureStore({
  reducer: {
    session: SessionReducer
  },
});
