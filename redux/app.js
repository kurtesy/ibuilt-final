import { createSlice } from '@reduxjs/toolkit'
const appSlice = createSlice({
  name: 'app',
  initialState: {
    darkMode: false
  },
  reducers: {
    toggleMode: (state) => {
      return { ...state, darkMode: !state.darkMode }
    }
  }
})
export const { toggleMode } = appSlice.actions
export default appSlice.reducer
