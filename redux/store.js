import { configureStore } from '@reduxjs/toolkit'
import plotReducer from './plot'
import roomsReducer from './rooms'
export const store = configureStore({
  reducer: {
    plot: plotReducer,
    rooms: roomsReducer
  }
})
