import { setSetBacks } from '../../../../redux/plot'
import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../../../redux/rooms'
import { store } from '../../../../redux/store'

export function generateS2() {
  const resultArray = []
  const state = store.getState()
  const { scale, builtLength, builtBreadth } = state.plot
  if (builtLength < builtBreadth) {
    const number = Math.floor(Math.random() * 3) + 1
    generateTypeA(number)
  } else {
  }
}

function generateTypeA(number) {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot
  if (plotBreadth >= 20 && plotBreadth < 40)  //Breadth greater than 20-40
  {
    const bed1Length = builtLength * 0.45
    const bed1Breadth = builtBreadth * 0.5
    const bed2Length = builtLength * 0.55
    const bed2Breadth = builtBreadth * 0.4
    const livingLength = builtLength * 0.7
    const livingBreadth = builtBreadth * 0.3
    const drawingLength = builtLength * 0.7
    const drawingBreadth = builtBreadth * 0.2
    const kitchenLength = builtLength * 0.3
    const kitchenBreadth = builtBreadth * 0.45
    const poojaLength = builtLength * 0.15
    const poojaBreadth = builtBreadth * 0.151
    const parkingLength = builtLength * 0.4
    const parkingBreadth = builtBreadth * 0.19
    const staircaseLength = builtLength * 0.38
    const stairCaseBreadth = builtBreadth * 0.14
    const toilet1Length = builtLength * 0.0
    const toilet1Breadth = builtBreadth * 0.0
    const toilet2Length = builtLength * 0.3
    const toilet2Breadth = builtBreadth * 0.125
    const sitoutLength = builtLength * 0.15
    const sitoutBreadth = builtBreadth * 0.30
    const commonToiletLength = builtLength * 0.15
    const commonToiletBreadth = builtBreadth * 0.15
    const diningLength = builtLength * 0.4
    const diningBreadth = builtBreadth * 0.15
    const extraBathLength = builtLength * 0.4
    const extraBathBreadth = builtBreadth * 0.17
    const corridorLength = builtLength * 0.345
    const corridorBreadth = builtBreadth * 0.15
    //add rooms
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'corridor' }))

    //update dimensions and positions
    setTimeout(() => {
      
    
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
        id: 'ne',
        roomType: 'extraBath',
        length: extraBathLength,
        breadth: extraBathBreadth,
        position: { top: 0, left:Math.floor(toilet2Length)*scale+setbacks.left*scale }
      })
    )
  }, 100);

  setTimeout(() => {
    
  
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
        id: '',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { bottom:Math.floor(livingBreadth)*scale, left: 0 }
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
        id: 'se',
        roomType: 'corridor',
        length: corridorLength,
        breadth: corridorBreadth,
        position: { bottom: 0, right: Math.floor(staircaseLength)*scale+1 }
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
  }, 100);
  setTimeout(() => {
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'stairCase',
        length: staircaseLength,
        breadth: stairCaseBreadth
      })
    )
  
    
  
    // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth }))
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
  }, 100);
  setTimeout(() => {
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
  }, 100);
    //Add walls
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'parking', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: 'sw' }))

    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.5 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))

    store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
    // store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: true }))
  }
  
  if (plotBreadth >= 40 && plotBreadth < 50)  //Breadth greater than 40-50
   {
    const bed1Length = builtLength * 0.5
    const bed1Breadth = builtBreadth * 0.33
    const bed2Length = builtLength * 0.5
    const bed2Breadth = builtBreadth * 0.41
    const bed3Length = builtLength * 0.38
    const bed3Breadth = builtBreadth * 0.294
    const livingLength = builtLength * 0.65
    const livingBreadth = builtBreadth * 0.30
    const kitchenLength = builtLength * 0.35
    const kitchenBreadth = builtBreadth * 0.3
    const poojaLength = builtLength * 0.15
    const poojaBreadth = builtBreadth * 0.12
    const parkingLength = builtLength * 0.35
    const parkingBreadth = builtBreadth * 0.25
    const staircaseLength = builtLength * 0.4
    const stairCaseBreadth = builtBreadth * 0.16
    const toilet1Length = builtLength * 0.00
    const toilet1Breadth = builtBreadth * 0.00
    const toilet2Length = builtLength * 0.31
    const toilet2Breadth = builtBreadth * 0.11
    const sitoutLength = builtLength * 0.15
    const sitoutBreadth = builtBreadth * 0.20
    const commonToiletLength = builtLength * 0.15
    const commonToiletBreadth = builtBreadth * 0.15
    const diningLength = builtLength * 0.22
    const diningBreadth = builtBreadth * 0.18
    const drawingLength = builtLength * 0.5
    const drawingBreadth = builtBreadth * 0.20
    const extraBathLength = builtLength * 0.21
    const extraBathBreadth = builtBreadth * 0.16

    //add rooms
      
    
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraBath' }))
  
    //update dimensions and positions
    setTimeout(() => {
      
    
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
        roomType: 'bedroom',
        length: bed3Length,
        breadth: bed3Breadth,
        position: { bottom: Math.floor(livingBreadth)*scale  , left: 0 }
      })
    )
  }, 100);

  setTimeout(() => {
    
  
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
        id: 'sw',
        roomType: 'extraBath',
        length: extraBathLength,
        breadth: extraBathBreadth,
        position: { top: 0, left: Math.floor(toilet2Length)*scale+(setbacks.left)*scale+8 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { right: 0, top: Math.floor(bed1Breadth)*scale+setbacks.back*scale }
      })
    )
  }, 100);

  setTimeout(() => {
    
  
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
        position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: Math.floor(bed3Length)*scale+2 }
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
  }, 100);

  setTimeout(() => {
    
  
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'stairCase',
        length: staircaseLength,
        breadth: stairCaseBreadth
      })
    )
    // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'parking',
        length: parkingLength,
        breadth: parkingBreadth
      })
    )
  }, 100);

  setTimeout(() => {
    
  
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'sitout',
        position: { bottom: Math.floor(parkingBreadth) * parseInt(scale), left: 0 }
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
        position: { top: Math.floor(bed1Breadth) * parseInt(scale)+setbacks.back*scale+10, right: 0 }
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
  }, 100);

  setTimeout(() => {
    
  
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
  }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))

    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'living', id: 'sw' }))

    //Add Doors
    store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: false }))
  }


  if (plotBreadth >= 50 && plotBreadth < 95)  //Breadth greater than 50-65
  {
    const bed1Length = builtLength * 0.5
    const bed1Breadth = builtBreadth * 0.357
    const bed2Length = builtLength * 0.5
    const bed2Breadth = builtBreadth * 0.40
    const bed3Length = builtLength * 0.38
    const bed3Breadth = builtBreadth * 0.30
    const livingLength = builtLength * 0.65
    const livingBreadth = builtBreadth * 0.30
    const kitchenLength = builtLength * 0.35
    const kitchenBreadth = builtBreadth * 0.30
    const poojaLength = builtLength * 0.15
    const poojaBreadth = builtBreadth * 0.12
    const parkingLength = builtLength * 0.45
    const parkingBreadth = builtBreadth * 0.15
    const staircaseLength = builtLength * 0.4
    const stairCaseBreadth = builtBreadth * 0.12
    const toilet1Length = builtLength * 0.00
    const toilet1Breadth = builtBreadth * 0.00
    const toilet2Length = builtLength * 0.31
    const toilet2Breadth = builtBreadth * 0.11
    const sitoutLength = builtLength * 0.10
    const sitoutBreadth = builtBreadth * 0.20
    const commonToiletLength = builtLength * 0.15
    const commonToiletBreadth = builtBreadth * 0.15
    const diningLength = builtLength * 0.25
    const diningBreadth = builtBreadth * 0.12
    const drawingLength = builtLength * 0.62
    const drawingBreadth = builtBreadth * 0.3
    const extraBathLength = builtLength * 0.19
    const extraBathBreadth = builtBreadth * 0.16

    //add rooms
      
    
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraBath' }))
  
    //update dimensions and positions
    setTimeout(() => {
      
    
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
        roomType: 'bedroom',
        length: bed3Length,
        breadth: bed3Breadth,
        position: { top: Math.floor(bed1Breadth)*scale+6, right: 0 }
      })
    )
  }, 100);

  setTimeout(() => {
    
  
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
        id: 'sw',
        roomType: 'extraBath',
        length: extraBathLength,
        breadth: extraBathBreadth,
        position: { top: 0, left: Math.floor(toilet2Length)*scale+(setbacks.left)*scale+8 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { left: 0, top: Math.floor(bed2Breadth)*scale+8 }
      })
    )
  }, 100);

  setTimeout(() => {
    
  
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
        position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: 0 }
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
  }, 100);

  setTimeout(() => {
    
  
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'stairCase',
        length: staircaseLength,
        breadth: stairCaseBreadth
      })
    )
    // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'parking',
        length: parkingLength,
        breadth: parkingBreadth
      })
    )
  }, 100);

  setTimeout(() => {
    
  
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'sitout',
        position: { top: Math.floor(bed1Breadth) * parseInt(scale)+setbacks.back*scale+10, right: 0 }
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
        
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'commonToilet',
        length: commonToiletLength,
        breadth: commonToiletBreadth,
        position: { bottom: Math.floor(parkingBreadth) * parseInt(scale)-12, left: 0 }
      })
    )
  }, 100);

  setTimeout(() => {
    
  
    store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'dining',
        position: { bottom: Math.floor(kitchenBreadth-diningBreadth+3)*(scale), right: 0 }
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
  }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'living', id: 'sw' }))

    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.1 * bed1Breadth, hasOpening: false }))
    

    //Add Doors
    store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: false }))
  }  
}
// length > breadth
function generateTypeB(number) {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot

  if (plotLength >= 16 && plotLength < 30) 
  {
    const bed1Length = builtLength * 0.5
    const bed1Breadth = builtBreadth * 1.0
    const bed2Length = builtLength * 0.4
    const bed2Breadth = builtBreadth * 0.40
    const livingLength = builtLength * 0.5
    const livingBreadth = builtBreadth * 0.5
    const kitchenLength = builtLength * 0.35
    const kitchenBreadth = builtBreadth * 0.5
    const poojaLength = builtLength * 0.16
    const poojaBreadth = builtBreadth * 0.16
    const parkingLength = builtLength * 0.5
    const parkingBreadth = builtBreadth * 0.32
    const staircaseLength = builtLength * 0.4
    const stairCaseBreadth = builtBreadth * 0.32
    const toilet1Length = builtLength * 0.19
    const toilet1Breadth = builtBreadth * 0.15
    const toilet2Length = builtLength * 0.35
    const toilet2Breadth = builtBreadth * 0.28
    const sitoutLength = builtLength * 0.15
    const sitoutBreadth = builtBreadth * 0.3
    const commonToiletLength = builtLength * 0.15
    const commonToiletBreadth = builtBreadth * 0.15
    const diningLength = builtLength * 0.13
    const diningBreadth = builtBreadth * 0.30
    const drawingLength = builtLength * 0.64
    const drawingBreadth = builtBreadth * 0.15


    //add rooms
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
    // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'drawing' }))
    // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))




    //update dimensions and positions
    setTimeout(() => {
      
    
    store.dispatch(
      updateRoomData({
        id: 'nw',
        roomType: 'bedroom',
        length: bed1Length,
        breadth: bed1Breadth
      })
    // )
    // store.dispatch(
    //   updateRoomData({
    //     id: 'ne',
    //     roomType: 'bedroom',
    //     length: bed2Length,
    //     breadth: bed2Breadth,
    //     position: { bottom: Math.floor(bed1Breadth * parseInt(scale)), left: 0 }
    //     })
    )
    store.dispatch(
      updateRoomData({
        id: 'ne',
        roomType: 'living',
        length: livingLength,
        breadth: livingBreadth
      })
    )
  }, 100);

  setTimeout(() => {
    
  
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
  }, 100);
  setTimeout(() => {
    
  
    // store.dispatch(
    //   updateRoomData({
    //     id: '',
    //     roomType: 'pooja',
    //     position: { top: Math.floor(bed2Breadth * parseInt(scale)), right: 0 }
    //   })
    // )
    // store.dispatch(
    //   updateRoomData({
    //     id: 'se',
    //     roomType: 'pooja',
    //     length: poojaLength,
    //     breadth: poojaBreadth
    //   })
    // )
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'stairCase',
        length: staircaseLength,
        breadth: stairCaseBreadth
      })
    )
    // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth}))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'parking',
        length: parkingLength,
        breadth: parkingBreadth
      })
    )
  }, 100);
  setTimeout(() => {
 
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'sitout',
        length: sitoutLength,
        breadth: sitoutBreadth,
        position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), left: 0 }
      })
    )
    // store.dispatch(
    //   updateRoomData({
    //     id: 'sw',
    //     roomType: 'commonToilet',
    //     position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), left: 0 }
    //   })
    // )
    // store.dispatch(
    //   updateRoomData({
    //     id: 'sw',
    //     roomType: 'commonToilet',
    //     length: commonToiletLength,
    //     breadth: commonToiletBreadth
    //   })
    // )
    
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'dining',
        length: diningLength,
        breadth: diningBreadth,
        position: { bottom: Math.floor((kitchenBreadth-diningBreadth) * parseInt(scale)), right: 0 }
      })
    )
  }, 100);

    //Add walls

    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
    // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'pooja', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))


    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'living', id: 'ne'}))
    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'living', id: 'ne'}))


    store.dispatch(updateWall({ id: 'living-ne-front', openingLength: 0.5 * livingBreadth, hasOpening: false }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
    // store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.5 * bed1Length, hasOpening: false }))
   


    //Add Doors
    store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
    // store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
    // store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: true }))
    // store.dispatch(updateWall({ id: 'living-ne-front', hasDoor: false }))


    // store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: true }))
  } 

  else if (plotLength >= 30 && plotLength <= 34) 
  {
    const bed1Length = builtLength * 0.5
      const bed1Breadth = builtBreadth * 1.0
      const bed2Length = builtLength * 0.4
      const bed2Breadth = builtBreadth * 0.40
      const livingLength = builtLength * 0.29
      const livingBreadth = builtBreadth * 0.85
      const kitchenLength = builtLength * 0.25
      const kitchenBreadth = builtBreadth * 0.55
      const poojaLength = builtLength * 0.16
      const poojaBreadth = builtBreadth * 0.16
      const parkingLength = builtLength * 0.45
      const parkingBreadth = builtBreadth * 0.34
      const staircaseLength = builtLength * 0.4
      const stairCaseBreadth = builtBreadth * 0.34
      const toilet1Length = builtLength * 0.19
      const toilet1Breadth = builtBreadth * 0.15
      const toilet2Length = builtLength * 0.30
      const toilet2Breadth = builtBreadth * 0.3
      const sitoutLength = builtLength * 0.15
      const sitoutBreadth = builtBreadth * 0.3
      const commonToiletLength = builtLength * 0.15
      const commonToiletBreadth = builtBreadth * 0.15
      const diningLength = builtLength * 0.22
      const diningBreadth = builtBreadth * 0.43
      const drawingLength = builtLength * 0.64
      const drawingBreadth = builtBreadth * 0.15


      //add rooms
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'drawing' }))
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))




      //update dimensions and positions
      
      setTimeout(() => {
      
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'bedroom',
          length: bed1Length,
          breadth: bed1Breadth
        })
      // )
      // store.dispatch(
      //   updateRoomData({
      //     id: 'ne',
      //     roomType: 'bedroom',
      //     length: bed2Length,
      //     breadth: bed2Breadth,
      //     position: { bottom: Math.floor(bed1Breadth * parseInt(scale)), left: 0 }
      //     })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'living',
          length: livingLength,
          breadth: livingBreadth,
          position: { top: 0, left: Math.floor(bed1Length)*scale+16 }
        })
      )
    }, 100);
    setTimeout(() => {
      
    
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'kitchen',
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, right: 0 }
        })
        // )
        // store.dispatch(
        //   updateRoomData({
        //     id: 'sw',
        //     roomType: 'drawing',
        //     length: drawingLength,
        //     breadth: drawingBreadth,
        //     position: { top: Math.floor(bed2Length * parseInt(scale)), right: 150 }
        //   })


      )
      // store.dispatch(
      //   updateRoomData({
      //     id: '',
      //     roomType: 'pooja',
      //     position: { top: Math.floor(bed2Breadth * parseInt(scale)), right: 0 }
      //   })
      // )
      // store.dispatch(
      //   updateRoomData({
      //     id: 'se',
      //     roomType: 'pooja',
      //     length: poojaLength,
      //     breadth: poojaBreadth
      //   })
      // )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth
        })
      )
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth}))
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth
        })
      )
    }, 100);

    setTimeout(() => {
          
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), left: 0 }
        })
      )
      // store.dispatch(
      //   updateRoomData({
      //     id: 'sw',
      //     roomType: 'commonToilet',
      //     position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), left: 0 }
      //   })
      // )
      // store.dispatch(
      //   updateRoomData({
      //     id: 'sw',
      //     roomType: 'commonToilet',
      //     length: commonToiletLength,
      //     breadth: commonToiletBreadth
      //   })
      // )
      
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { bottom: Math.floor((kitchenBreadth) * parseInt(scale)), right:0 }
        })
      )
    }, 100);

      //Add walls
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
      // store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))


      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'living', id: 'ne'}))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'living', id: 'ne'}))
      // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'dining', id: 'se'}))


      store.dispatch(updateWall({ id: 'living-ne-front', openingLength: 0.5 * livingBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
      // store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.5 * bed1Length, hasOpening: false }))
     


      //Add Doors
      store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: true }))
      // store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
      // store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: true }))
      // store.dispatch(updateWall({ id: 'living-ne-front', hasDoor: false }))
      // store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: true }))

  } 

  else if (plotLength >= 35 && plotLength <= 39)  
  {
      const bed1Length = builtLength * 0.43
      const bed1Breadth = builtBreadth * 0.6
      const bed2Length = builtLength * 0.31
      const bed2Breadth = builtBreadth * 0.6
      const livingLength = builtLength * 0.5
      const livingBreadth = builtBreadth * 0.40
      const kitchenLength = builtLength * 0.3
      const kitchenBreadth = builtBreadth * 0.405
      const poojaLength = builtLength * 0.16
      const poojaBreadth = builtBreadth * 0.16
      const parkingLength = builtLength * 0.3
      const parkingBreadth = builtBreadth * 0.34
      const staircaseLength = builtLength * 0.3
      const stairCaseBreadth = builtBreadth * 0.25
      const toilet1Length = builtLength * 0.19
      const toilet1Breadth = builtBreadth * 0.15
      const toilet2Length = builtLength * 0.15
      const toilet2Breadth = builtBreadth * 0.2
      const sitoutLength = builtLength * 0.12
      const sitoutBreadth = builtBreadth * 0.5
      const commonToiletLength = builtLength * 0.12
      const commonToiletBreadth = builtBreadth * 0.3
      const diningLength = builtLength * 0.22
      const diningBreadth = builtBreadth * 0.25
      const drawingLength = builtLength * 0.26
      const drawingBreadth = builtBreadth * 0.6
      const extraBathLength = builtLength * 0.13
      const extraBathBreadth = builtBreadth * 0.19


      //add rooms
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'drawing' }))
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))




      //update dimensions and positions
    
      setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'bedroom',
          length: bed1Length,
          breadth: bed1Breadth,
          position: {right:Math.floor(bed2Length)*scale+16, top:0}
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'bedroom',
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right:0, top: 0 }
          })
      )
    }, 100);

      setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: 'ne',
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
            position: { top: 0, left:0 }
          })
          )
        }, 100);


      
      // store.dispatch(
      //   updateRoomData({
      //     id: '',
      //     roomType: 'pooja',
      //     position: { top: Math.floor(bed2Breadth * parseInt(scale)), right: 0 }
      //   })
      // )
      // store.dispatch(
      //   updateRoomData({
      //     id: 'se',
      //     roomType: 'pooja',
      //     length: poojaLength,
      //     breadth: poojaBreadth
      //   })
      // )

      setTimeout(() => {
        
      
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth
        })
      )
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth}))
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
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
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { top:0, left: 0 }
        })
      )
      
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { top: Math.floor(sitoutBreadth) * parseInt(scale)+7, left: 0 }
        })
      )
      
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { right: Math.floor((kitchenLength) * parseInt(scale)), bottom:0 }
        })
      )
    }, 100);
      //Add walls
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
      // store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'ne'}))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: 'ne'}))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'dining', id: 'se'}))


      store.dispatch(updateWall({ id: 'living-ne-front', openingLength: 0.5 * livingBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
      // store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.5 * bed1Length, hasOpening: false }))
     


      //Add Doors
      store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: false }))
      // store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      // store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: true }))
      // store.dispatch(updateWall({ id: 'living-ne-front', hasDoor: false }))


      // store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: true }))

  } 
  
  else if (plotLength >= 40 && plotLength <= 55) 
  {
        const bed1Length = builtLength * 0.40
        const bed1Breadth = builtBreadth * 0.56  
        const bed2Length = builtLength * 0.3
        const bed2Breadth = builtBreadth * 0.44
        const bed3Length = builtLength * 0.25
        const bed3Breadth = builtBreadth * 0.45
        const livingLength = builtLength * 0.35
        const livingBreadth = builtBreadth * 0.445
        const kitchenLength = builtLength * 0.21
        const kitchenBreadth = builtBreadth * 0.425
        const poojaLength = builtLength * 0.07
        const poojaBreadth = builtBreadth * 0.18
        const parkingLength = builtLength * 0.24
        const parkingBreadth = builtBreadth * 0.3
        const staircaseLength = builtLength * 0.4
        const stairCaseBreadth = builtBreadth * 0.19
        const toilet1Length = builtLength * 0.12
        const toilet1Breadth = builtBreadth * 0.4
        const toilet2Length = builtLength * 0.10
        const toilet2Breadth = builtBreadth * 0.16
        const sitoutLength = builtLength * 0.2
        const sitoutBreadth = builtBreadth * 0.10
        const commonToiletLength = builtLength * 0.16
        const commonToiletBreadth = builtBreadth * 0.15
        const diningLength = builtLength * 0.15
        const diningBreadth = builtBreadth * 0.30
        const drawingLength = builtLength * 0.3
        const drawingBreadth = builtBreadth * 0.55
 
 
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'store' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'dining' }))
 
 
 
 
        //update dimensions and positions
        setTimeout(() => {
          
        
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
            breadth: bed2Breadth,
                     
            })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            postion:{right:0, top:0}
                     
            })
        )
      }, 100);

      setTimeout(() => {
        
      
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { bottom: 0, right: Math.floor(kitchenLength+diningLength)*scale-6}
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'kitchen',
            length: kitchenLength,
            breadth: kitchenBreadth,
            position: { bottom: Math.floor(parkingBreadth)*scale-setbacks.front*scale, right: 0 }
          })
          )
          store.dispatch(
            updateRoomData({
              id: 'ne',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { right: Math.floor(bed3Length)*scale+setbacks.right*scale, top:0 }
            })
        )
      }, 100);

      setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'pooja',
            length: poojaLength,
            breadth: poojaBreadth,
            position: { left: Math.floor(bed1Length)*scale+setbacks.left*scale-12, top:0 }
          })
        )

        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { left: Math.floor(bed1Length+setbacks.left)*scale+6 }
          })
        )
        
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { top:0, right: Math.floor(bed3Length)*scale+setbacks.right*scale }
          })
        )
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { right: Math.floor(kitchenLength)*scale, bottom:0}
          })
        )
      }, 100);

      setTimeout(() => {
        
      
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth,
            position: { left: 0, bottom:0}

          })
        )
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth}))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position: { right: 0, bottom:0}
          })
        )
      }, 100);
        
      
        //Add walls
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
 
 
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'living', id: 'se'}))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'living', id: 'ne'}))
        // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'dining', id: 'ne'}))
 
 
        store.dispatch(updateWall({ id: 'living-ne-front', openingLength: 0.5 * livingBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.1 * sitoutBreadth, hasOpening: false }))
        // store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.5 * bed1Length, hasOpening: false }))
       
 
 
        //Add Doors
        store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-sw-right', hasDoor: true }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
        // store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: true }))
        // store.dispatch(updateWall({ id: 'living-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: false }))

  } 

  else if (plotLength > 55) 
  {

  }
}