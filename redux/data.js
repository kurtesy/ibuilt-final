import { createSlice } from '@reduxjs/toolkit'
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    plotDetails: {
      facing: null,
      bhk: null,
      length: null,
      breadth: null,
      area: null,
      location: null,
      offsets: { front: null, back: null, left: null, right: null }
    },
    builtupDetails: {
      length: null,
      breadth: null,
      area: null
    },
    roomsDetails: {
      bedrooms: [
        { id: 'nw', length: 0, breadth: 0, area: 0, position: { top: 0, left: 0 } },
        { id: 'ne', length: 0, breadth: 0, area: 0, position: { top: 0, left: 0 } },
        { id: 'sw', length: 0, breadth: 0, area: 0, position: { top: 0, left: 0 } },
        { id: 'se', length: 0, breadth: 0, area: 0, position: { top: 0, left: 0 } }
      ],
      toilets: [],
      balconies: [],
      living: { id: '', length: 0, breadth: 0, area: 0, position: { top: 0, left: 0 } },
      kitchen: {},
      pooja: {},
      drawing: {},
      media: {},
      sitout: {},
      store: {},
      utility: {},
      commonToilet: {},
      office: {},
      parking: {},
      staircase: {},
      dining: {}
    },
    wallsDetails: {
      outer: {},
      inner: {}
    },
    selectedRoom: { id: null, room: null }
  },
  reducers: {
    setPlotDimensions: (state, action) => {
      const { length, breadth } = action.payload
      const area = (parseFloat(length) * parseFloat(breadth)).toFixed(2)
      state.plotDetails.length = parseFloat(length).toFixed(2)
      state.plotDetails.breadth = parseFloat(breadth).toFixed(2)
      state.plotDetails.area = area
    },
    setFacing: (state, action) => {
      const { facing } = action.payload
      state.plotDetails.facing = facing
    },
    setBHK: (state, action) => {
      const { bhk } = action.payload
      state.plotDetails.bhk = bhk
    },
    setSetbacks: (state, action) => {
      const { setbacks } = action.payload
      state.plotDetails.setbacks = setbacks
    },
    setBuiltupDetails: (state, action) => {
      const { length, breadth } = action.payload
      state.builtupDetails.length = parseFloat(length).toFixed(2)
      state.builtupDetails.breadth = parseFloat(breadth).toFixed(2)
      state.builtupDetails.area = (parseFloat(length) * parseFloat(breadth)).toFixed(2)
    },
    addRoom: (state, action) => {
      const { room, data } = action.payload
      console.log(room, JSON.stringify(data))
      if (room === 'bedroom') {
        const bhk = state.plotDetails.bhk
        if (state.roomsDetails.bedrooms.length < bhk) state.roomsDetails.bedrooms.push(data)
      }
      if (room === 'toilet') state.roomsDetails.toilets.push(data)
      if (room === 'balcony') state.roomsDetails.balconies.push(data)
      if (room === 'living') state.roomsDetails.living = data
      if (room === 'kitchen') state.roomsDetails.kitchenRoom = data
      if (room === 'pooja') state.roomsDetails.pooja = data
      if (room === 'drawing') state.roomsDetails.drawing = data
      if (room === 'media') state.roomsDetails.media = data
      if (room === 'sitout') state.roomsDetails.sitout = data
      if (room === 'store') state.roomsDetails.store = data
      if (room === 'utility') state.roomsDetails.utility = data
      if (room === 'commonToilet') state.roomsDetails.commonToilet = data
      if (room === 'office') state.roomsDetails.office = data
      if (room === 'parking') state.roomsDetails.parking = data
      if (room === 'staircase') state.roomsDetails.staircase = data
    },
    removeRoom: (state, action) => {
      const { room, id } = action.payload
      if (room === 'bedroom') {
        const filteredRooms = state.roomsDetails.bedrooms.filter((room) => room.id !== id)
        state.roomsDetails.bedrooms = filteredRooms
      }
      if (room === 'balcony') {
        const filteredRooms = state.roomsDetails.balconies.filter((room) => room.id !== id)
        state.roomsDetails.balconies = filteredRooms
      }
      if (room === 'toilet') {
        const filteredRooms = state.roomsDetails.toilets.filter((room) => room.id !== id)
        state.roomsDetails.toilets = filteredRooms
      } else {
        state.roomsDetails[room] = {}
      }
    },
    updateRoom: (state, action) => {
      const { room, id } = action.payload
      if (room === 'bedroom') {
        const currentRoom = state.roomsDetails.bedrooms.filter((room) => room.id === id)[0]
        if (action.payload.length !== undefined) currentRoom.length = action.payload.length
        if (action.payload.breadth !== undefined) currentRoom.breadth = action.payload.breadth
        if (action.payload.position !== undefined) currentRoom.position = action.payload.position
        const filteredRooms = state.roomsDetails.bedrooms.filter((room) => room.id !== id)
        state.roomsDetails.bedrooms = filteredRooms
        state.roomsDetails.bedrooms.push(currentRoom)
        // }
        // else if (room === 'toilet') {
        //   const currentRoom = state.roomsDetails.toilets.filter((room) => room.id === id)[0]
        //   if (action.payload.length !== undefined) currentRoom.length = action.payload.length
        //   if (action.payload.breadth !== undefined) currentRoom.breadth = action.payload.breadth
        //   if (action.payload.position !== undefined) currentRoom.position = action.payload.position
        //   const filteredRooms = state.roomsDetails.toilets.filter((room) => room.id !== id)
        //   state.roomsDetails.toilets = filteredRooms
        //   state.roomsDetails.toilets.push(currentRoom)
        // } else if (room === 'balcony') {
        //   const currentRoom = state.roomsDetails.balconies.filter((room) => room.id === id)[0]
        //   if (action.payload.length !== undefined) currentRoom.length = action.payload.length
        //   if (action.payload.breadth !== undefined) currentRoom.breadth = action.payload.breadth
        //   if (action.payload.position !== undefined) currentRoom.position = action.payload.position
        //   const filteredRooms = state.roomsDetails.balconies.filter((room) => room.id !== id)
        //   state.roomsDetails.balconies = filteredRooms
        //   state.roomsDetails.balconies.push(currentRoom)
      } else {
        const currentRoom = state.roomsDetails[room]
        console.log('payload: ' + JSON.stringify(action.payload))
        console.log('data currentroom' + JSON.stringify(currentRoom))
        currentRoom.id = id
        if (action.payload.length !== undefined) currentRoom.length = action.payload.length
        if (action.payload.breadth !== undefined) currentRoom.breadth = action.payload.breadth
        if (action.payload.position !== undefined) currentRoom.position = action.payload.position
        state.roomsDetails[room] = currentRoom
      }
    },
    setSelectedRoom: (state, action) => {
      const { id, room } = action.payload
      state.selectedRoom = { id, room }
    }
  }
})
export const {
  setPlotDimensions,
  setFacing,
  setSetbacks,
  setBuiltupDetails,
  setBHK,
  addRoom,
  removeRoom,
  updateRoom,
  setSelectedRoom
} = dataSlice.actions
export default dataSlice.reducer
