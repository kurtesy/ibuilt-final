import { configureStore } from '@reduxjs/toolkit'
import plotReducer from './plot'
import roomsReducer from './rooms'
import commonReducer from './common'
export const store = configureStore({
  reducer: {
    plot: plotReducer,
    rooms: roomsReducer,
    common: commonReducer
  }
})
