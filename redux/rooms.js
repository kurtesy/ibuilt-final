import { createSlice } from '@reduxjs/toolkit'
import bathTypeDimensions from '../src/constants/toiletDimensions'
const initialState = {
  currentPosition: '',
  currentRoom: {},
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
      hasToilet: true,
      hasWardrobe: false,
      hasBalcony: false,
      walls: [
        {
          side: 'front',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { bottom: 0, left: 0 },
          door: {
            includes: true,
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
  livingRooms: [
    {
      id: 'nw',
      length: null,
      breadth: null,
      maxDim: 20,
      minDim: 8,
      area: 0,
      position: { top: 0, left: 0 },
      hasToilet: false,
      hasWash: false,
      hasSitout: false,
      walls: [
        {
          side: 'front',
          length: null,
          thickness: 6,
          direction: 0,
          area: 0,
          position: { bottom: 0, left: 0 },
          door: {
            includes: true,
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
      hasToilet: false,
      hasWash: false,
      hasSitout: false,
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
      hasToilet: false,
      hasWash: false,
      hasSitout: false,
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
      hasToilet: false,
      hasWash: false,
      hasSitout: false,
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
      type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
      length: null,
      breadth: null,
      maxDim: null,
      minDim: null,
      rotated: 0,
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
      id: 'ne',
      type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
      length: null,
      breadth: null,
      maxDim: null,
      minDim: null,
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
      type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
      length: null,
      breadth: null,
      maxDim: null,
      minDim: null,
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
      type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
      length: null,
      breadth: null,
      maxDim: null,
      minDim: null,
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
  commonToilet: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: null,
    breadth: null,
    maxDim: null,
    minDim: null,
    rotated: 0,
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
  Balconies: [
    {
      id: 'nw',
      includes: false,
      maxDim: 15,
      minDim: 3,
      length: null,
      breadth: null,
      position: { right: 0, top: 0 }
    },
    {
      id: 'ne',
      includes: false,
      maxDim: 15,
      minDim: 3,
      length: null,
      breadth: null,
      position: { right: 0, top: 0 }
    },
    {
      id: 'sw',
      includes: false,
      maxDim: 15,
      minDim: 3,
      length: null,
      breadth: null,
      position: { left: 0, bottom: 0 }
    },
    {
      id: 'se',
      includes: false,
      maxDim: 15,
      minDim: 3,
      length: null,
      breadth: null,
      position: { right: 0, bottom: 0 }
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
      state.currentRoom = action.payload
    },
    setSelectedRoomId: (state, action) => {
      state.selectedRoom.id = action.payload.selectedId
      state.selectedRoom.roomType = action.payload.roomType
    },
    updateRoomData: (state, action) => {
      const { id, roomType } = action.payload
      if (roomType === 'bedroom') {
        const currentBedroom = state.bedRooms.filter((room) => room.id === id)[0]
        if (action.payload.balcony !== undefined) {
          currentBedroom.hasBalcony = action.payload.balcony
        }
        if (action.payload.wardrobe !== undefined) {
          currentBedroom.hasWardrobe = action.payload.wardrobe
        }
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
      if (roomType === 'toilet') {
        // bathTypeDimensions
        const currentToilet = state.toilets.filter((room) => room.id === id)[0]
        if (action.payload.rotated !== undefined) {
          currentToilet.rotated = action.payload.rotated
        }
        if (action.payload.bathType) {
          currentToilet.type = parseInt(action.payload.bathType)
          const dimensions = bathTypeDimensions.filter(
            (roomType) => roomType.type === parseInt(action.payload.bathType)
          )[0]
          currentToilet.maxDim = dimensions.maxDims
          currentToilet.minDim = dimensions.minDims
          currentToilet.length = dimensions.length
          currentToilet.breadth = dimensions.breadth
          currentToilet.walls[0].length = dimensions.length
          currentToilet.walls[1].length = dimensions.length
          currentToilet.walls[2].length = dimensions.breadth
          currentToilet.walls[3].length = dimensions.breadth
        }
        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentToilet.length = parseFloat(action.payload.length).toFixed(2)
          currentToilet.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentToilet.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentToilet.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentToilet.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentToilet.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentToilet.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentToilet.length = parseFloat(action.payload.length).toFixed(2)
          currentToilet.area = parseFloat(
            parseFloat(currentToilet.breadth) * parseFloat(action.payload.length)
          ).toFixed(2)
          currentToilet.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentToilet.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentToilet.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentToilet.area = parseFloat(
            parseFloat(currentToilet.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          currentToilet.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentToilet.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentToilet.position = action.payload.position
        }

        state.toilets = state.toilets.filter((room) => room.id !== id)
        state.toilets.push(currentToilet)
      }
      if (roomType === 'living') {
        console.log('action payload: ', action.payload)
        const currentLivingRoom = state.livingRooms.filter((room) => room.id === id)[0]
        if (action.payload.commonToilet !== undefined) {
          currentLivingRoom.hasToilet = action.payload.commonToilet
        }
        if (action.payload.sitout !== undefined) {
          currentLivingRoom.hasSitout = action.payload.sitout
        }
        if (action.payload.wash !== undefined) {
          currentLivingRoom.hasWash = action.payload.wash
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentLivingRoom.length = parseFloat(action.payload.length).toFixed(2)
          currentLivingRoom.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentLivingRoom.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentLivingRoom.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentLivingRoom.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentLivingRoom.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentLivingRoom.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentLivingRoom.length = parseFloat(action.payload.length).toFixed(2)
          currentLivingRoom.area = parseFloat(
            parseFloat(currentLivingRoom.breadth) * parseFloat(action.payload.length)
          ).toFixed(2)
          currentLivingRoom.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentLivingRoom.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentLivingRoom.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentLivingRoom.area = parseFloat(
            parseFloat(currentLivingRoom.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          currentLivingRoom.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentLivingRoom.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentLivingRoom.position = action.payload.position
        }

        state.livingRooms = state.livingRooms.filter((room) => room.id !== id)
        state.livingRooms.push(currentLivingRoom)
      }
      if (roomType === 'commonToilet') {
        // bathTypeDimensions
        const currentToilet = state.commonToilet
        currentToilet.id = id
        if (action.payload.rotated !== undefined) {
          currentToilet.rotated = action.payload.rotated
        }
        if (action.payload.bathType) {
          currentToilet.type = parseInt(action.payload.bathType)
          const dimensions = bathTypeDimensions.filter(
            (roomType) => roomType.type === parseInt(action.payload.bathType)
          )[0]
          currentToilet.maxDim = dimensions.maxDims
          currentToilet.minDim = dimensions.minDims
          currentToilet.length = dimensions.length
          currentToilet.breadth = dimensions.breadth
          currentToilet.walls[0].length = dimensions.length
          currentToilet.walls[1].length = dimensions.length
          currentToilet.walls[2].length = dimensions.breadth
          currentToilet.walls[3].length = dimensions.breadth
        }
        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentToilet.length = parseFloat(action.payload.length).toFixed(2)
          currentToilet.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentToilet.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentToilet.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentToilet.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentToilet.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentToilet.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentToilet.length = parseFloat(action.payload.length).toFixed(2)
          currentToilet.area = parseFloat(
            parseFloat(currentToilet.breadth) * parseFloat(action.payload.length)
          ).toFixed(2)
          currentToilet.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentToilet.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentToilet.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentToilet.area = parseFloat(
            parseFloat(currentToilet.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          currentToilet.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentToilet.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentToilet.position = action.payload.position
        }
        console.log('direction controls=>', action.payload)
        state.commonToilet = currentToilet
      }
    },
    addRoomToPlot: (state, action) => {
      const { position, roomType } = action.payload
      const filteredRooms = state.addedRooms.filter((room) => {
        if (room.position === position && room.roomType === roomType) return room
      })
      if (filteredRooms.length === 0) state.addedRooms.push({ position, roomType })
    },
    removeRoomFromPlot: (state, action) => {
      const { position, roomType } = action.payload
      let indexOfDeleted
      state.addedRooms.forEach((room, index) => {
        if (room.position === position && room.roomType === roomType) {
          indexOfDeleted = index
        }
      })
      state.addedRooms.splice(indexOfDeleted, 1)
    }
  }
})
export const {
  setCurrentPosition,
  setCurrentRoom,
  setSelectedRoomId,
  updateRoomData,
  addRoomToPlot,
  removeRoomFromPlot
} = roomsSlice.actions
export default roomsSlice.reducer
