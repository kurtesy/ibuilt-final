import { createSlice } from '@reduxjs/toolkit'
import bathTypeDimensions from '../src/constants/toiletDimensions'
import { initialState } from './initialState'

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setCurrentPosition: (state, action) => {
      const { position } = action.payload
      return { ...state, position }
    },
    setCurrentRoom: (state, action) => {
      const { currentRoom } = action.payload
      return { ...state, currentRoom }
    },
    setSelectedRoomId: (state, action) => {
      const { selectedId, roomType } = action.payload
      return { ...state, selectedRoom: { id: selectedId, roomType: roomType } }
    },
    updateRoomData: (state, action) => {
      const { id, roomType } = action.payload
      if (roomType === "bedroom") {
        const currentBedroom = state.bedRooms.filter((room) => room.id === id)[0];
        if (action.payload.icon !== undefined) {
          currentBedroom.icons.push(icon);
        }
        if (action.payload.balcony !== undefined) {
          currentBedroom.hasBalcony = action.payload.balcony;
        }
        if (action.payload.wardrobe !== undefined) {
          currentBedroom.hasWardrobe = action.payload.wardrobe;
        }
        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentBedroom.length = parseFloat(action.payload.length).toFixed(2);
          currentBedroom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentBedroom.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          //Front Wall
          currentBedroom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentBedroom.length = parseFloat(action.payload.length).toFixed(2);
          currentBedroom.area = parseFloat(parseFloat(currentBedroom.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentBedroom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentBedroom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentBedroom.area = parseFloat(parseFloat(currentBedroom.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentBedroom.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentBedroom.position = action.payload.position;
        }

        state.bedRooms = state.bedRooms.filter((room) => room.id !== id);
        state.bedRooms.push(currentBedroom);
      }
      if (roomType === "toilet") {
        // bathTypeDimensions
        const currentToilet = state.toilets.filter((room) => room.id === id)[0];
        if (action.payload.rotated !== undefined) {
          currentToilet.rotated = action.payload.rotated;
        }
        if (action.payload.bathType) {
          currentToilet.type = parseInt(action.payload.bathType);
          const dimensions = bathTypeDimensions.filter((roomType) => roomType.type === parseInt(action.payload.bathType))[0];
          currentToilet.maxDim = dimensions.maxDims;
          currentToilet.minDim = dimensions.minDims;
          currentToilet.length = dimensions.length;
          currentToilet.breadth = dimensions.breadth;
          currentToilet.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(dimensions.length).toFixed(2);
            } else {
              wall.length = parseFloat(dimensions.breadth).toFixed(2);
            }
          });
        }
        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentToilet.length = parseFloat(action.payload.length).toFixed(2);
          currentToilet.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentToilet.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          //Front Wall
          currentToilet.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentToilet.length = parseFloat(action.payload.length).toFixed(2);
          currentToilet.area = parseFloat(parseFloat(currentToilet.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentToilet.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentToilet.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentToilet.area = parseFloat(parseFloat(currentToilet.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentToilet.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentToilet.position = action.payload.position;
        }

        state.toilets = state.toilets.filter((room) => room.id !== id);
        state.toilets.push(currentToilet);
      }
      if (roomType === "living") {
        const currentLivingRoom = state.livingRooms.filter((room) => room.id === id)[0];
        if (action.payload.commonToilet !== undefined) {
          currentLivingRoom.hasToilet = action.payload.commonToilet;
        }
        if (action.payload.sitout !== undefined) {
          currentLivingRoom.hasSitout = action.payload.sitout;
        }
        if (action.payload.wash !== undefined) {
          currentLivingRoom.hasWash = action.payload.wash;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentLivingRoom.length = parseFloat(action.payload.length).toFixed(2);
          currentLivingRoom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentLivingRoom.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          //Front Wall
          currentLivingRoom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentLivingRoom.length = parseFloat(action.payload.length).toFixed(2);
          currentLivingRoom.area = parseFloat(parseFloat(currentLivingRoom.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentLivingRoom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentLivingRoom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentLivingRoom.area = parseFloat(parseFloat(currentLivingRoom.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentLivingRoom.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentLivingRoom.position = action.payload.position;
        }

        state.livingRooms = state.livingRooms.filter((room) => room.id !== id);
        state.livingRooms.push(currentLivingRoom);
      }
      if (roomType === "kitchen") {
        // bathTypeDimensions
        const currentKitchen = state.kitchen;
        currentKitchen.id = id;
        if (action.payload.store !== undefined) {
          currentKitchen.hasStore = action.payload.store;
        }
        if (action.payload.utility !== undefined) {
          currentKitchen.hasUtility = action.payload.utility;
        }
        if (action.payload.rotated !== undefined) {
          currentKitchen.rotated = action.payload.rotated;
        }
        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentKitchen.length = parseFloat(action.payload.length).toFixed(2);
          currentKitchen.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentKitchen.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentKitchen.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentKitchen.length = parseFloat(action.payload.length).toFixed(2);
          currentKitchen.area = parseFloat(parseFloat(currentKitchen.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentKitchen.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentKitchen.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentKitchen.area = parseFloat(parseFloat(currentKitchen.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentKitchen.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentKitchen.position = action.payload.position;
        }
        state.kitchen = currentKitchen;
      }
      if (roomType === "utility") {
        const currentUtility = state.utility;
        currentUtility.id = id;
        if (action.payload.rotated !== undefined) {
          currentUtility.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentUtility.length = parseFloat(action.payload.length).toFixed(2);
          currentUtility.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentUtility.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentUtility.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentUtility.length = parseFloat(action.payload.length).toFixed(2);
          currentUtility.area = parseFloat(parseFloat(currentUtility.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentUtility.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentUtility.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentUtility.area = parseFloat(parseFloat(currentUtility.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentUtility.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentUtility.position = action.payload.position;
        }
        state.utility = currentUtility;
      }
      if (roomType === "store") {
        const currentStore = state.store;
        currentStore.id = id;
        if (action.payload.rotated !== undefined) {
          currentStore.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentStore.length = parseFloat(action.payload.length).toFixed(2);
          currentStore.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentStore.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentStore.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentStore.length = parseFloat(action.payload.length).toFixed(2);
          currentStore.area = parseFloat(parseFloat(currentStore.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentStore.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentStore.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentStore.area = parseFloat(parseFloat(currentStore.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentStore.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
            e;
          });
        }

        if (action.payload.position) {
          currentStore.position = action.payload.position;
        }
        state.store = currentStore;
      }
      if (roomType === "dining") {
        const currentDining = state.dining;
        currentDining.id = id;
        if (action.payload.rotated !== undefined) {
          currentDining.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentDining.length = parseFloat(action.payload.length).toFixed(2);
          currentDining.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentDining.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          //Front Wall
          currentDining.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentDining.length = parseFloat(action.payload.length).toFixed(2);
          currentDining.area = parseFloat(parseFloat(currentDining.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentStore.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentDining.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentDining.area = parseFloat(parseFloat(currentDining.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentStore.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentDining.position = action.payload.position;
        }
        state.dining = currentDining;
      }
      if (roomType === "drawing") {
        const currentDrawing = state.drawing;
        currentDrawing.id = id;
        if (action.payload.rotated !== undefined) {
          currentDrawing.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentDrawing.length = parseFloat(action.payload.length).toFixed(2);
          currentDrawing.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentDrawing.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          //Front Wall
          currentDrawing.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentDrawing.length = parseFloat(action.payload.length).toFixed(2);
          currentDrawing.area = parseFloat(parseFloat(currentDrawing.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentStore.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentDrawing.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentDrawing.area = parseFloat(parseFloat(currentDrawing.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentStore.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentDrawing.position = action.payload.position;
        }

        state.drawing = currentDrawing;
      }
      if (roomType === "pooja") {
        const currentPooja = state.pooja;
        currentPooja.id = id;
        if (action.payload.rotated !== undefined) {
          currentPooja.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentPooja.length = parseFloat(action.payload.length).toFixed(2);
          currentPooja.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentPooja.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentPooja.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentPooja.length = parseFloat(action.payload.length).toFixed(2);
          currentPooja.area = parseFloat(parseFloat(currentPooja.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentPooja.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentPooja.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentPooja.area = parseFloat(parseFloat(currentPooja.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentPooja.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentPooja.position = action.payload.position;
        }
        state.pooja = currentPooja;
      }
      if (roomType === "media") {
        const currentMedia = state.media;
        currentMedia.id = id;
        if (action.payload.rotated !== undefined) {
          currentMedia.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentMedia.length = parseFloat(action.payload.length).toFixed(2);
          currentMedia.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentMedia.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentMedia.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentMedia.length = parseFloat(action.payload.length).toFixed(2);
          currentMedia.area = parseFloat(parseFloat(currentMedia.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentMedia.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentMedia.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentMedia.area = parseFloat(parseFloat(currentMedia.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentMedia.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentMedia.position = action.payload.position;
        }
        state.media = currentMedia;
      }
      if (roomType === "stairCase") {
        const currentStaircase = state.stairCase;
        currentStaircase.id = id;
        if (action.payload.rotated !== undefined) {
          currentStaircase.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentStaircase.length = parseFloat(action.payload.length).toFixed(2);
          currentStaircase.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentStaircase.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentStaircase.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentStaircase.length = parseFloat(action.payload.length).toFixed(2);
          currentStaircase.area = parseFloat(parseFloat(currentStaircase.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentStairCase.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentStaircase.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentStaircase.area = parseFloat(parseFloat(currentStaircase.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentStairCase.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentStaircase.position = action.payload.position;
        }

        state.stairCase = currentStaircase;
      }
      if (roomType === "sitout") {
        const currentSitout = state.sitout;
        currentSitout.id = id;
        if (action.payload.rotated !== undefined) {
          currentSitout.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentSitout.length = parseFloat(action.payload.length).toFixed(2);
          currentSitout.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentSitout.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          //Front Wall
          currentSitout.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentSitout.length = parseFloat(action.payload.length).toFixed(2);
          currentSitout.area = parseFloat(parseFloat(currentSitout.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentSitout.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentSitout.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentSitout.area = parseFloat(parseFloat(currentSitout.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentSitout.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentSitout.position = action.payload.position;
        }
        state.sitout = currentSitout;
      }
      if (roomType === "parking") {
        const currentParking = state.parking;
        currentParking.id = id;
        if (action.payload.rotated !== undefined) {
          currentParking.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentParking.length = parseFloat(action.payload.length).toFixed(2);
          currentParking.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentParking.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentParking.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentParking.length = parseFloat(action.payload.length).toFixed(2);
          currentParking.area = parseFloat(parseFloat(currentParking.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentParking.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentParking.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentParking.area = parseFloat(parseFloat(currentParking.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentParking.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentParking.position = action.payload.position;
        }
        state.parking = currentParking;
      }
      if (roomType === "commonToilet") {
        const currentToilet = state.commonToilet;
        currentToilet.id = id;
        if (action.payload.rotated !== undefined) {
          currentToilet.rotated = action.payload.rotated;
        }

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentToilet.length = parseFloat(action.payload.length).toFixed(2);
          currentToilet.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentToilet.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          //Front Wall
          currentToilet.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentToilet.length = parseFloat(action.payload.length).toFixed(2);
          currentToilet.area = parseFloat(parseFloat(currentToilet.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentToilet.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentToilet.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentToilet.area = parseFloat(parseFloat(currentToilet.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentToilet.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }

        if (action.payload.position) {
          currentToilet.position = action.payload.position;
        }

        state.commonToilet = currentToilet;
      }
      if (roomType === "corridor") {
        const currentRoom = state.corridors.filter((room) => room.id === id)[0];

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentRoom.length = parseFloat(action.payload.length).toFixed(2);
          currentRoom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentRoom.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }
        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentRoom.length = parseFloat(action.payload.length).toFixed(2);
          currentRoom.area = parseFloat(parseFloat(currentRoom.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentRoom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentRoom.area = parseFloat(parseFloat(currentRoom.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }
        if (action.payload.position) {
          currentRoom.position = action.payload.position;
        }
        state.corridors = state.corridors.filter((room) => room.id !== id);
        state.corridors.push(currentRoom);
      }
      if (roomType === "extraBath") {
        const currentRoom = state.baths.filter((room) => room.id === id)[0];

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentRoom.length = parseFloat(action.payload.length).toFixed(2);
          currentRoom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentRoom.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }
        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentRoom.length = parseFloat(action.payload.length).toFixed(2);
          currentRoom.area = parseFloat(parseFloat(currentRoom.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentRoom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentRoom.area = parseFloat(parseFloat(currentRoom.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }
        if (action.payload.position) {
          currentRoom.position = action.payload.position;
        }
        state.baths = state.baths.filter((room) => room.id !== id);
        state.baths.push(currentRoom);
      }
      if (roomType === "extraSitout") {
        const currentRoom = state.sitouts.filter((room) => room.id === id)[0];

        //If both length and breadth are privided update length,breadth and area, walls lengths
        if (action.payload.length && action.payload.breadth) {
          //update room dimensions
          currentRoom.length = parseFloat(action.payload.length).toFixed(2);
          currentRoom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          //update area
          currentRoom.area = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
          //update wall dimensions
          //Front Wall
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            } else {
              wall.length = parseFloat(action.payload.breadth).toFixed(2);
            }
          });
        }
        //If only one dimension provided, update dimension, area and wall lengths
        if (action.payload.length && !action.payload.breadth) {
          currentRoom.length = parseFloat(action.payload.length).toFixed(2);
          currentRoom.area = parseFloat(parseFloat(currentRoom.breadth) * parseFloat(action.payload.length)).toFixed(2);
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "front" || wall.side === "back") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.breadth && !action.payload.length) {
          currentRoom.breadth = parseFloat(action.payload.breadth).toFixed(2);
          currentRoom.area = parseFloat(parseFloat(currentRoom.length) * parseFloat(action.payload.breadth)).toFixed(2);
          currentRoom.walls.forEach((wall, index) => {
            if (wall.side === "left" || wall.side === "right") {
              wall.length = parseFloat(action.payload.length).toFixed(2);
            }
          });
        }
        if (action.payload.position) {
          currentRoom.position = action.payload.position;
        }
        state.sitouts = state.sitouts.filter((room) => room.id !== id);
        state.sitouts.push(currentRoom);
      }
    },
    addRoomToPlot: (state, action) => {
      const { position, roomType } = action.payload
      if (
        roomType === 'kitchen' ||
        roomType === 'drawing' ||
        roomType === 'dining' ||
        roomType === 'pooja' ||
        roomType === 'media' ||
        roomType === 'staircase' ||
        roomType === 'parking' ||
        roomType === 'sitout' ||
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
      let indexOfDeleted
      state.addedRooms.forEach((room, index) => {
        if (room.position === position && room.roomType === roomType) {
          indexOfDeleted = index
        }
      })
      state.addedRooms.splice(indexOfDeleted, 1)
    },
    saveCurrentRoomsState: (state, action) => {},
    restorePreviousRoomsState: (state, action) => {
      const { bedRoomsData, livingRoomsData, toiletsData, commonToiletData, kitchenData, storeData, addedRoomsData, balconiesData, utilityData } = action.payload
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
      state.icons.push(action.payload.icon)
      // bedroom - nw - beds - 1
      const room = action.payload.icon.id.split('-')[0]
      const roomId = action.payload.icon.id.split('-')[1]
      if (room === 'bedroom') {
        const currentRoom = state.bedRooms.filter((room) => room.id === roomId)[0]
        currentRoom.icons.push({ id: action.payload.icon.id, src: action.payload.icon.src })
      }
    },
    removeIcon: (state, action) => {
      const { id } = action.payload
      state.icons = state.icons.filter((icon) => icon.id !== id)
    },
    addWallToRoom: (state, action) => {
      const { side, status, roomType, id } = action.payload
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
      if (roomType === 'extraBath') {
        const currentRoom = state.baths.filter((room) => room.id === id)[0]
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        const filteredRooms = state.baths.filter((room) => room.id !== id)
        filteredRooms.push(currentRoom)
        state.baths = filteredRooms
      }
      if (roomType === 'extraSitout') {
        const currentRoom = state.sitouts.filter((room) => room.id === id)[0]
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        const filteredRooms = state.sitouts.filter((room) => room.id !== id)
        filteredRooms.push(currentRoom)
        state.sitouts = filteredRooms
      }
      if (roomType === 'toilet') {
        const currentRoom = state.toilets.filter((room) => room.id === id)[0]
        const currentWall = currentRoom.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        const filteredRooms = state.toilets.filter((room) => room.id !== id)
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
      if (roomType === 'commonToilet') {
        const currentToilet = state.commonToilet
        const currentWall = currentToilet.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.commonToilet = currentToilet
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
        state.pooja = currentPooja
      }
      if (roomType === 'media') {
        const currentMedia = state.media
        const currentWall = currentMedia.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.media = currentMedia
      }
      if (roomType === 'stairCase') {
        const currentStairCase = state.stairCase
        const currentWall = currentStairCase.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.stairCase = currentStairCase
      }
      if (roomType === 'parking') {
        const currentParking = state.parking
        const currentWall = currentParking.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.parking = currentParking
      }
      if (roomType === 'sitout') {
        const currentSitout = state.sitout
        const currentWall = currentSitout.walls.filter((wall) => wall.side === side)[0]
        currentWall.added = status
        state.sitout = currentSitout
      }
    },
    updateWall: (state, action) => {
      const { id } = action.payload
      const currentRoomType = id.split('-')[0]
      const currentDirection = id.split('-')[1]
      const currentWallSide = id.split('-')[2]
      //BED
      if (currentRoomType === "bedroom") {
        const currentBedroomIndex = state.bedRooms.findIndex((room) => room.id === currentDirection);
        const currentBedroom = { ...state.bedRooms[currentBedroomIndex] };
        const currentWallIndex = currentBedroom.walls.findIndex((wall) => wall.side === currentWallSide);
        const currentWall = { ...currentBedroom.walls[currentWallIndex] };
        const filteredWalls = currentBedroom.walls.filter((wall) => wall.side !== currentWallSide);

        if (action.payload.hasOpening !== undefined) {
          currentWall.opening.includes = action.payload.hasOpening;
        }

        if (action.payload.hasDoor !== undefined) {
          currentWall.door.includes = action.payload.hasDoor;
        }

        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
        }

        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
        }

        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
        }

        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
        }

        if (action.payload.doorPosition !== undefined) {
          const { doorRotation } = action.payload;
          currentWall.door.rotation = doorRotation;
        }

        filteredWalls.splice(currentWallIndex, 0, currentWall);

        currentBedroom.walls = filteredWalls;

        const updatedBedrooms = [...state.bedRooms];
        updatedBedrooms.splice(currentBedroomIndex, 1, currentBedroom);

        state.bedRooms = updatedBedrooms;
      }

      // LIVING
      if (currentRoomType === "living") {
        const currentLivingRoom = state.livingRooms.filter((room) => room.id === currentDirection)[0];
        const currentWall = currentLivingRoom.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentLivingRoom.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentLivingRoom.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentLivingRoom.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentLivingRoom.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentLivingRoom.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentLivingRoom.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentLivingRoom.walls = filteredWalls;
        }

        state.livingRooms = state.livingRooms.filter((room) => room.id !== currentDirection);

        state.livingRooms.push(currentLivingRoom);
      }

      //TOILET
      if (currentRoomType === "toilet") {
        const currentRoomIndex = state.toilets.findIndex((room) => room.id === currentDirection);
        const currentRoom = { ...state.toilets[currentRoomIndex] };
        const currentWallIndex = currentRoom.walls.findIndex((wall) => wall.side === currentWallSide);
        const currentWall = { ...currentRoom.walls[currentWallIndex] };
        const filteredWalls = currentRoom.walls.filter((wall) => wall.side !== currentWallSide);

        if (action.payload.hasOpening !== undefined) {
          currentWall.opening.includes = action.payload.hasOpening;
        }

        if (action.payload.hasDoor !== undefined) {
          currentWall.door.includes = action.payload.hasDoor;
        }

        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
        }

        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
        }

        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
        }

        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
        }

        filteredWalls.splice(currentWallIndex, 0, currentWall);

        currentRoom.walls = filteredWalls;

        const updatedRooms = [...state.toilets];
        updatedRooms.splice(currentRoomIndex, 1, currentRoom);

        state.toilets = updatedRooms;
      }
      if (currentRoomType === "kitchen") {
        const currentKitchen = state.kitchen;
        const currentWall = currentKitchen.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentKitchen.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentKitchen.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentKitchen.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentKitchen.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentKitchen.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentKitchen.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentKitchen.walls = filteredWalls;
        }
        state.kitchen = currentKitchen;
      }
      if (currentRoomType === "utility") {
        const currentUtility = state.utility;
        const currentWall = currentUtility.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentUtility.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentUtility.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentUtility.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentUtility.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentUtility.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentUtility.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentUtility.walls = filteredWalls;
        }
        state.utility = currentUtility;
      }
      if (currentRoomType === "store") {
        const currentStore = state.store;
        const currentWall = currentStore.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentStore.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentStore.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentStore.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentStore.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentStore.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentStore.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentStore.walls = filteredWalls;
        }
        state.store = currentStore;
      }
      if (currentRoomType === "dining") {
        const currentDining = state.dining;
        const currentWall = currentDining.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentDining.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentDining.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentDining.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentDining.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentDining.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentDining.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentDining.walls = filteredWalls;
        }
        state.dining = currentDining;
      }
      if (currentRoomType === "drawing") {
        const currentDrawing = state.drawing;
        const currentWall = currentDrawing.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentDrawing.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentDrawing.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentDrawing.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentDrawing.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentDrawing.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentDrawing.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentDrawing.walls = filteredWalls;
        }
        state.drawing = currentDrawing;
      }
      if (currentRoomType === "pooja") {
        const currentPooja = state.pooja;
        const currentWall = currentPooja.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentPooja.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentPooja.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentPooja.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentPooja.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentPooja.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentPooja.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentPooja.walls = filteredWalls;
        }
        state.pooja = currentPooja;
      }
      if (currentRoomType === "sitout") {
        const currentSitout = state.sitout;
        const currentWall = currentSitout.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentSitout.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentSitout.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentSitout.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentSitout.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentSitout.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentSitout.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentSitout.walls = filteredWalls;
        }
        state.sitout = currentSitout;
      }
      if (currentRoomType === "parking") {
        const currentParking = state.parking;
        const currentWall = currentParking.walls.filter((wall) => wall.side == currentWallSide)[0];
        const filteredWalls = currentParking.walls.filter((wall) => wall.side !== currentWallSide);
        if (action.payload.hasOpening !== undefined) {
          // opening.includes
          currentWall.opening.includes = action.payload.hasOpening;
          filteredWalls.push(currentWall);
          currentParking.walls = filteredWalls;
        }
        if (action.payload.hasDoor !== undefined) {
          // opening.includes
          currentWall.door.includes = action.payload.hasDoor;
          filteredWalls.push(currentWall);
          currentParking.walls = filteredWalls;
        }
        if (action.payload.hasWindow !== undefined) {
          currentWall.window.includes = action.payload.hasWindow;
          filteredWalls.push(currentWall);
          currentParking.walls = filteredWalls;
        }
        if (action.payload.openingLength !== undefined) {
          currentWall.opening.length = parseFloat(action.payload.openingLength);
          filteredWalls.push(currentWall);
          currentParking.walls = filteredWalls;
        }
        if (action.payload.openingPosition !== undefined) {
          const { openingPosition } = action.payload;
          let pos;
          if (currentWallSide === "front" || currentWallSide === "back") {
            pos = { right: parseInt(openingPosition) };
          } else {
            pos = { top: parseInt(openingPosition) };
          }
          currentWall.opening.position = pos;
          filteredWalls.push(currentWall);
          currentParking.walls = filteredWalls;
        }
        if (action.payload.doorPosition !== undefined) {
          console.log(action.payload.doorPosition);
          const { doorPosition } = action.payload;
          currentWall.door.position = doorPosition;
          filteredWalls.push(currentWall);
          currentSitout.walls = filteredWalls;
        }
        state.parking = currentParking;
      }
    },
    setSelectedWall: (state, action) => {
      const { id } = action.payload
      state.selectedWall = id
    },
    setRoomRotation: (state, action) => {
      const { rotation, roomType, id } = action.payload
      if (roomType === 'stairCase') {
        const currentRoom = state.stairCase
        currentRoom.rotated = rotation
        state.stairCase = currentRoom
      }
    },
    updateOpening: (state, action) => {
      const { id } = action.payload
      const [currentRoom, currentPosition, currentSide] = id.split('-')

      if (currentRoom === 'kitchen') {
        const currentKitchen = state.kitchen
        const currentWall = currentKitchen.walls.filter((wall) => wall.side === currentSide)[0]
        const filteredWalls = currentKitchen.walls.filter((wall) => wall.side !== currentSide)
        if (action.payload.position !== undefined) {
          currentWall.opening.position = action.payload.position
        }
        if (action.payload.length !== undefined && action.payload.length > 1) {
          currentWall.opening.length = action.payload.length
        }
        filteredWalls.push(currentWall)
        state.kitchen.walls = filteredWalls
      }
      if (currentRoom === 'pooja') {
        const currentPooja = state.pooja
        const currentWall = currentPooja.walls.filter((wall) => wall.side === currentSide)[0]
        const filteredWalls = currentPooja.walls.filter((wall) => wall.side !== currentSide)
        if (action.payload.position !== undefined) {
          currentWall.opening.position = action.payload.position
        }
        if (action.payload.length !== undefined && action.payload.length > 1) {
          currentWall.opening.length = action.payload.length
        }
        filteredWalls.push(currentWall)
        state.pooja.walls = filteredWalls
      }
    },
    updateDoor: (state, action) => {
      const { id } = action.payload
      const [currentRoom, currentPosition, currentSide] = id.split('-')

      if (currentRoom === 'bedroom') {
        const currentBedroom = state.bedRooms.filter((room) => room.id === currentPosition)[0]
        const currentWall = currentBedroom.walls.filter((wall) => wall.side === currentSide)[0]
        const filteredWalls = currentBedroom.walls.filter((wall) => wall.side !== currentSide)
        if (action.payload.position !== undefined) {
          currentWall.opening.position = action.payload.position
        }
        if (action.payload.length !== undefined && action.payload.length > 1) {
          currentWall.opening.length = action.payload.length
        }
        filteredWalls.push(currentWall)
        state.kitchen.walls = filteredWalls
      }
      if (currentRoom === 'pooja') {
        const currentPooja = state.pooja
        const currentWall = currentPooja.walls.filter((wall) => wall.side === currentSide)[0]
        const filteredWalls = currentPooja.walls.filter((wall) => wall.side !== currentSide)
        if (action.payload.position !== undefined) {
          currentWall.opening.position = action.payload.position
        }
        if (action.payload.length !== undefined && action.payload.length > 1) {
          currentWall.opening.length = action.payload.length
        }
        filteredWalls.push(currentWall)
        state.pooja.walls = filteredWalls
      }
    },
    removeAllRooms: (state) => {
      state.addedRooms = []
    },
    resetRooms:(state)=>{
      return initialState
    }
  }
})
export const {
  setCurrentPosition,
  updateOpening,
  setRoomRotation,
  updateWall,
  setSelectedWall,
  setCurrentRoom,
  setSelectedRoomId,
  updateRoomData,
  addRoomToPlot,
  removeAllRooms,
  removeRoomFromPlot,
  saveCurrentRoomsState,
  restorePreviousRoomsState,
  addIcontoList,
  removeIcon,
  changeIconVariant,
  setSelectedIcon,
  addWallToRoom,
  resetRooms
} = roomsSlice.actions
export default roomsSlice.reducer
