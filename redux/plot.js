import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: '',
  plotLength: 0,
  plotBreadth: 0,
  plotArea: 0,
  scale: 0,
  setbacks: {
    front: 0,
    back: 0,
    left: 0,
    right: 0
  },
  builtLength: 0,
  builtBreadth: 0,
  builtArea: 0
}
const plotSlice = createSlice({
  name: 'plot',
  initialState,
  reducers: {
    setPlotDetails: (state, action) => {
      const { plotDimensions, scale, type, setbacks } = action.payload
      state.plotLength = plotDimensions.length
      state.plotBreadth = plotDimensions.breadth
      state.scale = scale
      state.type = type
      state.setbacks = setbacks
      state.plotArea = parseFloat(parseFloat(plotDimensions.length) * parseFloat(plotDimensions.breadth)).toFixed(2)
    },
    setBuiltup: (state, action) => {
      state.builtLength = parseFloat(action.payload.builtLength).toFixed(2)
      state.builtBreadth = parseFloat(action.payload.builtBreadth).toFixed(2)
      state.builtArea = parseFloat(
        parseFloat(action.payload.builtLength) * parseFloat(action.payload.builtBreadth)
      ).toFixed(2)
    }
  }
})
export const { setPlotDetails, setBuiltup } = plotSlice.actions
export default plotSlice.reducer
