import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  currentPosition: '',
  currentRoom: '',
  selectedRoom: { id: null, roomType: '' },
  addedRooms: [],
  bedRooms: [
    {
      id: 'nw',
      length: null,
      breadth: null,
      maxDim: 20,
      minDim: 8,
      area: 0,
      position: { top: 0, left: 0 },
      walls: [
        {
          side: 'front',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { bottom: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          },
          opening: {
            includes: true,
            length: 1.8,
            position: { right: 18 }
          }
        },
        {
          side: 'back',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { right: 18 }
          }
        },
        {
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { right: 18 }
          }
        },
        {
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          },
          opening: {
            includes: true,
            length: 1.8,
            position: { right: 18 }
          }
        }
      ]
    },
    {
      id: 'ne',
      length: null,
      breadth: null,
      maxDim: 20,
      minDim: 8,
      area: 0,
      position: { top: 0, right: 0 },
      walls: [
        {
          side: 'front',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { bottom: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'back',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        }
      ]
    },
    {
      id: 'sw',
      length: null,
      breadth: null,
      maxDim: 20,
      minDim: 8,
      area: 0,
      position: { bottom: 0, left: 0 },
      walls: [
        {
          side: 'front',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { bottom: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'back',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        }
      ]
    },
    {
      id: 'se',
      length: null,
      breadth: null,
      maxDim: 20,
      minDim: 8,
      area: 0,
      position: { bottom: 0, right: 0 },
      walls: [
        {
          side: 'front',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { bottom: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'back',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        }
      ]
    }
  ],
  toilets: [
    {
      id: 'nw',
      type: {
        wcOnly: { maxDim: 5, minDim: 3, length: null, breadth: null, position: { top: 0, left: 0 } },
        bathOnly: { maxDim: 8, minDim: 4, length: null, breadth: null, position: { top: 0, left: 0 } },
        wcBath: { maxDim: 8, minDim: 4, length: null, breadth: null, position: { top: 0, left: 0 } }
      },
      walls: [
        {
          side: 'front',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { bottom: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'back',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        }
      ]
    }
  ],
  Balconies: [
    {
      id: 'nw',
      includes: false,
      maxDim: 15,
      minDim: 3,
      length: null,
      breadth: null,
      position: { right: 0, top: 0 }
    }
  ]
}
const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload.position
    },
    setCurrentRoom: (state, action) => {
      state.currentRoom = action.payload.room
    },
    setSelectedRoomId: (state, action) => {
      state.selectedRoom.id = action.payload.selectedId
      state.selectedRoom.roomType = action.payload.roomType
    },
    updateRoomData: (state, action) => {
      const { id, roomType } = action.payload
      if (roomType === 'bedroom') {
        const currentBedroom = state.bedRooms.filter((room) => room.id === id)[0]

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentBedroom.length = parseFloat(action.payload.length).toFixed(2)
          currentBedroom.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentBedroom.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentBedroom.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentBedroom.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentBedroom.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentBedroom.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentBedroom.length = parseFloat(action.payload.length).toFixed(2)
          currentBedroom.area = parseFloat(
            parseFloat(currentBedroom.breadth) * parseFloat(action.payload.length)
          ).toFixed(2)
          currentBedroom.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentBedroom.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentBedroom.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentBedroom.area = parseFloat(
            parseFloat(currentBedroom.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          currentBedroom.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentBedroom.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentBedroom.position = action.payload.position
        }

        state.bedRooms = state.bedRooms.filter((room) => room.id !== id)
        state.bedRooms.push(currentBedroom)
      }
    },
    addRoomToPlot: (state, action) => {
      const { position, roomType } = action.payload
      state.addedRooms.forEach((item, index) => {
        if (item.position === position) state.addedRooms = state.addedRooms.filter((item) => item.position !== position)
      })
      state.addedRooms.push({ position, roomType })
    }
  },
  updateOpening: (state, action) => {}
})
export const { setCurrentPosition, setCurrentRoom, setSelectedRoomId, updateRoomData, addRoomToPlot } =
  roomsSlice.actions
export default roomsSlice.reducer
