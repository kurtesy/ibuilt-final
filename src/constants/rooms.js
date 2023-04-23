import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../redux/rooms'
import { store } from '../../redux/store'

export function generatePlot(builtLength, builtBreadth, facing, type) {
  const state = store.getState()
  const { scale } = state.plot
  if (type === '2BHK') {
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

    builtLength *
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
        breadth: bed1Breadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'ne',
        roomType: 'bedroom',
        length: bed2Length,
        breadth: bed2Breadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'living',
        length: livingLength,
        breadth: livingBreadth
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
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
  }
}
