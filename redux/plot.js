import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: '2BHK',
  facing: 'S',
  plotLength: 0,
  plotBreadth: 0,
  plotArea: 0,
  scale: 10,
  setbacks: {
    front: 4.6,
    back: 1.6,
    left: 1.6,
    right: 1.6
  },
  builtLength: 0,
  builtBreadth: 0,
  builtArea: 0,
  rooms: { nw: [], ne: [], sw: [], se: [] }
}
const plotSlice = createSlice({
  name: 'plot',
  initialState,
  reducers: {
    setPlotDetails: (state, action) => {
      if (action.payload.length) state.plotLength = action.payload.length
      if (action.payload.breadth) state.plotBreadth = action.payload.breadth
      if (action.payload.scale) state.scale = scale
      if (action.payload.type) state.type = type
      if (action.payload.setbacks) state.setbacks = setbacks
      state.plotArea = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2)
    },
    setBuiltup: (state, action) => {
      state.builtLength = parseFloat(action.payload.builtLength).toFixed(2)
      state.builtBreadth = parseFloat(action.payload.builtBreadth).toFixed(2)
      state.builtArea = parseFloat(
        parseFloat(action.payload.builtLength) * parseFloat(action.payload.builtBreadth)
      ).toFixed(2)
    },
    changeScale: (state, action) => {
      state.scale = action.payload.scale
    },
    updateType: (state, action) => {
      state.type = action.payload.type
    },
    updateFacing: (state, action) => {
      state.facing = action.payload.facing
    },
    addRooom: (state, action) => {
      const { location, data } = action.payload
      data.forEach((room) => {
        state.rooms[location.toString()].push(room)
      })
    },
    removeRoom: (state, action) => {
      const { location, id } = action.payload
      const filteredRooms = state.rooms[location.toString()].filter((room) => room.id !== id)
      state.rooms[location.toString()] = filteredRooms
    }
  }
})
export const { setPlotDetails, setBuiltup, changeScale, updateType, updateFacing, addRooom, removeRoom } =
  plotSlice.actions
export default plotSlice.reducer
