import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedRoom: null,
  positions: { x: [], y: [] }
}
const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateSelectedRoom: (state, action) => {
      console.log(action.payload)
      state.selectedRoom = action.payload
    },
    updatePositions: (state, action) => {
      state.positions = action.payload
    }
  }
})
export const { updateSelectedRoom, updatePositions } = commonSlice.actions
export default commonSlice.reducer
