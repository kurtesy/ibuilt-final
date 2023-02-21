import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bedrooms: [
    {
      id: 1,
      length: 0,
      breadth: 0,
      minLength: 5,
      maxLength: 20,
      minBreadth: 5,
      maxBreadth: 20,
      position: { x: 0, y: 0 },
      walls: [
        {
          position: { top: undefined, left: 0, bottom: 0, right: undefined },
          length: 0,
          thickness: 6,
          side: 'front',
          hasDoor: false,
          doorPosition: { top: 0, right: 18 }
        },
        {
          position: { top: undefined, left: 0, top: 0, right: undefined },
          length: 0,
          thickness: 6,
          side: 'back',
          hasDoor: false,
          doorPosition: { top: 0, right: 18 }
        },
        {
          position: { top: undefined, left: 0, top: 0, right: undefined },
          length: 0,
          thickness: 6,
          side: 'left',
          hasDoor: false,
          doorPosition: { top: 0, right: 18 }
        },
        {
          position: { top: undefined, left: undefined, top: 0, right: 0 },
          length: 0,
          thickness: 6,
          side: 'right',
          hasDoor: false,
          doorPosition: { top: 0, right: 18 }
        }
      ],
      balcony: {
        includes: true,
        type: {
          1: {
            length: 0,
            breadth: 0,
            minLength: 3.2,
            maxLength: 12,
            position: { right: 0, top: 0 },
            walls: [
              {
                position: { top: undefined, left: 0, bottom: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'front',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'back',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'left',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: undefined, top: 0, right: 0 },
                length: 0,
                thickness: 6,
                side: 'right',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              }
            ]
          }, // BALCONY ONLY,
          2: {
            length: 0,
            breadth: 0,
            minLength: 3.2,
            maxLength: 12,
            position: { right: 0, top: 0 },
            wash: { position: { left: 0, right: 0 }, icon: 'default' },
            walls: [
              {
                position: { top: undefined, left: 0, bottom: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'front',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'back',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'left',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: undefined, top: 0, right: 0 },
                length: 0,
                thickness: 6,
                side: 'right',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              }
            ]
          } // BALCONY + WASH
        }
      },
      bath: {
        includes: true,
        type: {
          1: {
            length: 0,
            breadth: 0,
            minLength: 3.2,
            maxLength: 8,
            minBreadth: 3.2,
            maxBreadth: 8,
            position: { top: 0, left: 0 },
            wc: { position: { top: 0, left: 0 }, icon: 'default' },
            walls: [
              {
                position: { top: undefined, left: 0, bottom: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'front',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'back',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'left',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: undefined, top: 0, right: 0 },
                length: 0,
                thickness: 6,
                side: 'right',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              }
            ]
          }, //WC ONLY
          2: {
            length: 0,
            breadth: 0,
            minLength: 3.2,
            maxLength: 8,
            minBreadth: 3.2,
            maxBreadth: 8,
            position: { top: 0, left: 0 },
            bath: { position: { top: 0, left: 0 }, icon: 'default' },
            walls: [
              {
                position: { top: undefined, left: 0, bottom: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'front',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'back',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'left',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: undefined, top: 0, right: 0 },
                length: 0,
                thickness: 6,
                side: 'right',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              }
            ]
          }, //BATH ONLY
          3: {
            length: 0,
            breadth: 0,
            minLength: 3.2,
            maxLength: 12,
            minBreadth: 3.2,
            maxBreadth: 12,
            position: { top: 0, left: 0 },
            wc: { position: { top: 0, left: 0 }, icon: 'default' },
            bath: { position: { bottom: 0, right: 0 }, icon: 'default' },
            walls: [
              {
                position: { top: undefined, left: 0, bottom: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'front',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'back',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: 0, top: 0, right: undefined },
                length: 0,
                thickness: 6,
                side: 'left',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              },
              {
                position: { top: undefined, left: undefined, top: 0, right: 0 },
                length: 0,
                thickness: 6,
                side: 'right',
                hasDoor: false,
                doorPosition: { top: 0, right: 18 }
              }
            ]
          } //WC+BATH+WASH
        }
      },
      store: {
        includes: true,
        length: 0,
        breadth: 0,
        minLength: 3.2,
        maxLength: 12,
        minBreadth: 3.2,
        maxBreadth: 12,
        position: { top: 0, left: 0 },
        walls: [
          {
            position: { top: undefined, left: 0, bottom: 0, right: undefined },
            length: 0,
            thickness: 6,
            side: 'front',
            hasDoor: false,
            doorPosition: { top: 0, right: 18 }
          },
          {
            position: { top: undefined, left: 0, top: 0, right: undefined },
            length: 0,
            thickness: 6,
            side: 'back',
            hasDoor: false,
            doorPosition: { top: 0, right: 18 }
          },
          {
            position: { top: undefined, left: 0, top: 0, right: undefined },
            length: 0,
            thickness: 6,
            side: 'left',
            hasDoor: false,
            doorPosition: { top: 0, right: 18 }
          },
          {
            position: { top: undefined, left: undefined, top: 0, right: 0 },
            length: 0,
            thickness: 6,
            side: 'right',
            hasDoor: false,
            doorPosition: { top: 0, right: 18 }
          }
        ]
      }
    }
  ]
}
const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    updateRoom: (state, action) => {
      const { id } = action.payload
      console.log(action.payload)
      if (action.payload.length) {
        //update length
        state.bedrooms[id - 1].length =
          parseFloat(action.payload.length) <= parseFloat(state.bedrooms[id - 1].maxLength)
            ? parseFloat(action.payload.length)
            : parseFloat(state.bedrooms[id - 1].maxLength)

        //update front wall
        state.bedrooms[id - 1].walls[0].length =
          parseFloat(action.payload.length) <= parseFloat(state.bedrooms[id - 1].maxLength)
            ? parseFloat(action.payload.length)
            : parseFloat(state.bedrooms[id - 1].maxLength)

        //update back wall
        state.bedrooms[id - 1].walls[1].length =
          parseFloat(action.payload.length) <= parseFloat(state.bedrooms[id - 1].maxLength)
            ? parseFloat(action.payload.length)
            : parseFloat(state.bedrooms[id - 1].maxLength)
      }
      //update breadth
      if (action.payload.breadth) {
        //update breadth
        state.bedrooms[id - 1].breadth =
          parseFloat(action.payload.breadth) <= parseFloat(state.bedrooms[id - 1].maxBreadth)
            ? parseFloat(action.payload.breadth)
            : parseFloat(state.bedrooms[id - 1].maxBreadth)
        //update left wall
        state.bedrooms[id - 1].walls[2].length =
          parseFloat(action.payload.breadth) <= parseFloat(state.bedrooms[id - 1].maxBreadth)
            ? parseFloat(action.payload.breadth)
            : parseFloat(state.bedrooms[id - 1].maxBreadth)
        //update right wall
        state.bedrooms[id - 1].walls[3].length =
          parseFloat(action.payload.breadth) <= parseFloat(state.bedrooms[id - 1].maxBreadth)
            ? parseFloat(action.payload.breadth)
            : parseFloat(state.bedrooms[id - 1].maxBreadth)
      }
      //update x
      if (action.payload.position.x) state.bedrooms[id - 1].position.x = action.payload.position.x
      //update y
      if (action.payload.position.y) state.bedrooms[id - 1].position.y = action.payload.position.y
    }
  }
})
  

export const { updateRoom } = roomsSlice.actions
export default roomsSlice.reducer
