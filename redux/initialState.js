export const initialState = {
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
    length: 6,
    breadth: 6,
    maxDim: 8,
    minDim: 4,
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
  store: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 3,
    breadth: 3,
    maxDim: 8,
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
  dining: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 8,
    breadth: 8,
    maxDim: 15,
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
    maxDim: 15,
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
  commonToilet: {
    id: '',
    length: 6,
    breadth: 6,
    maxDim: 8,
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
  media: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 10,
    breadth: 10,
    maxDim: 12,
    minDim: 6,
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
  stairCase: {
    id: '',
    type: 0, // 0-none,1-wcOnly, 2-Wc+shower, 3-Full Bath
    length: 8,
    breadth: 8,
    maxDim: 15,
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
