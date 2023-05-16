import { setSetBacks } from '../../../../redux/plot'
import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../../../redux/rooms'
import { store } from '../../../../redux/store'
import { ScaleLoader } from 'react-spinners'

export function generateS2() {
const state = store.getState()
const { plotLength, plotBreadth } = state.plot
if (plotLength <= plotBreadth) {
      generateTypeA()
    } else {
      generateTypeB()
    }
  }
  function generateTypeA() {
    const state = store.getState()
    const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot
  if (plotBreadth >= 20 && plotBreadth <= 30)  //Breadth greater than 20-40
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
  
  else if (plotBreadth >= 31 && plotBreadth <= 40)  //Breadth greater than 40-50
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


  else if (plotBreadth >= 41 && plotBreadth <= 60)  //Breadth greater than 50-65
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

 
  if(plotLength >= 20 && plotLength <= 24) //Breadth :20-24 
  {
   const bed1Length = builtLength * 0.29
     const bed1Breadth = builtBreadth * 0.36
     const bed2Length = builtLength * 0.5
     const bed2Breadth = builtBreadth * 0.69
     const bed3Length = builtLength * 0.52  
     const bed3Breadth = builtBreadth * 0.45  
     const bed4Length = builtLength * 0.37  
     const bed4Breadth = builtBreadth * 0.42            
     const livingLength = builtLength * 0.5
     const livingBreadth = builtBreadth * 0.54
     const drawingLength = builtLength * 0.27
     const drawingBreadth = builtBreadth * 0.43  
     const kitchenLength = builtLength * 0.5
     const kitchenBreadth = builtBreadth * 0.46
     const poojaLength = builtLength * 0.12
     const poojaBreadth = builtBreadth * 0.22
     const parkingLength = builtLength * 0.4
     const parkingBreadth = builtBreadth * 0.36  
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.36
     const toilet1Length = builtLength * 0.25
     const toilet1Breadth = builtBreadth * 0.29
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.25
     const toilet3Length = builtLength * 0.18
     const toilet3Breadth = builtBreadth * 0.15
     const toilet4Length = builtLength * 0.12
     const toilet4Breadth = builtBreadth * 0.12
     const commonToiletLength = builtLength * 0.17
     const commonToiletBreadth = builtBreadth * 0.39
     const sitoutLength = builtLength * 0.12
     const sitoutBreadth = builtBreadth * 0.4
     const mediaLength = builtLength * 0.20
     const mediaBreadth = builtBreadth * 0.20
     const diningLength = builtLength * 0.42
     const diningBreadth = builtBreadth * 0.31

     //add rooms
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

     //update dimensions and positions
     // store.dispatch(
     //   updateRoomData({
     //     id: 'ne',
     //     roomType: 'bedroom',
     //     length: bed1Length,
     //     breadth: bed1Breadth,
     //     position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
     //   })
     // )
     setTimeout(() => {
       
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { left: 0, top:0 }
       })
     )
     // store.dispatch(
     //   updateRoomData({
     //     id: 'se',
     //     roomType: 'bedroom',
     //     length: bed3Length,
     //     breadth: bed3Breadth,
     //     // position: { left: 0, bottom:0 }
     //     position: { left: 0, bottom:0 }


     //   })
     // )
     // store.dispatch(
     //   updateRoomData({
     //     id: 'sw',
     //     roomType: 'bedroom',
     //     length: bed4Length,
     //     breadth: bed4Breadth,
     //     position: { top: 0, left:Math.floor(bed2Length)*scale+3 }
        


     //   })
     // )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right: 0, top:0 }
       })
       )
     // store.dispatch(
     //     updateRoomData({
     //       id: '',
     //       roomType: 'drawing',
     //       length: drawingLength,
     //       breadth: drawingBreadth,
     //       position: { bottom: 0, right:0 }
     //       })
     // )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position:{bottom:0, right:0}
       })
     )
     
   }, 100);
   setTimeout(() => {
     
    
     // store.dispatch(
     //   updateRoomData({
     //     id: 'se',
     //     roomType: 'pooja',
     //     length: poojaLength,
     //     breadth: poojaBreadth,
     //     position: { top: 0, left:0 }
     //   })
     // )
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'stairCase',
         length: staircaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, left:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { left: 0, top:0} }))
     // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
     // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
     // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     // position: { bottom:0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     // position: { top: 0, left:0 } }))




     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:Math.floor(staircaseLength*parseInt(scale)), bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { left: 0, bottom:Math.floor(setbacks.front)*scale }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { top:Math.floor(kitchenBreadth)*scale , right:0 }
       })
     )


     // store.dispatch(
     //   updateRoomData({
     //     id: '',
     //     roomType: 'media',
     //     length: mediaLength,
     //     breadth: mediaBreadth,
     //     // position: { left: 0, top:0 }
     //     position: { left: Math.floor(bed3Length)*scale+3, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
        
     //   })
     // )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:Math.floor(kitchenLength)*scale, bottom:0 }
       })

     )
     
   }, 100);
     //Add walls
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'se' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
    
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     //Add opening
     // store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))

   }
 if(plotLength >= 25 && plotLength <= 29) //Breadth :25-29 
  {
   const bed1Length = builtLength * 0.29
   const bed1Breadth = builtBreadth * 0.36
   const bed2Length = builtLength * 0.50
   const bed2Breadth = builtBreadth * 0.99
   const bed3Length = builtLength * 0.52  
   const bed3Breadth = builtBreadth * 0.45  
   const bed4Length = builtLength * 0.37  
   const bed4Breadth = builtBreadth * 0.42            
   const livingLength = builtLength * 0.5
   const livingBreadth = builtBreadth * 0.65
   const drawingLength = builtLength * 0.27
   const drawingBreadth = builtBreadth * 0.43  
   const kitchenLength = builtLength * 0.25
   const kitchenBreadth = builtBreadth * 0.35
   const poojaLength = builtLength * 0.12
   const poojaBreadth = builtBreadth * 0.22
   const parkingLength = builtLength * 0.4
   const parkingBreadth = builtBreadth * 0.33  
   const staircaseLength = builtLength * 0.308
   const stairCaseBreadth = builtBreadth * 0.33
   const toilet1Length = builtLength * 0.20
   const toilet1Breadth = builtBreadth * 0.28
   const toilet2Length = builtLength * 0.07
   const toilet2Breadth = builtBreadth * 0.25
   const toilet3Length = builtLength * 0.18
   const toilet3Breadth = builtBreadth * 0.15
   const toilet4Length = builtLength * 0.12
   const toilet4Breadth = builtBreadth * 0.12
   const commonToiletLength = builtLength * 0.12
   const commonToiletBreadth = builtBreadth * 0.35
   const sitoutLength = builtLength * 0.20
   const sitoutBreadth = builtBreadth * 0.28
   const mediaLength = builtLength * 0.20
   const mediaBreadth = builtBreadth * 0.20
   const diningLength = builtLength * 0.15
   const diningBreadth = builtBreadth * 0.35

   //add rooms
   // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
   // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
   // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
   // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
   // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
   // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
   // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
   store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
   store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
   // store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
   store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
   // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

   //update dimensions and positions
   // store.dispatch(
   //   updateRoomData({
   //     id: 'ne',
   //     roomType: 'bedroom',
   //     length: bed1Length,
   //     breadth: bed1Breadth,
   //     position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
   //   })
   // )
   setTimeout(() => {
     
   store.dispatch(
     updateRoomData({
       id: 'nw',
       roomType: 'bedroom',
       length: bed2Length,
       breadth: bed2Breadth,
       position: { left: 0, top:0 }
     })
   )
   // store.dispatch(
   //   updateRoomData({
   //     id: 'se',
   //     roomType: 'bedroom',
   //     length: bed3Length,
   //     breadth: bed3Breadth,
   //     // position: { left: 0, bottom:0 }
   //     position: { left: 0, bottom:0 }


   //   })
   // )
   // store.dispatch(
   //   updateRoomData({
   //     id: 'sw',
   //     roomType: 'bedroom',
   //     length: bed4Length,
   //     breadth: bed4Breadth,
   //     position: { top: 0, left:Math.floor(bed2Length)*scale+3 }
      


   //   })
   // )
   store.dispatch(
     updateRoomData({
       id: 'sw',
       roomType: 'living',
       length: livingLength,
       breadth: livingBreadth,
       position: { right: 0, top:0 }
     })
     )
     
   }, 100);
   setTimeout(() => {
     
   // store.dispatch(
   //     updateRoomData({
   //       id: '',
   //       roomType: 'drawing',
   //       length: drawingLength,
   //       breadth: drawingBreadth,
   //       position: { bottom: 0, right:0 }
   //       })
   // )
   store.dispatch(
     updateRoomData({
       id: 'se',
       roomType: 'kitchen',
       length: kitchenLength,
       breadth: kitchenBreadth,
       position: { bottom: 0, right:0 }
     })
   )
  
   // store.dispatch(
   //   updateRoomData({
   //     id: 'se',
   //     roomType: 'pooja',
   //     length: poojaLength,
   //     breadth: poojaBreadth,
   //     position: { top: 0, left:0 }
   //   })
   // )
   store.dispatch(
     updateRoomData({
       id: '',
       roomType: 'stairCase',
       length: staircaseLength,
       breadth: stairCaseBreadth,
       position: { bottom: 0, right:0 }
     })
   )
   store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
   position: { top: 0, bottom:0 } }))
   // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
   // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
   // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
   // position: { bottom:0, left:0 }}))
   // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
   // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
   // position: { top: 0, left:0 } }))




   store.dispatch(
     updateRoomData({
       id: 'nw',
       roomType: 'parking',
       length: parkingLength,
       breadth: parkingBreadth,
       position:{left:0, bottom:0}
     })
   )
  
   store.dispatch(
     updateRoomData({
       id: '',
       roomType: 'commonToilet',
       length: commonToiletLength,
       breadth: commonToiletBreadth,
       position: { right: 0 *scale, top:0 }
      
      
     })
   )


   store.dispatch(
     updateRoomData({
       id: '',
       roomType: 'sitout',
       length: sitoutLength,
       breadth: sitoutBreadth,
       position: { right:Math.floor(kitchenLength) *scale, top:0 }
     })
   )


   // store.dispatch(
   //   updateRoomData({
   //     id: '',
   //     roomType: 'media',
   //     length: mediaLength,
   //     breadth: mediaBreadth,
   //     // position: { left: 0, top:0 }
   //     position: { left: Math.floor(bed3Length)*scale+3, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
      
   //   })
   // )
  
   store.dispatch(
     updateRoomData({
       id: '',
       roomType: 'dining',
       length: diningLength,
       breadth: diningBreadth,
       position: { right:0, top:Math.floor(kitchenBreadth)*(scale) }
     })
   )
   
 }, 100);
   //Add walls
   // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
   // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
   // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'nw' }))
   // store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
   // store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'se' }))
   // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
   // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
   // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: 'sw' }))
   // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
   // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'kitchen', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
   // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
   // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
   // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
   // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
   // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
   // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
   // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
  
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
   // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
   // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
   //Add opening
   // store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
   store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
   store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
   //Add doors  
   store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
   store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
   store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
   store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
   store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
   store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
   store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
 if(plotLength >= 30 && plotLength <=32) //Breadth :30-32 
   {
     const bed1Length = builtLength * 0.29
     const bed1Breadth = builtBreadth * 0.36
     const bed2Length = builtLength * 0.45
     const bed2Breadth = builtBreadth * 1
     const bed3Length = builtLength * 0.42  
     const bed3Breadth = builtBreadth * 0.6  
     const bed4Length = builtLength * 0.37  
     const bed4Breadth = builtBreadth * 0.42            
     const livingLength = builtLength * 0.4
     const livingBreadth = builtBreadth * 0.6
     const drawingLength = builtLength * 0.27
     const drawingBreadth = builtBreadth * 0.43  
     const kitchenLength = builtLength * 0.3
     const kitchenBreadth = builtBreadth * 0.4
     const poojaLength = builtLength * 0.12
     const poojaBreadth = builtBreadth * 0.22
     const parkingLength = builtLength * 0.4
     const parkingBreadth = builtBreadth * 0.35 
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.30
     const toilet1Length = builtLength * 0.18
     const toilet1Breadth = builtBreadth * 0.25
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.25
     const toilet3Length = builtLength * 0.18
     const toilet3Breadth = builtBreadth * 0.25
     const toilet4Length = builtLength * 0.12
     const toilet4Breadth = builtBreadth * 0.12
     const commonToiletLength = builtLength * 0.10
     const commonToiletBreadth = builtBreadth * 0.25
     const sitoutLength = builtLength * 0.16
     const sitoutBreadth = builtBreadth * 0.5
     const mediaLength = builtLength * 0.20
     const mediaBreadth = builtBreadth * 0.20
     const diningLength = builtLength * 0.18
     const diningBreadth = builtBreadth * 0.4

     //add rooms
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    //  store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

     //update dimensions and positions
     // store.dispatch(
     //   updateRoomData({
     //     id: 'ne',
     //     roomType: 'bedroom',
     //     length: bed1Length,
     //     breadth: bed1Breadth,
     //     position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
     //   })
     // )
     setTimeout(() => {
 
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { left: 0, top:0 }
       })
     )
    //  store.dispatch(
    //    updateRoomData({
    //      id: 'se',
    //      roomType: 'bedroom',
    //      length: bed3Length,
    //      breadth: bed3Breadth,
    //      // position: { left: 0, bottom:0 }
    //      position: { right: 0, top:0 }


    //    })
    //  )
     // store.dispatch(
     //   updateRoomData({
     //     id: 'sw',
     //     roomType: 'bedroom',
     //     length: bed4Length,
     //     breadth: bed4Breadth,
     //     position: { top: 0, left:Math.floor(bed2Length)*scale+3 }
        


     //   })
     // )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right: 0, top:0 }
       })
       )
             
     }, 100);
     setTimeout(() => {

     // store.dispatch(
     //     updateRoomData({
     //       id: '',
     //       roomType: 'drawing',
     //       length: drawingLength,
     //       breadth: drawingBreadth,
     //       position: { bottom: 0, right:0 }
     //       })
     // )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position: { bottom: 0, right:0 }
       })
     )
    
     // store.dispatch(
     //   updateRoomData({
     //     id: 'se',
     //     roomType: 'pooja',
     //     length: poojaLength,
     //     breadth: poojaBreadth,
     //     position: { top: 0, left:0 }
     //   })
     // )
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'stairCase',
         length: staircaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top: 0, bottom:0 } }))
     // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
     // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
     // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     // position: { right:0, bottom:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     // position: { top: 0, left:0 } }))




     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { left: 0 *scale, bottom:Math.floor(livingBreadth)*(scale) }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { left:Math.floor(bed2Length)*(scale+1.5)+setbacks.left*(scale), top:0 }
       })
     )


     // store.dispatch(
     //   updateRoomData({
     //     id: '',
     //     roomType: 'media',
     //     length: mediaLength,
     //     breadth: mediaBreadth,
     //     // position: { left: 0, top:0 }
     //     position: { left: Math.floor(bed3Length)*scale+3, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
        
     //   })
     // )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { bottom:0, right:Math.floor(kitchenLength)*(scale) }
       })

     )
               
   }, 100);
     //Add walls
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
    
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     //Add opening
     // store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
 if(plotLength >= 33 && plotLength <= 34) //Breadth :33-34 
 {
   const bed1Length = builtLength * 0.29
     const bed1Breadth = builtBreadth * 0.36
     const bed2Length = builtLength * 0.50
     const bed2Breadth = builtBreadth * 0.56
     const bed3Length = builtLength * 0.35  
     const bed3Breadth = builtBreadth * 0.56  
     const bed4Length = builtLength * 0.37  
     const bed4Breadth = builtBreadth * 0.42            
     const livingLength = builtLength * 0.48
     const livingBreadth = builtBreadth * 0.43
     const drawingLength = builtLength * 0.27
     const drawingBreadth = builtBreadth * 0.43  
     const kitchenLength = builtLength * 0.35
     const kitchenBreadth = builtBreadth * 0.35
     const poojaLength = builtLength * 0.12
     const poojaBreadth = builtBreadth * 0.20
     const parkingLength = builtLength * 0.4
     const parkingBreadth = builtBreadth * 0.26  
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.26
     const toilet1Length = builtLength * 0.15
     const toilet1Breadth = builtBreadth * 0.3
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.25
     const toilet3Length = builtLength * 0.18
     const toilet3Breadth = builtBreadth * 0.15
     const toilet4Length = builtLength * 0.12
     const toilet4Breadth = builtBreadth * 0.12
     const commonToiletLength = builtLength * 0.12
     const commonToiletBreadth = builtBreadth * 0.30
     const sitoutLength = builtLength * 0.15
     const sitoutBreadth = builtBreadth * 0.35
     const mediaLength = builtLength * 0.20
     const mediaBreadth = builtBreadth * 0.20
     const diningLength = builtLength * 0.20
     const diningBreadth = builtBreadth * 0.35

     //add rooms
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

     //update dimensions and positions
     // store.dispatch(
     //   updateRoomData({
     //     id: 'ne',
     //     roomType: 'bedroom',
     //     length: bed1Length,
     //     breadth: bed1Breadth,
     //     position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
     //   })
     // )
     setTimeout(() => {
     
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { left: 0, top:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         // position: { left: 0, bottom:0 }
         position: { right: 0, top:0 }


       })
     )
     // store.dispatch(
     //   updateRoomData({
     //     id: 'sw',
     //     roomType: 'bedroom',
     //     length: bed4Length,
     //     breadth: bed4Breadth,
     //     position: { top: 0, left:Math.floor(bed2Length)*scale+3 }
        


     //   })
     // )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { left: 0, bottom:0 }
       })
       )
         
     }, 100);
     setTimeout(() => {
       
     // store.dispatch(
     //     updateRoomData({
     //       id: '',
     //       roomType: 'drawing',
     //       length: drawingLength,
     //       breadth: drawingBreadth,
     //       position: { bottom: 0, right:0 }
     //       })
     // )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position: { bottom: 0, right:0 }
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { top: Math.floor(bed2Breadth)*scale, right:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'stairCase',
         length: staircaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top: 0, bottom:0 } }))
     // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
     // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
     // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     // position: { bottom:0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     // position: { top: 0, left:0 } }))




     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { left: 0 *scale, bottom:Math.floor(bed1Breadth)*scale }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { right:Math.floor(bed3Length) *(scale+1.6)+setbacks.right*scale, top:0 }
       })
     )


     // store.dispatch(
     //   updateRoomData({
     //     id: '',
     //     roomType: 'media',
     //     length: mediaLength,
     //     breadth: mediaBreadth,
     //     // position: { left: 0, top:0 }
     //     position: { left: Math.floor(bed3Length)*scale+3, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
        
     //   })
     // )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:Math.floor(kitchenLength)*scale, bottom:0 }
       })

     )
     
   }, 100);
     //Add walls
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'bedroom', id: 'se' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
    
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     //Add opening
     // store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }

 if(plotLength >= 35 && plotLength <= 38) //Breadth :35-38 
   {
     const bed1Length = builtLength * 0.29
     const bed1Breadth = builtBreadth * 0.36
     const bed2Length = builtLength * 0.45
     const bed2Breadth = builtBreadth * 0.53
     const bed3Length = builtLength * 0.3  
     const bed3Breadth = builtBreadth * 0.5  
     const bed4Length = builtLength * 0.45  
     const bed4Breadth = builtBreadth * 0.47            
     const livingLength = builtLength * 0.35
     const livingBreadth = builtBreadth * 0.5
     const drawingLength = builtLength * 0.27
     const drawingBreadth = builtBreadth * 0.43  
     const kitchenLength = builtLength * 0.22
     const kitchenBreadth = builtBreadth * 0.35
     const poojaLength = builtLength * 0.09
     const poojaBreadth = builtBreadth * 0.15
     const parkingLength = builtLength * 0.4
     const parkingBreadth = builtBreadth * 0.25  
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.25
     const toilet1Length = builtLength * 0.15
     const toilet1Breadth = builtBreadth * 0.15
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.25
     const toilet3Length = builtLength * 0.19
     const toilet3Breadth = builtBreadth * 0.38
     const toilet4Length = builtLength * 0.16
     const toilet4Breadth = builtBreadth * 0.15
     const commonToiletLength = builtLength * 0.17
     const commonToiletBreadth = builtBreadth * 0.3
     const sitoutLength = builtLength * 0.09
     const sitoutBreadth = builtBreadth * 0.3
     const mediaLength = builtLength * 0.20
     const mediaBreadth = builtBreadth * 0.20
     const diningLength = builtLength * 0.28
     const diningBreadth = builtBreadth * 0.16

     //add rooms
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

     //update dimensions and positions
     // store.dispatch(
     //   updateRoomData({
     //     id: 'ne',
     //     roomType: 'bedroom',
     //     length: bed1Length,
     //     breadth: bed1Breadth,
     //     position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
     //   })
     // )
     setTimeout(() => {
       
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { left: 0, top:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         // position: { left: 0, bottom:0 }
         position: { right: 0, top:0 }


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'bedroom',
         length: bed4Length,
         breadth: bed4Breadth,
         position: { bottom: 0, left:0 }
        


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right:Math.floor(kitchenLength)*scale, bottom:0 }
       })
       )
       
     }, 100);
     // store.dispatch(
     //     updateRoomData({
     //       id: '',
     //       roomType: 'drawing',
     //       length: drawingLength,
     //       breadth: drawingBreadth,
     //       position: { bottom: 0, right:0 }
     //       })
     // )
     setTimeout(() => {
       
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position: { bottom: 0, right:0 }
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { bottom: Math.floor(bed3Breadth)*(scale), right:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'stairCase',
         length: staircaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top: Math.floor(toilet3Breadth)*scale, bottom:0 } }))
     // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
     // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
     // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     // position: { bottom:0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     position: { top: 0, left:0 } }))




     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { top: 0, right:Math.floor(bed3Breadth)*(scale+2) }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { right:Math.floor(bed4Breadth) *(scale+12), top:0 }
       })
     )


     // store.dispatch(
     //   updateRoomData({
     //     id: '',
     //     roomType: 'media',
     //     length: mediaLength,
     //     breadth: mediaBreadth,
     //     // position: { left: 0, top:0 }
     //     position: { left: Math.floor(bed3Length)*scale+3, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
        
     //   })
     // )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:0, bottom:Math.floor(kitchenBreadth)*(scale) }
       })
     )
     
   }, 100);
     //Add walls
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
    
     // store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
     // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     //Add opening
     // store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }

 if(plotLength >= 39 && plotLength <= 43) //Breadth :39-43 
 {
   const bed1Length = builtLength * 0.29
   const bed1Breadth = builtBreadth * 0.36
   const bed2Length = builtLength * 0.4
   const bed2Breadth = builtBreadth * 0.55
   const bed3Length = builtLength * 0.3  
   const bed3Breadth = builtBreadth * 0.45  
   const bed4Length = builtLength * 0.3  
   const bed4Breadth = builtBreadth * 0.55            
   const livingLength = builtLength * 0.33
   const livingBreadth = builtBreadth * 0.55
   const drawingLength = builtLength * 0.27
   const drawingBreadth = builtBreadth * 0.45  
   const kitchenLength = builtLength * 0.25
   const kitchenBreadth = builtBreadth * 0.35
   const poojaLength = builtLength * 0.10
   const poojaBreadth = builtBreadth * 0.20
   const parkingLength = builtLength * 0.35
   const parkingBreadth = builtBreadth * 0.25  
   const staircaseLength = builtLength * 0.308
   const stairCaseBreadth = builtBreadth * 0.20
   const toilet1Length = builtLength * 0.12
   const toilet1Breadth = builtBreadth * 0.3
   const toilet2Length = builtLength * 0.07
   const toilet2Breadth = builtBreadth * 0.25
   const toilet3Length = builtLength * 0.12
   const toilet3Breadth = builtBreadth * 0.12
   const toilet4Length = builtLength * 0.12
   const toilet4Breadth = builtBreadth * 0.18
   const commonToiletLength = builtLength * 0.07
   const commonToiletBreadth = builtBreadth * 0.30
   const sitoutLength = builtLength * 0.15
   const sitoutBreadth = builtBreadth * 0.15
   const mediaLength = builtLength * 0.20
   const mediaBreadth = builtBreadth * 0.20
   const diningLength = builtLength * 0.20
   const diningBreadth = builtBreadth * 0.35

   //add rooms
   // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
   store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
   store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
   // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
   store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
   store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
   // store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
   store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
   store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

   //update dimensions and positions
   // store.dispatch(
   //   updateRoomData({
   //     id: 'ne',
   //     roomType: 'bedroom',
   //     length: bed1Length,
   //     breadth: bed1Breadth,
   //     position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
   //   })
   // )
   setTimeout(() => {
     
   store.dispatch(
     updateRoomData({
       id: 'nw',
       roomType: 'bedroom',
       length: bed2Length,
       breadth: bed2Breadth,
       position: { left: 0, top:0 }
     })
   )
   store.dispatch(
     updateRoomData({
       id: 'se',
       roomType: 'bedroom',
       length: bed3Length,
       breadth: bed3Breadth,
       // position: { left: 0, bottom:0 }
       position: { left: 0, bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale }


     })
   )
   store.dispatch(
     updateRoomData({
       id: 'sw',
       roomType: 'bedroom',
       length: bed4Length,
       breadth: bed4Breadth,
       position: { top: 0, left:Math.floor(bed2Length)*scale+3 }
      


     })
   )
   store.dispatch(
     updateRoomData({
       id: 'sw',
       roomType: 'living',
       length: livingLength,
       breadth: livingBreadth,
       position: { right: 0, top:0 }
     })
     )
     
   }, 100);
   setTimeout(() => {
     
   store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'drawing',
         length: drawingLength,
         breadth: drawingBreadth,
         position: { bottom: 0, right:Math.floor(kitchenLength+diningBreadth)*(scale-1) }
         })
   )
   store.dispatch(
     updateRoomData({
       id: 'se',
       roomType: 'kitchen',
       length: kitchenLength,
       breadth: kitchenBreadth,
       position: { bottom: 0, right:0 }
     })
   )
  
   store.dispatch(
     updateRoomData({
       id: 'se',
       roomType: 'pooja',
       length: poojaLength,
       breadth: poojaBreadth,
       position: { bottom: Math.floor(kitchenBreadth)*(scale), right:0 }
     })
   )
   
 }, 100);
 setTimeout(() => {
   
   store.dispatch(
     updateRoomData({
       id: '',
       roomType: 'stairCase',
       length: staircaseLength,
       breadth: stairCaseBreadth,
       position: { bottom: 0, left:0 }
     })
   )
   store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
   position: { top: 0, bottom:0 } }))
   // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
   // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
   // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
   // position: { bottom:0, left:0 }}))
   // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
   store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
   position: { top: 0, left:0 } }))




   store.dispatch(
     updateRoomData({
       id: 'nw',
       roomType: 'parking',
       length: parkingLength,
       breadth: parkingBreadth,
       position:{right:0, bottom:0}
     })
   )
  
   store.dispatch(
     updateRoomData({
       id: '',
       roomType: 'commonToilet',
       length: commonToiletLength,
       breadth: commonToiletBreadth,
       position: { right: 0 *scale, bottom:Math.floor(livingBreadth)*(scale+6) }
      
      
     })
   )


   store.dispatch(
     updateRoomData({
       id: '',
       roomType: 'sitout',
       length: sitoutLength,
       breadth: sitoutBreadth,
       position: { right: Math.floor(livingLength)*(scale-12)-setbacks.right*(scale), top:0 }
     })
   )


   // store.dispatch(
   //   updateRoomData({
   //     id: '',
   //     roomType: 'media',
   //     length: mediaLength,
   //     breadth: mediaBreadth,
   //     // position: { left: 0, top:0 }
   //     position: { right:0, bottom:0 }
      
   //   })
   // )
  
   store.dispatch(
     updateRoomData({
       id: '',
       roomType: 'dining',
       length: diningLength,
       breadth: diningBreadth,
       position: { right:Math.floor(kitchenLength)*scale, bottom:0 }
     })
   )
   
 }, 100);
   //Add walls
   // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
   // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
   store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'dining', id: 'se' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
   //Add opening
   store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
   store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
   store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
   //Add doors  
   store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
   store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
   store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
   store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
   store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
   store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
   store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false })) 
   }

 if(plotLength >= 44 && plotLength <= 49) //Breadth :44-49 
   {
     const bed1Length = builtLength * 0.29
     const bed1Breadth = builtBreadth * 0.36
     const bed2Length = builtLength * 0.40
     const bed2Breadth = builtBreadth * 0.51
     const bed3Length = builtLength * 0.28  
     const bed3Breadth = builtBreadth * 0.50  
     const bed4Length = builtLength * 0.3  
     const bed4Breadth = builtBreadth * 0.57            
     const livingLength = builtLength * 0.4
     const livingBreadth = builtBreadth * 0.43
     const drawingLength = builtLength * 0.3
     const drawingBreadth = builtBreadth * 0.39  
     const kitchenLength = builtLength * 0.22
     const kitchenBreadth = builtBreadth * 0.30
     const poojaLength = builtLength * 0.12
     const poojaBreadth = builtBreadth * 0.22
     const parkingLength = builtLength * 0.3
     const parkingBreadth = builtBreadth * 0.22  
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.25
     const toilet1Length = builtLength * 0.12
     const toilet1Breadth = builtBreadth * 0.3
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.25
     const toilet3Length = builtLength * 0.12
     const toilet3Breadth = builtBreadth * 0.12
     const toilet4Length = builtLength * 0.12
     const toilet4Breadth = builtBreadth * 0.18
     const commonToiletLength = builtLength * 0.07
     const commonToiletBreadth = builtBreadth * 0.25
     const sitoutLength = builtLength * 0.09
     const sitoutBreadth = builtBreadth * 0.18
     const mediaLength = builtLength * 0.20
     const mediaBreadth = builtBreadth * 0.20
     const diningLength = builtLength * 0.10
     const diningBreadth = builtBreadth * 0.3

     //add rooms
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

     //update dimensions and positions
     // store.dispatch(
     //   updateRoomData({
     //     id: 'ne',
     //     roomType: 'bedroom',
     //     length: bed1Length,
     //     breadth: bed1Breadth,
     //     position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
     //   })
     // )
     setTimeout(() => {

     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { left: 0, top:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         // position: { left: 0, bottom:0 }
         position: { left: 0, bottom:0 }


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'bedroom',
         length: bed4Length,
         breadth: bed4Breadth,
         position: { top: 0, left:Math.floor(bed2Length)*scale+3 }
        


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right:0, bottom:0 }
       })
       )
                 
     }, 100);
     setTimeout(() => {
       
     store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { top:Math.floor(mediaBreadth)*scale, right:0 }
           })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position:{bottom:0, left:Math.floor(bed3Length)*(scale+1.5)}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { top: 0, left:0 }
       })
     )
     
   }, 100);
   setTimeout(() => {
     
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'stairCase',
         length: staircaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, left:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top: Math.floor(poojaBreadth)*scale, bottom:0 } }))
     // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
     // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom:0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     position: { top: 0, left:0 } }))




     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{right:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { right: 0 *scale, top:Math.floor(drawingLength)*(scale+1.8) }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { right: 0, top:Math.floor(mediaBreadth)*(scale+7) }
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         // position: { left: 0, top:0 }
         position: { top: 0, right:0 }
        
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { bottom:0, left:Math.floor(kitchenBreadth+bed3Breadth)*(scale-3 ) }
       })
     )
     
   }, 100);
     //Add walls
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }

   if(plotLength >= 50 && plotLength <=54) //Breadth :50-54 
   {
     const bed1Length = builtLength * 0.29
     const bed1Breadth = builtBreadth * 0.5
     const bed2Length = builtLength * 0.29
     const bed2Breadth = builtBreadth * 0.36
     const bed3Length = builtLength * 0.35  
     const bed3Breadth = builtBreadth * 0.50  
     const bed4Length = builtLength * 0.35  
     const bed4Breadth = builtBreadth * 0.45            
     const livingLength = builtLength * 0.32
     const livingBreadth = builtBreadth * 0.5
     const drawingLength = builtLength * 0.265
     const drawingBreadth = builtBreadth * 0.35  
     const kitchenLength = builtLength * 0.20
     const kitchenBreadth = builtBreadth * 0.28
     const poojaLength = builtLength * 0.07
     const poojaBreadth = builtBreadth * 0.13
     const parkingLength = builtLength * 0.326
     const parkingBreadth = builtBreadth * 0.28  
     const staircaseLength = builtLength * 0.28
     const stairCaseBreadth = builtBreadth * 0.25
     const toilet1Length = builtLength * 0.15
     const toilet1Breadth = builtBreadth * 0.2
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.25
     const toilet3Length = builtLength * 0.1
     const toilet3Breadth = builtBreadth * 0.30
     const toilet4Length = builtLength * 0.12
     const toilet4Breadth = builtBreadth * 0.18
     const commonToiletLength = builtLength * 0.1
     const commonToiletBreadth = builtBreadth * 0.25
     const sitoutLength = builtLength * 0.255
     const sitoutBreadth = builtBreadth * 0.17
     const mediaLength = builtLength * 0.2
     const mediaBreadth = builtBreadth * 0.28
     const diningLength = builtLength * 0.25
     const diningBreadth = builtBreadth * 0.12
     
 
     //add rooms
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
 
     //update dimensions and positions
   setTimeout(() => {        
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed1Length,
         breadth: bed1Breadth,
         position: { right: 0, top:0 }
       })
     )
 
      store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: {bottom:Math.floor(parkingBreadth)*(scale)-setbacks.front*scale, left:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         position: { left: 0, top:0 }
 
 
       })
     )
     // store.dispatch(
     //   updateRoomData({
     //     id: 'sw',
     //     roomType: 'bedroom',
     //     length: bed4Length,
     //     breadth: bed4Breadth,
     //     position: { top: 0, right:Math.floor(commonToiletLength)*scale-setbacks.right*scale }
     //    })
        
     // )
   
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right: Math.floor(kitchenLength)*scale, bottom:0 }
       })
       )
     }, 100);
 
     setTimeout(() => {
 
     store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { left:Math.floor(bed3Length)*scale+16, top:0}
           })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position:{bottom:Math.floor(stairCaseBreadth)*(scale)-setbacks.front*scale, right:0 }
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { top: Math.floor(bed3Breadth+diningBreadth)*scale, right:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'stairCase',
         length: staircaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top:0, bottom:0 } }))
     // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
     // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom:0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     position: { top: 0, left:0 } }))
 
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:0, bottom:0}
       })
     )
          
   }, 100);
   setTimeout(() => {
     
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { right:Math.floor(bed1Length)*scale+setbacks.right*scale+12, top:0 }
        
        
       })
     )
 
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { left: Math.floor(bed3Length+setbacks.left)*scale+12, top:0 }
       })
     )
 
 
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         position: { left: Math.floor(bed2Length)*(scale+1), bottom:0 }
        
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:0, bottom:Math.floor(kitchenBreadth)*(scale-2.5)+setbacks.front*(scale) }
       })
       )
       
   }, 100);
     //Add walls
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))  
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'sw' }))        
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
     // store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.3 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
   
   if(plotLength >= 55 && plotLength <=59) //Breadth :55-59 
   {
     const bed1Length = builtLength * 0.20
     const bed1Breadth = builtBreadth * 0.38
     const bed2Length = builtLength * 0.32
     const bed2Breadth = builtBreadth * 0.33
     const bed3Length = builtLength * 0.25  
     const bed3Breadth = builtBreadth * 0.45  
     const bed4Length = builtLength * 0.25  
     const bed4Breadth = builtBreadth * 0.50            
     const livingLength = builtLength * 0.25
     const livingBreadth = builtBreadth * 0.5
     const drawingLength = builtLength * 0.23
     const drawingBreadth = builtBreadth * 0.5  
     const kitchenLength = builtLength * 0.27
     const kitchenBreadth = builtBreadth * 0.3
     const poojaLength = builtLength * 0.11
     const poojaBreadth = builtBreadth * 0.13
     const parkingLength = builtLength * 0.3
     const parkingBreadth = builtBreadth * 0.29  
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.25
     const toilet1Length = builtLength * 0.10
     const toilet1Breadth = builtBreadth * 0.15
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.25
     const toilet3Length = builtLength * 0.08
     const toilet3Breadth = builtBreadth * 0.18
     const toilet4Length = builtLength * 0.15
     const toilet4Breadth = builtBreadth * 0.14
     const commonToiletLength = builtLength * 0.07
     const commonToiletBreadth = builtBreadth * 0.14
     const sitoutLength = builtLength * 0.115
     const sitoutBreadth = builtBreadth * 0.177
     const mediaLength = builtLength * 0.175
     const mediaBreadth = builtBreadth * 0.33
     const diningLength = builtLength * 0.089
     const diningBreadth = builtBreadth * 0.3

     //add rooms
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

     // update dimensions and positions
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'bedroom',
         length: bed1Length,
         breadth: bed1Breadth,
         position: { right: 0, top:Math.floor(poojaBreadth)*(scale+2) }
       })
     )
     setTimeout(() => {
       
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { left: 0, top:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         // position: { left: 0, bottom:0 }
         position: { left: 0, top:Math.floor(bed2Breadth)*scale }


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'bedroom',
         length: bed4Length,
         breadth: bed4Breadth,
         position: { top: 0, left:Math.floor(bed2Length+mediaLength)*(scale-0.4) }
        


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { left: Math.floor(bed3Length)*(scale+1.5), bottom:0 }
       })
       )
       
     }, 100);
     setTimeout(() => {

     store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { bottom: 0, right:Math.floor(kitchenLength)*scale}
           })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position: { right: 0, bottom:Math.floor(parkingBreadth)*(scale)-setbacks.front*(scale) }
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { right:0, top:0}
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
         position: { bottom: 0, left:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top: Math.floor(bed2Breadth)*scale-(setbacks.front)*scale+26, bottom:0 } }))
     // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
     // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom:0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     position: { top: 0, left:0 } }))




     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{right:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { top: 0, right:Math.floor(poojaBreadth)*(scale+3)+setbacks.right*(scale+9)+sitoutLength*scale }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { top: 0, right:Math.floor(poojaBreadth)*(scale+3)+setbacks.right*(scale+9) }
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         // position: { left: 0, top:0 }
         position: { top: 0 *scale, left:Math.floor(bed2Length)*(scale-0)}
        
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale, 
          right:Math.floor(kitchenLength-diningLength)*(scale) }
       })

     )
     
   }, 100);
     //Add walls
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'dining', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   } 

  //  if(plotLength >= 60 && plotLength <=65) //**size 60x30 - code to execute breadth 30 
  //  {
  //    const bed1Length = builtLength * 0.29
  //    const bed1Breadth = builtBreadth * 0.36
  //    const bed2Length = builtLength * 0.30
  //    const bed2Breadth = builtBreadth * 0.56
  //    const bed3Length = builtLength * 0.28  
  //    const bed3Breadth = builtBreadth * 0.48  
  //    const bed4Length = builtLength * 0.23  
  //    const bed4Breadth = builtBreadth * 0.53            
  //    const livingLength = builtLength * 0.4
  //    const livingBreadth = builtBreadth * 0.52
  //    const drawingLength = builtLength * 0.17
  //    const drawingBreadth = builtBreadth * 0.48  
  //    const kitchenLength = builtLength * 0.25
  //    const kitchenBreadth = builtBreadth * 0.44
  //    const poojaLength = builtLength * 0.10
  //    const poojaBreadth = builtBreadth * 0.16
  //    const parkingLength = builtLength * 0.28
  //    const parkingBreadth = builtBreadth * 0.25  
  //    const staircaseLength = builtLength * 0.28
  //    const stairCaseBreadth = builtBreadth * 0.25
  //    const toilet1Length = builtLength * 0.10
  //    const toilet1Breadth = builtBreadth * 0.35
  //    const toilet2Length = builtLength * 0.07
  //    const toilet2Breadth = builtBreadth * 0.25
  //    const toilet3Length = builtLength * 0.08
  //    const toilet3Breadth = builtBreadth * 0.22
  //    const toilet4Length = builtLength * 0.08
  //    const toilet4Breadth = builtBreadth * 0.16
  //    const commonToiletLength = builtLength * 0.11
  //    const commonToiletBreadth = builtBreadth * 0.35
  //    const sitoutLength = builtLength * 0.10
  //    const sitoutBreadth = builtBreadth * 0.22
  //    const mediaLength = builtLength * 0.15
  //    const mediaBreadth = builtBreadth * 0.48
  //    const diningLength = builtLength * 0.13
  //    const diningBreadth = builtBreadth * 0.3

  //    //add rooms
  //    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
  //    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
  //    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
  //    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
  //    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
  //    store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
  //    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
  //    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
  //    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
  //    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
  //    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
  //    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
  //    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
  //    store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
  //    store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
  //    store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
  //    store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
  //    store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

  //    //update dimensions and positions
  //    // store.dispatch(
  //    //   updateRoomData({
  //    //     id: 'ne',
  //    //     roomType: 'bedroom',
  //    //     length: bed1Length,
  //    //     breadth: bed1Breadth,
  //    //     position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
  //    //   })
  //    // )
  //    setTimeout(() => {
       
  //    store.dispatch(
  //      updateRoomData({
  //        id: 'nw',
  //        roomType: 'bedroom',
  //        length: bed2Length,
  //        breadth: bed2Breadth,
  //        position: { left: 0, top:0 }
  //      })
  //    )
  //    store.dispatch(
  //      updateRoomData({
  //        id: 'se',
  //        roomType: 'bedroom',
  //        length: bed3Length,
  //        breadth: bed3Breadth,
  //        // position: { left: 0, bottom:0 }
  //        position: { top: 0, right:0 }


  //      })
  //    )
  //    store.dispatch(
  //      updateRoomData({
  //        id: 'sw',
  //        roomType: 'bedroom',
  //        length: bed4Length,
  //        breadth: bed4Breadth,
  //        position: { bottom: 0, right:0 }
        


  //      })
  //    )
  //    store.dispatch(
  //      updateRoomData({
  //        id: 'sw',
  //        roomType: 'living',
  //        length: livingLength,
  //        breadth: livingBreadth,
  //        position: { right: Math.floor(bed4Length)*scale+6, bottom:0 }
  //      })
  //      )
       
  //    }, 100);
  //    setTimeout(() => {
       
  //    store.dispatch(
  //        updateRoomData({
  //          id: '',
  //          roomType: 'drawing',
  //          length: drawingLength,
  //          breadth: drawingBreadth,
  //          position: { top: 0, right:Math.floor(bed3Length)*(scale)+(mediaLength)*scale }
  //          })
  //    )
  //    store.dispatch(
  //      updateRoomData({
  //        id: 'se',
  //        roomType: 'kitchen',
  //        length: kitchenLength,
  //        breadth: kitchenBreadth,
  //      })
  //    )
    
  //    store.dispatch(
  //      updateRoomData({
  //        id: 'se',
  //        roomType: 'pooja',
  //        length: poojaLength,
  //        breadth: poojaBreadth,
  //        position: { top: Math.floor(commonToiletBreadth)*scale-setbacks.back*scale+6, left:Math.floor(bed2Length)*scale+14 }
  //      })
  //    )
     
  //  }, 100);
  //  setTimeout(() => {
     
  //    store.dispatch(
  //      updateRoomData({
  //        id: 'se',
  //        roomType: 'stairCase',
  //        length: staircaseLength,
  //        breadth: stairCaseBreadth,
  //        position: { bottom: 0, left:0 }
  //      })
  //    )
  //    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
  //    position: { top:0, bottom:0 } }))
  //    // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
  //    // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
  //    store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
  //    position: { bottom:0, left:0 }}))
  //    // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
  //    store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
  //    position: { top: Math.floor(bed4Breadth)*scale-(setbacks.front)*(scale-4), bottom:0 } }))




  //    store.dispatch(
  //      updateRoomData({
  //        id: 'nw',
  //        roomType: 'parking',
  //        length: parkingLength,
  //        breadth: parkingBreadth,
  //        position:{left:Math.floor(staircaseLength*parseInt(scale)), bottom:0}
  //      })
  //    )
    
  //    store.dispatch(
  //      updateRoomData({
  //        id: '',
  //        roomType: 'commonToilet',
  //        length: commonToiletLength,
  //        breadth: commonToiletBreadth,
  //        position: { top: 0 *scale, left:Math.floor(bed2Length)*scale+setbacks.left*scale+6 }
        
        
  //      })
  //    )


  //    store.dispatch(
  //      updateRoomData({
  //        id: '',
  //        roomType: 'sitout',
  //        length: sitoutLength,
  //        breadth: sitoutBreadth,
  //        position: { right: Math.floor(bed3Length+mediaLength)*(scale+1.2), top:0 }
  //      })
  //    )


  //    store.dispatch(
  //      updateRoomData({
  //        id: '',
  //        roomType: 'media',
  //        length: mediaLength,
  //        breadth: mediaBreadth,
  //        // position: { left: 0, top:0 }
  //        position: { right: Math.floor(bed3Length)*scale, top:0 }
        
  //      })
  //    )
    
  //    store.dispatch(
  //      updateRoomData({
  //        id: '',
  //        roomType: 'dining',
  //        length: diningLength,
  //        breadth: diningBreadth,
  //        position: { bottom:0, left:Math.floor(kitchenLength)*scale }
  //      })
  //    )
     
  //  }, 100);
  //    //Add walls
  //    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  //    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'bedroom', id: 'nw' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: true , roomType: 'bedroom', id: 'se' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
  //    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))        
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'dining', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'sw' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
  //    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
  //    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
  //    store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
  //    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
  //    //Add opening
  //    store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
  //    store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
  //    store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
  //    //Add doors  
  //    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
  //    store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
  //    store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
  //    store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
  //    store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
  //    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
  //    store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
  //  } 

   if(plotLength >= 60 && plotLength <=70) //Breadth :60-70 
   {
     const bed1Length = builtLength * 0.24
     const bed1Breadth = builtBreadth * 0.51
     const bed2Length = builtLength * 0.25
     const bed2Breadth = builtBreadth * 0.5
     const bed3Length = builtLength * 0.23  
     const bed3Breadth = builtBreadth * 0.381  
     const bed4Length = builtLength * 0.28  
     const bed4Breadth = builtBreadth * 0.35            
     const livingLength = builtLength * 0.284
     const livingBreadth = builtBreadth * 0.42
     const drawingLength = builtLength * 0.33
     const drawingBreadth = builtBreadth * 0.5  
     const kitchenLength = builtLength * 0.15
     const kitchenBreadth = builtBreadth * 0.33
     const poojaLength = builtLength * 0.11
     const poojaBreadth = builtBreadth * 0.11
     const parkingLength = builtLength * 0.25
     const parkingBreadth = builtBreadth * 0.25  
     const staircaseLength = builtLength * 0.28
     const stairCaseBreadth = builtBreadth * 0.17
     const toilet1Length = builtLength * 0.15
     const toilet1Breadth = builtBreadth * 0.12
     const toilet2Length = builtLength * 0.13
     const toilet2Breadth = builtBreadth * 0.13
     const toilet3Length = builtLength * 0.08
     const toilet3Breadth = builtBreadth * 0.22
     const toilet4Length = builtLength * 0.08
     const toilet4Breadth = builtBreadth * 0.16
     const commonToiletLength = builtLength * 0.135
     const commonToiletBreadth = builtBreadth * 0.164
     const sitoutLength = builtLength * 0.133
     const sitoutBreadth = builtBreadth * 0.14
     const mediaLength = builtLength * 0.15
     const mediaBreadth = builtBreadth * 0.35
     const diningLength = builtLength * 0.1
     const diningBreadth = builtBreadth * 0.19

     //add rooms
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

     //update dimensions and positions
     setTimeout(() => {
       
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'bedroom',
         length: bed1Length,
         breadth: bed1Breadth,
         position:{top:Math.floor(commonToiletBreadth)*(scale+1),right:0}
        
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { left: Math.floor(bed3Length)*(scale), bottom:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         // position: { left: 0, bottom:0 }
         position: { left: 0, bottom:Math.floor(stairCaseBreadth*scale)-setbacks.front*scale }


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'bedroom',
         length: bed4Length,
         breadth: bed4Breadth,
         position: { top: 0, left:0 }
        


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right: Math.floor(bed1Length)*scale, bottom:0 }
       })
       )
       
     }, 100);
     setTimeout(() => {
       
     store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { top:0, right:Math.floor(bed1Length)*(scale+0.3) }
           })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { left:0, top: Math.floor(bed4Breadth)*(scale+4)-setbacks.back*scale}
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
         position: { bottom: 0, left:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { left:-45, top: Math.floor(stairCaseBreadth+setbacks.front) *(scale+5) } }))
     store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
     // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom: 0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     position: { left: 0, bottom:0 } }))




     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{right:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { right: 0 *scale, top:0+setbacks.back*scale }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { left:0, bottom: Math.floor(bed3Breadth)*(scale+2.4)+setbacks.front*(scale+2) }
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         position: { left: Math.floor(bed4Length)*(scale+0.8), top:0 }
         // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
        
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { bottom:Math.floor(parkingBreadth)*(scale)-setbacks.front*scale, right:Math.floor(kitchenLength)*(scale)}
       })
     )
     
   }, 100);
     //Add walls
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))        
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false}))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   } 

   if(plotLength >= 71 && plotLength <=80) //Breadth :71-80 
   {
     const bed1Length = builtLength * 0.25
     const bed1Breadth = builtBreadth * 0.35
     const bed2Length = builtLength * 0.25
     const bed2Breadth = builtBreadth * 0.46
     const bed3Length = builtLength * 0.25  
     const bed3Breadth = builtBreadth * 0.4  
     const bed4Length = builtLength * 0.25  
     const bed4Breadth = builtBreadth * 0.4            
     const livingLength = builtLength * 0.37
     const livingBreadth = builtBreadth * 0.52
     const drawingLength = builtLength * 0.25
     const drawingBreadth = builtBreadth * 0.35
     const kitchenLength = builtLength * 0.15
     const kitchenBreadth = builtBreadth * 0.31
     const poojaLength = builtLength * 0.10
     const poojaBreadth = builtBreadth * 0.14
     const parkingLength = builtLength * 0.272
     const parkingBreadth = builtBreadth * 0.31  
     const staircaseLength = builtLength * 0.27
     const stairCaseBreadth = builtBreadth * 0.17
     const toilet1Length = builtLength * 0.10
     const toilet1Breadth = builtBreadth * 0.12
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.13
     const toilet3Length = builtLength * 0.08
     const toilet3Breadth = builtBreadth * 0.22
     const toilet4Length = builtLength * 0.1
     const toilet4Breadth = builtBreadth * 0.21
     const commonToiletLength = builtLength * 0.15
     const commonToiletBreadth = builtBreadth * 0.16
     const sitoutLength = builtLength * 0.155
     const sitoutBreadth = builtBreadth * 0.18
     const mediaLength = builtLength * 0.14
     const mediaBreadth = builtBreadth * 0.24
     const diningLength = builtLength * 0.11
     const diningBreadth = builtBreadth * 0.2

     //add rooms
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))

     //update dimensions and positions
     setTimeout(() => {
       
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'bedroom',
         length: bed1Length,
         breadth: bed1Breadth,
         position: { left:0, 
           bottom: Math.floor(stairCaseBreadth)*scale-(setbacks.front) *(scale)}
        
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { top: 0, left:Math.floor(bed4Length)*scale}
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         // position: { left: 0, bottom:0 }
         position: { top: 0, right:0 }


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'bedroom',
         length: bed4Length,
         breadth: bed4Breadth,
         position: { left: 0, top:0 }


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right: Math.floor(bed1Length)*(scale), bottom:0 }
       })
       )
       
     }, 100);
     setTimeout(() => {
       
     store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { bottom: Math.floor(livingBreadth)*scale+8, right:Math.floor(bed1Length)*(scale) }
           })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position:{bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale, right:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position:{ right: Math.floor(bed3Length)*scale, top:0 }
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
         position: { bottom: 0, left:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { right:0, top:0 } }))
     store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
     position: {top: Math.floor(stairCaseBreadth) *(scale-12), left:0 }}))
     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom: 0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     position: { right:0, top:Math.floor(kitchenBreadth)*scale+setbacks.front*(scale-6) }}))




     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{right:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { bottom:Math.floor(kitchenBreadth)*(scale)+setbacks.front*scale, left:0 }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { right: Math.floor(bed3Length+poojaLength)*scale+setbacks.right*(scale+8), top:0 }
       })
     )


     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         position: { bottom:0, 
           left: Math.floor(bed1Length)*scale }
         
        
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right: Math.floor(kitchenLength)*scale, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
       })
     )
     
   }, 100);
     //Add walls
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))        
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false}))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening:false}))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   } 

}