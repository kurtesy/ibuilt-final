import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../../../redux/rooms'
import { store } from '../../../../redux/store'

export function generateS2() {
  const resultArray = []
  const state = store.getState()
  const { scale, builtLength, builtBreadth } = state.plot
  if (builtLength < builtBreadth) {
    const number = Math.floor(Math.random() * 3) + 1
    generateTypeA(2)
  } else {
  }
}

function generateTypeA(number) {
  const state = store.getState()
  const { scale, builtLength, builtBreadth } = state.plot
  if (number === 1) {
    const bed1Length = builtLength * 0.4
    const bed1Breadth = builtBreadth * 0.4
    const bed2Length = builtLength * 0.6
    const bed2Breadth = builtBreadth * 0.4
    const livingLength = builtLength * 0.7
    const livingBreadth = builtBreadth * 0.6
    const kitchenLength = builtLength * 0.3
    const kitchenBreadth = builtBreadth * 0.45
    const poojaLength = builtLength * 0.3
    const poojaBreadth = builtBreadth * 0.15
    const parkingLength = builtLength * 0.25
    const parkingBreadth = builtBreadth * 0.3
    const staircaseLength = builtLength * 0.3
    const stairCaseBreadth = builtBreadth * 0.15
    const toilet1Length = builtLength * 0.25
    const toilet1Breadth = builtBreadth * 0.25
    const toilet2Length = builtLength * 0.25
    const toilet2Breadth = builtBreadth * 0.15
    const sitoutLength = builtLength * 0.25
    const sitoutBreadth = builtBreadth * 0.25
    const commonToiletLength = builtLength * 0.2
    const commonToiletBreadth = builtBreadth * 0.2
    const diningLength = builtLength * 0.4
    const diningBreadth = builtBreadth * 0.15

    //add rooms
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))

    //update dimensions and positions
    store.dispatch(
      updateRoomData({
        id: 'nw',
        roomType: 'bedroom',
        length: bed1Length,
        breadth: bed1Breadth,
        position: { top: 0, left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'ne',
        roomType: 'bedroom',
        length: bed2Length,
        breadth: bed2Breadth,
        position: { top: 0, right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'living',
        length: livingLength,
        breadth: livingBreadth,
        position: { bottom: 0, left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'kitchen',
        length: kitchenLength,
        breadth: kitchenBreadth,
        position: { bottom: 0, right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'pooja',
        position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), right: 0 }
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
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'parking',
        length: parkingLength,
        breadth: parkingBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'sitout',
        position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'sitout',
        length: sitoutLength,
        breadth: sitoutBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'commonToilet',
        position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), left: 0 }
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
        position: { bottom: Math.floor((kitchenBreadth - diningBreadth) * parseInt(scale)), right: 0 }
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
    //Add walls
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))

    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.5 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))

    store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
  }
  if (number === 2) {
    const bed1Length = builtLength * 0.5
    const bed1Breadth = builtBreadth * 0.32
    const bed2Length = builtLength * 0.6
    const bed2Breadth = builtBreadth * 0.35
    const livingLength = builtLength * 0.7
    const livingBreadth = builtBreadth * 0.33
    const kitchenLength = builtLength * 0.3
    const kitchenBreadth = builtBreadth * 0.3
    const poojaLength = builtLength * 0.22
    const poojaBreadth = builtBreadth * 0.14
    const parkingLength = builtLength * 0.5
    const parkingBreadth = builtBreadth * 0.16
    const staircaseLength = builtLength * 0.4
    const stairCaseBreadth = builtBreadth * 0.16
    const toilet1Length = builtLength * 0.24
    const toilet1Breadth = builtBreadth * 0.32
    const toilet2Length = builtLength * 0.24
    const toilet2Breadth = builtBreadth * 0.1
    const sitoutLength = builtLength * 0.25
    const sitoutBreadth = builtBreadth * 0.1
    const commonToiletLength = builtLength * 0.2
    const commonToiletBreadth = builtBreadth * 0.24
    const diningLength = builtLength * 0.4
    const diningBreadth = builtBreadth * 0.382

    //add rooms
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))

    //update dimensions and positions
    store.dispatch(
      updateRoomData({
        id: 'ne',
        roomType: 'bedroom',
        length: bed1Length,
        breadth: bed1Breadth,
        position: { top: 0, right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'nw',
        roomType: 'bedroom',
        length: bed2Length,
        breadth: bed2Breadth,
        position: { top: 0, left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'living',
        length: livingLength,
        breadth: livingBreadth,
        position: { bottom: 0, left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'kitchen',
        length: kitchenLength,
        breadth: kitchenBreadth,
        position: { bottom: 0, right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'pooja',
        position: { top: Math.floor(bed1Breadth * parseInt(scale)), right: 0 }
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
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'parking',
        length: parkingLength,
        breadth: parkingBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'sitout',
        position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'sitout',
        length: sitoutLength,
        breadth: sitoutBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'commonToilet',
        position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'commonToilet',
        length: commonToiletLength,
        breadth: commonToiletBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'dining',
        position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), right: 0 }
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
    //Add walls
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))

    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))

    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'living', id: 'sw', zindex: 40 }))

    //Add Doors
    store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
    store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: true }))
    store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: true }))
  }
  if (number === 3) {
    const bed1Length = builtLength * 0.5
    const bed1Breadth = builtBreadth * 0.55
    const bed2Length = builtLength * 0.5
    const bed2Breadth = builtBreadth * 0.45
    const livingLength = builtLength * 0.7
    const livingBreadth = builtBreadth * 0.45
    const kitchenLength = builtLength * 0.3
    const kitchenBreadth = builtBreadth * 0.3
    const poojaLength = builtLength * 0.16
    const poojaBreadth = builtBreadth * 0.16
    const parkingLength = builtLength * 0.5
    const parkingBreadth = builtBreadth * 0.195
    const staircaseLength = builtLength * 0.4
    const stairCaseBreadth = builtBreadth * 0.195
    const toilet1Length = builtLength * 0.15
    const toilet1Breadth = builtBreadth * 0.15
    const toilet2Length = builtLength * 0.38
    const toilet2Breadth = builtBreadth * 0.16
    const sitoutLength = builtLength * 0.1
    const sitoutBreadth = builtBreadth * 0.2
    const commonToiletLength = builtLength * 0.15
    const commonToiletBreadth = builtBreadth * 0.15
    const diningLength = builtLength * 0.5
    const diningBreadth = builtBreadth * 0.25
    const drawingLength = builtLength * 0.64
    const drawingBreadth = builtBreadth * 0.15

    //add rooms
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'drawing' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))

    //update dimensions and positions
    store.dispatch(
      updateRoomData({
        id: 'nw',
        roomType: 'bedroom',
        length: bed1Length,
        breadth: bed1Breadth,
        position: { top: 0, left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'ne',
        roomType: 'bedroom',
        length: bed2Length,
        breadth: bed2Breadth,
        position: { top: 0, right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'living',
        length: livingLength,
        breadth: livingBreadth,
        position: { bottom: 0, left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'kitchen',
        length: kitchenLength,
        breadth: kitchenBreadth,
        position: { bottom: 0, right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { top: Math.floor(bed2Length * parseInt(scale)), right: 150 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'pooja',
        position: { top: Math.floor(bed2Breadth * parseInt(scale)), right: 0 }
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
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'parking',
        length: parkingLength,
        breadth: parkingBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'sitout',
        position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'sitout',
        length: sitoutLength,
        breadth: sitoutBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'commonToilet',
        position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'commonToilet',
        length: commonToiletLength,
        breadth: commonToiletBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'dining',
        position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), right: 0 }
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
    //Add walls
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))

    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'living', id: 'sw' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.5 * bed1Length, hasOpening: true }))

    //Add Doors
    store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'toilet-nw-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: true }))
    store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: true }))
  }
}
