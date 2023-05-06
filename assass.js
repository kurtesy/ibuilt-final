
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
        store.dispatch(
          updateRoomData({id: 'nw',roomType: 'bedroom',length: bed1Length,breadth: bed1Breadth})
        )
        store.dispatch(
          updateRoomData({id: 'sw',roomType: 'bedroom',length: bed2Length,breadth: bed2Breadth
          })
        )
        store.dispatch(
          updateRoomData({id: 'ne',roomType: 'living',length: livingLength,breadth: livingBreadth,
            position: { bottom: 0, right: 0 }
          })
          )
        store.dispatch(
            updateRoomData({  id: '',  roomType: 'drawing',  length: drawingLength,  breadth: drawingBreadth,
              position: { bottom: Math.floor(livingBreadth)*scale, right:0 }
              })
        )
        store.dispatch(
          updateRoomData({id: 'se',roomType: 'kitchen',length: kitchenLength,breadth: kitchenBreadth,
            position: { bottom: 0, left: 0 }
          })
        )
        store.dispatch(
          updateRoomData({  id: '',  roomType: 'pooja',  position: { top: Math.floor(diningBreadth+kitchenBreadth * parseInt(scale)), left: 0 }})
        )
        store.dispatch(
          updateRoomData({id: 'se',roomType: 'pooja',length: poojaLength,breadth: poojaBreadth,
          })
        )
        store.dispatch(
          updateRoomData({id: 'se',roomType: 'stairCase',length: staircaseLength,breadth: stairCaseBreadth,
          })
        )
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        position: {top: 0, left: 0 } }))
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
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
            roomType: 'sitout',
            position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), right: 0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
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
