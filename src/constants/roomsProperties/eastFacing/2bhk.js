import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../../../redux/rooms'
import { store } from '../../../../redux/store'

export async function generateE2() {
  const state = store.getState()
  const { plotLength, plotBreadth } = state.plot
  if (plotLength <= plotBreadth) {
    const number = Math.floor(Math.random() * 5) + 1
    generateTypeA(number)
  } else {
  }
}

function generateTypeA(number) {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength } = state.plot
  if (plotLength >= 16 && plotLength < 30) {
  } else if (plotLength >= 30 && plotLength <= 45) {
    if (number === 1) {
      //bedroom1
      const bed1Length = builtLength * 0.4
      const bed1Breadth = builtBreadth * 0.47
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      const toilet1Length = builtLength * 0.17
      const toilet1Breadth = builtBreadth * 0.27
      setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: { bottom: 0, left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
      }, 100)
      //bedroom2
      const bed2Length = builtLength * 0.6
      const bed2Breadth = builtBreadth * 0.4
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'sw', roomType: 'bedroom', length: bed2Length, breadth: bed2Breadth }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
      const toilet2Length = builtLength * 0.25
      const toilet2Breadth = builtBreadth * 0.13
      setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: true }))
      }, 100)
      //living
      const livingLength = builtLength * 0.7
      const livingBreadth = builtBreadth * 0.3
      setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', length: livingLength, breadth: livingBreadth }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', position: { bottom: 0, left: 0 } }))
      }, 100)

      //drawing
      const drawingLength = builtLength * 0.45
      const drawingBreadth = builtBreadth * 0.3
      setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
        store.dispatch(updateRoomData({ id: '', roomType: 'drawing', length: drawingLength, breadth: drawingBreadth, position: { bottom: Math.floor(livingBreadth) * scale, left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'drawing', id: 'ne' }))
      }, 100)

      //kitchen
      const kitchenLength = builtLength * 0.32
      const kitchenBreadth = builtBreadth * 0.35
      setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth, position: { bottom: 0, right: 0 } }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.2 * kitchenBreadth, hasOpening: true }))

        //dining
        const diningLength = builtLength * 0.35
        const diningBreadth = builtBreadth * 0.18
        store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
        store.dispatch(updateRoomData({ id: '', roomType: 'dining', length: diningLength, breadth: diningBreadth }))
        store.dispatch(updateRoomData({ id: '', roomType: 'dining', position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), right: 0 } }))

        //pooja
        const poojaLength = builtLength * 0.2
        const poojaBreadth = builtBreadth * 0.11
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth }))

        store.dispatch(updateRoomData({ id: '', roomType: 'pooja', position: { top: Math.floor(diningBreadth + kitchenBreadth * parseInt(scale)), right: 0 } }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
        // store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: true }))
      }, 100)

      setTimeout(() => {
        //staircase
        const staircaseLength = builtLength * 0.3
        const stairCaseBreadth = builtBreadth * 0.15
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'staircase' }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'stairCase', length: staircaseLength, breadth: stairCaseBreadth }))

        //parking
        const parkingLength = builtLength * 0.36
        const parkingBreadth = builtBreadth * 0.25
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'parking' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'parking', length: parkingLength, breadth: parkingBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        //sitout
        const sitoutLength = builtLength * 0.17
        const sitoutBreadth = builtBreadth * 0.25
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), left: 0 } }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.6 * sitoutBreadth, hasOpening: true }))

        //common Bath
        const commonToiletLength = builtLength * 0.17
        const commonToiletBreadth = builtBreadth * 0.17

        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'commonToilet', position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), left: 0 } }))
        store.dispatch(updateRoomData({ id: '', roomType: 'commonToilet', length: commonToiletLength, breadth: commonToiletBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(updateWall({ id: 'commonToilet-se-right', hasDoor: true }))
      }, 100)
    }
    if (number === 2) {
      const bed1Length = builtLength * 0.55
      const bed1Breadth = builtBreadth * 0.4
      const bed2Length = builtLength * 0.45
      const bed2Breadth = builtBreadth * 0.47
      const livingLength = builtLength * 0.7
      const livingBreadth = builtBreadth * 0.3
      const drawingLength = builtLength * 0.45
      const drawingBreadth = builtBreadth * 0.23
      const kitchenLength = builtLength * 0.32
      const kitchenBreadth = builtBreadth * 0.35
      const poojaLength = builtLength * 0.2
      const poojaBreadth = builtBreadth * 0.11
      const parkingLength = builtLength * 0.36
      const parkingBreadth = builtBreadth * 0.25
      const staircaseLength = builtLength * 0.3
      const stairCaseBreadth = builtBreadth * 0.15
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.18
      const toilet2Length = builtLength * 0.2
      const toilet2Breadth = builtBreadth * 0.12
      const sitoutLength = builtLength * 0.17
      const sitoutBreadth = builtBreadth * 0.25
      const commonToiletLength = builtLength * 0.17
      const commonToiletBreadth = builtBreadth * 0.17
      const diningLength = builtLength * 0.35
      const diningBreadth = builtBreadth * 0.18

      //add rooms
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

      //update dimensions and positions
      setTimeout(() => {
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth }))
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth
          })
        )
      }, 100)
      setTimeout(() => {
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { bottom: 0, right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: Math.floor(livingBreadth) * scale, right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'kitchen',
            length: kitchenLength,
            breadth: kitchenBreadth,
            position: { bottom: 0, left: 0 }
          })
        )
      }, 100)
      setTimeout(() => {
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'pooja',
            position: { top: Math.floor(diningBreadth + kitchenBreadth * parseInt(scale)), left: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'pooja',
            length: poojaLength,
            breadth: poojaBreadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth
          })
        )
      }, 100)
      setTimeout(() => {
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: { top: 0, left: 0 } }))
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth, position: { bottom: 0, right: 0 } }))
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'sitout',
            position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth
          })
        )
      }, 100)
      setTimeout(() => {
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'commonToilet',
            position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth
          })
        )
      }, 100)
      //Add walls
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'drawing', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.2 * kitchenBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.6 * sitoutBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: false }))
      //Add doors
      store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
      store.dispatch(updateWall({ id: 'commonToilet- -right', hasDoor: true }))
    }
    if (number === 3) {
      const bed1Length = builtLength * 0.5
      const bed1Breadth = builtBreadth * 0.47
      const bed2Length = builtLength * 0.5
      const bed2Breadth = builtBreadth * 0.4
      const livingLength = builtLength * 0.7
      const livingBreadth = builtBreadth * 0.3
      const drawingLength = builtLength * 0.5
      const drawingBreadth = builtBreadth * 0.23
      const kitchenLength = builtLength * 0.32
      const kitchenBreadth = builtBreadth * 0.35
      const poojaLength = builtLength * 0.2
      const poojaBreadth = builtBreadth * 0.11
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.22
      const staircaseLength = builtLength * 0.3
      const stairCaseBreadth = builtBreadth * 0.15
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.18
      const toilet2Length = builtLength * 0.2
      const toilet2Breadth = builtBreadth * 0.12
      const sitoutLength = builtLength * 0.17
      const sitoutBreadth = builtBreadth * 0.22
      const commonToiletLength = builtLength * 0.17
      const commonToiletBreadth = builtBreadth * 0.17
      const diningLength = builtLength * 0.35
      const diningBreadth = builtBreadth * 0.18

      //add rooms
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

      //update dimensions and positions
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'bedroom',
          length: bed1Length,
          breadth: bed1Breadth
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed2Length,
          breadth: bed2Breadth
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'living',
          length: livingLength,
          breadth: livingBreadth,
          position: { bottom: 0, right: 0 }
        })
      )

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'kitchen',
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'pooja',
          position: { top: Math.floor(diningBreadth + kitchenBreadth * parseInt(scale)), left: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'pooja',
          length: poojaLength,
          breadth: poojaBreadth
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth
        })
      )
      store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: { top: 0, left: 0 } }))
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth, position: { bottom: 0, right: 0 } }))
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth
        })
      )
      setTimeout(() => {
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: Math.floor(livingBreadth) * scale, right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'sitout',
            position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'commonToilet',
            position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth
          })
        )
      }, 100)
      //Add walls
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'drawing', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.6 * sitoutBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: false }))
      //Add doors
      store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
      store.dispatch(updateWall({ id: 'commonToilet- -right', hasDoor: true }))
    }
    if (number === 4) {
      const bed1Length = builtLength * 0.5
      const bed1Breadth = builtBreadth * 0.47
      const bed2Length = builtLength * 0.5
      const bed2Breadth = builtBreadth * 0.47
      const livingLength = builtLength * 0.7
      const livingBreadth = builtBreadth * 0.3
      const drawingLength = builtLength * 0.5
      const drawingBreadth = builtBreadth * 0.23
      const kitchenLength = builtLength * 0.32
      const kitchenBreadth = builtBreadth * 0.35
      const poojaLength = builtLength * 0.2
      const poojaBreadth = builtBreadth * 0.11
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.22
      const staircaseLength = builtLength * 0.3
      const stairCaseBreadth = builtBreadth * 0.15
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.18
      const toilet2Length = builtLength * 0.2
      const toilet2Breadth = builtBreadth * 0.12
      const sitoutLength = builtLength * 0.17
      const sitoutBreadth = builtBreadth * 0.22
      const commonToiletLength = builtLength * 0.17
      const commonToiletBreadth = builtBreadth * 0.17
      const diningLength = builtLength * 0.35
      const diningBreadth = builtBreadth * 0.18

      //add rooms
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

      //update dimensions and positions
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'bedroom',
          length: bed1Length,
          breadth: bed1Breadth
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed2Length,
          breadth: bed2Breadth
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'living',
          length: livingLength,
          breadth: livingBreadth,
          position: { bottom: 0, right: 0 }
        })
      )

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'kitchen',
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'pooja',
          position: { top: Math.floor(diningBreadth + kitchenBreadth * parseInt(scale)), left: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'pooja',
          length: poojaLength,
          breadth: poojaBreadth
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth
        })
      )
      store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: { top: 0, left: 0 } }))
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth, position: { bottom: 0, right: 0 } }))

      setTimeout(() => {
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: Math.floor(livingBreadth) * scale, right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'sitout',
            position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'commonToilet',
            position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth
          })
        )
      }, 100)
      //Add walls
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'drawing', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.6 * sitoutBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: false }))
      //Add doors
      store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
      store.dispatch(updateWall({ id: 'commonToilet- -right', hasDoor: true }))
    }
    if (number === 5) {
      const corridorLength = builtLength * 0.8
      const corridorBreadth = builtBreadth * 0.47
      const sitoutBreadth = builtLength * 0.5
      const sitOutLength = builtBreadth * 0.47
      const bathLength = builtLength * 0.7
      const bathBreadth = builtBreadth * 0.3
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'corridor' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraSitout' }))
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'corridor',
          length: corridorLength,
          breadth: corridorBreadth
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'extraBath',
          length: bathLength,
          breadth: bathBreadth
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
          length: sitOutLength,
          breadth: sitoutBreadth,
          roomType: 'extraSitout',
          position: { bottom: 0, right: 0 }
        })
      )
    }
  } else if (plotLength > 45) {
  }
}
// length > breadth
function generateTypeB(number) {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength } = state.plot
  if (plotLength >= 16 && plotLength < 30) {
  } else if (plotLength >= 30 && plotLength <= 45) {
  } else if (plotLength > 45) {
  }
}
