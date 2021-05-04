import { configureStore } from '@reduxjs/toolkit'
import SessionReducer from '../reducers/userReducer.js'
import UpdatedUserReducer from '../reducers/updatedUserReducer.js'

export const store = configureStore({
  reducer: {
    session: SessionReducer,
    updated: UpdatedUserReducer,
  },
});
