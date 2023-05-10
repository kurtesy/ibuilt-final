import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../../../redux/rooms'
import { store } from '../../../../redux/store'

export async function generateE3() {
  const resultArray = []
  const state = store.getState()
  const { builtLength, builtBreadth } = state.plot
  if (builtLength < builtBreadth) {
    const number = Math.floor(Math.random() * 3) + 1
    generateTypeA(1)
  } else {
    const number = Math.floor(Math.random() * 3) + 1
    generateTypeB(1)
  }
}

// length<breadth
function generateTypeA(number) {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength } = state.plot
  if (plotLength >= 16 && plotLength < 30) {
  } else if (plotLength >= 30 && plotLength <= 45) {

    if (number === 1) {
      //bedroom1
      const bed1Length = builtLength * 0.46
        const bed1Breadth = builtBreadth * 0.35
        const bed2Length = builtLength * 0.42
        const bed2Breadth = builtBreadth * 0.36
        const bed3Breadth = builtBreadth * 0.3
        const bed3Length = builtLength * 0.41        
        const livingLength = builtLength * 0.6
        const livingBreadth = builtBreadth * 0.29
        const drawingLength = builtLength * 0.58
        const drawingBreadth = builtBreadth * 0.22
        const kitchenLength = builtLength * 0.32
        const kitchenBreadth = builtBreadth * 0.26
        const poojaLength = builtLength * 0.2
        const poojaBreadth = builtBreadth * 0.10
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.22
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.15
        const toilet1Length = builtLength * 0.29
        const toilet1Breadth = builtBreadth * 0.12
        const toilet2Length = builtLength * 0.20
        const toilet2Breadth = builtBreadth * 0.1
        const commonToiletLength = builtLength * 0.19
        const commonToiletBreadth = builtBreadth * 0.25
        const sitoutLength = builtLength * 0.12
        const sitoutBreadth = builtBreadth * 0.2
        const sitout2Length = builtLength * 0.12
        const sitout2Breadth = builtBreadth * 0.2
        const diningLength = builtLength * 0.41
        const diningBreadth = builtBreadth * 0.23
 
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'living' }))
        // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
 
        //update dimensions and positions
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { bottom: Math.floor(bed1Breadth * parseInt(scale)), right: 0 }
         
          })
          )
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { bottom: Math.floor(diningBreadth+kitchenBreadth)*scale+6, left:0 }
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
       
        // store.dispatch(
        //   updateRoomData({
        //     id: 'se',
        //     roomType: 'pooja',
        //     length: poojaLength,
        //     breadth: poojaBreadth,
        //     position: { bottom: Math.floor(bed1Breadth * parseInt(scale)), right: 0 }
        //   })
        // )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth,
          })
        )
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        position: {top: 0, left: 0 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
        position: {bottom: 0, right: 0} }))
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'commonToilet',
            position: { left: Math.floor(bed2Length* parseInt(scale)+24), top:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
          })
        )


        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top: Math.floor(bed2Breadth * parseInt(scale) ), right: 0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'sitout',
            length: sitout2Length,
            breadth: sitout2Breadth,
            position: { top: Math.floor(bed2Breadth * parseInt(scale) ), right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            position: { bottom: Math.floor((kitchenBreadth) * parseInt(scale)), left:0 }
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
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'living', id: 'nw' }))
        //Add opening
        store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: true }))
        //Add doors    
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- -right', hasDoor: false }))
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
