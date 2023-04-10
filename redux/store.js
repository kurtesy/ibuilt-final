import { configureStore } from '@reduxjs/toolkit'
import plotReducer from './plot'
import roomsReducer from './rooms'
import appReducer from './app'
export const store = configureStore({
  reducer: {
    plot: plotReducer,
    rooms: roomsReducer,
    app: appReducer
  }
})
