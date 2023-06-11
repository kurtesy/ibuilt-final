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

    if (plotBreadth >= 18 && plotBreadth <= 22)  //Breadth greater than 18-22
    {
      const bed1Length = builtLength * 0.45
      const bed1Breadth = builtBreadth * 0.5
      const bed2Length = builtLength * 0.7
      const bed2Breadth = builtBreadth * 0.60
      const livingLength = builtLength * 0.6
      const livingBreadth = builtBreadth * 0.40
      const drawingLength = builtLength * 0.7
      const drawingBreadth = builtBreadth * 0.2
      const kitchenLength = builtLength * 0.4
      const kitchenBreadth = builtBreadth * 0.41
      const poojaLength = builtLength * 0.3
      const poojaBreadth = builtBreadth * 0.151
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.31
      const staircaseLength = builtLength * 0.4
      const stairCaseBreadth = builtBreadth * 0.3
      const toilet1Length = builtLength * 0.0
      const toilet1Breadth = builtBreadth * 0.0
      const toilet2Length = builtLength * 0.3
      const toilet2Breadth = builtBreadth * 0.125
      const sitoutLength = builtLength * 0.4
      const sitoutBreadth = builtBreadth * 0.24
      const commonToiletLength = builtLength * 0.25
      const commonToiletBreadth = builtBreadth * 0.30
      const diningLength = builtLength * 0.30
      const diningBreadth = builtBreadth * 0.25
      const extraBathLength = builtLength * 0.4
      const extraBathBreadth = builtBreadth * 0.17
      const corridorLength = builtLength * 0.48
      const corridorBreadth = builtBreadth * 0.3
      //add rooms
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'corridor' }))
  
      //update dimensions and positions
      setTimeout(() => {
        
      
      // store.dispatch(
      //   updateRoomData({
      //     id: 'nw',
      //     roomType: 'bedroom',
      //     length: bed1Length,
      //     breadth: bed1Breadth,
      //     position: { top: 0, left: 0 }
      //   })
      // )
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'bedroom',
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
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
      // store.dispatch(
      //   updateRoomData({
      //     id: '',
      //     roomType: 'drawing',
      //     length: drawingLength,
      //     breadth: drawingBreadth,
      //     position: { bottom:Math.floor(livingBreadth)*scale, left: 0 }
      //   })
      // )
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
          id: 'ne',
          roomType: 'pooja',
          position: { top:0, right: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
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
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'sitout',
          position: {bottom: Math.floor(kitchenBreadth+diningBreadth)*(scale)+setbacks.front*scale, right: 0 }
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
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'commonToilet',
          position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), left: 0 }
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
          id: 'se',
          roomType: 'dining',
          position: { bottom: Math.floor((kitchenBreadth) * parseInt(scale)), right: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth
        })
      )
    }, 100);
      //Add walls
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
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
  
      store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.5 * kitchenBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: false }))
  
      store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'living-sw-front', hasDoor:true}))
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
      store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'extraBath-ne-left', hasDoor: false }))
      // store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: true }))
    }

    if (plotBreadth >= 23 && plotBreadth <= 26)  //Breadth greater than 23-26
    {
      const bed1Length = builtLength * 0.45
      const bed1Breadth = builtBreadth * 0.5
      const bed2Length = builtLength * 0.70
      const bed2Breadth = builtBreadth * 0.55
      const livingLength = builtLength * 0.6
      const livingBreadth = builtBreadth * 0.45
      const drawingLength = builtLength * 0.3
      const drawingBreadth = builtBreadth * 0.38
      const kitchenLength = builtLength * 0.4
      const kitchenBreadth = builtBreadth * 0.25
      const poojaLength = builtLength * 0.12
      const poojaBreadth = builtBreadth * 0.18
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.25
      const staircaseLength = builtLength * 0.5
      const stairCaseBreadth = builtBreadth * 0.25
      const toilet1Length = builtLength * 0.0
      const toilet1Breadth = builtBreadth * 0.0
      const toilet2Length = builtLength * 0.3
      const toilet2Breadth = builtBreadth * 0.125
      const sitoutLength = builtLength * 0.20
      const sitoutBreadth = builtBreadth * 0.2
      const commonToiletLength = builtLength * 0.2
      const commonToiletBreadth = builtBreadth * 0.3
      const diningLength = builtLength * 0.4
      const diningBreadth = builtBreadth * 0.2
      const extraBathLength = builtLength * 0.4
      const extraBathBreadth = builtBreadth * 0.26
      const corridorLength = builtLength * 0.345
      const corridorBreadth = builtBreadth * 0.234
      //add rooms
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'corridor' }))
  
      //update dimensions and positions
      setTimeout(() => {
      
      
      // store.dispatch(
      //   updateRoomData({
      //     id: 'nw',
      //     roomType: 'bedroom',
      //     length: bed1Length,
      //     breadth: bed1Breadth,
      //     position: { top: 0, left: 0 }
      //   })
      // )
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
          position: { top: 0, left:Math.floor(setbacks.left)*scale }
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
          id: 'nw',
          roomType: 'drawing',
          length: drawingLength,
          breadth: drawingBreadth,
          position: { top:(Math.floor(extraBathBreadth)*scale-setbacks.back*scale), left: 0 }
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
          id: 'ne',
          roomType: 'pooja',
          position: {bottom:Math.floor(sitoutBreadth+commonToiletBreadth)*scale+18, left: 0 }
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
    }, 100);
    setTimeout(() => {
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
          id: 'se',
          roomType: 'dining',
          position: { bottom: Math.floor((kitchenBreadth) * parseInt(scale)), right: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth
        })
      )
    }, 100);
      //Add walls
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
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
      store.dispatch(updateWall({ id: 'pooja-ne-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true}))
      store.dispatch(updateWall({ id: 'extraBath-ne-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true}))
  
      store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: true }))
      store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'pooja-ne-right', hasDoor:false }))
      store.dispatch(updateWall({ id: 'extraBath-ne-right', hasDoor: true }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      // store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: true }))
    }

   if (plotBreadth >= 27 && plotBreadth <= 31)  //Breadth greater than 27-31
    {
      const bed1Length = builtLength * 0.42
      const bed1Breadth = builtBreadth * 0.45
      const bed2Length = builtLength * 0.60
      const bed2Breadth = builtBreadth * 0.45
      const livingLength = builtLength * 0.6
      const livingBreadth = builtBreadth * 0.55
      const drawingLength = builtLength * 0.7
      const drawingBreadth = builtBreadth * 0.2
      const kitchenLength = builtLength * 0.4
      const kitchenBreadth = builtBreadth * 0.33
      const poojaLength = builtLength * 0.15
      const poojaBreadth = builtBreadth * 0.151
      const parkingLength = builtLength * 0.5
      const parkingBreadth = builtBreadth * 0.19
      const staircaseLength = builtLength * 0.38
      const stairCaseBreadth = builtBreadth * 0.19
      const toilet1Length = builtLength * 0.0
      const toilet1Breadth = builtBreadth * 0.0
      const toilet2Length = builtLength * 0.3
      const toilet2Breadth = builtBreadth * 0.125
      const sitoutLength = builtLength * 0.23
      const sitoutBreadth = builtBreadth * 0.20
      const commonToiletLength = builtLength * 0.23
      const commonToiletBreadth = builtBreadth * 0.2
      const diningLength = builtLength * 0.4
      const diningBreadth = builtBreadth * 0.22
      const extraBathLength = builtLength * 0.4
      const extraBathBreadth = builtBreadth * 0.17
      const corridorLength = builtLength * 0.345
      const corridorBreadth = builtBreadth * 0.19
      //add rooms
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
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
      // store.dispatch(
      //   updateRoomData({
      //     id: '',
      //     roomType: 'drawing',
      //     length: drawingLength,
      //     breadth: drawingBreadth,
      //     position: { bottom:Math.floor(livingBreadth)*scale, left: 0 }
      //   }))

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
          id: 'ne',
          roomType: 'pooja',
          position: { top: Math.floor(bed1Breadth * parseInt(scale)), left: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
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
    }, 100);
    setTimeout(() => {
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
          id: 'se',
          roomType: 'dining',
          position: { bottom: Math.floor((kitchenBreadth ) * parseInt(scale)), right: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
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
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'parking', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'parking', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'parking', id: 'sw' }))
  
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
  
      store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.5 * kitchenBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor:true }))
      store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
      store.dispatch(updateWall({ id: 'extraBath-ne-right', hasDoor: true }))
      store.dispatch(updateWall({ id: 'commonToilet-nw-right', hasDoor: true }))
      store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      // store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: true }))
    }

   if (plotBreadth >= 32 && plotBreadth <= 34)  //Breadth greater than 32-34
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
    const toilet2Breadth = builtBreadth * 0.14
    const sitoutLength = builtLength * 0.15
    const sitoutBreadth = builtBreadth * 0.30
    const commonToiletLength = builtLength * 0.15
    const commonToiletBreadth = builtBreadth * 0.2
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
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'drawing' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
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
        position: { top: 0, left:Math.floor(bed1Length)*scale+setbacks.left*scale }
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
        id: 'ne',
        roomType: 'pooja',
        position: { top: Math.floor(bed1Breadth * parseInt(scale)), left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'ne',
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
  }, 100);
  setTimeout(() => {
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'commonToilet',
        position: { top: Math.floor(bed2Breadth * parseInt(scale))+setbacks.back*scale, right: 0 }
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
        id: 'se',
        roomType: 'dining',
        position: { bottom: Math.floor((kitchenBreadth - diningBreadth) * parseInt(scale)), right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
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
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'parking', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: 'sw' }))

    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.5 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'pooja-se-right', openingLength: 0.2 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'commonToilet-sw-left', openingLength: 0.2 * kitchenBreadth, hasOpening: true }))

    store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor:true }))
    store.dispatch(updateWall({ id: 'extraBath-ne-right', hasDoor:true }))
    // store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: true }))
    }
  
   if (plotBreadth >= 35 && plotBreadth <= 40)  //Breadth greater than 35-40
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
    const kitchenBreadth = builtBreadth * 0.21
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
    const commonToiletLength = builtLength * 0.16
    const commonToiletBreadth = builtBreadth * 0.2
    const diningLength = builtLength * 0.4
    const diningBreadth = builtBreadth * 0.16
    const drawingLength = builtLength * 0.5
    const drawingBreadth = builtBreadth * 0.29
    const extraBathLength = builtLength * 0.3
    const extraBathBreadth = builtBreadth * 0.14

    //add rooms
      
    
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
  
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
        position: {top: Math.floor(bed1Breadth)*scale, right: 0 }
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
        id: 'nw',
        roomType: 'extraBath',
        length: extraBathLength,
        breadth: extraBathBreadth,
        position: { left: 0, top: Math.floor(bed2Breadth-extraBathBreadth)*scale+(setbacks.left)*scale }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'sw',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { left: 0, top: Math.floor(bed2Breadth)*scale+20}
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
        id: 'ne',
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
        length: commonToiletLength,
        breadth: commonToiletBreadth
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'commonToilet',
        position: {top: Math.floor(bed1Breadth+bed3Breadth)*parseInt(scale), right: 0 }
      })
    )
  }, 100);

  setTimeout(() => {
    
  
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'dining',
        position: {top: Math.floor(bed1Breadth+bed3Breadth)*parseInt(scale), right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
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
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: 'ne' }))
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
    store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'living', id: 'sw' }))

    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'drawing', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'drawing', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-sw-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'pooja-ne-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
    

    //Add Doors
    store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor:true,doorPosition:290  }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor:true,doorPosition:275 }))
    store.dispatch(updateWall({ id: 'bedroom-sw-left', hasDoor:true }))
    
    store.dispatch(updateWall({ id: 'commonToilet-sw-left', hasDoor:true }))
    store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'extraBath-nw-right', hasDoor: true}))
    store.dispatch(updateWall({ id: 'extraBath-nw-left', hasDoor: true}))

   }

   if (plotBreadth >= 41 && plotBreadth <= 45)  //Breadth greater than 41-45
  {
    const bed1Length = builtLength * 0.5
    const bed1Breadth = builtBreadth * 0.4
    const bed2Length = builtLength * 0.5
    const bed2Breadth = builtBreadth * 0.40
    const bed3Length = builtLength * 0.38
    const bed3Breadth = builtBreadth * 0.30
    const livingLength = builtLength * 0.7
    const livingBreadth = builtBreadth * 0.30
    const kitchenLength = builtLength * 0.30
    const kitchenBreadth = builtBreadth * 0.35
    const poojaLength = builtLength * 0.15
    const poojaBreadth = builtBreadth * 0.12
    const parkingLength = builtLength * 0.45
    const parkingBreadth = builtBreadth * 0.15
    const staircaseLength = builtLength * 0.4
    const stairCaseBreadth = builtBreadth * 0.13
    const toilet1Length = builtLength * 0.00
    const toilet1Breadth = builtBreadth * 0.00
    const toilet2Length = builtLength * 0.31
    const toilet2Breadth = builtBreadth * 0.11
    const sitoutLength = builtLength * 0.36
    const sitoutBreadth = builtBreadth * 0.20
    const commonToiletLength = builtLength * 0.21
    const commonToiletBreadth = builtBreadth * 0.19
    const diningLength = builtLength * 0.30
    const diningBreadth = builtBreadth * 0.15
    const drawingLength = builtLength * 0.30
    const drawingBreadth = builtBreadth * 0.30
    const extraBathLength = builtLength * 0.25
    const extraBathBreadth = builtBreadth * 0.16

    //add rooms
      
    
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
  
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
        position: { bottom:0, left: 0 }
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
        position: { left: 0, top: Math.floor(bed2Breadth)*scale+9 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'nw',
        roomType: 'extraBath',
        length: extraBathLength,
        breadth: extraBathBreadth,
        position: { top: 0, right: Math.floor(setbacks.right)*scale+8 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { bottom: 0, left: Math.floor(bed3Length)*scale+6 }
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
        id: 'ne',
        roomType: 'pooja',
        position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'ne',
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
        id: 'se',
        roomType: 'sitout',
        position: { top: Math.floor(bed1Breadth) * parseInt(scale)+setbacks.back*scale+10, right: 0 }
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
        position: { bottom: Math.floor(parkingBreadth+bed3Breadth) * parseInt(scale)-20, left: 0 }
      })
    )
  }, 100);

  setTimeout(() => {
    
  
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'dining',
        position: { bottom: Math.floor(kitchenBreadth-diningBreadth+3)*(scale), right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
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
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'pooja', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'living', id: 'sw' }))

    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.1 * bed1Breadth, hasOpening: false }))
    

    //Add Doors
    store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'bedroom-sw-back', hasDoor: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
    store.dispatch(updateWall({ id: 'drawing-se-front', hasDoor:true }))
    store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: false }))
   }  

   if (plotBreadth >= 46 && plotBreadth <= 49)  //Breadth greater than 46-49
  {
    const bed1Length = builtLength * 0.5
    const bed1Breadth = builtBreadth * 0.4
    const bed2Length = builtLength * 0.5
    const bed2Breadth = builtBreadth * 0.40
    const bed3Length = builtLength * 0.38
    const bed3Breadth = builtBreadth * 0.30
    const livingLength = builtLength * 0.7
    const livingBreadth = builtBreadth * 0.30
    const kitchenLength = builtLength * 0.28
    const kitchenBreadth = builtBreadth * 0.35
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
    const sitoutLength = builtLength * 0.25
    const sitoutBreadth = builtBreadth * 0.3
    const commonToiletLength = builtLength * 0.20
    const commonToiletBreadth = builtBreadth * 0.14
    const diningLength = builtLength * 0.30
    const diningBreadth = builtBreadth * 0.15
    const drawingLength = builtLength * 0.34
    const drawingBreadth = builtBreadth * 0.30
    const extraBathLength = builtLength * 0.35
    const extraBathBreadth = builtBreadth * 0.16

    //add rooms
      
    
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'commonToilet' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
  
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
        position: { bottom:0, left: 0 }
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
        position: { left: 0, top: Math.floor(bed2Breadth)*scale+4 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'ne',
        roomType: 'extraBath',
        length: extraBathLength,
        breadth: extraBathBreadth,
        position: { top: 0, right: Math.floor(setbacks.right)*scale+14 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { bottom: 0, right: Math.floor(kitchenLength)*scale }
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
        id: 'ne',
        roomType: 'pooja',
        position: { top: Math.floor(bed1Breadth * parseInt(scale)), right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'ne',
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
        position: { bottom: Math.floor(bed3Breadth+setbacks.front) * parseInt(scale)+9, left: 0 }
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
        id: 'se',
        roomType: 'commonToilet',
        length: commonToiletLength,
        breadth: commonToiletBreadth,
        position: { bottom: Math.floor(kitchenBreadth+diningBreadth) * parseInt(scale), right: 0 }
        }))
  }, 100);

  setTimeout(() => {
    
  
    store.dispatch(
      updateRoomData({
        id: 'se',
        roomType: 'dining',
        position: { bottom: Math.floor(kitchenBreadth-diningBreadth+3)*(scale), right: 0 }
      })
    )
    store.dispatch(
      updateRoomData({
        id: 'se',
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
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'living', id: 'sw' }))

    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))

    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.1 * bed1Breadth, hasOpening: false }))
    

    //Add Doors
    store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
    store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor:true }))
    store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor:true }))
    store.dispatch(updateWall({ id: 'extraBath-ne-left', hasDoor:true }))
    store.dispatch(updateWall({ id: 'drawing-se-front', hasDoor:true }))
    store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor:true}))
   } 

   if (plotBreadth >= 50 && plotBreadth <= 54)  //Breadth greater than 50-54
   {
     const bed1Length = builtLength * 0.5
     const bed1Breadth = builtBreadth * 0.4
     const bed2Length = builtLength * 0.5
     const bed2Breadth = builtBreadth * 0.40
     const bed3Length = builtLength * 0.38
     const bed3Breadth = builtBreadth * 0.30
     const livingLength = builtLength * 0.66
     const livingBreadth = builtBreadth * 0.29
     const kitchenLength = builtLength * 0.38
     const kitchenBreadth = builtBreadth * 0.25
     const poojaLength = builtLength * 0.20
     const poojaBreadth = builtBreadth * 0.08
     const parkingLength = builtLength * 0.45
     const parkingBreadth = builtBreadth * 0.15
     const staircaseLength = builtLength * 0.4
     const stairCaseBreadth = builtBreadth * 0.12
     const toilet1Length = builtLength * 0.00
     const toilet1Breadth = builtBreadth * 0.00
     const toilet2Length = builtLength * 0.32
     const toilet2Breadth = builtBreadth * 0.12
     const sitoutLength = builtLength * 0.15
     const sitoutBreadth = builtBreadth * 0.15
     const commonToiletLength = builtLength * 0.20
     const commonToiletBreadth = builtBreadth * 0.14
     const diningLength = builtLength * 0.30
     const diningBreadth = builtBreadth * 0.15
     const drawingLength = builtLength * 0.34
     const drawingBreadth = builtBreadth * 0.30
     const extraBathLength = builtLength * 0.35
     const extraBathBreadth = builtBreadth * 0.12
     const mediaLength = builtLength * 0.35
     const mediaBreadth = builtBreadth * 0.16
     //add rooms
       
     
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
     
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'media' }))
   
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
         position: { bottom:0, left: 0 }
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
         position: { left: Math.floor(mediaLength)*scale, top: Math.floor(bed1Breadth)*scale+9 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'extraBath',
         length: extraBathLength,
         breadth: extraBathBreadth,
         position: { right: 0, top: Math.floor(bed1Breadth-extraBathBreadth)*scale+setbacks.back*scale+5 }
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
         id: 'ne',
         roomType: 'pooja',
         position: { top: Math.floor(bed2Breadth+mediaBreadth) * parseInt(scale), left: Math.floor(sitoutLength)*scale-setbacks.left*scale }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'ne',
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
         position: { bottom: Math.floor(bed3Breadth+setbacks.front) * parseInt(scale)+9, left: 0 }
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
        id: 'nw',
        roomType: 'media',
        length: mediaLength,
        breadth: mediaBreadth,
        position: { left: 0, top:Math.floor(bed2Breadth)*scale+6 }
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
         position: { top: Math.floor(bed1Breadth)*parseInt(scale)+setbacks.back*scale+5, 
          right:0 }
         }))
   }, 100);
 
   setTimeout(() => {
     
   
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         position: { bottom: Math.floor(kitchenBreadth)*(scale)+12, right: 0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth
       })
     )
   }, 100);
 
     //Add walls
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'living', id: 'sw' }))
 
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: 'nw' }))
 
     store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'pooja-sw-front', openingLength: 0.1* poojaLength, hasOpening:true }))

     
 
     //Add Doors
     store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor:true, doorPosition:160 }))
     store.dispatch(updateWall({ id: 'bedroom-sw-back', hasDoor: true }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor:true }))
     store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor:true}))
    }
   
   if (plotBreadth >= 55 && plotBreadth <= 62)  //Breadth greater than 55-62
    {
      const bed1Length = builtLength * 0.5
      const bed1Breadth = builtBreadth * 0.35
      const bed2Length = builtLength * 0.5
      const bed2Breadth = builtBreadth * 0.35
      const bed3Length = builtLength * 0.38
      const bed3Breadth = builtBreadth * 0.25
      const livingLength = builtLength * 1
      const livingBreadth = builtBreadth * 0.24
      const kitchenLength = builtLength * 0.35
      const kitchenBreadth = builtBreadth * 0.20
      const poojaLength = builtLength * 0.2
      const poojaBreadth = builtBreadth * 0.08
      const parkingLength = builtLength * 0.44
      const parkingBreadth = builtBreadth * 0.25
      const staircaseLength = builtLength * 0.33
      const stairCaseBreadth = builtBreadth * 0.28
      const toilet1Length = builtLength * 0.00
      const toilet1Breadth = builtBreadth * 0.00
      const toilet2Length = builtLength * 0.32
      const toilet2Breadth = builtBreadth * 0.11
      const sitoutLength = builtLength * 0.25
      const sitoutBreadth = builtBreadth * 0.12
      const commonToiletLength = builtLength * 0.19
      const commonToiletBreadth = builtBreadth * 0.18
      const diningLength = builtLength * 0.35
      const diningBreadth = builtBreadth * 0.13
      const drawingLength = builtLength * 0.33
      const drawingBreadth = builtBreadth * 0.17
      const extraBathLength = builtLength * 0.35
      const extraBathBreadth = builtBreadth * 0.14
      const mediaLength = builtLength * 0.35
      const mediaBreadth = builtBreadth * 0.16
      //add rooms
        
      
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'media' }))
    
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
          position: { bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale+1, left: 0 }
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
          position: { right: 0, top: Math.floor(bed2Breadth)*scale+12 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, right: Math.floor(setbacks.right)*scale+12 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'drawing',
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: 0, left: Math.floor(bed3Length)*scale+6 }
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
          position: { bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale, right: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'pooja',
          position: {top: Math.floor(bed1Breadth-poojaBreadth)*parseInt(scale), right: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'ne',
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
          position: {top: Math.floor(bed1Breadth) * parseInt(scale)+setbacks.back*scale+3, right: 0 }
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
         id: 'nw',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         position: { left: 0, bottom:Math.floor(bed3Breadth+parkingBreadth)*scale-setbacks.front*scale+5 }
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
          position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: 0 }}))
          
    }, 100);
  
    setTimeout(() => {
      
    
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'dining',
          position: { bottom: Math.floor(stairCaseBreadth+kitchenBreadth)*(scale)-setbacks.front*scale, right: 0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth
        })
      )
    }, 100);
  
      //Add walls
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'extraBath', id: 'ne' }))
      
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: 'nw' }))
  
      store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
      store.dispatch(updateWall({ id: 'stairCase-se-left', openingLength: 0.1 * bed1Breadth, hasOpening: true }))
      
  
      //Add Doors
      store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor:true}))
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor:true }))
      store.dispatch(updateWall({ id: 'bedroom-sw-right', hasDoor:true }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor:true}))
      
      store.dispatch(updateWall({ id: 'drawing-se-front', hasDoor: true }))
      store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor:true }))
     }

   if (plotBreadth >= 63 && plotBreadth <= 67)  //Breadth greater than 63-67
     {
       const bed1Length = builtLength * 0.45
       const bed1Breadth = builtBreadth * 0.31
       const bed2Length = builtLength * 0.56
       const bed2Breadth = builtBreadth * 0.25
       const bed3Length = builtLength * 0.45
       const bed3Breadth = builtBreadth * 0.23
       const bed4Length = builtLength * 0.4
       const bed4Breadth = builtBreadth * 0.20

       const livingLength = builtLength * 0.60
       const livingBreadth = builtBreadth * 0.335
       const kitchenLength = builtLength * 0.33
       const kitchenBreadth = builtBreadth * 0.2
       const poojaLength = builtLength * 0.17
       const poojaBreadth = builtBreadth * 0.05
       const parkingLength = builtLength * 0.44
       const parkingBreadth = builtBreadth * 0.195
       const staircaseLength = builtLength * 0.33
       const stairCaseBreadth = builtBreadth * 0.20
       
       const sitoutLength = builtLength * 0.25
       const sitoutBreadth = builtBreadth * 0.12
       const commonToiletLength = builtLength * 0.15
       const commonToiletBreadth = builtBreadth * 0.18
       const diningLength = builtLength * 0.37
       const diningBreadth = builtBreadth * 0.13
       const drawingLength = builtLength * 0.34
       const drawingBreadth = builtBreadth * 0.12
       const extraBathLength = builtLength * 0.6
       const extraBathBreadth = builtBreadth * 0.10
       const mediaLength = builtLength * 0.35
       const mediaBreadth = builtBreadth * 0.15
       const extraSitoutLength = builtLength * 0.15
       const extraSitoutBreadth = builtBreadth * 0.15
       //add rooms
         
       
       store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
       store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
       
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))
       store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
       store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'media' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
     
       //update dimensions and positions
       setTimeout(() => {
         
       
       store.dispatch(
         updateRoomData({
           id: 'ne',
           roomType: 'bedroom',
           length: bed1Length,
           breadth: bed1Breadth,
           position: { top: 0, right: 0 }
         }))
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
           position: { bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale+9, left: 0 }
         }))
       store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { top:Math.floor(bed2Breadth)*scale+poojaBreadth*scale+9, left: 0 }
          }))


     }, 100);
   
     setTimeout(() => {
       
     
       store.dispatch(
         updateRoomData({
           id: 'sw',
           roomType: 'living',
           length: livingLength,
           breadth: livingBreadth,
           position: { right: 0, top: Math.floor(bed1Breadth)*scale+10 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'ne',
           roomType: 'extraBath',
           length: extraBathLength,
           breadth: extraBathBreadth,
           position: { top: 0, right:Math.floor(bed1Length)*scale-setbacks.right*scale-20 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { bottom: 0, left: Math.floor(parkingLength)*scale-9 }
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
           position: { bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale+12, right: 0 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'ne',
           roomType: 'pooja',
           position: {top: Math.floor(bed2Breadth) * parseInt(scale)+0, left:Math.floor(sitoutLength)*scale-setbacks.left*scale}}))

       store.dispatch(
         updateRoomData({
           id: 'ne',
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
           position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: 0 }}))

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
          id: 'nw',
          roomType: 'media',
          length: mediaLength,
          breadth: mediaBreadth,
          position: { left: 0, bottom:Math.floor(bed3Breadth+parkingBreadth)*scale-setbacks.front*scale+5 }
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
           position: { right:0, 
            top: Math.floor(bed1Breadth+extraSitoutBreadth)*scale-14 }
           }))
     }, 100);
   
     setTimeout(() => {
       
     
       store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'dining',
           position: { bottom: Math.floor(stairCaseBreadth+kitchenBreadth)*(scale)-setbacks.front*scale, right: 0 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'dining',
           length: diningLength,
           breadth: diningBreadth
         }))
         store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'extraSitout',
            length: extraSitoutLength,
            breadth: extraSitoutBreadth,
            position: { top: Math.floor(bed1Breadth)*(scale), right: 0 }
          }))         

     }, 100);
   
       //Add walls
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'pooja', id: '' }))
       store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'pooja', id: '' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
       store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'parking', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'living', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'media', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'extraSitout', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'extraSitout', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'extraSitout', id: 'se' }))
   
       store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: true }))
       store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: true }))
       store.dispatch(updateWall({ id: 'bedroom-ne-front', openingLength: 0.1 * bed1Breadth, hasOpening: false }))
       
   
       //Add Doors
       store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor:true}))
       store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor:true }))
       store.dispatch(updateWall({ id: 'bedroom-se-right', hasDoor:true }))
       store.dispatch(updateWall({ id: 'bedroom-sw-right', hasDoor:true }))
       
       store.dispatch(updateWall({ id: 'drawing-se-front', hasDoor:true}))
       store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
       store.dispatch(updateWall({ id: 'living-sw-front', hasDoor: false }))
       store.dispatch(updateWall({ id: 'commonToilet-se-left', hasDoor:true}))
     }
   
   if (plotBreadth >= 68 && plotBreadth <= 73)  //Breadth greater than 68-73
    {
       const bed1Length = builtLength * 0.42
       const bed1Breadth = builtBreadth * 0.31
       const bed2Length = builtLength * 0.4
       const bed2Breadth = builtBreadth * 0.25
       const bed3Length = builtLength * 0.40
       const bed3Breadth = builtBreadth * 0.23
       const bed4Length = builtLength * 0.4
       const bed4Breadth = builtBreadth * 0.20

       const livingLength = builtLength * 0.6
       const livingBreadth = builtBreadth * 0.25
       const kitchenLength = builtLength * 0.28
       const kitchenBreadth = builtBreadth * 0.19
       const poojaLength = builtLength * 0.20
       const poojaBreadth = builtBreadth * 0.05
       const parkingLength = builtLength * 0.45
       const parkingBreadth = builtBreadth * 0.195
       const staircaseLength = builtLength * 0.33
       const stairCaseBreadth = builtBreadth * 0.20
       
       const sitoutLength = builtLength * 0.20
       const sitoutBreadth = builtBreadth * 0.25
       const commonToiletLength = builtLength * 0.15
       const commonToiletBreadth = builtBreadth * 0.14
       const diningLength = builtLength * 0.37
       const diningBreadth = builtBreadth * 0.13
       const drawingLength = builtLength * 0.30
       const drawingBreadth = builtBreadth * 0.35
       const extraBathLength = builtLength * 0.6
       const extraBathBreadth = builtBreadth * 0.10
       const mediaLength = builtLength * 0.35
       const mediaBreadth = builtBreadth * 0.156
       const extraSitoutLength = builtLength * 0.25
       const extraSitoutBreadth = builtBreadth * 0.11 
       //add rooms
         
       
       store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'pooja' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
       
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))
       store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
       store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'media' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
     
       //update dimensions and positions
       setTimeout(() => {
         
       
       store.dispatch(
         updateRoomData({
           id: 'ne',
           roomType: 'bedroom',
           length: bed1Length,
           breadth: bed1Breadth,
           position: { top: 0, right: 0 }
         }))
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
           position: { bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale, left: 0 }
         }))
       store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { top:Math.floor(bed1Breadth)*scale+poojaBreadth*scale, right: 0 }
          }))


     }, 100);
   
     setTimeout(() => {
       
     
       store.dispatch(
         updateRoomData({
           id: 'sw',
           roomType: 'living',
           length: livingLength,
           breadth: livingBreadth,
           position: { left: 0, bottom: Math.floor(bed3Breadth+parkingBreadth)*scale-setbacks.front*scale+3 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'ne',
           roomType: 'extraBath',
           length: extraBathLength,
           breadth: extraBathBreadth,
           position: { top: 0, right:Math.floor(bed1Length)*scale-setbacks.right*scale-20 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { bottom: 0, left: Math.floor(parkingLength)*scale-9 }
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
           position: { bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale+0, right: 0 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'pooja',
           position: {top: Math.floor(bed1Breadth-poojaBreadth) * parseInt(scale)+0, 
            right:Math.floor(extraSitoutLength)*scale-15 }}))

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
           position: { top: Math.floor(bed2Breadth+mediaBreadth) * parseInt(scale)+setbacks.back*scale+6, left: 0 }}))

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
          id: 'nw',
          roomType: 'media',
          length: mediaLength,
          breadth: mediaBreadth,
          position: { left: 0, top:Math.floor(bed2Breadth)*scale+6 }
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
           position: { top: Math.floor(bed1Breadth+bed4Breadth+extraSitoutBreadth) * parseInt(scale)-(setbacks.back*scale)-18, 
            right: 0 }
           }))
     }, 100);
   
     setTimeout(() => {
       
     
       store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'dining',
           position: { bottom: Math.floor(stairCaseBreadth+kitchenBreadth)*(scale)-setbacks.front*scale, right: 0 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'dining',
           length: diningLength,
           breadth: diningBreadth
         }))
         store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'extraSitout',
            length: extraSitoutLength,
            breadth: extraSitoutBreadth,
            position: { top: Math.floor(bed1Breadth)*(scale)-setbacks.back*scale, right: 0 }
          }))         

     }, 100);
   
       //Add walls
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'pooja', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'pooja', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'kitchen', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'parking', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'living', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'stairCase', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'media', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'extraSitout', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'extraSitout', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'extraSitout', id: 'se' }))
   
       store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
       store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.3 * sitoutBreadth, hasOpening: true }))
       store.dispatch(updateWall({ id: 'extraSitout-se-left', openingLength: 0.1 * bed1Breadth, hasOpening:true}))
       
   
       //Add Doors
       store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: true }))
       store.dispatch(updateWall({ id: 'bedroom-ne-left', hasDoor:true }))
       store.dispatch(updateWall({ id: 'bedroom-se-left', hasDoor:true}))
       store.dispatch(updateWall({ id: 'bedroom-sw-right', hasDoor:true}))
       store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
       store.dispatch(updateWall({ id: 'drawing-se-front', hasDoor:true}))
       store.dispatch(updateWall({ id: 'commonToilet-sw-left', hasDoor: true}))
     }
   
   if (plotBreadth >= 74 && plotBreadth <= 81)  //Breadth greater than 74-81
     {
        const bed1Length = builtLength * 0.45
        const bed1Breadth = builtBreadth * 0.31
        const bed2Length = builtLength * 0.45
        const bed2Breadth = builtBreadth * 0.25
        const bed3Length = builtLength * 0.40
        const bed3Breadth = builtBreadth * 0.23
        const bed4Length = builtLength * 0.4
        const bed4Breadth = builtBreadth * 0.20
 
        const livingLength = builtLength * 0.42
        const livingBreadth = builtBreadth * 0.25
        const kitchenLength = builtLength * 0.28
        const kitchenBreadth = builtBreadth * 0.19
        const poojaLength = builtLength * 0.18
        const poojaBreadth = builtBreadth * 0.08
        const parkingLength = builtLength * 0.45
        const parkingBreadth = builtBreadth * 0.195
        const staircaseLength = builtLength * 0.33
        const stairCaseBreadth = builtBreadth * 0.20
        
        const sitoutLength = builtLength * 0.46
        const sitoutBreadth = builtBreadth * 0.10
        const commonToiletLength = builtLength * 0.175
        const commonToiletBreadth = builtBreadth * 0.13
        const diningLength = builtLength * 0.4
        const diningBreadth = builtBreadth * 0.10
        const drawingLength = builtLength * 0.30
        const drawingBreadth = builtBreadth * 0.36
        const extraBathLength = builtLength * 0.22
        const extraBathBreadth = builtBreadth * 0.20
        const mediaLength = builtLength * 0.35
        const mediaBreadth = builtBreadth * 0.156
        const extraSitoutLength = builtLength * 0.25
        const extraSitoutBreadth = builtBreadth * 0.11 
        const extraBath2Length = builtLength * 0.32
        const extraBath2Breadth = builtBreadth * 0.10
        //add rooms
          
        
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
        
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'media' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
      
        //update dimensions and positions
        setTimeout(() => {
          
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
            position: { top: 0, right: 0 }
          }))
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
            position: { bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale+3, left: 0 }
          }))
        store.dispatch(
           updateRoomData({
             id: 'se',
             roomType: 'bedroom',
             length: bed4Length,
             breadth: bed4Breadth,
             position: { top:Math.floor(bed1Breadth)*scale+poojaBreadth*scale, right: 0 }
           }))
 
 
      }, 100);
    
      setTimeout(() => {
        
      
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { left:Math.floor(extraBathLength)*scale-setbacks.left*scale, bottom: Math.floor(bed3Breadth+parkingBreadth)*scale-setbacks.front*scale }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'extraBath',
            length: extraBathLength,
            breadth: extraBathBreadth,
            position: { top: Math.floor(bed2Breadth+mediaBreadth) * parseInt(scale)+setbacks.back*scale+9, left: 0 }}))

          store.dispatch(
            updateRoomData({
              id: 'nw',
              roomType: 'extraBath',
              length: extraBath2Length,
              breadth: extraBath2Breadth,
              position: { left: 0, bottom:Math.floor(bed3Breadth+parkingBreadth)*scale }
            }))

        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: 0, left: Math.floor(parkingLength)*scale-9 }
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
            position: { bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale+0, right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'pooja',
            position: {top: Math.floor(bed2Breadth+mediaBreadth) * parseInt(scale)+3, 
             left:Math.floor(extraBathLength)*scale-18 }}))
 
        store.dispatch(
          updateRoomData({
            id: 'ne',
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
            position: { top: 0, right:Math.floor(bed1Length)*scale+setbacks.right*scale/2 }}))
            
 
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
           id: 'nw',
           roomType: 'media',
           length: mediaLength,
           breadth: mediaBreadth,
           position: { left: 0, top:Math.floor(bed2Breadth)*scale+9 }
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
            position: { top:0, 
             right: Math.floor(setbacks.right)*scale+6 }
            }))
      }, 100);
    
      setTimeout(() => {
        
      
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'dining',
            position: { bottom: Math.floor(stairCaseBreadth+kitchenBreadth)*(scale)-setbacks.front*scale, right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth
          }))
          store.dispatch(
           updateRoomData({
             id: 'se',
             roomType: 'extraSitout',
             length: extraSitoutLength,
             breadth: extraSitoutBreadth,
             position: { top: Math.floor(bed1Breadth)*(scale)-setbacks.back*scale, right: 0 }
           }))         
 
      }, 100);
    
        //Add walls
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'pooja', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'kitchen', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'parking', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'stairCase', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'media', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'extraSitout', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'extraSitout', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'extraSitout', id: 'se' }))
        
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
    
        store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.4 * kitchenBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.5 * sitoutBreadth, hasOpening: false }))
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
   
     const bed2Length = builtLength * 0.5
     const bed2Breadth = builtBreadth * 0.69
   
     const livingLength = builtLength * 0.5
     const livingBreadth = builtBreadth * 0.54
   
     const kitchenLength = builtLength * 0.3
     const kitchenBreadth = builtBreadth * 0.46
   
     const parkingLength = builtLength * 0.4
     const parkingBreadth = builtBreadth * 0.36  
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.36
     
     const commonToiletLength = builtLength * 0.18
     const commonToiletBreadth = builtBreadth * 0.37
     const sitoutLength = builtLength * 0.12
     const sitoutBreadth = builtBreadth * 0.4
   
     const diningLength = builtLength * 0.42
     const diningBreadth = builtBreadth * 0.31

     //add rooms
   
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
   
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
   
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'parking' }))
   
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'sitout' }))
   
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
   

     //update dimensions and positions
   
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
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right: 0, top:0 }
       })
       )
     
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
     
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'stairCase',
         length: staircaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, left:0 }
       })
     )

     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:Math.floor(staircaseLength*parseInt(scale)), bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { left: 0, bottom:Math.floor(setbacks.front)*scale }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { top:Math.floor(kitchenBreadth)*scale , right:0 }
       })
     )

     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { left:Math.floor(commonToiletLength)*scale-setbacks.left*scale, bottom:0 }
       })

     )
     
   }, 100);
     //Add walls

     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'bedroom', id: 'nw' }))

     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'kitchen', id: 'se' }))
     
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: 'sw' }))
     
     //Add opening

     store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
     //Add doors  
     
     store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: true }))
     
     store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor:true}))

   }
 if(plotLength >= 25 && plotLength <= 29) //Breadth :25-29 
  {
   
   const bed2Length = builtLength * 0.50
   const bed2Breadth = builtBreadth * 0.99
   
   const livingLength = builtLength * 0.5
   const livingBreadth = builtBreadth * 0.65
   
   const kitchenLength = builtLength * 0.35
   const kitchenBreadth = builtBreadth * 0.35
   
   const parkingLength = builtLength * 0.4
   const parkingBreadth = builtBreadth * 0.35  
   const staircaseLength = builtLength * 0.308
   const stairCaseBreadth = builtBreadth * 0.35
   const toilet1Length = builtLength * 0.20
   const toilet1Breadth = builtBreadth * 0.28
   
   const commonToiletLength = builtLength * 0.14
   const commonToiletBreadth = builtBreadth * 0.35
   const sitoutLength = builtLength * 0.20
   const sitoutBreadth = builtBreadth * 0.28
   
   const diningLength = builtLength * 0.2
   const diningBreadth = builtBreadth * 0.30

   //add rooms
   
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
   
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
   
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
   
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
   
   store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'commonToilet' }))
   store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
   
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
   

   //update dimensions and positions
   
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
       roomType: 'stairCase',
       length: staircaseLength,
       breadth: stairCaseBreadth,
       position: { bottom: 0, right:0 }
     })
   )
   store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
   position: { top: 0, bottom:0 } }))
  
   store.dispatch(
     updateRoomData({
       id: 'sw',
       roomType: 'parking',
       length: parkingLength,
       breadth: parkingBreadth,
       position:{left:0, bottom:0}
     })
   )
  
   store.dispatch(
     updateRoomData({
       id: 'ne',
       roomType: 'commonToilet',
       length: commonToiletLength,
       breadth: commonToiletBreadth,
       position: { top: 0 *scale, left:Math.floor(bed2Length-commonToiletLength)*scale+setbacks.left*scale+9 }
      
      
     })
   )


   store.dispatch(
     updateRoomData({
       id: 'ne',
       roomType: 'sitout',
       length: sitoutLength,
       breadth: sitoutBreadth,
       position: { left:Math.floor(bed2Length) *scale+setbacks.left*scale+18, top:0 }
     })
   )
   store.dispatch(
     updateRoomData({
       id: 'se',
       roomType: 'dining',
       length: diningLength,
       breadth: diningBreadth,
       position: { right:0, top:Math.floor(kitchenBreadth)*(scale) }
     })
   )
   
 }, 100);
   //Add walls

   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'nw' }))

   store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'dining', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))

   store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))

   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))

   //Add opening

   store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
   store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
   //Add doors  
   store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor:true, doorPosition:310}))
   
   store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))  
   
   store.dispatch(updateWall({ id: 'commonToilet-se-right', hasDoor:true}))
   }
 if(plotLength >= 30 && plotLength <=32) //Breadth :30-32 
   {
     
     const bed2Length = builtLength * 0.45
     const bed2Breadth = builtBreadth * 1
                 
     const livingLength = builtLength * 0.55
     const livingBreadth = builtBreadth * 0.6
     
     const kitchenLength = builtLength * 0.3
     const kitchenBreadth = builtBreadth * 0.4
     
     const parkingLength = builtLength * 0.4
     const parkingBreadth = builtBreadth * 0.35 
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.30
     const toilet1Length = builtLength * 0.18
     const toilet1Breadth = builtBreadth * 0.25
     
     const commonToiletLength = builtLength * 0.14
     const commonToiletBreadth = builtBreadth * 0.25
     const sitoutLength = builtLength * 0.20
     const sitoutBreadth = builtBreadth * 0.25
     
     const diningLength = builtLength * 0.18
     const diningBreadth = builtBreadth * 0.25

     //add rooms
     
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
    
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
    
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
    
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
    
     //update dimensions and positions
    
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
         roomType: 'stairCase',
         length: staircaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top: 0, bottom:0 } }))
     
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { top: 0 *scale, left:Math.floor(bed2Length)*(scale)+setbacks.left*scale+18 }}) )


     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { top: 0 *scale, left:Math.floor(bed2Length+commonToiletLength)*(scale)+setbacks.left*scale+15 } }))

     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:0, bottom:Math.floor(kitchenBreadth)*(scale) }
       })

     )
               
   }, 100);
     //Add walls
     
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'bedroom', id: 'nw' }))
     
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'dining', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
     
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
         
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: 'se' }))
     
     
     //Add opening
     
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'commonToilet-nw-right', openingLength: 0.4 *commonToiletLength, hasOpening:true}))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor:true, doorPosition:340}))
     
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor:true}))
     store.dispatch(updateWall({ id: 'commonToilet-nw-right', hasDoor:true }))
   }
 if(plotLength >= 33 && plotLength <= 34) //Breadth :33-34 
 {
   
     const bed2Length = builtLength * 0.50
     const bed2Breadth = builtBreadth * 0.56
     const bed3Length = builtLength * 0.35  
     const bed3Breadth = builtBreadth * 0.56  
     
     const livingLength = builtLength * 0.48
     const livingBreadth = builtBreadth * 0.43
     
     const kitchenLength = builtLength * 0.35
     const kitchenBreadth = builtBreadth * 0.35
     const poojaLength = builtLength * 0.09
     const poojaBreadth = builtBreadth * 0.18
     const parkingLength = builtLength * 0.4
     const parkingBreadth = builtBreadth * 0.26  
     const staircaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.26
     const toilet1Length = builtLength * 0.15
     const toilet1Breadth = builtBreadth * 0.3
     
     const commonToiletLength = builtLength * 0.12
     const commonToiletBreadth = builtBreadth * 0.30
     const sitoutLength = builtLength * 0.153
     const sitoutBreadth = builtBreadth * 0.35
     
     const diningLength = builtLength * 0.20
     const diningBreadth = builtBreadth * 0.35

     //add rooms
     
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
     
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
     
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
     

     //update dimensions and positions
     
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
         
         position: { right: 0, top:0 }


       })
     )
     
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
         id: 'ne',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { top: Math.floor(bed3Breadth)*scale+18, right:0 }
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
     position: { top: 0, bottom:0 } }))

     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { left: 0 *scale, top:Math.floor(bed2Breadth)*scale+setbacks.back*scale+18 }}))

     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { right:Math.floor(bed3Length)*scale+setbacks.right*scale+18, top:0 }
       }))
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:Math.floor(kitchenLength)*scale, bottom:0 }
       }))
     
   }, 100);
     //Add walls

     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'bedroom', id: 'se' }))
          
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'dining', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
     
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))

     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
          
     //Add opening
     
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'pooja-nw-left', openingLength: 0.1 * livingLength, hasOpening:true }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor:true, doorPosition:190}))
     store.dispatch(updateWall({ id: 'bedroom-se-left', hasDoor: true, doorPosition:190 }))
     
     store.dispatch(updateWall({ id: 'toilet-nw-front', hasDoor: true }))  
     store.dispatch(updateWall({ id: 'toilet-se-front', hasDoor:true}))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: true }))
   }

 if(plotLength >= 35 && plotLength <= 38) //Breadth :35-38 
   {
     
     const bed2Length = builtLength * 0.45
     const bed2Breadth = builtBreadth * 0.53
     
     const bed4Length = builtLength * 0.45  
     const bed4Breadth = builtBreadth * 0.47            
     const livingLength = builtLength * 0.4
     const livingBreadth = builtBreadth * 0.5
     const drawingLength = builtLength * 0.3
     const drawingBreadth = builtBreadth * 0.5  
     const kitchenLength = builtLength * 0.25
     const kitchenBreadth = builtBreadth * 0.4
     const poojaLength = builtLength * 0.09
     const poojaBreadth = builtBreadth * 0.15
     const parkingLength = builtLength * 0.435
     const parkingBreadth = builtBreadth * 0.25  
     const stairCaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.25
     const toilet1Length = builtLength * 0.16
     const toilet1Breadth = builtBreadth * 0.16
     
     const toilet4Length = builtLength * 0.16
     const toilet4Breadth = builtBreadth * 0.16
     const commonToiletLength = builtLength * 0.17
     const commonToiletBreadth = builtBreadth * 0.3
     const sitoutLength = builtLength * 0.15
     const sitoutBreadth = builtBreadth * 0.15
     
     const diningLength = builtLength * 0.15
     const diningBreadth = builtBreadth * 0.25

     //add rooms
     
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
     
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))

     //update dimensions and positions
     
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
         id: 'sw',
         roomType: 'bedroom',
         length: bed4Length,
         breadth: bed4Breadth,
         position: { bottom: 0, left:0 }
         }))

     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right:0, top:0 } }))
        }, 100);
     setTimeout(() => {
  
     store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { bottom: 0, right:Math.floor(kitchenLength)*scale+18 }
           }))
          
       
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position: { bottom: 0, right:0 }
       }) )
    
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         pposition: { left:Math.floor(bed2Length+sitoutLength)*scale+setbacks.left*scale, top:0 }}) )

     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'stairCase',
         length: stairCaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top:Math.floor(bed2Breadth-toilet1Breadth)*scale, bottom:0 } }))
     
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     position: { top: 0, left:0 } }))

     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:0, bottom:0}}))

    }, 100);
    setTimeout(() => {
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { bottom: 0, left:Math.floor(bed4Length)*(scale) }
               }))

     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { left:Math.floor(bed2Length)*(scale)+setbacks.left*scale+9, top:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:0, bottom:Math.floor(kitchenBreadth)*(scale) }
       })
     )
     
   }, 100);
     //Add walls
     
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'kitchen', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'dining', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: 'ne' }))
     
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     
     //Add opening
     
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'pooja-ne-right', openingLength: 0.4 * poojaBreadth, hasOpening:true }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor: true,doorPosition:220 }))
     
     store.dispatch(updateWall({ id: 'bedroom-sw-right', hasDoor:true }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true  }))  
     store.dispatch(updateWall({ id: 'toilet-sw-right', hasDoor:true}))
     
     store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor: true }))
   }

 if(plotLength >= 39 && plotLength <= 43) //Breadth :39-43 
 {
   
   const bed2Length = builtLength * 0.4
   const bed2Breadth = builtBreadth * 0.55
   const bed3Length = builtLength * 0.32  
   const bed3Breadth = builtBreadth * 0.44  
   const bed4Length = builtLength * 0.3  
   const bed4Breadth = builtBreadth * 0.55            
   const livingLength = builtLength * 0.32
   const livingBreadth = builtBreadth * 0.55
   const drawingLength = builtLength * 0.37
   const drawingBreadth = builtBreadth * 0.45  
   const kitchenLength = builtLength * 0.30
   const kitchenBreadth = builtBreadth * 0.35
   const poojaLength = builtLength * 0.10
   const poojaBreadth = builtBreadth * 0.20
   const parkingLength = builtLength * 0.35
   const parkingBreadth = builtBreadth * 0.25  
   const staircaseLength = builtLength * 0.308
   const stairCaseBreadth = builtBreadth * 0.20
   const toilet1Length = builtLength * 0.12
   const toilet1Breadth = builtBreadth * 0.3
   
   const toilet4Length = builtLength * 0.12
   const toilet4Breadth = builtBreadth * 0.18
   const commonToiletLength = builtLength * 0.15
   const commonToiletBreadth = builtBreadth * 0.15
   const sitoutLength = builtLength * 0.15
   const sitoutBreadth = builtBreadth * 0.15
   
   const diningLength = builtLength * 0.20
   const diningBreadth = builtBreadth * 0.25

   //add rooms
   // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
   store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'parking' }))
   store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
   store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
   // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
   store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
   store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
   // store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))

   //update dimensions and positions

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
      position: { left: 0, bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale }
    }))
   store.dispatch(
     updateRoomData({
       id: 'sw',
       roomType: 'bedroom',
       length: bed4Length,
       breadth: bed4Breadth,
       position: { top: 0, left:Math.floor(bed2Length)*scale+3 }
    }))
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
         id: 'se',
         roomType: 'drawing',
         length: drawingLength,
         breadth: drawingBreadth,
         position: { bottom: 0, left:Math.floor(bed3Length)*(scale)+18 }
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
       id: 'ne',
       roomType: 'pooja',
       length: poojaLength,
       breadth: poojaBreadth,
       position: { left: Math.floor(bed2Length+bed4Length)*(scale), top:0 }
     })
   )
   
 }, 100);
 setTimeout(() => {
   
   store.dispatch(
     updateRoomData({
       id: 'sw',
       roomType: 'stairCase',
       length: staircaseLength,
       breadth: stairCaseBreadth,
       position: { bottom: 0, left:0 }
     })
   )
   store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
   position: { top: 0, bottom:0 } }))
   
   store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
   position: { top: 0, left:0 } }))




   store.dispatch(
     updateRoomData({
       id: 'se',
       roomType: 'parking',
       length: parkingLength,
       breadth: parkingBreadth,
       position:{right:0, bottom:0}
     })
   )
  
   store.dispatch(
     updateRoomData({
       id: 'sw',
       roomType: 'commonToilet',
       length: commonToiletLength,
       breadth: commonToiletBreadth,
       position: { left: Math.floor(bed3Length)*scale , bottom:Math.floor(setbacks.front)*scale }
      
      
     })
   )


   store.dispatch(
     updateRoomData({
       id: 'ne',
       roomType: 'sitout',
       length: sitoutLength,
       breadth: sitoutBreadth,
       position: { right: Math.floor(livingLength)*(scale-12)-setbacks.right*(scale), top:0 }
     })
   )

   store.dispatch(
     updateRoomData({
       id: 'se',
       roomType: 'dining',
       length: diningLength,
       breadth: diningBreadth,
       position: { bottom:Math.floor(kitchenBreadth)*scale, right:0 }
     })
   )
   
 }, 100);
   //Add walls

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
   store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'kitchen', id: '' }))
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
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
   store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
   store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
   store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'dining', id: 'se' }))
   store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
   //Add opening
   store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
   store.dispatch(updateWall({ id: 'pooja-ne-right', openingLength: 0.6 * poojaLength, hasOpening:true }))
   //Add doors  
   store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor:true }))
   store.dispatch(updateWall({ id: 'bedroom-se-right', hasDoor: true }))
   store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor:true}))
   store.dispatch(updateWall({ id: 'toilet-nw-front', hasDoor: true }))  
   
   store.dispatch(updateWall({ id: 'toilet-sw-right', hasDoor: true }))
   store.dispatch(updateWall({ id: 'commonToilet-sw-right', hasDoor:true })) 
   }

 if(plotLength >= 44 && plotLength <= 49) //Breadth :44-49 
   {

     const bed2Length = builtLength * 0.37
     const bed2Breadth = builtBreadth * 0.5
     const bed3Length = builtLength * 0.28  
     const bed3Breadth = builtBreadth * 0.50  
     const bed4Length = builtLength * 0.37  
     const bed4Breadth = builtBreadth * 0.5   
     const livingLength = builtLength * 0.31
     const livingBreadth = builtBreadth * 0.5
     const drawingLength = builtLength * 0.34
     const drawingBreadth = builtBreadth * 0.5  
     const kitchenLength = builtLength * 0.25
     const kitchenBreadth = builtBreadth * 0.36
     const poojaLength = builtLength * 0.10
     const poojaBreadth = builtBreadth * 0.15
     const parkingLength = builtLength * 0.3
     const parkingBreadth = builtBreadth * 0.22  
     const stairCaseLength = builtLength * 0.308
     const stairCaseBreadth = builtBreadth * 0.25
     const toilet1Length = builtLength * 0.10
     const toilet1Breadth = builtBreadth * 0.2
     
     const toilet3Length = builtLength * 0.12
     const toilet3Breadth = builtBreadth * 0.12
     
     const commonToiletLength = builtLength * 0.07
     const commonToiletBreadth = builtBreadth * 0.25
     const sitoutLength = builtLength * 0.15
     const sitoutBreadth = builtBreadth * 0.15
     const mediaLength = builtLength * 0.20
     const mediaBreadth = builtBreadth * 0.20
     const diningLength = builtLength * 0.13
     const diningBreadth = builtBreadth * 0.36

     //add rooms
     
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
     
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'sitout' }))
     
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'drawing' }))

     
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
         position: { right: 0, top:0 }


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'bedroom',
         length: bed4Length,
         breadth: bed4Breadth,
         position: { left: 0, bottom:0}
        


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right:Math.floor(kitchenLength+diningLength)*scale-setbacks.right*scale-18, bottom:0 }
       })
       )
                 
     }, 100);
     setTimeout(() => {
       
     store.dispatch(
         updateRoomData({
           id: 'nw',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { top:0, left:Math.floor(bed2Length)*scale+setbacks.left*scale-12 }
           })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position:{bottom:0, right:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { top: 0, left:Math.floor(bed2Length)*scale+9 }
       })
     )
     
   }, 100);
   setTimeout(() => {
     
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'stairCase',
         length: stairCaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { top:0, bottom:0 } }))
     
     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom:0, left:0 }}))
     




     store.dispatch(
       updateRoomData({
         id: 'sw',
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
         position: { left: 0 *scale, top:Math.floor(bed2Breadth)*(scale) }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: {left: Math.floor(bed4Length+livingLength/2)*(scale)+setbacks.left*scale, bottom:Math.floor(setbacks.back*scale) }
       })
     )

     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { bottom:0, right:Math.floor(kitchenBreadth)*(scale)+setbacks.right*scale+18 }
       })
     )
     
   }, 100);
     //Add walls

     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'dining', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
     
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
     
     //Add opening
     
     store.dispatch(updateWall({ id: 'sitout-se-back', openingLength: 0.4 * sitoutBreadth, hasOpening:true}))
     store.dispatch(updateWall({ id: 'pooja-ne-right', openingLength: 0.4 * poojaLength, hasOpening:true }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-nw-right', hasDoor:true}))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-sw-right', hasDoor:true }))
     
     store.dispatch(updateWall({ id: 'toilet-nw-front', hasDoor:true}))
     store.dispatch(updateWall({ id: 'toilet-se-right', hasDoor:true}))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }

   if(plotLength >= 50 && plotLength <=54) //Breadth :50-54 
   {
     const bed1Length = builtLength * 0.27
     const bed1Breadth = builtBreadth * 0.5
     const bed2Length = builtLength * 0.3
     const bed2Breadth = builtBreadth * 0.46
     const bed3Length = builtLength * 0.35  
     const bed3Breadth = builtBreadth * 0.50
     const bed4Length = builtLength * 0.15  
     const bed4Breadth = builtBreadth * 0.15  
           
     const livingLength = builtLength * 0.35
     const livingBreadth = builtBreadth * 0.5
     const drawingLength = builtLength * 0.24
     const drawingBreadth = builtBreadth * 0.5  
     const kitchenLength = builtLength * 0.15
     const kitchenBreadth = builtBreadth * 0.5
     const poojaLength = builtLength * 0.07
     const poojaBreadth = builtBreadth * 0.13
     const parkingLength = builtLength * 0.34
     const parkingBreadth = builtBreadth * 0.28  
     const stairCaseLength = builtLength * 0.34
     const stairCaseBreadth = builtBreadth * 0.25
    
     const toilet3Length = builtLength * 0.15
     const toilet3Breadth = builtBreadth * 0.15
    
     const commonToiletLength = builtLength * 0.12
     const commonToiletBreadth = builtBreadth * 0.18
     const sitoutLength = builtLength * 0.21
     const sitoutBreadth = builtBreadth * 0.17
     const mediaLength = builtLength * 0.15
     const mediaBreadth = builtBreadth * 0.4
     const diningLength = builtLength * 0.15
     const diningBreadth = builtBreadth * 0.3
     const extraBathLength = builtLength * 0.10
     const extraBathBreadth = builtBreadth * 0.3
     
 
     //add rooms
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
  
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
 
     
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
  
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'drawing' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraBath' }))
 
     //update dimensions and positions
   setTimeout(() => {        
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed1Length,
         breadth: bed1Breadth,
         position: {left:Math.floor(bed3Length+mediaLength)*scale, top:0 }
       }))

       store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { left: 0, bottom:0 }
        }))
 
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
        }))
   
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { left:Math.floor(bed2Length)*scale+9, bottom:0 }
       })
       )
     }, 100);
 
     setTimeout(() => {
 
     store.dispatch(
         updateRoomData({
           id: 'nw',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { right:0, top:0}
           })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position:{bottom:0, right:0 }
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { bottom: Math.floor(kitchenBreadth-poojaBreadth)*scale+18, right:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'stairCase',
         length: stairCaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )


     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom:0, left:0 }}))

    
 
     store.dispatch(
       updateRoomData({
         id: 'sw',
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
         id: 'nw',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { bottom:Math.floor(setbacks.front*scale/2), left:Math.floor(bed2Length)*scale+setbacks.left*scale }
        
        
       })
     )
 
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { left: Math.floor(bed3Length+setbacks.left)*scale+9, top:0 }
       })
     )
 
 
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         position: {left: Math.floor(bed3Length)*(scale)+15, top:0 }
        
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:Math.floor(kitchenLength)*(scale), bottom:0 }
       }))

       store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { left:0, top:Math.floor(bed2Breadth)*(scale)+setbacks.back*(scale) }
        }))
       
   }, 100);
     //Add walls
     
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))  
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))  
     
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'pooja', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'dining', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'kitchen', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
     
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'sw' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.3 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
   
   if(plotLength >= 55 && plotLength <=59) //Breadth :55-59 
   {
    const bed1Length = builtLength * 0.29
     const bed1Breadth = builtBreadth * 0.5
     const bed2Length = builtLength * 0.3
     const bed2Breadth = builtBreadth * 0.46
     const bed3Length = builtLength * 0.30  
     const bed3Breadth = builtBreadth * 0.50
     const bed4Length = builtLength * 0.15  
     const bed4Breadth = builtBreadth * 0.15  
           
     const livingLength = builtLength * 0.35
     const livingBreadth = builtBreadth * 0.5
     const drawingLength = builtLength * 0.27
     const drawingBreadth = builtBreadth * 0.5  
     const kitchenLength = builtLength * 0.2
     const kitchenBreadth = builtBreadth * 0.5
     const poojaLength = builtLength * 0.07
     const poojaBreadth = builtBreadth * 0.13
     const parkingLength = builtLength * 0.34
     const parkingBreadth = builtBreadth * 0.28  
     const stairCaseLength = builtLength * 0.34
     const stairCaseBreadth = builtBreadth * 0.25
     const toilet1Length = builtLength * 0.15
     const toilet1Breadth = builtBreadth * 0.2
     const toilet2Length = builtLength * 0.07
     const toilet2Breadth = builtBreadth * 0.25
     const toilet3Length = builtLength * 0.15
     const toilet3Breadth = builtBreadth * 0.15
     const toilet4Length = builtLength * 0.12
     const toilet4Breadth = builtBreadth * 0.18
     const commonToiletLength = builtLength * 0.08
     const commonToiletBreadth = builtBreadth * 0.3
     const sitoutLength = builtLength * 0.21
     const sitoutBreadth = builtBreadth * 0.17
     const mediaLength = builtLength * 0.15
     const mediaBreadth = builtBreadth * 0.4
     const diningLength = builtLength * 0.15
     const diningBreadth = builtBreadth * 0.3
     const extraBathLength = builtLength * 0.10
     const extraBathBreadth = builtBreadth * 0.3
     
 
     //add rooms
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
  
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
 
     
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
  
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'drawing' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraBath' }))
 
     //update dimensions and positions
   setTimeout(() => {        
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed1Length,
         breadth: bed1Breadth,
         position: { right: 0, top:0 }
       }))

       store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { left: 0, bottom:0 }
        }))
 
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
        }))
   
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { left:Math.floor(bed2Length)*scale+18, bottom:0 }
       })
       )
     }, 100);
 
     setTimeout(() => {
 
     store.dispatch(
         updateRoomData({
           id: 'nw',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { left:Math.floor(bed3Length)*scale+18, top:0}
           })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'kitchen',
         length: kitchenLength,
         breadth: kitchenBreadth,
         position:{bottom:0, right:0 }
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { bottom: Math.floor(kitchenBreadth)*scale, right:0 }
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'stairCase',
         length: stairCaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )


     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom:0, left:0 }}))
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { bottom:0, left:0 }}))

    
 
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
         id: 'nw',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { right:0, bottom:Math.floor(kitchenBreadth+poojaBreadth)*scale+setbacks.front*scale }
        
        
       })
     )
 
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { left: Math.floor(bed3Length+setbacks.left)*scale+9, top:0 }
       })
     )
 
 
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         position: {right: Math.floor(bed1Length)*(scale)-2, top:0 }
        
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right:Math.floor(kitchenLength)*(scale), bottom:0 }
       }))

       store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { left:0, top:Math.floor(bed2Breadth)*(scale)+setbacks.back*(scale) }
        }))
       
   }, 100);
     //Add walls
     // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))  
     
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
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
     store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
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
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'sw' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.3 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   } 

   if(plotBreadth <= 35 && plotBreadth >=25) //**size 60x30 - code to execute breadth 30 
   {
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
  //    const drawingLength = builtLength * 0.18
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
   } 

   if(plotLength >= 60 && plotLength <=64) //Breadth :60-70 
   {
     const bed1Length = builtLength * 0.24
     const bed1Breadth = builtBreadth * 0.465
     const bed2Length = builtLength * 0.25
     const bed2Breadth = builtBreadth * 0.45
     const bed3Length = builtLength * 0.25  
     const bed3Breadth = builtBreadth * 0.45  
     const bed4Length = builtLength * 0.25  
     const bed4Breadth = builtBreadth * 0.45            
     const livingLength = builtLength * 0.32
     const livingBreadth = builtBreadth * 0.55
     const drawingLength = builtLength * 0.26
     const drawingBreadth = builtBreadth * 0.45  
     const kitchenLength = builtLength * 0.15
     const kitchenBreadth = builtBreadth * 0.36
     const poojaLength = builtLength * 0.08
     const poojaBreadth = builtBreadth * 0.12
     const parkingLength = builtLength * 0.25
     const parkingBreadth = builtBreadth * 0.35  
     const stairCaseLength = builtLength * 0.28
     const stairCaseBreadth = builtBreadth * 0.21

     const toilet1Length = builtLength * 0.13
     const toilet1Breadth = builtBreadth * 0.12
     
     const toilet3Length = builtLength * 0.07
     const toilet3Breadth = builtBreadth * 0.29
     const toilet4Length = builtLength * 0.07
     const toilet4Breadth = builtBreadth * 0.3
     const commonToiletLength = builtLength * 0.14
     const commonToiletBreadth = builtBreadth * 0.2
     const sitoutLength = builtLength * 0.16
     const sitoutBreadth = builtBreadth * 0.15
     const mediaLength = builtLength * 0.2
     const mediaBreadth = builtBreadth * 0.305
     const diningLength = builtLength * 0.15
     const diningBreadth = builtBreadth * 0.22

     //add rooms
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'stairCase' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'drawing' }))

     //update dimensions and positions
     setTimeout(() => {
       
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'bedroom',
         length: bed1Length,
         breadth: bed1Breadth,
         position:{top:Math.floor(commonToiletBreadth)*(scale),right:0}
        
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { top:0, right:Math.floor(bed1Length)*(scale)+9}}))

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
         position: { top: 0, left:0 }
        


       })
     )
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'living',
         length: livingLength,
         breadth: livingBreadth,
         position: { right: Math.floor(bed1Length)*scale+16, bottom:0 }
       })
       )
       
     }, 100);
     setTimeout(() => {
       
     store.dispatch(
         updateRoomData({
           id: 'ne',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { left: Math.floor(bed4Length)*(scale)+12, top:0 }
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
         id: 'ne',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position: { top:0, left: Math.floor(bed4Length)*scale }
       })
     )
     
   }, 100);
   setTimeout(() => {
     
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'stairCase',
         length: stairCaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, right:0 }
       })
     )
    
     store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
     position: { bottom: 0, left:0 }}))
     // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
     store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
     position: { left: 0, bottom:0 } }))

     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { bottom: 0, left:0 }}))




     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{left:Math.floor(bed3Length)*scale+setbacks.left*scale, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { right: 0 *scale, top:0+setbacks.back*scale }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { top:0, left: Math.floor(bed4Length+poojaLength)*scale+setbacks.left*scale-3}
       })
     )


     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         position: { left: Math.floor(bed3Length)*(scale)+6, bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
         // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
        
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { bottom:0, right:Math.floor(kitchenLength)*(scale)}
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
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status:true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status:true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))        
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'dining', id: '' }))
     
     
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
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false}))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   } 

   if(plotLength >= 65 && plotLength <=70) //Breadth :65-70 
   {
     const bed1Length = builtLength * 0.25
     const bed1Breadth = builtBreadth * 0.42
     const bed2Length = builtLength * 0.25
     const bed2Breadth = builtBreadth * 0.46
     const bed3Length = builtLength * 0.20  
     const bed3Breadth = builtBreadth * 0.4  
     const bed4Length = builtLength * 0.22  
     const bed4Breadth = builtBreadth * 0.55            
     const livingLength = builtLength * 0.32
     const livingBreadth = builtBreadth * 0.54
     const drawingLength = builtLength * 0.26
     const drawingBreadth = builtBreadth * 0.46
     const kitchenLength = builtLength * 0.2
     const kitchenBreadth = builtBreadth * 0.31
     const poojaLength = builtLength * 0.08
     const poojaBreadth = builtBreadth * 0.14
     const parkingLength = builtLength * 0.272
     const parkingBreadth = builtBreadth * 0.31  
     const stairCaseLength = builtLength * 0.27
     const stairCaseBreadth = builtBreadth * 0.20
     const toilet1Length = builtLength * 0.10
     const toilet1Breadth = builtBreadth * 0.12
     
     const commonToiletLength = builtLength * 0.08
     const commonToiletBreadth = builtBreadth * 0.4
     const sitoutLength = builtLength * 0.156
     const sitoutBreadth = builtBreadth * 0.2
     const mediaLength = builtLength * 0.14
     const mediaBreadth = builtBreadth * 0.24
     const diningLength = builtLength * 0.11
     const diningBreadth = builtBreadth * 0.3
     const extraBathLength = builtLength * 0.10
     const extraBathBreadth = builtBreadth * 0.10
     const extraSitoutLength = builtLength * 0.10
     const extraSitoutBreadth = builtBreadth * 0.10


     //add rooms
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'parking' }))
    
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'media' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'drawing' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraBath' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraSitout' }))

     //update dimensions and positions
     setTimeout(() => {
       
     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'bedroom',
         length: bed1Length,
         breadth: bed1Breadth,
         position: { left:0, 
           bottom: Math.floor(stairCaseBreadth)*scale-(setbacks.front) *(scale)+18}
        
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position: { top: 0, left:Math.floor(bed4Length)*scale+6}
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         position: { top: 0, right:Math.floor(poojaLength)*scale }


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
         position: { right: Math.floor(kitchenLength+diningLength)*(scale), bottom:0 }
       })
       )
       
     }, 100);
     setTimeout(() => {
       
     store.dispatch(
         updateRoomData({
           id: 'ne',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: {top:0, right:Math.floor(bed3Length+poojaLength)*(scale)+9 }
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
         id: 'ne',
         roomType: 'pooja',
         length: poojaLength,
         breadth: poojaBreadth,
         position:{ right:0, top:0 }
       })
     )
     
   }, 100);
   setTimeout(() => {
     
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'stairCase',
         length: stairCaseLength,
         breadth: stairCaseBreadth,
         position: { bottom: 0, left:0 }
       })
     )
     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: { right:0, top:0 } }))
   
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{right:0, bottom:0}
       })
     )
    
     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { bottom:Math.floor(bed1Breadth)*(scale), left:0 }
        
        
       })
     )


     store.dispatch(
       updateRoomData({
         id: 'ne',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { right: Math.floor(kitchenLength+diningLength)*scale+setbacks.right*(scale), bottom:0 }
       })
     )


     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'media',
         length: mediaLength,
         breadth: mediaBreadth,
         position: { bottom:0, 
           left: Math.floor(bed1Length)*scale+10 }
        
       }))
    
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { right: Math.floor(kitchenLength)*scale, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
       })
     )
     
   }, 100);

setTimeout(() => {
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'extraBath',
      length: extraBathLength,
      breadth: extraBathBreadth,
      position: {right:Math.floor(bed3Length+poojaLength)*scale, top:Math.floor(extraBathBreadth)*scale/2  }}))          

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'extraSitout',
          length: extraSitoutLength,
          breadth:extraSitoutBreadth,
          position: {right:Math.floor(bed3Length+poojaLength+extraBathLength)*scale-9, top:Math.floor(extraBathBreadth)*scale/2 }}))       
}, 100);

     //Add walls
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true , roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))        
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'dining', id: '' }))
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
     store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'drawing', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))

     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'sw' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraSitout', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraSitout', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraSitout', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraSitout', id: 'sw' }))
     //Add opening
     store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false}))
     store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
     store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening:false}))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
     store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   } 

}