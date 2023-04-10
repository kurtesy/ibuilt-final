import { createSlice } from '@reduxjs/toolkit'
const appSlice = createSlice({
  name: 'app',
  initialState: {
    darkMode: false
  },
  reducers: {
    setDarkMode: (state, action) => {
      return { ...state, darkMode: action.payload.mode }
    }
  }
})
export const { setDarkMode } = appSlice.actions
export default appSlice.reducer
