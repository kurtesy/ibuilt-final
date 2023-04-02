import { createSlice, current } from '@reduxjs/toolkit'
import bathTypeDimensions from '../src/constants/toiletDimensions'
const initialState = {
  currentPosition: '',
  currentRoom: {},
  selectedRoom: { id: null, roomType: null },
  addedRooms: [],
  selectedWall: null,
  selectedIcon: { id: null, type: null, variant: null },
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
      icons: [],
      walls: [
        {
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          },
          window: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          },
          window: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          },
          window: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          },
          window: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          },
          window: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          },
          window: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          },
          window: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
          added: false,
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
            includes: false,
            length: 1.8,
            position: { right: 18 }
          },
          window: {
            includes: false,
            position: { right: 18 },
            type: 'default'
          }
        },
        {
          added: false,
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
          added: false,
          side: 'left',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, left: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
          }
        },
        {
          added: false,
          side: 'right',
          length: null,
          thickness: 6,
          direction: 1,
          area: 0,
          position: { top: 0, right: 0 },
          door: {
            includes: false,
            position: { top: 18 },
            type: 'default'
          },
          opening: {
            includes: false,
            length: 1.8,
            position: { top: 18 }
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
  balconies: [
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
  ],
  kitchen: {
    id: '',
    length: null,
    breadth: null,
    maxDim: 12,
    minDim: 4,
    rotated: 0,
    area: 0,
    hasStore: false,
    hasUtility: false,
    position: { bottom: 0, right: 0 },
    walls: [
      {
        added: false,
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
          includes: false,
          length: 1.8,
          position: { right: 18 }
        },
        window: {
          includes: false,
          position: { right: 18 },
          type: 'default'
        }
      },
      {
        added: false,
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
        added: false,
        side: 'left',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, left: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      },
      {
        added: false,
        side: 'right',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, right: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      }
    ]
  },
  utility: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 3,
    breadth: 3,
    maxDim: 12,
    minDim: 3,
    rotated: 0,
    area: 0,
    position: { top: 0, right: 0 },
    walls: [
      {
        added: false,
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
          includes: false,
          length: 1.8,
          position: { right: 18 }
        },
        window: {
          includes: false,
          position: { right: 18 },
          type: 'default'
        }
      },
      {
        added: false,
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
        added: false,
        side: 'left',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, left: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      },
      {
        added: false,
        side: 'right',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, right: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      }
    ]
  },
  store: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 3,
    breadth: 3,
    maxDim: 8,
    minDim: 3,
    rotated: 0,
    area: 0,
    position: { top: 0, left: 0 },
    walls: [
      {
        added: false,
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
          includes: false,
          length: 1.8,
          position: { right: 18 }
        },
        window: {
          includes: false,
          position: { right: 18 },
          type: 'default'
        }
      },
      {
        added: false,
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
        added: false,
        side: 'left',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, left: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      },
      {
        added: false,
        side: 'right',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, right: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      }
    ]
  },
  dining: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 8,
    breadth: 8,
    maxDim: 12,
    minDim: 3,
    rotated: 0,
    area: 0,
    position: { top: 0, right: 0 },
    walls: [
      {
        added: false,
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
          includes: false,
          length: 1.8,
          position: { right: 18 }
        },
        window: {
          includes: false,
          position: { right: 18 },
          type: 'default'
        }
      },
      {
        added: false,
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
        added: false,
        side: 'left',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, left: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      },
      {
        added: false,
        side: 'right',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, right: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      }
    ]
  },
  drawing: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 8,
    breadth: 8,
    maxDim: 12,
    minDim: 3,
    rotated: 0,
    area: 0,
    position: { top: 0, right: 0 },
    walls: [
      {
        added: false,
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
          includes: false,
          length: 1.8,
          position: { right: 18 }
        },
        window: {
          includes: false,
          position: { right: 18 },
          type: 'default'
        }
      },
      {
        added: false,
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
        added: false,
        side: 'left',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, left: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      },
      {
        added: false,
        side: 'right',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, right: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      }
    ]
  },
  pooja: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 8,
    breadth: 8,
    maxDim: 12,
    minDim: 3,
    rotated: 0,
    area: 0,
    position: { top: 0, right: 0 },
    walls: [
      {
        added: false,
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
          includes: false,
          length: 1.8,
          position: { right: 18 }
        },
        window: {
          includes: false,
          position: { right: 18 },
          type: 'default'
        }
      },
      {
        added: false,
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
        added: false,
        side: 'left',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, left: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      },
      {
        added: false,
        side: 'right',
        length: null,
        thickness: 6,
        direction: 1,
        area: 0,
        position: { top: 0, right: 0 },
        door: {
          includes: false,
          position: { top: 18 },
          type: 'default'
        },
        opening: {
          includes: false,
          length: 1.8,
          position: { top: 18 }
        }
      }
    ]
  },
  icons: [
    // type, variant, id
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
        if (action.payload.icon !== undefined) {
          currentBedroom.icons.push(icon)
        }
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
      if (roomType === 'kitchen') {
        // bathTypeDimensions
        const currentKitchen = state.kitchen
        currentKitchen.id = id
        if (action.payload.store !== undefined) {
          currentKitchen.hasStore = action.payload.store
        }
        if (action.payload.utility !== undefined) {
          currentKitchen.hasUtility = action.payload.utility
        }
        if (action.payload.rotated !== undefined) {
          currentKitchen.rotated = action.payload.rotated
        }
        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentKitchen.length = parseFloat(action.payload.length).toFixed(2)
          currentKitchen.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentKitchen.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentKitchen.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentKitchen.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentKitchen.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentKitchen.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentKitchen.length = parseFloat(action.payload.length).toFixed(2)
          currentKitchen.area = parseFloat(
            parseFloat(currentKitchen.breadth) * parseFloat(action.payload.length)
          ).toFixed(2)
          currentKitchen.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentKitchen.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentKitchen.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentKitchen.area = parseFloat(
            parseFloat(currentKitchen.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          currentKitchen.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentKitchen.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentKitchen.position = action.payload.position
        }
        console.log('direction controls=>', action.payload)
        state.kitchen = currentKitchen
      }
      if (roomType === 'utility') {
        const currentUtility = state.utility
        currentUtility.id = id
        if (action.payload.rotated !== undefined) {
          currentUtility.rotated = action.payload.rotated
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentUtility.length = parseFloat(action.payload.length).toFixed(2)
          currentUtility.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentUtility.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentUtility.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentUtility.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentUtility.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentUtility.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentUtility.length = parseFloat(action.payload.length).toFixed(2)
          currentUtility.area = parseFloat(
            parseFloat(currentUtility.breadth) * parseFloat(action.payload.length)
          ).toFixed(2)
          currentUtility.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentUtility.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentUtility.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentUtility.area = parseFloat(
            parseFloat(currentUtility.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          currentUtility.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentUtility.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentUtility.position = action.payload.position
        }
        console.log('direction controls=>', action.payload)
        state.utility = currentUtility
      }
      if (roomType === 'store') {
        const currentStore = state.store
        currentStore.id = id
        if (action.payload.rotated !== undefined) {
          currentStore.rotated = action.payload.rotated
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentStore.length = parseFloat(action.payload.length).toFixed(2)
          currentStore.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentStore.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentStore.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentStore.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentStore.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentStore.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentStore.length = parseFloat(action.payload.length).toFixed(2)
          currentStore.area = parseFloat(parseFloat(currentStore.breadth) * parseFloat(action.payload.length)).toFixed(
            2
          )
          currentStore.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentStore.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentStore.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentStore.area = parseFloat(parseFloat(currentStore.length) * parseFloat(action.payload.breadth)).toFixed(
            2
          )
          currentStore.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentStore.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentStore.position = action.payload.position
        }
        console.log('direction controls=>', action.payload)
        state.store = currentStore
      }
      if (roomType === 'dining') {
        const currentDining = state.dining
        currentDining.id = id
        if (action.payload.rotated !== undefined) {
          currentDining.rotated = action.payload.rotated
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentDining.length = parseFloat(action.payload.length).toFixed(2)
          currentDining.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentDining.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentDining.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentDining.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentDining.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentDining.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentDining.length = parseFloat(action.payload.length).toFixed(2)
          currentDining.area = parseFloat(
            parseFloat(currentDining.breadth) * parseFloat(action.payload.length)
          ).toFixed(2)
          currentDining.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentDining.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentDining.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentDining.area = parseFloat(
            parseFloat(currentDining.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          currentDining.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentDining.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentDining.position = action.payload.position
        }
        console.log('direction controls=>', action.payload)
        state.dining = currentDining
      }
      if (roomType === 'drawing') {
        const currentDrawing = state.drawing
        currentDrawing.id = id
        if (action.payload.rotated !== undefined) {
          currentDrawing.rotated = action.payload.rotated
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentDrawing.length = parseFloat(action.payload.length).toFixed(2)
          currentDrawing.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentDrawing.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentDrawing.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentDrawing.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentDrawing.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentDrawing.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentDrawing.length = parseFloat(action.payload.length).toFixed(2)
          currentDrawing.area = parseFloat(
            parseFloat(currentDrawing.breadth) * parseFloat(action.payload.length)
          ).toFixed(2)
          currentDrawing.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentDrawing.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentDrawing.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentDrawing.area = parseFloat(
            parseFloat(currentDrawing.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          currentDrawing.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentDrawing.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentDrawing.position = action.payload.position
        }
        console.log('direction controls=>', action.payload)
        state.drawing = currentDrawing
      }
      if (roomType === 'pooja') {
        const currentPooja = state.pooja
        currentPooja.id = id
        if (action.payload.rotated !== undefined) {
          currentPooja.rotated = action.payload.rotated
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentPooja.length = parseFloat(action.payload.length).toFixed(2)
          currentPooja.breadth = parseFloat(action.payload.breadth).toFixed(2)
          //update area
          currentPooja.area = parseFloat(
            parseFloat(action.payload.length) * parseFloat(action.payload.breadth)
          ).toFixed(2)
          //update wall dimensions
          //Front Wall
          currentPooja.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          //Back Wall
          currentPooja.walls[1].length = parseFloat(action.payload.length).toFixed(2)
          //Left Wall
          currentPooja.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          //Right Wall
          currentPooja.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentPooja.length = parseFloat(action.payload.length).toFixed(2)
          currentPooja.area = parseFloat(parseFloat(currentPooja.breadth) * parseFloat(action.payload.length)).toFixed(
            2
          )
          currentPooja.walls[0].length = parseFloat(action.payload.length).toFixed(2)
          currentPooja.walls[1].length = parseFloat(action.payload.length).toFixed(2)
        }
        if (action.payload.breadth && !action.payload.length) {
          currentPooja.breadth = parseFloat(action.payload.breadth).toFixed(2)
          currentPooja.area = parseFloat(parseFloat(currentPooja.length) * parseFloat(action.payload.breadth)).toFixed(
            2
          )
          currentPooja.walls[2].length = parseFloat(action.payload.breadth).toFixed(2)
          currentPooja.walls[3].length = parseFloat(action.payload.breadth).toFixed(2)
        }

        if (action.payload.position) {
          currentPooja.position = action.payload.position
        }
        console.log('direction controls=>', action.payload)
        state.pooja = currentPooja
      }
    },
    addRoomToPlot: (state, action) => {
      const { position, roomType } = action.payload
      if (
        roomType === 'kitchen' ||
        roomType === 'drawing' ||
        roomType === 'dining' ||
        roomType === 'pooja' ||
        roomType === 'commonToilet'
      ) {
        const filteredRooms = state.addedRooms.filter((room) => room.roomType == roomType)
        if (filteredRooms.length === 0) state.addedRooms.push({ position, roomType })
      } else {
        const filteredRooms = state.addedRooms.filter((room) => {
          if (room.position === position && room.roomType === roomType) return room
        })
        if (filteredRooms.length === 0) state.addedRooms.push({ position, roomType })
      }
    },
    removeRoomFromPlot: (state, action) => {
      const { position, roomType } = action.payload
      console.log('Delete===>' + position, roomType)
      let indexOfDeleted
      state.addedRooms.forEach((room, index) => {
        if (room.position === position && room.roomType === roomType) {
          indexOfDeleted = index
        }
      })
      state.addedRooms.splice(indexOfDeleted, 1)
    },
    saveCurrentRoomsState: (state, action) => {
      const bedRoomsData = state.bedRooms
      const livingRoomsData = state.livingRooms
      const toiletsData = state.toilets
      const commonToiletData = state.commonToilet
      const kitchenData = state.kitchen
      const storeData = state.store
      const addedRoomsData = state.addedRooms
      const balconiesData = state.balconies
      const utilityData = state.utility

      window.localStorage.setItem('bedRoomsData', JSON.stringify(bedRoomsData))
      window.localStorage.setItem('livingRoomsData', JSON.stringify(livingRoomsData))
      window.localStorage.setItem('toiletsData', JSON.stringify(toiletsData))
      window.localStorage.setItem('commonToiletData', JSON.stringify(commonToiletData))
      window.localStorage.setItem('kitchenData', JSON.stringify(kitchenData))
      window.localStorage.setItem('storeData', JSON.stringify(storeData))
      window.localStorage.setItem('addedRoomsData', JSON.stringify(addedRoomsData))
      window.localStorage.setItem('balconiesData', JSON.stringify(balconiesData))
      window.localStorage.setItem('utilityData', JSON.stringify(utilityData))
    },
    restorePreviousRoomsState: (state, action) => {
      const {
        bedRoomsData,
        livingRoomsData,
        toiletsData,
        commonToiletData,
        kitchenData,
        storeData,
        addedRoomsData,
        balconiesData,
        utilityData
      } = action.payload
      if (addedRoomsData) state.addedRooms = addedRoomsData
      if (bedRoomsData) state.bedRooms = bedRoomsData
      if (livingRoomsData) state.livingRooms = livingRoomsData
      if (toiletsData) state.toilets = toiletsData
      if (commonToiletData) state.commonToilet = commonToiletData
      if (kitchenData) state.kitchen = kitchenData
      if (storeData) state.store = storeData
      if (addedRoomsData) state.addedRooms = addedRoomsData
      if (balconiesData) state.balconies = balconiesData
      if (utilityData) state.utility = utilityData
    },
    setSelectedIcon: (state, action) => {
      //id,type,variant
      state.selectedIcon = action.payload
    },
    changeIconVariant: (state, action) => {
      const { id, variant } = action.payload
      const currentSelection = state.icons.filter((icon) => icon.id === id)[0]
      currentSelection.variant = variant
      state.icons = state.icons.filter((icon) => icon.id !== id)
      state.icons.push(currentSelection)
    },
    addIcontoList: (state, action) => {
      console.log(action.payload)
      state.icons.push(action.payload.icon)
      // bedroom - nw - beds - 1
      const room = action.payload.icon.id.split('-')[0]
      const roomId = action.payload.icon.id.split('-')[1]
      console.log(room, roomId)
      if (room === 'bedroom') {
        const currentRoom = state.bedRooms.filter((room) => room.id === roomId)[0]
        console.log(JSON.stringify(currentRoom))
        currentRoom.icons.push({ id: action.payload.icon.id, src: action.payload.icon.src })
      }
    },
    removeIcon: (state, action) => {
      const { id } = action.payload
      state.icons = state.icons.filter((icon) => icon.id !== id)
    },
    addWallToRoom: (state, action) => {
      const { side, status, roomType, id } = action.payload
      console.log(`side ${side} status ${status}`)
      if (roomType === 'bedroom') {
        const currentRoom = state.bedRooms.filter((room) => room.id === id)[0]
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        const filteredRooms = state.bedRooms.filter((room) => room.id !== id)
        filteredRooms.push(currentRoom)
        state.bedRooms = filteredRooms
      }
      if (roomType === 'living') {
        const currentRoom = state.livingRooms.filter((room) => room.id === id)[0]
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        const filteredRooms = state.livingRooms.filter((room) => room.id !== id)
        filteredRooms.push(currentRoom)
        state.livingRooms = filteredRooms
      }
      if (roomType === 'toilet') {
        const currentRoom = state.toilets.filter((room) => room.id === id)[0]
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        const filteredRooms = state.livingRooms.filter((room) => room.id !== id)
        filteredRooms.push(currentRoom)
        state.toilets = filteredRooms
      }
      if (roomType === 'kitchen') {
        const currentRoom = state.kitchen
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.kitchen = currentRoom
      }
      if (roomType === 'utility') {
        const currentRoom = state.utility
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.utility = currentRoom
      }
      if (roomType === 'store') {
        const currentRoom = state.store
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.store = currentRoom
      }
      if (roomType === 'drawing') {
        const currentDrawing = state.drawing
        const currentWall = currentDrawing.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.drawing = currentDrawing
      }
      if (roomType === 'dining') {
        const currentDining = state.dining
        const currentWall = currentDining.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.dining = currentDining
      }
      if (roomType === 'pooja') {
        const currentPooja = state.pooja
        const currentWall = currentPooja.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.dining = currentPooja
      }
    },
    updateWall: (state, action) => {
      const { id } = action.payload
      console.log('payload: ' + JSON.stringify(action.payload))
      const currentRoomType = id.split('-')[0]
      const currentDirection = id.split('-')[1]
      const currentWallSide = id.split('-')[2]
      console.log('currentRoomType: ' + currentRoomType)
      //BED
      if (currentRoomType === 'bedroom') {
        const currentBedroom = state.bedRooms.filter((room) => room.id === currentDirection)[0]
        const currentWall = currentBedroom.walls.filter((wall) => wall.side == currentWallSide)[0]
        const filteredWalls = currentBedroom.walls.filter((wall) => wall.side !== currentWallSide)
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening
          filteredWalls.push(currentWall)
          currentBedroom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentBedroom))
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor
          filteredWalls.push(currentWall)
          currentBedroom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentBedroom))
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow
          filteredWalls.push(currentWall)
          currentBedroom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentBedroom))
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength)
          filteredWalls.push(currentWall)
          currentBedroom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentBedroom))
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload
          console.log('action position: ', JSON.stringify(openingPosition))
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(openingPosition) }
          } else {
            pos = { top: parseInt(openingPosition) }
          }
          currentWall.opening.position = pos
          filteredWalls.push(currentWall)
          currentBedroom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentBedroom))
        }
        if (action.payload.doorPosition !== undefined) {
          const { doorPosition } = action.payload
          console.log('action position: ', JSON.stringify(doorPosition))
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(doorPosition) }
          } else {
            pos = { top: parseInt(doorPosition) }
          }
          currentWall.door.position = pos
          filteredWalls.push(currentWall)
          currentBedroom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentBedroom))
        }
        state.bedRooms = state.bedRooms.filter((room) => room.id !== currentDirection)
        console.log('state.bedrooms' + state.bedRooms.length)
        state.bedRooms.push(currentBedroom)
        console.log('currenrtbedtroom walls after' + JSON.stringify(currentBedroom))
        console.log('state.bedrooms' + state.bedRooms.length)
      }
      // LIVING
      if (currentRoomType === 'living') {
        const currentLivingRoom = state.livingRooms.filter((room) => room.id === currentDirection)[0]
        const currentWall = currentLivingRoom.walls.filter((wall) => wall.side == currentWallSide)[0]
        const filteredWalls = currentLivingRoom.walls.filter((wall) => wall.side !== currentWallSide)
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening
          filteredWalls.push(currentWall)
          currentLivingRoom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentLivingRoom))
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor
          filteredWalls.push(currentWall)
          currentLivingRoom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentLivingRoom))
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow
          filteredWalls.push(currentWall)
          currentLivingRoom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentLivingRoom))
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength)
          filteredWalls.push(currentWall)
          currentLivingRoom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentLivingRoom))
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload
          console.log('action position: ', JSON.stringify(openingPosition))
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(openingPosition) }
          } else {
            pos = { top: parseInt(openingPosition) }
          }
          currentWall.opening.position = pos
          filteredWalls.push(currentWall)
          currentLivingRoom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentLivingRoom))
        }
        if (action.payload.doorPosition !== undefined) {
          const { doorPosition } = action.payload
          console.log('action position: ', JSON.stringify(doorPosition))
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(doorPosition) }
          } else {
            pos = { top: parseInt(doorPosition) }
          }
          currentWall.door.position = pos
          filteredWalls.push(currentWall)
          currentLivingRoom.walls = filteredWalls
          console.log('currenrtbedtroom walls' + JSON.stringify(currentLivingRoom))
        }
        state.livingRooms = state.livingRooms.filter((room) => room.id !== currentDirection)
        console.log('state.bedrooms' + state.livingRooms.length)
        state.livingRooms.push(currentLivingRoom)
        console.log('currenrtbedtroom walls after' + JSON.stringify(currentLivingRoom))
        console.log('state.bedrooms' + state.livingRooms.length)
      }
      //TOILET
       if (currentRoomType === 'toilet') {
         const currentToilet = state.toilets.filter((room) => room.id === currentDirection)[0]
         const currentWall = currentToilet.walls.filter((wall) => wall.side == currentWallSide)[0]
         const filteredWalls = currentToilet.walls.filter((wall) => wall.side !== currentWallSide)
         if (action.payload.hasOpening !== undefined) {
           // opening.includes
           currentWall.opening.includes = action.payload.hasOpening
           filteredWalls.push(currentWall)
           currentToilet.walls = filteredWalls
           console.log('currenrtbedtroom walls' + JSON.stringify(currentToilet))
         }
         if (action.payload.hasDoor !== undefined) {
           // opening.includes
           currentWall.door.includes = action.payload.hasDoor
           filteredWalls.push(currentWall)
           currentToilet.walls = filteredWalls
           console.log('currenrtbedtroom walls' + JSON.stringify(currentToilet))
         }
         if (action.payload.hasWindow !== undefined) {
           currentWall.window.includes = action.payload.hasWindow
           filteredWalls.push(currentWall)
           currentToilet.walls = filteredWalls
           console.log('currenrtbedtroom walls' + JSON.stringify(currentToilet))
         }
         if (action.payload.openingLength !== undefined) {
           currentWall.opening.length = parseFloat(action.payload.openingLength)
           filteredWalls.push(currentWall)
           currentToilet.walls = filteredWalls
           console.log('currenrtbedtroom walls' + JSON.stringify(currentToilet))
         }
         if (action.payload.openingPosition !== undefined) {
           const { openingPosition } = action.payload
           console.log('action position: ', JSON.stringify(openingPosition))
           let pos
           if (currentWallSide === 'front' || currentWallSide === 'back') {
             pos = { right: parseInt(openingPosition) }
           } else {
             pos = { top: parseInt(openingPosition) }
           }
           currentWall.opening.position = pos
           filteredWalls.push(currentWall)
           currentToilet.walls = filteredWalls
           console.log('currenrtbedtroom walls' + JSON.stringify(currentToilet))
         }
         if (action.payload.doorPosition !== undefined) {
           const { doorPosition } = action.payload
           console.log('action position: ', JSON.stringify(doorPosition))
           let pos
           if (currentWallSide === 'front' || currentWallSide === 'back') {
             pos = { right: parseInt(doorPosition) }
           } else {
             pos = { top: parseInt(doorPosition) }
           }
           currentWall.door.position = pos
           filteredWalls.push(currentWall)
           currentToilet.walls = filteredWalls
           console.log('currenrtbedtroom walls' + JSON.stringify(currentToilet))
         }
         state.toilets = state.toilets.filter((room) => room.id !== currentDirection)
         console.log('state.bedrooms' + state.toilets.length)
         state.toilets.push(currentToilet)
         console.log('currenrtbedtroom walls after' + JSON.stringify(currentToilet))
         console.log('state.bedrooms' + state.toilets.length)
       }
      if (currentRoomType === 'kitchen') {
        const currentKitchen = state.kitchen
        const currentWall = currentKitchen.walls.filter((wall) => wall.side == currentWallSide)[0]
        const filteredWalls = currentKitchen.walls.filter((wall) => wall.side !== currentWallSide)
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening
          filteredWalls.push(currentWall)
          currentKitchen.walls = filteredWalls
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor
          filteredWalls.push(currentWall)
          currentKitchen.walls = filteredWalls
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow
          filteredWalls.push(currentWall)
          currentKitchen.walls = filteredWalls
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength)
          filteredWalls.push(currentWall)
          currentKitchen.walls = filteredWalls
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(openingPosition) }
          } else {
            pos = { top: parseInt(openingPosition) }
          }
          currentWall.opening.position = pos
          filteredWalls.push(currentWall)
          currentKitchen.walls = filteredWalls
        }
        if (action.payload.doorPosition !== undefined) {
          const { doorPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(doorPosition) }
          } else {
            pos = { top: parseInt(doorPosition) }
          }
          currentWall.door.position = pos
          filteredWalls.push(currentWall)
          currentKitchen.walls = filteredWalls
        }
        state.kitchen = currentKitchen
      }
      if (currentRoomType === 'utility') {
        const currentUtility = state.utility
        const currentWall = currentUtility.walls.filter((wall) => wall.side == currentWallSide)[0]
        const filteredWalls = currentUtility.walls.filter((wall) => wall.side !== currentWallSide)
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening
          filteredWalls.push(currentWall)
          currentUtility.walls = filteredWalls
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor
          filteredWalls.push(currentWall)
          currentUtility.walls = filteredWalls
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow
          filteredWalls.push(currentWall)
          currentUtility.walls = filteredWalls
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength)
          filteredWalls.push(currentWall)
          currentUtility.walls = filteredWalls
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(openingPosition) }
          } else {
            pos = { top: parseInt(openingPosition) }
          }
          currentWall.opening.position = pos
          filteredWalls.push(currentWall)
          currentUtility.walls = filteredWalls
        }
        if (action.payload.doorPosition !== undefined) {
          const { doorPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(doorPosition) }
          } else {
            pos = { top: parseInt(doorPosition) }
          }
          currentWall.door.position = pos
          filteredWalls.push(currentWall)
          currentUtility.walls = filteredWalls
        }
        state.utility = currentUtility
      }
      if (currentRoomType === 'store') {
        const currentStore = state.store
        const currentWall = currentStore.walls.filter((wall) => wall.side == currentWallSide)[0]
        const filteredWalls = currentStore.walls.filter((wall) => wall.side !== currentWallSide)
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening
          filteredWalls.push(currentWall)
          currentStore.walls = filteredWalls
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor
          filteredWalls.push(currentWall)
          currentStore.walls = filteredWalls
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow
          filteredWalls.push(currentWall)
          currentStore.walls = filteredWalls
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength)
          filteredWalls.push(currentWall)
          currentStore.walls = filteredWalls
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(openingPosition) }
          } else {
            pos = { top: parseInt(openingPosition) }
          }
          currentWall.opening.position = pos
          filteredWalls.push(currentWall)
          currentStore.walls = filteredWalls
        }
        if (action.payload.doorPosition !== undefined) {
          const { doorPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(doorPosition) }
          } else {
            pos = { top: parseInt(doorPosition) }
          }
          currentWall.door.position = pos
          filteredWalls.push(currentWall)
          currentStore.walls = filteredWalls
        }
        state.store = currentStore
      }
      if (currentRoomType === 'dining') {
        const currentDining = state.dining
        const currentWall = currentDining.walls.filter((wall) => wall.side == currentWallSide)[0]
        const filteredWalls = currentDining.walls.filter((wall) => wall.side !== currentWallSide)
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening
          filteredWalls.push(currentWall)
          currentDining.walls = filteredWalls
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor
          filteredWalls.push(currentWall)
          currentDining.walls = filteredWalls
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow
          filteredWalls.push(currentWall)
          currentDining.walls = filteredWalls
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength)
          filteredWalls.push(currentWall)
          currentDining.walls = filteredWalls
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(openingPosition) }
          } else {
            pos = { top: parseInt(openingPosition) }
          }
          currentWall.opening.position = pos
          filteredWalls.push(currentWall)
          currentDining.walls = filteredWalls
        }
        if (action.payload.doorPosition !== undefined) {
          const { doorPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(doorPosition) }
          } else {
            pos = { top: parseInt(doorPosition) }
          }
          currentWall.door.position = pos
          filteredWalls.push(currentWall)
          currentDining.walls = filteredWalls
        }
        state.dining = currentDining
      }
      if (currentRoomType === 'drawing') {
        const currentDrawing = state.drawing
        const currentWall = currentDrawing.walls.filter((wall) => wall.side == currentWallSide)[0]
        const filteredWalls = currentDrawing.walls.filter((wall) => wall.side !== currentWallSide)
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening
          filteredWalls.push(currentWall)
          currentDrawing.walls = filteredWalls
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor
          filteredWalls.push(currentWall)
          currentDrawing.walls = filteredWalls
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow
          filteredWalls.push(currentWall)
          currentDrawing.walls = filteredWalls
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength)
          filteredWalls.push(currentWall)
          currentDrawing.walls = filteredWalls
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(openingPosition) }
          } else {
            pos = { top: parseInt(openingPosition) }
          }
          currentWall.opening.position = pos
          filteredWalls.push(currentWall)
          currentDrawing.walls = filteredWalls
        }
        if (action.payload.doorPosition !== undefined) {
          const { doorPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(doorPosition) }
          } else {
            pos = { top: parseInt(doorPosition) }
          }
          currentWall.door.position = pos
          filteredWalls.push(currentWall)
          currentDrawing.walls = filteredWalls
        }
        state.drawing = currentDrawing
      }
      if (currentRoomType === 'pooja') {
        const currentPooja = state.pooja
        const currentWall = currentPooja.walls.filter((wall) => wall.side == currentWallSide)[0]
        const filteredWalls = currentPooja.walls.filter((wall) => wall.side !== currentWallSide)
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening
          filteredWalls.push(currentWall)
          currentPooja.walls = filteredWalls
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor
          filteredWalls.push(currentWall)
          currentPooja.walls = filteredWalls
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow
          filteredWalls.push(currentWall)
          currentPooja.walls = filteredWalls
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength)
          filteredWalls.push(currentWall)
          currentPooja.walls = filteredWalls
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(openingPosition) }
          } else {
            pos = { top: parseInt(openingPosition) }
          }
          currentWall.opening.position = pos
          filteredWalls.push(currentWall)
          currentPooja.walls = filteredWalls
        }
        if (action.payload.doorPosition !== undefined) {
          const { doorPosition } = action.payload
          let pos
          if (currentWallSide === 'front' || currentWallSide === 'back') {
            pos = { right: parseInt(doorPosition) }
          } else {
            pos = { top: parseInt(doorPosition) }
          }
          currentWall.door.position = pos
          filteredWalls.push(currentWall)
          currentPooja.walls = filteredWalls
        }
        state.pooja = currentPooja
      }
    },
    setSelectedWall: (state, action) => {
      const { id } = action.payload
      state.selectedWall = id
    }
  }
})
export const {
  setCurrentPosition,
  updateWall,
  setSelectedWall,
  setCurrentRoom,
  setSelectedRoomId,
  updateRoomData,
  addRoomToPlot,
  removeRoomFromPlot,
  saveCurrentRoomsState,
  restorePreviousRoomsState,
  addIcontoList,
  removeIcon,
  changeIconVariant,
  setSelectedIcon,
  addWallToRoom
} = roomsSlice.actions
export default roomsSlice.reducer
