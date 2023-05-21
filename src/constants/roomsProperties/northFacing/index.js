import { ScaleLoader } from 'react-spinners'
import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../../../redux/rooms'
import { store } from '../../../../redux/store'

export async function generateN2() {
  const state = store.getState()
  const { plotLength, plotBreadth } = state.plot
  if (plotLength <= plotBreadth) {
    generateTypeA()
  } else {generateTypeB()
  }
  
}
function generateTypeA() {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot
  if (plotBreadth >= 14 && plotBreadth <= 18) //d Breadth range = 14-18 
  {
    //bedroom3
      const bed1Length = builtLength * 0.49
      const bed1Breadth = builtBreadth * 0.3
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.4
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.4  
      const bed4Length = builtLength * 1  
      const bed4Breadth = builtBreadth * 1            
      const livingLength = builtLength * 0.1
      const livingBreadth = builtBreadth * 0.40
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.31
      const kitchenLength = builtLength * 0.5  
      const kitchenBreadth = builtBreadth * 0.5
      const poojaLength = builtLength * 0.2
      const poojaBreadth = builtBreadth * 0.2
      const parkingLength = builtLength * 0.6
      const parkingBreadth = builtBreadth * 0.28  
      const staircaseLength = builtLength * 0.6
      const stairCaseBreadth = builtBreadth * 0.26
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.4
      const commonToiletBreadth = builtBreadth * 0.34
      const sitoutLength = builtLength * 0.25
      const sitoutBreadth = builtBreadth * 0.35
      
      const diningLength = builtLength * 0.55
      const diningBreadth = builtBreadth * 0.18
      const extraBathLength = builtLength * 0.25
      const extraBathBreadth = builtBreadth * 0.2
      const extraSitoutLength = builtLength * 0.4
      const extraSitoutBreadth = builtBreadth * 0.2
      //add rooms
      
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
            
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       
      
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      
      //update dimensions and positions
      setTimeout(() => {
      

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,top:0 }
        }))
        
    }, 100);
    setTimeout(() => {

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'kitchen',
          length: kitchenLength,
          breadth: kitchenBreadth,
        }))
       
    }, 100);
    setTimeout(() => {

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0, top: Math.floor(kitchenBreadth+sitoutBreadth)*(scale-2) }}))

      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { top: Math.floor(kitchenBreadth) *(scale), left:0 }}))

     
      


    }, 100);
      //Add walls
      
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))

      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'extraSitout', id: 'se' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }

  if (plotBreadth >= 19 && plotBreadth <= 24) //d Breadth range = 19-24 
  {
    //bedroom3
      const bed1Length = builtLength * 0.49
      const bed1Breadth = builtBreadth * 0.3
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.4
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.4  
      const bed4Length = builtLength * 0.62  
      const bed4Breadth = builtBreadth * 0.6            
      const livingLength = builtLength * 1
      const livingBreadth = builtBreadth * 0.40
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.31
      const kitchenLength = builtLength * 0.38  
      const kitchenBreadth = builtBreadth * 0.4
      const poojaLength = builtLength * 0.2
      const poojaBreadth = builtBreadth * 0.2
      const parkingLength = builtLength * 0.6
      const parkingBreadth = builtBreadth * 0.28  
      const staircaseLength = builtLength * 0.6
      const stairCaseBreadth = builtBreadth * 0.26
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.30
      const commonToiletBreadth = builtBreadth * 0.175
      const sitoutLength = builtLength * 0.20
      const sitoutBreadth = builtBreadth * 0.2
      
      const diningLength = builtLength * 0.55
      const diningBreadth = builtBreadth * 0.18
      const extraBathLength = builtLength * 0.25
      const extraBathBreadth = builtBreadth * 0.2
      const extraSitoutLength = builtLength * 0.4
      const extraSitoutBreadth = builtBreadth * 0.2
      //add rooms
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
      //update dimensions and positions
      setTimeout(() => {
      
      // store.dispatch(
      //   updateRoomData({
      //     id: 'ne',
      //     roomType: 'bedroom',
      //     length: bed1Length,
      //     breadth: bed1Breadth,
      //     position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
      //   })
      // )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right:0, top:0}
        }))

      // store.dispatch(
      //   updateRoomData({
      //     id: 'se',
      //     roomType: 'bedroom',
      //     length: bed3Length,
      //     breadth: bed3Breadth,
      //     position: { bottom: 0, left:0 }
      //   }))

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,top:0 }
        }))
        
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'living',
          length: livingLength,
          breadth: livingBreadth,
          position:{right:0,bottom:0}}))

      // store.dispatch(
      //     updateRoomData({
      //       id: '',
      //       roomType: 'drawing',
      //       length: drawingLength,
      //       breadth: drawingBreadth,
      //       position: { bottom: Math.floor(livingBreadth)*scale+3, left:0 }}))

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
          position: { left:0, top:Math.floor(kitchenBreadth)*scale }
        })
      )
        
    }, 100);
    setTimeout(() => {
    
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth,
        })
      )
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
      // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: {bottom: 0, right: 0}}))




      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0, top: Math.floor(kitchenBreadth+poojaBreadth)*(scale+1)+setbacks.back*scale }}))

      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { bottom: Math.floor(setbacks.front) *(scale+4), left:0 }}))

     
      // store.dispatch(
      //   updateRoomData({
      //     id: '',
      //     roomType: 'dining',
      //     length: diningLength,
      //     breadth: diningBreadth,
      //     position: { bottom: Math.floor(livingBreadth-diningBreadth)*scale+3,right:0}
      //   }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraSitout',
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: 0,left:Math.floor(kitchenLength)*scale}
          }))        


    }, 100);
      //Add walls
      
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))

       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'extraSitout', id: 'se' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }
  if (plotBreadth >= 25 && plotBreadth <= 29) //d Breadth range = 25-29 
  {
    //bedroom3
      const bed1Length = builtLength * 0.49
      const bed1Breadth = builtBreadth * 0.3
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.4
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.4  
      const bed4Length = builtLength * 0.55  
      const bed4Breadth = builtBreadth * 0.45            
      const livingLength = builtLength * 0.55
      const livingBreadth = builtBreadth * 0.55
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.31
      const kitchenLength = builtLength * 0.45  
      const kitchenBreadth = builtBreadth * 0.32
      const poojaLength = builtLength * 0.15
      const poojaBreadth = builtBreadth * 0.14
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.2  
      const staircaseLength = builtLength * 0.45
      const stairCaseBreadth = builtBreadth * 0.14
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.35
      const commonToiletBreadth = builtBreadth * 0.175
      const sitoutLength = builtLength * 0.20
      const sitoutBreadth = builtBreadth * 0.15
      
      const diningLength = builtLength * 0.55
      const diningBreadth = builtBreadth * 0.18
      const extraBathLength = builtLength * 0.25
      const extraBathBreadth = builtBreadth * 0.2
      const extraSitoutLength = builtLength * 0.4
      const extraSitoutBreadth = builtBreadth * 0.12
      //add rooms
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
      //update dimensions and positions
      setTimeout(() => {
      
      // store.dispatch(
      //   updateRoomData({
      //     id: 'ne',
      //     roomType: 'bedroom',
      //     length: bed1Length,
      //     breadth: bed1Breadth,
      //     position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
      //   })
      // )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right:0, top:0}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'bedroom',
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: 0, left:0 }
        }))

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,top:0 }
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
          position:{right:0,bottom:0}}))

      // store.dispatch(
      //     updateRoomData({
      //       id: '',
      //       roomType: 'drawing',
      //       length: drawingLength,
      //       breadth: drawingBreadth,
      //       position: { bottom: Math.floor(livingBreadth)*scale+3, left:0 }}))

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
          position: { left:0, top:Math.floor(kitchenBreadth)*scale }
        })
      )
        
    }, 100);
    setTimeout(() => {
    
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth,
        })
      )
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
      // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: {bottom: 0, right: 0}}))




      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0, top: Math.floor(kitchenBreadth+poojaBreadth)*(scale)+setbacks.back*scale }}))

      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { bottom: Math.floor(livingBreadth) *(scale-5), left:0 }}))

     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { bottom: Math.floor(livingBreadth-diningBreadth)*scale+3,right:0}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraSitout',
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: 0,left:Math.floor(kitchenLength)*scale}
          }))        


    }, 100);
      //Add walls
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'extraSitout', id: 'se' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }
  if (plotBreadth >= 30 && plotBreadth <= 33) //d Breadth range = 30-33 
  {
    //bedroom3
      const bed1Length = builtLength * 0.49
      const bed1Breadth = builtBreadth * 0.3
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.4
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.4  
      const bed4Length = builtLength * 0.55  
      const bed4Breadth = builtBreadth * 0.45            
      const livingLength = builtLength * 0.55
      const livingBreadth = builtBreadth * 0.45
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.31
      const kitchenLength = builtLength * 0.45  
      const kitchenBreadth = builtBreadth * 0.32
      const poojaLength = builtLength * 0.15
      const poojaBreadth = builtBreadth * 0.14
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.2  
      const staircaseLength = builtLength * 0.45
      const stairCaseBreadth = builtBreadth * 0.14
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.20
      const commonToiletBreadth = builtBreadth * 0.15
      const sitoutLength = builtLength * 0.20
      const sitoutBreadth = builtBreadth * 0.15
      
      const diningLength = builtLength * 0.45
      const diningBreadth = builtBreadth * 0.25
      const extraBathLength = builtLength * 0.53
      const extraBathBreadth = builtBreadth * 0.15
      const extraSitoutLength = builtLength * 0.4
      const extraSitoutBreadth = builtBreadth * 0.12
      //add rooms
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
      //update dimensions and positions
      setTimeout(() => {
      
      // store.dispatch(
      //   updateRoomData({
      //     id: 'ne',
      //     roomType: 'bedroom',
      //     length: bed1Length,
      //     breadth: bed1Breadth,
      //     position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
      //   })
      // )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right:0, bottom:Math.floor(bed3Breadth)*(scale+1.4)+setbacks.front*scale}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'bedroom',
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: 0, right:0 }
        }))

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,top:0 }
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
          position:{left:0,bottom:0}}))

      // store.dispatch(
      //     updateRoomData({
      //       id: '',
      //       roomType: 'drawing',
      //       length: drawingLength,
      //       breadth: drawingBreadth,
      //       position: { bottom: Math.floor(livingBreadth)*scale+3, left:0 }}))

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
          position: { left:0, bottom:Math.floor(livingBreadth)*scale }
        })
      )
        
    }, 100);
    setTimeout(() => {
    
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth,
        })
      )
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
      // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: {bottom: 0, right: 0}}))




      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0, bottom: Math.floor(setbacks.front)*(scale+6) }}))

      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { bottom: Math.floor(livingBreadth) *(scale-5), left:0 }}))

     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { top: Math.floor(kitchenBreadth)*scale+3,left:0}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraSitout',
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: 0,left:Math.floor(kitchenLength)*scale}
          }))        


    }, 100);
      //Add walls
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'extraSitout', id: 'se' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }
  if (plotBreadth >= 34 && plotBreadth <= 38) //d Breadth range = 34-38 
  {
    //bedroom3
      const bed1Length = builtLength * 0.49
      const bed1Breadth = builtBreadth * 0.3
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.4
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.4  
      const bed4Length = builtLength * 0.45  
      const bed4Breadth = builtBreadth * 0.45            
      const livingLength = builtLength * 0.55
      const livingBreadth = builtBreadth * 0.32
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.31
      const kitchenLength = builtLength * 0.4
      const kitchenBreadth = builtBreadth * 0.32
      const poojaLength = builtLength * 0.15
      const poojaBreadth = builtBreadth * 0.14
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.2  
      const staircaseLength = builtLength * 0.45
      const stairCaseBreadth = builtBreadth * 0.14
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.25
      const commonToiletBreadth = builtBreadth * 0.12
      const sitoutLength = builtLength * 0.18
      const sitoutBreadth = builtBreadth * 0.235
      
      const diningLength = builtLength * 0.45
      const diningBreadth = builtBreadth * 0.16
      const extraBathLength = builtLength * 0.25
      const extraBathBreadth = builtBreadth * 0.15
      const extraSitoutLength = builtLength * 0.185
      const extraSitoutBreadth = builtBreadth * 0.25
      //add rooms
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
      //update dimensions and positions
      setTimeout(() => {
      
      // store.dispatch(
      //   updateRoomData({
      //     id: 'ne',
      //     roomType: 'bedroom',
      //     length: bed1Length,
      //     breadth: bed1Breadth,
      //     position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
      //   })
      // )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right:0, bottom:Math.floor(bed3Breadth)*(scale+1.1)+setbacks.front*scale}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'bedroom',
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: 0, right:0 }
        }))

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,top:0 }
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
          position:{left:0,bottom:0}

        })
        )
      store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: Math.floor(livingBreadth)*scale+3, left:0 }
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
          position: { left:0, bottom:Math.floor(livingBreadth)*scale }
        })
      )
        
    }, 100);
    setTimeout(() => {
    
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth,
        })
      )
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
      // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: {bottom: 0, right: 0}}))




      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: Math.floor(kitchenLength+extraSitoutLength)*(scale+2.5), top: 0 }}))
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { top: Math.floor(kitchenBreadth) *scale+setbacks.back*scale, left:0 }}))

     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { top: Math.floor(kitchenBreadth)*scale+3,left:0}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraSitout',
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: 0,left:Math.floor(kitchenLength)*scale+setbacks.left*scale}
          }))        


    }, 100);
      //Add walls
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }

  if (plotBreadth >= 39 && plotBreadth <= 43) //d Breadth range = 39-43 
  {
    //bedroom3
      const bed1Length = builtLength * 0.49
      const bed1Breadth = builtBreadth * 0.3
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.32
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.32  
      const bed4Length = builtLength * 0.45  
      const bed4Breadth = builtBreadth * 0.30            
      const livingLength = builtLength * 0.55
      const livingBreadth = builtBreadth * 0.32
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.31
      const kitchenLength = builtLength * 0.31
      const kitchenBreadth = builtBreadth * 0.32
      const poojaLength = builtLength * 0.13
      const poojaBreadth = builtBreadth * 0.12
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.2  
      const staircaseLength = builtLength * 0.45
      const stairCaseBreadth = builtBreadth * 0.14
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.15
      const commonToiletBreadth = builtBreadth * 0.22
      const sitoutLength = builtLength * 0.18
      const sitoutBreadth = builtBreadth * 0.235
      
      const diningLength = builtLength * 0.3
      const diningBreadth = builtBreadth * 0.22
      const extraBathLength = builtLength * 0.275
      const extraBathBreadth = builtBreadth * 0.23
      const extraSitoutLength = builtLength * 0.16
      const extraSitoutBreadth = builtBreadth * 0.18
      //add rooms
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
      //update dimensions and positions
      setTimeout(() => {
      
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'bedroom',
          length: bed1Length,
          breadth: bed1Breadth,
          position: {left:Math.floor(kitchenLength)*scale, top:0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right:0, top:Math.floor(setbacks.back)*scale}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'bedroom',
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(bed4Breadth)*scale-5, right:0 }
        }))

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,bottom:0 }
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
          position:{left:0,bottom:0}

        })
        )
      store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: Math.floor(bed2Breadth)*scale+9, left:0 }
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
          position: { left:0, bottom:Math.floor(livingBreadth)*scale }
        })
      )
        
    }, 100);
    setTimeout(() => {
    
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth,
        })
      )
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
      // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: {bottom: 0, right: 0}}))




      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { bottom: Math.floor(bed4Breadth) *scale, right: 0 }}))
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { top: Math.floor(kitchenBreadth) *scale+setbacks.back*scale, left:0 }}))

     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { top: Math.floor(kitchenBreadth)*scale+3,left:0}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraSitout',
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: Math.floor(extraBathBreadth)*scale+setbacks.back*scale+1,right:0}
          }))        


    }, 100);
      //Add walls
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }
   if (plotBreadth >= 44 && plotBreadth <= 50) //d Breadth range = 44-50 
  {
    //bedroom3
      const bed1Length = builtLength * 0.49
      const bed1Breadth = builtBreadth * 0.3
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.32
      const bed3Length = builtLength * 0.40  
      const bed3Breadth = builtBreadth * 0.30  
      const bed4Length = builtLength * 0.50  
      const bed4Breadth = builtBreadth * 0.32            
      const livingLength = builtLength * 0.5
      const livingBreadth = builtBreadth * 0.32
      const drawingLength = builtLength * 0.6
      const drawingBreadth = builtBreadth * 0.36
      const kitchenLength = builtLength * 0.31
      const kitchenBreadth = builtBreadth * 0.32
      const poojaLength = builtLength * 0.13
      const poojaBreadth = builtBreadth * 0.12
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.2  
      const staircaseLength = builtLength * 0.45
      const stairCaseBreadth = builtBreadth * 0.12
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.14
      const commonToiletBreadth = builtBreadth * 0.15
      const sitoutLength = builtLength * 0.18
      const sitoutBreadth = builtBreadth * 0.235
      
      const diningLength = builtLength * 0.45
      const diningBreadth = builtBreadth * 0.16
      const extraBathLength = builtLength * 0.25
      const extraBathBreadth = builtBreadth * 0.23
      const extraSitoutLength = builtLength * 0.15
      const extraSitoutBreadth = builtBreadth * 0.175
      //add rooms
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
      //update dimensions and positions
      setTimeout(() => {
      
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'bedroom',
          length: bed1Length,
          breadth: bed1Breadth,
          position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right:0, top:Math.floor(setbacks.back)*scale}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'bedroom',
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(bed4Breadth)*scale+9, right:0 }
        }))

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { left:0,bottom:0 }
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
          position:{right:0,bottom:0}

        })
        )
      store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: Math.floor(bed2Breadth)*scale+9, left:0 }
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
          position: { left:0, bottom:Math.floor(livingBreadth)*scale }
        })
      )
        
    }, 100);
    setTimeout(() => {
    
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth,
        })
      )
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
      // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: {bottom: 0, right: 0}}))




      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { bottom: Math.floor(bed4Breadth) *scale, right: 0 }}))
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { top: Math.floor(kitchenBreadth) *scale+setbacks.back*scale, left:0 }}))

     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { top: Math.floor(kitchenBreadth)*scale+3,left:0}
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraSitout',
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: Math.floor(extraBathBreadth)*scale+setbacks.back*scale+1,right:0}
          }))        


    }, 100);
      //Add walls
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true,roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }

  if (plotBreadth >= 51 && plotBreadth <= 56) //d Breadth range = 51-56 
  {
    //bedroom3
      const bed1Length = builtLength * 0.42
      const bed1Breadth = builtBreadth * 0.26
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.32
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.35  
      const bed4Length = builtLength * 0.45  
      const bed4Breadth = builtBreadth * 0.32            
      const livingLength = builtLength * 0.55
      const livingBreadth = builtBreadth * 0.32
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.31
      const kitchenLength = builtLength * 0.33  
      const kitchenBreadth = builtBreadth * 0.31
      const poojaLength = builtLength * 0.13
      const poojaBreadth = builtBreadth * 0.12
      const parkingLength = builtLength * 0.3
      const parkingBreadth = builtBreadth * 0.18  
      const staircaseLength = builtLength * 0.35
      const stairCaseBreadth = builtBreadth * 0.11
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.15
      const commonToiletBreadth = builtBreadth * 0.18
      const sitoutLength = builtLength * 0.18
      const sitoutBreadth = builtBreadth * 0.235
      const mediaLength = builtLength * 0.24
      const mediaBreadth = builtBreadth * 0.20
      const diningLength = builtLength * 0.45
      const diningBreadth = builtBreadth * 0.14
      const extraBathLength = builtLength * 0.20
      const extraBathBreadth = builtBreadth * 0.14

      //add rooms
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      //update dimensions and positions
      setTimeout(() => {
      
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'bedroom',
          length: bed1Length,
          breadth: bed1Breadth,
          position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right:0, top:Math.floor(mediaBreadth)*(scale+2)+setbacks.back*scale }
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'bedroom',
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(bed4Breadth)*scale+6, right:0 }


        })
      )
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,bottom:0 }
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
          position:{left:0,bottom:0}

        })
        )
      store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: Math.floor(bed2Breadth)*scale+9, left:0 }
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
          position: { left:0, bottom:Math.floor(livingBreadth)*scale }
        })
      )
        
    }, 100);
    setTimeout(() => {
    
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth,
        })
      )
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
      // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
      store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
      position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: {bottom: 0, right: 0}}))




      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { bottom: Math.floor(bed4Breadth) *scale, right: 0 }}))
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { top: Math.floor(kitchenBreadth) *scale+setbacks.back*scale, left:0 }}))

      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'media',
          length: mediaLength,
          breadth: mediaBreadth,
          position: { right:0, top:0 }}))
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { top: Math.floor(kitchenBreadth)*scale,left:0}
        })
      )
    }, 100);
      //Add walls
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }

   if (plotBreadth >= 57 && plotBreadth <= 61) //d Breadth range = 57-61 
  {
    //bedroom3
      const bed1Length = builtLength * 0.42
      const bed1Breadth = builtBreadth * 0.26
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.32
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.35  
      const bed4Length = builtLength * 0.51  
      const bed4Breadth = builtBreadth * 0.25            
      const livingLength = builtLength * 0.49
      const livingBreadth = builtBreadth * 0.25
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.43
      const kitchenLength = builtLength * 0.345  
      const kitchenBreadth = builtBreadth * 0.31
      const poojaLength = builtLength * 0.13
      const poojaBreadth = builtBreadth * 0.12
      const parkingLength = builtLength * 0.3
      const parkingBreadth = builtBreadth * 0.18  
      const staircaseLength = builtLength * 0.35
      const stairCaseBreadth = builtBreadth * 0.11
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.15
      const commonToiletBreadth = builtBreadth * 0.18
      const sitoutLength = builtLength * 0.18
      const sitoutBreadth = builtBreadth * 0.235
      const mediaLength = builtLength * 0.235
      const mediaBreadth = builtBreadth * 0.20
      const diningLength = builtLength * 0.45
      const diningBreadth = builtBreadth * 0.14
      const extraBathLength = builtLength * 0.20
      const extraBathBreadth = builtBreadth * 0.14

      //add rooms
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
      // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      //update dimensions and positions
      setTimeout(() => {
      
      store.dispatch(
        updateRoomData({
          id: 'ne',
          roomType: 'bedroom',
          length: bed1Length,
          breadth: bed1Breadth,
          position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
        })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'extraBath',
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right:0, top:Math.floor(mediaBreadth)*(scale)+10+setbacks.back*scale }
        }))

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'bedroom',
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(bed4Breadth)*scale+setbacks.front*scale, right:0 }


        })
      )
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,bottom:0 }
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
          position:{left:0,bottom:0}

        })
        )
      store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'drawing',
            length: drawingLength,
            breadth: drawingBreadth,
            position: { bottom: Math.floor(livingBreadth)*scale+9, left:0 }
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
          position: { left:0, bottom:Math.floor(livingBreadth)*scale }
        })
      )
        
    }, 100);
    setTimeout(() => {
    
      store.dispatch(
        updateRoomData({
          id: 'nw',
          roomType: 'stairCase',
          length: staircaseLength,
          breadth: stairCaseBreadth,
        })
      )
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
      // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
      store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
      position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: {bottom: 0, right: 0}}))
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: {bottom: 0, right: 0}}))




      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { bottom: Math.floor(bed4Breadth) *scale, right: 0 }}))
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { bottom: Math.floor(livingBreadth) *scale, left:0 }}))

      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'media',
          length: mediaLength,
          breadth: mediaBreadth,
          position: { right:0, top:0 }}))
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { top: Math.floor(kitchenBreadth)*scale,left:0}
        })
      )
    }, 100);
      //Add walls
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }

   if (plotBreadth >= 62 && plotBreadth <= 65) //d Breadth range = 62-65 
   {
     //bedroom3
       const bed1Length = builtLength * 0.42
       const bed1Breadth = builtBreadth * 0.26
       const bed2Length = builtLength * 0.33
       const bed2Breadth = builtBreadth * 0.32
       const bed3Length = builtLength * 0.45  
       const bed3Breadth = builtBreadth * 0.30  
       const bed4Length = builtLength * 0.51  
       const bed4Breadth = builtBreadth * 0.25            
       const livingLength = builtLength * 0.49
       const livingBreadth = builtBreadth * 0.28
       const drawingLength = builtLength * 0.55
       const drawingBreadth = builtBreadth * 0.35
       const kitchenLength = builtLength * 0.345  
       const kitchenBreadth = builtBreadth * 0.31
       const poojaLength = builtLength * 0.15
       const poojaBreadth = builtBreadth * 0.09
       const parkingLength = builtLength * 0.4
       const parkingBreadth = builtBreadth * 0.18  
       const staircaseLength = builtLength * 0.35
       const stairCaseBreadth = builtBreadth * 0.11
       const toilet1Length = builtLength * 0.15
       const toilet1Breadth = builtBreadth * 0.10
       const toilet2Length = builtLength * 0.20
       const toilet2Breadth = builtBreadth * 0.08
       const toilet3Length = builtLength * 0.32
       const toilet3Breadth = builtBreadth * 0.10
       const toilet4Length = builtLength * 0.15
       const toilet4Breadth = builtBreadth * 0.10
       const commonToiletLength = builtLength * 0.17
       const commonToiletBreadth = builtBreadth * 0.17
       const sitoutLength = builtLength * 0.18
       const sitoutBreadth = builtBreadth * 0.235
       const mediaLength = builtLength * 0.25
       const mediaBreadth = builtBreadth * 0.17
       const diningLength = builtLength * 0.45
       const diningBreadth = builtBreadth * 0.14
       const extraBathLength = builtLength * 0.27 
       const extraBathBreadth = builtBreadth * 0.29
 
       //add rooms
       store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
       // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
       store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
       store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
       store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
       store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
       // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
       // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
       // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
       store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
       store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
       store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
       store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
       store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
       //update dimensions and positions
       setTimeout(() => {
       
       store.dispatch(
         updateRoomData({
           id: 'ne',
           roomType: 'bedroom',
           length: bed1Length,
           breadth: bed1Breadth,
           position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'extraBath',
           length: extraBathLength,
           breadth: extraBathBreadth,
           position: { right:0, top:0 }
         }))
 
       store.dispatch(
         updateRoomData({
           id: 'se',
           roomType: 'bedroom',
           length: bed3Length,
           breadth: bed3Breadth,
           position: { top: Math.floor(bed1Breadth)*scale+3, right:0 }
 
 
         })
       )
       store.dispatch(
         updateRoomData({
           id: 'sw',
           roomType: 'bedroom',
           length: bed4Length,
           breadth: bed4Breadth,
           position: { left:0,bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
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
           position:{right:0,bottom:0}
 
         })
         )
       store.dispatch(
           updateRoomData({
             id: '',
             roomType: 'drawing',
             length: drawingLength,
             breadth: drawingBreadth,
             position: { bottom: Math.floor(parkingBreadth+bed4Breadth)*scale-setbacks.front*scale, left:0 }
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
           position: { left:0, top:Math.floor(kitchenBreadth)*scale }
         })
       )
         
     }, 100);
     setTimeout(() => {
     
       store.dispatch(
         updateRoomData({
           id: 'nw',
           roomType: 'stairCase',
           length: staircaseLength,
           breadth: stairCaseBreadth,
         })
       )
       // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
       // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
       store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
       position: {bottom: 0, right: 0}}))
       // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
       // position: {bottom: 0, right: 0}}))
       // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
       // position: {bottom: 0, right: 0}}))
 
 
 
 
       store.dispatch(
         updateRoomData({
           id: 'sw',
           roomType: 'parking',
           length: parkingLength,
           breadth: parkingBreadth,
           position:{left:0,bottom:0}
         })
       )
      
       store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'commonToilet',
           length: commonToiletLength,
           breadth: commonToiletBreadth,
           position: { bottom: Math.floor(livingBreadth) *scale+setbacks.front*scale, right: 0 }}))
       store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'sitout',
           length: sitoutLength,
           breadth: sitoutBreadth,
           position: { bottom: Math.floor(bed4Breadth+parkingBreadth)*scale-12, left:0 }}))
 
       store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'media',
           length: mediaLength,
           breadth: mediaBreadth,
           position: { right:Math.floor(commonToiletLength)*scale-11, bottom:Math.floor(livingBreadth)*scale }}))
      
       store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'dining',
           length: diningLength,
           breadth: diningBreadth,
           position: { top: Math.floor(kitchenBreadth)*scale,left:0}
         })
       )
     }, 100);
       //Add walls
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
       // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
       // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
       // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
       store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
       store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
       store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
       store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
       store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
       store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
       store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'parking', id: '' }))
       store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
       store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
       store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
       store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'media', id: '' }))
       //Add opening
       store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
       store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
       store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
       //Add doors  
       store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
       store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
       store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
       store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
       store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
       store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
       store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
    }
   if (plotBreadth >= 66 && plotBreadth <= 71) //d Breadth range = 66-71 
    {
      //bedroom3
        const bed1Length = builtLength * 0.35
        const bed1Breadth = builtBreadth * 0.27
        const bed2Length = builtLength * 0.33
        const bed2Breadth = builtBreadth * 0.32
        const bed3Length = builtLength * 0.45  
        const bed3Breadth = builtBreadth * 0.28  
        const bed4Length = builtLength * 0.40  
        const bed4Breadth = builtBreadth * 0.32            
        const livingLength = builtLength * 0.49
        const livingBreadth = builtBreadth * 0.23
        const drawingLength = builtLength * 0.55
        const drawingBreadth = builtBreadth * 0.35
        const kitchenLength = builtLength * 0.26  
        const kitchenBreadth = builtBreadth * 0.20
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.09
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.18  
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.11
        const toilet1Length = builtLength * 0.15
        const toilet1Breadth = builtBreadth * 0.10
        const toilet2Length = builtLength * 0.20
        const toilet2Breadth = builtBreadth * 0.08
        const toilet3Length = builtLength * 0.32
        const toilet3Breadth = builtBreadth * 0.10
        const toilet4Length = builtLength * 0.15
        const toilet4Breadth = builtBreadth * 0.10
        const commonToiletLength = builtLength * 0.17
        const commonToiletBreadth = builtBreadth * 0.17
        const sitoutLength = builtLength * 0.315
        const sitoutBreadth = builtBreadth * 0.12
        const mediaLength = builtLength * 0.25
        const mediaBreadth = builtBreadth * 0.17
        const diningLength = builtLength * 0.45
        const diningBreadth = builtBreadth * 0.18
        const extraBathLength = builtLength * 0.4 
        const extraBathBreadth = builtBreadth * 0.14
  
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
        //update dimensions and positions
        setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
            position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'extraBath',
            length: extraBathLength,
            breadth: extraBathBreadth,
            position: { right:0, top:Math.floor(bed4Breadth)*scale+setbacks.back*scale+12 }
          }))
  
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            position: { top: Math.floor(bed4Breadth+extraBathBreadth)*scale+9, right:0 }
  
  
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { right:0,top:0 }
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
            position:{right:0,bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale}
  
          })
          )
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: {bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale, left:0 }
              })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'kitchen',
            length: kitchenLength,
            breadth: kitchenBreadth,
            position: {top:Math.floor(sitoutBreadth)*scale-9, left:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'pooja',
            length: poojaLength,
            breadth: poojaBreadth,
            position: { left:0, top:Math.floor(kitchenBreadth+sitoutBreadth)*scale }
          })
        )
          
      }, 100);
      setTimeout(() => {
      
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth,
          })
        )
        // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
        position: {bottom: 0, right: 0}}))
        // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        // position: {bottom: 0, right: 0}}))
        // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        // position: {bottom: 0, right: 0}}))
  
  
  
  
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{left:0,bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { bottom: Math.floor(drawingBreadth) *scale+setbacks.front*scale, left: 0 }}))
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top:0, left:0 }}))
  
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left:Math.floor(commonToiletLength)*scale-setbacks.left*scale, bottom:Math.floor(drawingBreadth)*scale }}))
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth+sitoutBreadth)*scale,left:0}
          })
        )
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
    }
   if (plotBreadth >= 72 && plotBreadth <= 82) //d Breadth range = 72-82 
    {
      //bedroom3
        const bed1Length = builtLength * 0.35
        const bed1Breadth = builtBreadth * 0.27
        const bed2Length = builtLength * 0.45
        const bed2Breadth = builtBreadth * 0.27
        const bed3Length = builtLength * 0.45  
        const bed3Breadth = builtBreadth * 0.28  
        const bed4Length = builtLength * 0.40  
        const bed4Breadth = builtBreadth * 0.32            
        const livingLength = builtLength * 0.55
        const livingBreadth = builtBreadth * 0.18
        const drawingLength = builtLength * 0.55
        const drawingBreadth = builtBreadth * 0.18
        const kitchenLength = builtLength * 0.26  
        const kitchenBreadth = builtBreadth * 0.20
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.09
        const parkingLength = builtLength * 0.35
        const parkingBreadth = builtBreadth * 0.14  
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.11
        const toilet1Length = builtLength * 0.15
        const toilet1Breadth = builtBreadth * 0.10
        const toilet2Length = builtLength * 0.20
        const toilet2Breadth = builtBreadth * 0.08
        const toilet3Length = builtLength * 0.32
        const toilet3Breadth = builtBreadth * 0.10
        const toilet4Length = builtLength * 0.15
        const toilet4Breadth = builtBreadth * 0.10
        const commonToiletLength = builtLength * 0.17
        const commonToiletBreadth = builtBreadth * 0.17
        const sitoutLength = builtLength * 0.315
        const sitoutBreadth = builtBreadth * 0.12
        const mediaLength = builtLength * 0.28
        const mediaBreadth = builtBreadth * 0.14
        const diningLength = builtLength * 0.45
        const diningBreadth = builtBreadth * 0.12
        const extraBathLength = builtLength * 0.4 
        const extraBathBreadth = builtBreadth * 0.14
  
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
        //update dimensions and positions
        setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
            position: {left:Math.floor(kitchenLength)*scale+12, top:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'extraBath',
            length: extraBathLength,
            breadth: extraBathBreadth,
            position: { right:0, top:Math.floor(bed4Breadth)*scale+setbacks.back*scale+12 }
          }))
          store.dispatch(
            updateRoomData({
              id: 'nw',
              roomType: 'bedroom',
              length: bed2Length,
              breadth: bed2Breadth,
              position: { right:0, bottom:0 }
            }))
  
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            position: { top: Math.floor(bed4Breadth+extraBathBreadth)*scale+9, right:0 }
  
  
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { right:0,top:0 }
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
            position:{left:0,bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale}
  
          })
          )
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: {bottom:Math.floor(parkingBreadth+livingBreadth)*scale-setbacks.front*scale, left:0 }
              })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'kitchen',
            length: kitchenLength,
            breadth: kitchenBreadth,
            position: {top:Math.floor(sitoutBreadth)*scale-9, left:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'pooja',
            length: poojaLength,
            breadth: poojaBreadth,
            position: { left:0, top:Math.floor(kitchenBreadth+sitoutBreadth)*scale }
          })
        )
          
      }, 100);
      setTimeout(() => {
      
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth,
          })
        )
        // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
        position: {bottom: 0, right: 0}}))
        // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        // position: {bottom: 0, right: 0}}))
        // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        // position: {bottom: 0, right: 0}}))
  
  
  
  
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{left:0,bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { bottom: Math.floor(livingBreadth+drawingBreadth+parkingBreadth) *scale, left: 0 }}))
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top:0, left:0 }}))
  
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left:Math.floor(commonToiletLength)*scale-setbacks.left*scale, 
              bottom:Math.floor(livingBreadth+drawingBreadth+parkingBreadth)*scale-setbacks.front*scale }}))
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth+sitoutBreadth)*scale,left:0}
          })
        )
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
    }
   if (plotBreadth >= 83 && plotBreadth <= 90) //d Breadth range = 83-90 
    {
      //bedroom3
        const bed1Length = builtLength * 0.35
        const bed1Breadth = builtBreadth * 0.27
        const bed2Length = builtLength * 0.40
        const bed2Breadth = builtBreadth * 0.18
        const bed3Length = builtLength * 0.45  
        const bed3Breadth = builtBreadth * 0.28  
        const bed4Length = builtLength * 0.40  
        const bed4Breadth = builtBreadth * 0.32            
        const livingLength = builtLength * 0.4
        const livingBreadth = builtBreadth * 0.21
        const drawingLength = builtLength * 0.55
        const drawingBreadth = builtBreadth * 0.18
        const kitchenLength = builtLength * 0.26  
        const kitchenBreadth = builtBreadth * 0.20
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.09
        const parkingLength = builtLength * 0.35
        const parkingBreadth = builtBreadth * 0.14  
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.11
        const toilet1Length = builtLength * 0.15
        const toilet1Breadth = builtBreadth * 0.10
        const toilet2Length = builtLength * 0.40
        const toilet2Breadth = builtBreadth * 0.08
        const toilet3Length = builtLength * 0.32
        const toilet3Breadth = builtBreadth * 0.10
        const toilet4Length = builtLength * 0.15
        const toilet4Breadth = builtBreadth * 0.10
        const commonToiletLength = builtLength * 0.17
        const commonToiletBreadth = builtBreadth * 0.17
        const sitoutLength = builtLength * 0.315
        const sitoutBreadth = builtBreadth * 0.12
        const mediaLength = builtLength * 0.35
        const mediaBreadth = builtBreadth * 0.14
        const diningLength = builtLength * 0.45
        const diningBreadth = builtBreadth * 0.12
        const extraBathLength = builtLength * 0.4 
        const extraBathBreadth = builtBreadth * 0.14
        const extraSitoutLength = builtLength * 0.23
        const extraSitoutBreadth = builtBreadth * 0.215
  
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraSitout' }))
        //update dimensions and positions
        setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
            position: {left:Math.floor(kitchenLength)*scale+9, top:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'extraBath',
            length: extraBathLength,
            breadth: extraBathBreadth,
            position: { right:0, top:Math.floor(bed4Breadth)*scale+setbacks.back*scale+9}
          }))
          store.dispatch(
            updateRoomData({
              id: 'nw',
              roomType: 'bedroom',
              length: bed2Length,
              breadth: bed2Breadth,
              position: { left:0, bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
            }))
  
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            position: { top: Math.floor(bed4Breadth+extraBathBreadth)*scale+9, right:0 }
  
  
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { right:0,top:0 }
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
            position:{right:Math.floor(extraSitoutLength)*scale-9,bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale-9}
  
          })
          )
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: {bottom:Math.floor(parkingBreadth+bed2Breadth)*scale-setbacks.front*scale, left:0 }
              })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'kitchen',
            length: kitchenLength,
            breadth: kitchenBreadth,
            position: {top:Math.floor(sitoutBreadth)*scale-9, left:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'pooja',
            length: poojaLength,
            breadth: poojaBreadth,
            position: { left:0, top:Math.floor(kitchenBreadth+sitoutBreadth-poojaBreadth)*scale }
          })
        )
          
      }, 100);
      setTimeout(() => {
      
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth,
          })
        )
        // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        // position: {bottom:Math.floor(parkingLength)*scale, right: 0 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
        position: {bottom: 0, right: 0}}))
        // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        // position: {bottom: 0, right: 0}}))
        // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        // position: {bottom: 0, right: 0}}))
  
  
  
  
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{left:0,bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { bottom: Math.floor(drawingBreadth+parkingBreadth+bed2Breadth) *scale, left: 0 }}))
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top:0, left:0 }}))

            store.dispatch(
              updateRoomData({
                id: 'nw',
                roomType: 'extraSitout',
                length: extraSitoutLength,
                breadth: extraSitoutBreadth,
                position: { bottom:Math.floor(stairCaseBreadth)*scale-9, right:0 }}))          
  
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left:Math.floor(commonToiletLength)*scale-setbacks.left*scale, 
              bottom:Math.floor(parkingBreadth+drawingBreadth+bed2Breadth)*scale-setbacks.front*scale }}))
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth+sitoutBreadth)*scale-setbacks.back*scale,left:0}
          })
        )
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
    }      
}
  function generateTypeB() {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot
    
  if (plotLength >= 17 && plotLength <= 20) //d Breadth range = 14-18 
  {
    //bedroom3
      const bed1Length = builtLength * 0.49
      const bed1Breadth = builtBreadth * 0.3
      const bed2Length = builtLength * 0.33
      const bed2Breadth = builtBreadth * 0.4
      const bed3Length = builtLength * 0.45  
      const bed3Breadth = builtBreadth * 0.4  
      const bed4Length = builtLength * 1  
      const bed4Breadth = builtBreadth * 1            
      const livingLength = builtLength * 0.1
      const livingBreadth = builtBreadth * 0.40
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.31
      const kitchenLength = builtLength * 0.5  
      const kitchenBreadth = builtBreadth * 0.5
      const poojaLength = builtLength * 0.2
      const poojaBreadth = builtBreadth * 0.2
      const parkingLength = builtLength * 0.6
      const parkingBreadth = builtBreadth * 0.28  
      const staircaseLength = builtLength * 0.6
      const stairCaseBreadth = builtBreadth * 0.26
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      const toilet2Length = builtLength * 0.20
      const toilet2Breadth = builtBreadth * 0.08
      const toilet3Length = builtLength * 0.32
      const toilet3Breadth = builtBreadth * 0.10
      const toilet4Length = builtLength * 0.15
      const toilet4Breadth = builtBreadth * 0.10
      const commonToiletLength = builtLength * 0.4
      const commonToiletBreadth = builtBreadth * 0.34
      const sitoutLength = builtLength * 0.15
      const sitoutBreadth = builtBreadth * 0.55
      
      const diningLength = builtLength * 0.55
      const diningBreadth = builtBreadth * 0.18
      const extraBathLength = builtLength * 0.25
      const extraBathBreadth = builtBreadth * 0.2
      const extraSitoutLength = builtLength * 0.4
      const extraSitoutBreadth = builtBreadth * 0.2
      //add rooms
      
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
            
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
       
      
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      
      //update dimensions and positions
      setTimeout(() => {
      

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { right:0,top:0 }
        }))
        
    }, 100);
    setTimeout(() => {

      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'kitchen',
          length: kitchenLength,
          breadth: kitchenBreadth,
        }))
       
    }, 100);
    setTimeout(() => {

      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'parking',
          length: parkingLength,
          breadth: parkingBreadth,
          position:{left:0,bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0, bottom: Math.floor(setbacks.front)*(scale)+10 }}))

      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { top: Math.floor(setbacks.back) *(scale), left:0 }}))

     
      


    }, 100);
      //Add walls
      
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'kitchen', id: '' }))

      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'extraSitout', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'extraSitout', id: 'se' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
      store.dispatch(updateWall({ id: 'media-right', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: false }))
   }
   if(plotLength >= 21 && plotLength <= 24) //Breadth :20-24 
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
        const livingBreadth = builtBreadth * 0.54
        const drawingLength = builtLength * 0.27
        const drawingBreadth = builtBreadth * 0.43  
        const kitchenLength = builtLength * 0.32
        const kitchenBreadth = builtBreadth * 0.45
        const poojaLength = builtLength * 0.12
        const poojaBreadth = builtBreadth * 0.22
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.36  
        const staircaseLength = builtLength * 0.5
        const stairCaseBreadth = builtBreadth * 0.36
        const toilet1Length = builtLength * 0.5
        const toilet1Breadth = builtBreadth * 0.29
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.18
        const toilet3Breadth = builtBreadth * 0.15
        const toilet4Length = builtLength * 0.12
        const toilet4Breadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.12
        const commonToiletBreadth = builtBreadth * 0.35
        const sitoutLength = builtLength * 0.14
        const sitoutBreadth = builtBreadth * 0.4
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.20
        const diningLength = builtLength * 0.22
        const diningBreadth = builtBreadth * 0.45
 
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
        // store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
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
            position: { right: 0, top:0 }
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
            position: { left: 0, bottom:0 }
          })
          )
        // store.dispatch(
        //     updateRoomData({
        //       id: '',
        //       roomType: 'drawing',
        //       length: drawingLength,
        //       breadth: drawingBreadth,
        //       position: { top: 0, left:0 }
        //       })
        // )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'kitchen',
            length: kitchenLength,
            breadth: kitchenBreadth,
            position: { top: 0, left:0 }
          })
        )
      }, 100);
        // store.dispatch(
        //   updateRoomData({
        //     id: 'se',
        //     roomType: 'pooja',
        //     length: poojaLength,
        //     breadth: poojaBreadth,
        //     position: { top: 0, left:0 }
        //   })
        // )
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
            position:{left:Math.floor(staircaseLength*parseInt(scale)), bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { left: 0 *scale, bottom:Math.floor(setbacks.front)*scale+9 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top:Math.floor(kitchenBreadth)*scale+setbacks.back*scale-15 , left:0 }
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
       
        // store.dispatch(
        //   updateRoomData({
        //     id: '',
        //     roomType: 'dining',
        //     length: diningLength,
        //     breadth: diningBreadth,
        //     position: { right:Math.floor(kitchenLength)*scale, top:0 }
        //   }))
                
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'bedroom', id: 'nw' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'toilet', id: 'nw' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
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
   if(plotLength >= 25 && plotLength <= 28) //Breadth :25-28 
     {
      const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.50
        const bed2Breadth = builtBreadth * 0.7
        const bed3Length = builtLength * 0.52  
        const bed3Breadth = builtBreadth * 0.45  
        const bed4Length = builtLength * 0.37  
        const bed4Breadth = builtBreadth * 0.42            
        const livingLength = builtLength * 0.5
        const livingBreadth = builtBreadth * 0.7
        const drawingLength = builtLength * 0.27
        const drawingBreadth = builtBreadth * 0.43  
        const kitchenLength = builtLength * 0.35
        const kitchenBreadth = builtBreadth * 0.35
        const poojaLength = builtLength * 0.12
        const poojaBreadth = builtBreadth * 0.22
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.27  
        const staircaseLength = builtLength * 0.308
        const stairCaseBreadth = builtBreadth * 0.27
        const toilet1Length = builtLength * 0.2
        const toilet1Breadth = builtBreadth * 0.3
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.18
        const toilet3Breadth = builtBreadth * 0.15
        const toilet4Length = builtLength * 0.12
        const toilet4Breadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.12
        const commonToiletBreadth = builtBreadth * 0.25
        const sitoutLength = builtLength * 0.33
        const sitoutBreadth = builtBreadth * 0.3
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.20
        const diningLength = builtLength * 0.33
        const diningBreadth = builtBreadth * 0.3
 
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
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
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
            position: { right: 0, bottom:0 }
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
            position: { left: 0, bottom:0 }
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
          })
        )
      }, 100);
        // store.dispatch(
        //   updateRoomData({
        //     id: 'se',
        //     roomType: 'pooja',
        //     length: poojaLength,
        //     breadth: poojaBreadth,
        //     position: { top: 0, left:0 }
        //   })
        // )
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
            position: {right:Math.floor(setbacks.right)*scale, top:Math.floor(setbacks.back)*scale }
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
            position: { top:0, right:Math.floor(kitchenLength)*scale }
          })
        )

      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: false , roomType: 'bedroom', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
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
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
     }  
   if(plotLength >= 29 && plotLength <= 33) //Breadth :29-33 
     {
        const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.52
        const bed2Breadth = builtBreadth * 0.54
        const bed3Length = builtLength * 0.52  
        const bed3Breadth = builtBreadth * 0.45  
        const bed4Length = builtLength * 0.42  
        const bed4Breadth = builtBreadth * 0.46            
        const livingLength = builtLength * 0.48
        const livingBreadth = builtBreadth * 0.55
        const drawingLength = builtLength * 0.27
        const drawingBreadth = builtBreadth * 0.43  
        const kitchenLength = builtLength * 0.3
        const kitchenBreadth = builtBreadth * 0.45
        const poojaLength = builtLength * 0.12
        const poojaBreadth = builtBreadth * 0.22
        const parkingLength = builtLength * 0.45
        const parkingBreadth = builtBreadth * 0.25  
        const staircaseLength = builtLength * 0.308
        const stairCaseBreadth = builtBreadth * 0.26
        const toilet1Length = builtLength * 0.20
        const toilet1Breadth = builtBreadth * 0.19
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.18
        const toilet3Breadth = builtBreadth * 0.25
        const toilet4Length = builtLength * 0.12
        const toilet4Breadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.13
        const commonToiletBreadth = builtBreadth * 0.35
        const sitoutLength = builtLength * 0.15
        const sitoutBreadth = builtBreadth * 0.3
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.20
        const diningLength = builtLength * 0.18
        const diningBreadth = builtBreadth * 0.5
 
        //add rooms
        // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
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
            position: { right: 0, bottom:0 }
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
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { top: 0, right:0}
           


          }))
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { left: 0, bottom:0 }
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
            position: { top: 0, left:0 }
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
            id: 'sw',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth,
            position: { bottom: 0, left:0 }
          })
        )
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        position: { left:0, right:0} }))
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
            position:{right:0, bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { top: 0, right:Math.floor(bed4Length)*(scale+1)+setbacks.right*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { bottom:Math.floor(setbacks.front)*(scale+13),left:0 }
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
            position: { left:Math.floor(kitchenLength)*scale, top:0 }
          })

        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'sw' }))          
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'nw' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
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
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
     }
   if(plotLength >= 34 && plotLength <= 36) //Breadth :34-36 
     {
      const bed1Length = builtLength * 0.29
      const bed1Breadth = builtBreadth * 0.36
      const bed2Length = builtLength * 0.45
      const bed2Breadth = builtBreadth * 0.55
      const bed3Length = builtLength * 0.52  
      const bed3Breadth = builtBreadth * 0.45  
      const bed4Length = builtLength * 0.45  
      const bed4Breadth = builtBreadth * 0.45            
      const livingLength = builtLength * 0.55
      const livingBreadth = builtBreadth * 0.55
      const drawingLength = builtLength * 0.27
      const drawingBreadth = builtBreadth * 0.43  
      const kitchenLength = builtLength * 0.25
      const kitchenBreadth = builtBreadth * 0.45
      const poojaLength = builtLength * 0.12
      const poojaBreadth = builtBreadth * 0.2
      const parkingLength = builtLength * 0.4
      const parkingBreadth = builtBreadth * 0.25  
      const staircaseLength = builtLength * 0.308
      const stairCaseBreadth = builtBreadth * 0.25
      const toilet1Length = builtLength * 0.2
      const toilet1Breadth = builtBreadth * 0.2
      const toilet2Length = builtLength * 0.07
      const toilet2Breadth = builtBreadth * 0.25
      const toilet3Length = builtLength * 0.17
      const toilet3Breadth = builtBreadth * 0.36
      const toilet4Length = builtLength * 0.12
      const toilet4Breadth = builtBreadth * 0.12
      const commonToiletLength = builtLength * 0.13
      const commonToiletBreadth = builtBreadth * 0.30
      const sitoutLength = builtLength * 0.15
      const sitoutBreadth = builtBreadth * 0.4
      const mediaLength = builtLength * 0.20
      const mediaBreadth = builtBreadth * 0.20
      const diningLength = builtLength * 0.20
      const diningBreadth = builtBreadth * 0.35

      //add rooms
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
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
          position: { right: 0, top:0 }
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
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { bottom: 0, right:0 }
      
        })
      )
    
    setTimeout(() => {
      
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'living',
          length: livingLength,
          breadth: livingBreadth,
          position: {left: 0, bottom:0 }
        })
        )
      }, 100);
      // store.dispatch(
      //     updateRoomData({
      //       id: '',
      //       roomType: 'drawing',
      //       length: drawingLength,
      //       breadth: drawingBreadth,
      //       position: { top: 0, left:0 }
      //       })
      // )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'kitchen',
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { top: 0, left:0 }
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'pooja',
          length: poojaLength,
          breadth: poojaBreadth,
          position: { top: Math.floor(commonToiletBreadth)*(scale-3), right:Math.floor(bed2Length)*(scale+1) }
        })
      )
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
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
      // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
      // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
      // position: { bottom:0, left:0 }}))
      // // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
      // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
      // position: { top: 0, left:0 } }))




      store.dispatch(
        updateRoomData({
          id: 'nw',
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
          position: { left:Math.floor(bed2Length) *scale+setbacks.left*scale, top:0 }
         
         
        })
      )


      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: {left: 0 *scale, top:Math.floor(kitchenBreadth)*(scale+6) }
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
          position: { top:0, left:Math.floor(kitchenLength)*scale }
        })
      )
    }, 100);
      //Add walls
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'pooja', id: '' }))
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
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'kitchen', id: 'se' }))
     
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
      store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false })) 
     }
   if(plotLength >= 37 && plotLength <= 39) //Breadth :37-39 
     {
      const bed1Length = builtLength * 0.29
      const bed1Breadth = builtBreadth * 0.36
      const bed2Length = builtLength * 0.40
      const bed2Breadth = builtBreadth * 0.50
      const bed3Length = builtLength * 0.28  
      const bed3Breadth = builtBreadth * 0.50  
      const bed4Length = builtLength * 0.4  
      const bed4Breadth = builtBreadth * 0.50            
      const livingLength = builtLength * 0.32
      const livingBreadth = builtBreadth * 0.5
      const drawingLength = builtLength * 0.35
      const drawingBreadth = builtBreadth * 0.5  
      const kitchenLength = builtLength * 0.22
      const kitchenBreadth = builtBreadth * 0.35
      const poojaLength = builtLength * 0.12
      const poojaBreadth = builtBreadth * 0.22
      const parkingLength = builtLength * 0.26
      const parkingBreadth = builtBreadth * 0.29  
      const staircaseLength = builtLength * 0.308
      const stairCaseBreadth = builtBreadth * 0.25
      const toilet1Length = builtLength * 0.12
      const toilet1Breadth = builtBreadth * 0.33
      const toilet2Length = builtLength * 0.07
      const toilet2Breadth = builtBreadth * 0.25
      const toilet3Length = builtLength * 0.12
      const toilet3Breadth = builtBreadth * 0.12
      const toilet4Length = builtLength * 0.12
      const toilet4Breadth = builtBreadth * 0.18
      const commonToiletLength = builtLength * 0.07
      const commonToiletBreadth = builtBreadth * 0.30
      const sitoutLength = builtLength * 0.3
      const sitoutBreadth = builtBreadth * 0.15
      const mediaLength = builtLength * 0.20
      const mediaBreadth = builtBreadth * 0.20
      const diningLength = builtLength * 0.22
      const diningBreadth = builtBreadth * 0.18

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
          position: {right: 0, bottom:0 }
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
          position: { top: 0, right:0}
         


        })
      )
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'living',
          length: livingLength,
          breadth: livingBreadth,
          position: { right: Math.floor(bed2Length)*scale+6, bottom:0 }
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
            position: { top: 0, right:Math.floor(bed4Length)*(scale+0.5) }
            })
      )
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'kitchen',
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: {top: 0, left:0 }
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'pooja',
          length: poojaLength,
          breadth: poojaBreadth,
          position: { top: 0, right:Math.floor(bed4Length)*(scale) }
        })
      )
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
          position:{left:Math.floor(staircaseLength*parseInt(scale)), bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0 *scale, top:Math.floor(kitchenBreadth)*(scale+5) }
         
         
        })
      )


      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { left:Math.floor(kitchenLength)*scale+setbacks.left*scale, top:0 }
        })
      )


      // store.dispatch(
      //   updateRoomData({
      //     id: '',
      //     roomType: 'media',
      //     length: mediaLength,
      //     breadth: mediaBreadth,
      //     // position: { left: 0, top:0 }
      //     position: { left: Math.floor(bed3Length)*scale+16, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
         
      //   })
      // )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { left:0, top:Math.floor(kitchenBreadth)*scale }
        })
      )
    }, 100);
      //Add walls
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'sw' }))          
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
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
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
      //Add opening
      store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
      //Add doors  
      store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
      store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
    }
  if(plotLength >= 40 && plotLength <= 43) //Breadth :40-43
     {
  const bed1Length = builtLength * 0.29
  const bed1Breadth = builtBreadth * 0.36
  const bed2Length = builtLength * 0.4
  const bed2Breadth = builtBreadth * 0.51
  const bed3Length = builtLength * 0.28  
  const bed3Breadth = builtBreadth * 0.6  
  const bed4Length = builtLength * 0.3  
  const bed4Breadth = builtBreadth * 0.50            
  const livingLength = builtLength * 0.32
  const livingBreadth = builtBreadth * 0.52
  const drawingLength = builtLength * 0.48
  const drawingBreadth = builtBreadth * 0.40  
  const kitchenLength = builtLength * 0.22
  const kitchenBreadth = builtBreadth * 0.35
  const poojaLength = builtLength * 0.11
  const poojaBreadth = builtBreadth * 0.22
  const parkingLength = builtLength * 0.26
  const parkingBreadth = builtBreadth * 0.29  
  const staircaseLength = builtLength * 0.308
  const stairCaseBreadth = builtBreadth * 0.25
  const toilet1Length = builtLength * 0.10
  const toilet1Breadth = builtBreadth * 0.15
  const toilet2Length = builtLength * 0.07
  const toilet2Breadth = builtBreadth * 0.25
  const toilet3Length = builtLength * 0.08
  const toilet3Breadth = builtBreadth * 0.22
  const toilet4Length = builtLength * 0.12
  const toilet4Breadth = builtBreadth * 0.18
  const commonToiletLength = builtLength * 0.07
  const commonToiletBreadth = builtBreadth * 0.30
  const sitoutLength = builtLength * 0.3
  const sitoutBreadth = builtBreadth * 0.14
  const mediaLength = builtLength * 0.20
  const mediaBreadth = builtBreadth * 0.20
  const diningLength = builtLength * 0.22
  const diningBreadth = builtBreadth * 0.24

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
      position: { right: 0, bottom:0 }
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'se',
      roomType: 'bedroom',
      length: bed3Length,
      breadth: bed3Breadth,
      // position: { left: 0, bottom:0 }
      position: { right:Math.floor(bed2Length)*(scale+1), bottom:0 }


    })
  )
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'bedroom',
      length: bed4Length,
      breadth: bed4Breadth,
      position: { top: 0, right:0 }
     


    })
  )
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'living',
      length: livingLength,
      breadth: livingBreadth,
      position: { left:0, bottom:0 }
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
        position: { top: 0, left:Math.floor(kitchenLength)*(scale+1.5) }
        })
  )
  store.dispatch(
    updateRoomData({
      id: 'se',
      roomType: 'kitchen',
      length: kitchenLength,
      breadth: kitchenBreadth,
      position: { top: 0, left:0 }
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: 'se',
      roomType: 'pooja',
      length: poojaLength,
      breadth: poojaBreadth,
      position: { top: 0, right:Math.floor(bed4Length)*(scale+1.1)}
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
  position: { top: Math.floor(bed2Breadth)*scale-(setbacks.front)*scale+24, bottom:0 } }))
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
      position:{left:Math.floor(staircaseLength*parseInt(scale)), bottom:0}
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'commonToilet',
      length: commonToiletLength,
      breadth: commonToiletBreadth,
      position: { left: 0 *scale, top:Math.floor(kitchenBreadth)*scale }
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position:{ top: 0, right:Math.floor(bed4Length+poojaLength)*(scale+1.8)}
    })
  )


  // store.dispatch(
  //   updateRoomData({
  //     id: '',
  //     roomType: 'media',
  //     length: mediaLength,
  //     breadth: mediaBreadth,
  //     // position: { left: 0, top:0 }
  //     position: { left: Math.floor(bed3Length)*scale+6, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
     
  //   })
  // )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { left:0, top:Math.floor(kitchenBreadth)*(scale+1) }
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
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'kitchen', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
  store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
  // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
  // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
  // store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
  // store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
  // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
  //Add opening
  store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
  store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
  store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
  //Add doors  
  store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
  store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
  store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   } 
  if(plotLength >= 44 && plotLength <= 46) //Breadth :44-46
     {
        const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.35
        const bed2Breadth = builtBreadth * 0.50
        const bed3Length = builtLength * 0.28  
        const bed3Breadth = builtBreadth * 0.50  
        const bed4Length = builtLength * 0.3  
        const bed4Breadth = builtBreadth * 0.50            
        const livingLength = builtLength * 0.3
        const livingBreadth = builtBreadth * 0.5
        const drawingLength = builtLength * 0.42
        const drawingBreadth = builtBreadth * 0.50  
        const kitchenLength = builtLength * 0.22
        const kitchenBreadth = builtBreadth * 0.42
        const poojaLength = builtLength * 0.10
        const poojaBreadth = builtBreadth * 0.14
        const parkingLength = builtLength * 0.26
        const parkingBreadth = builtBreadth * 0.29  
        const staircaseLength = builtLength * 0.308
        const stairCaseBreadth = builtBreadth * 0.17
        const toilet1Length = builtLength * 0.15
        const toilet1Breadth = builtBreadth * 0.15
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.15
        const toilet3Breadth = builtBreadth * 0.13
        const toilet4Length = builtLength * 0.15
        const toilet4Breadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.12
        const commonToiletBreadth = builtBreadth * 0.2
        const sitoutLength = builtLength * 0.194
        const sitoutBreadth = builtBreadth * 0.12
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.20
        const diningLength = builtLength * 0.15
        const diningBreadth = builtBreadth * 0.28
 
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
            position: { right: 0, top:0 }
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
            position: { bottom: 0, right:0 }
           


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { top:0, left:Math.floor(bed2Length)*scale+setbacks.left*scale-12 }
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
              position: { right: Math.floor(bed4Length)*scale+16, bottom:0 }
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
            position: { bottom:Math.floor(bed3Breadth)*(scale+0.8), left:0 }
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
            id: 'nw',
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
            position: { left:Math.floor(bed2Length) *scale+setbacks.left*scale+12, top:0 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: Math.floor(bed2Length+setbacks.right)*(scale+0.5), top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            // position: { left: 0, top:0 }
            position: { left: Math.floor(bed3Length)*scale+setbacks.left*scale-12, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { left:Math.floor(kitchenLength)*scale, top:0 }
          })
        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'sw' }))          
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
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
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
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
  if(plotLength >= 47 && plotLength <= 49) //Breadth :47-49
     {
  const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.31
        const bed2Breadth = builtBreadth * 0.56
        const bed3Length = builtLength * 0.28  
        const bed3Breadth = builtBreadth * 0.57  
        const bed4Length = builtLength * 0.38  
        const bed4Breadth = builtBreadth * 0.45            
        const livingLength = builtLength * 0.33
        const livingBreadth = builtBreadth * 0.5
        const drawingLength = builtLength * 0.39
        const drawingBreadth = builtBreadth * 0.5  
        const kitchenLength = builtLength * 0.22
        const kitchenBreadth = builtBreadth * 0.43
        const poojaLength = builtLength * 0.08
        const poojaBreadth = builtBreadth * 0.14
        const parkingLength = builtLength * 0.26
        const parkingBreadth = builtBreadth * 0.29  
        const staircaseLength = builtLength * 0.308
        const stairCaseBreadth = builtBreadth * 0.25
        const toilet1Length = builtLength * 0.10
        const toilet1Breadth = builtBreadth * 0.15
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.15
        const toilet3Breadth = builtBreadth * 0.15
        const toilet4Length = builtLength * 0.12
        const toilet4Breadth = builtBreadth * 0.18
        const commonToiletLength = builtLength * 0.11
        const commonToiletBreadth = builtBreadth * 0.15
        const sitoutLength = builtLength * 0.4
        const sitoutBreadth = builtBreadth * 0.10
        const mediaLength = builtLength * 0.17
        const mediaBreadth = builtBreadth * 0.30
        const diningLength = builtLength * 0.12
        const diningBreadth = builtBreadth * 0.28
 
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
            position: { right: 0, top:0 }
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
            position: { bottom: 0, right:0 }
           


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { right: Math.floor(bed4Length)*scale+12, bottom:0 }
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
              position: { top: 0, left:Math.floor(bed2Length)*(scale-0.5) }
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
            position: { top: Math.floor(kitchenBreadth)*scale, left:Math.floor(toilet3Length)*(scale+2.8) }
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
            id: 'nw',
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
            position: { left: 0 *scale, top:Math.floor(kitchenBreadth)*(scale-3.4)}
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { left: Math.floor(kitchenLength)*(scale), top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            // position: { left: 0, top:0 }
            position:{ top: 0 *scale, left:Math.floor(kitchenLength+diningLength/1.4)*scale }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top:0, left:Math.floor(kitchenLength-diningLength/3)*(scale) }
          })
        )

      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'sw' }))          
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
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
  if(plotLength >= 50 && plotLength <= 53) //Breadth :50-53
    {
  const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.25
        const bed2Breadth = builtBreadth * 0.41
        const bed3Length = builtLength * 0.28  
        const bed3Breadth = builtBreadth * 0.50  
        const bed4Length = builtLength * 0.32  
        const bed4Breadth = builtBreadth * 0.6            
        const livingLength = builtLength * 0.4
        const livingBreadth = builtBreadth * 0.58
        const drawingLength = builtLength * 0.3
        const drawingBreadth = builtBreadth * 0.43  
        const kitchenLength = builtLength * 0.25
        const kitchenBreadth = builtBreadth * 0.3
        const poojaLength = builtLength * 0.10
        const poojaBreadth = builtBreadth * 0.12
        const parkingLength = builtLength * 0.28
        const parkingBreadth = builtBreadth * 0.25  
        const staircaseLength = builtLength * 0.28
        const stairCaseBreadth = builtBreadth * 0.25
        const toilet1Length = builtLength * 0.10
        const toilet1Breadth = builtBreadth * 0.15
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.10
        const toilet3Breadth = builtBreadth * 0.25
        const toilet4Length = builtLength * 0.20
        const toilet4Breadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.10
        const commonToiletBreadth = builtBreadth * 0.2
        const sitoutLength = builtLength * 0.2
        const sitoutBreadth = builtBreadth * 0.14
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.25
        const diningLength = builtLength * 0.13
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
            position: { right: 0, top:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            // position: { left: 0, bottom:0 }
            position:{ right: Math.floor(bed4Length)*(scale+1.2), bottom:0 }}))

        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { bottom: 0, right:0 }
           


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position:{ left: 0, bottom:Math.floor(stairCaseBreadth-setbacks.front)*(scale)}
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
              position: { top: 0, left:Math.floor(kitchenLength)*(scale+1)+setbacks.left*scale }
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
            position: {top:Math.floor(kitchenBreadth)*(scale), left:0 }
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
        position: { top:0, bottom:0 } }))
        // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
        // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: {bottom:0, right:Math.floor(bed4Length)*(scale) }}))
        // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        position: { left: Math.floor(bed3Length/2)*scale, bottom:0 } }))




        store.dispatch(
          updateRoomData({
            id: 'nw',
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
            position: {top:Math.floor(kitchenBreadth)*(scale+3)+poojaBreadth*scale, left:0 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: {left: Math.floor(diningLength+kitchenLength)*scale, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            // position: { left: 0, top:0 }
            position: { right: Math.floor(bed2Length)*scale, top:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top:0, left:Math.floor(kitchenLength)*scale+6 }
          })
        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))        
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
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
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
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
  if(plotLength >= 54 && plotLength <= 56) //Breadth :54-56
    {
        const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.24
        const bed2Breadth = builtBreadth * 0.51
        const bed3Length = builtLength * 0.25  
        const bed3Breadth = builtBreadth * 0.50  
        const bed4Length = builtLength * 0.32  
        const bed4Breadth = builtBreadth * 0.5            
        const livingLength = builtLength * 0.280
        const livingBreadth = builtBreadth * 0.56
        const drawingLength = builtLength * 0.43
        const drawingBreadth = builtBreadth * 0.4  
        const kitchenLength = builtLength * 0.20
        const kitchenBreadth = builtBreadth * 0.30
        const poojaLength = builtLength * 0.10
        const poojaBreadth = builtBreadth * 0.15
        const parkingLength = builtLength * 0.28
        const parkingBreadth = builtBreadth * 0.25  
        const staircaseLength = builtLength * 0.28
        const stairCaseBreadth = builtBreadth * 0.25
        const toilet1Length = builtLength * 0.10
        const toilet1Breadth = builtBreadth * 0.15
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.08
        const toilet3Breadth = builtBreadth * 0.22
        const toilet4Length = builtLength * 0.08
        const toilet4Breadth = builtBreadth * 0.16
        const commonToiletLength = builtLength * 0.12
        const commonToiletBreadth = builtBreadth * 0.20
        const sitoutLength = builtLength * 0.3
        const sitoutBreadth = builtBreadth * 0.12
        const mediaLength = builtLength * 0.18
        const mediaBreadth = builtBreadth * 0.3
        const diningLength = builtLength * 0.13
        const diningBreadth = builtBreadth * 0.30
        const extraBathLength = builtLength * 0.22
        const extraBathBreadth = builtBreadth * 0.25
 
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
        // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraBath' }))
 
        //update dimensions and positions
      setTimeout(() => {
     
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: {right:0, top:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            // position: { left: 0, bottom:0 }
            position: { right:Math.floor(bed4Length)*(scale+0.5), bottom:Math.floor(extraBathBreadth)*scale-setbacks.front*scale }
          }))
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { bottom: 0, right:0 }
           }))
           store.dispatch(
            updateRoomData({
              id: 'sw',
              roomType: 'extraBath',
              length: extraBathLength,
              breadth: extraBathBreadth,
              position: { right: Math.floor(bed4Length)*scale, bottom:0 }
           }))
    
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { left:0, bottom:0 }
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
              position: { top: 0, right:Math.floor(bed2Length)*(scale+1.5)}
              })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'kitchen',
            length: kitchenLength,
            breadth: kitchenBreadth,
            position: {top: 0, left:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'pooja',
            length: poojaLength,
            breadth: poojaBreadth,
            position: { top:Math.floor(kitchenBreadth)*scale, left:0 }
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
        position: { top:0, bottom:0 } }))
        // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
        // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
        // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        // position: { bottom:0, left:0 }}))
        // // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
        // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        // position: {left: Math.floor(bed3Length)*(scale-10),bottom:0 } }))




        store.dispatch(
          updateRoomData({
            id: 'nw',
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
            position: { top: 0 *scale, right:Math.floor(bed2Length)*(scale+0.5)+setbacks.right*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: Math.floor(diningLength+kitchenLength)*(scale+2)+setbacks.right*scale, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left:Math.floor(livingLength)*(scale+0.5),bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
            // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top:0, left:Math.floor(kitchenLength)*scale+6 }
          })
        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))        
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'sw' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
  if(plotLength >= 57 && plotLength <= 59) //Breadth :57-59
    {
  const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.35
        const bed2Length = builtLength * 0.25
        const bed2Breadth = builtBreadth * 0.42
        const bed3Length = builtLength * 0.245 
        const bed3Breadth = builtBreadth * 0.45  
        const bed4Length = builtLength * 0.27  
        const bed4Breadth = builtBreadth * 0.35            
        const livingLength = builtLength * 0.28
        const livingBreadth = builtBreadth * 0.35
        const drawingLength = builtLength * 0.47
        const drawingBreadth = builtBreadth * 0.29  
        const kitchenLength = builtLength * 0.25
        const kitchenBreadth = builtBreadth * 0.39
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.18
        const parkingLength = builtLength * 0.25
        const parkingBreadth = builtBreadth * 0.25  
        const staircaseLength = builtLength * 0.28
        const stairCaseBreadth = builtBreadth * 0.17
        const toilet1Length = builtLength * 0.15
        const toilet1Breadth = builtBreadth * 0.12
        const toilet2Length = builtLength * 0.15
        const toilet2Breadth = builtBreadth * 0.12
        const toilet3Length = builtLength * 0.08
        const toilet3Breadth = builtBreadth * 0.22
        const toilet4Length = builtLength * 0.08
        const toilet4Breadth = builtBreadth * 0.16
        const commonToiletLength = builtLength * 0.20
        const commonToiletBreadth = builtBreadth * 0.11
        const sitoutLength = builtLength * 0.15
        const sitoutBreadth = builtBreadth * 0.23
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.25
        const diningLength = builtLength * 0.19
        const diningBreadth = builtBreadth * 0.38
 
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
            position: { top: 0, right:Math.floor(bed2Length)*(scale+1.5) }}))

        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { top: 0, right:0 } }))

        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            // position: { left: 0, bottom:0 }
            position: { left: 0, bottom:Math.floor(stairCaseBreadth*scale)-setbacks.front*scale }}))

        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { bottom: 0, right:0 }
          }))
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { left:Math.floor(bed3Length)*(scale+1.2), bottom:0 }
          }))
        }, 100);
        setTimeout(() => {
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { top: Math.floor(diningBreadth)*scale, left:Math.floor(kitchenLength)*(scale+1.5) }
              }))
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
            position: { top: Math.floor(bed1Breadth) *scale+6, left:0 }
          }))
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
        position: { right:0, top:0 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
        // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: { bottom: 0, left:0 }}))
        // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
        // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        // position: { left: 0, bottom:0 } }))




        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{right:Math.floor(livingLength*parseInt(scale-1.5)), bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { top: 0 *scale, left:Math.floor(bed1Length)*scale+setbacks.left*scale+10 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right:0,bottom:Math.floor(bed4Length)*(scale+1.8) }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { right:Math.floor(bed1Length)*(scale), bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
            // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
           }))
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top:0, left:Math.floor(kitchenLength)*scale }}))
          
          }, 100);            //Add walls

        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))        
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
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
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }   
  if(plotLength >= 60 && plotLength <= 63) //Breadth :60-63
    {
  const bed1Length = builtLength * 0.25
  const bed1Breadth = builtBreadth * 0.36
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.45
  const bed3Length = builtLength * 0.22
  const bed3Breadth = builtBreadth * 0.4  
  const bed4Length = builtLength * 0.27  
  const bed4Breadth = builtBreadth * 0.45            
  const livingLength = builtLength * 0.28
  const livingBreadth = builtBreadth * 0.55
  const drawingLength = builtLength * 0.26
  const drawingBreadth = builtBreadth * 0.45  
  const kitchenLength = builtLength * 0.19
  const kitchenBreadth = builtBreadth * 0.39
  const poojaLength = builtLength * 0.10
  const poojaBreadth = builtBreadth * 0.15
  const parkingLength = builtLength * 0.25
  const parkingBreadth = builtBreadth * 0.25  
  const staircaseLength = builtLength * 0.28
  const stairCaseBreadth = builtBreadth * 0.20
  const toilet1Length = builtLength * 0.10
  const toilet1Breadth = builtBreadth * 0.14
  const toilet2Length = builtLength * 0.07
  const toilet2Breadth = builtBreadth * 0.25
  const toilet3Length = builtLength * 0.08
  const toilet3Breadth = builtBreadth * 0.22
  const toilet4Length = builtLength * 0.08
  const toilet4Breadth = builtBreadth * 0.16
  const commonToiletLength = builtLength * 0.10
  const commonToiletBreadth = builtBreadth * 0.14
  const sitoutLength = builtLength * 0.2
  const sitoutBreadth = builtBreadth * 0.15
  const mediaLength = builtLength * 0.18
  const mediaBreadth = builtBreadth * 0.31
  const diningLength = builtLength * 0.25
  const diningBreadth = builtBreadth * 0.15

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
      position: {left:Math.floor(bed3Length*scale), bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { right: 0, bottom:0 }
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
      position: { top: 0, right:0 }

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
      position: { right: Math.floor(bed2Length)*scale, bottom:0 }
    })
    )
  store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: {top:0, right:Math.floor(bed4Length)*scale }
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
      position: { top:0, left:Math.floor(kitchenLength)*scale }
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
  position: { right:0, top: Math.floor(parkingBreadth) *(scale+6) } }))
  store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
  // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
  store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
  position: { bottom: 0, left:0 }}))
  // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
  store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
  position: { left: Math.floor(bed1Breadth)*(scale-1.5), bottom:0 } }))




  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'parking',
      length: parkingLength,
      breadth: parkingBreadth,
      position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'commonToilet',
      length: commonToiletLength,
      breadth: commonToiletBreadth,
      position: { top: 0 *scale, left:Math.floor(kitchenLength+poojaLength)*scale+setbacks.left*scale}
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: { right: Math.floor(bed4Length)*(scale)+(setbacks.right)*(scale+1), top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: { left: Math.floor(kitchenLength+poojaLength)*scale, top:0 }
      // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
     
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top: Math.floor(kitchenBreadth)*scale, left:0 }
    })
  )
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))        
  store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
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
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'drawing', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
  //Add opening
  store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
  store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
  store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
  //Add doors  
  store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
  store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
  store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
  store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
  store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
  if(plotLength >= 64 && plotLength <= 67) //Breadth :64-67
    {
        const bed1Length = builtLength * 0.27
        const bed1Breadth = builtBreadth * 0.5
        const bed2Length = builtLength * 0.25
        const bed2Breadth = builtBreadth * 0.42
        const bed3Length = builtLength * 0.25  
        const bed3Breadth = builtBreadth * 0.4  
        const bed4Length = builtLength * 0.27  
        const bed4Breadth = builtBreadth * 0.5            
        const livingLength = builtLength * 0.235
        const livingBreadth = builtBreadth * 0.33
        const drawingLength = builtLength * 0.25
        const drawingBreadth = builtBreadth * 0.5  
        const kitchenLength = builtLength * 0.19
        const kitchenBreadth = builtBreadth * 0.39
        const poojaLength = builtLength * 0.08
        const poojaBreadth = builtBreadth * 0.19
        const parkingLength = builtLength * 0.25
        const parkingBreadth = builtBreadth * 0.25  
        const staircaseLength = builtLength * 0.28
        const stairCaseBreadth = builtBreadth * 0.17
        const toilet1Length = builtLength * 0.10
        const toilet1Breadth = builtBreadth * 0.12
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.08
        const toilet3Breadth = builtBreadth * 0.22
        const toilet4Length = builtLength * 0.08
        const toilet4Breadth = builtBreadth * 0.16
        const commonToiletLength = builtLength * 0.154
        const commonToiletBreadth = builtBreadth * 0.18
        const sitoutLength = builtLength * 0.25
        const sitoutBreadth = builtBreadth * 0.11
        const mediaLength = builtLength * 0.16
        const mediaBreadth = builtBreadth * 0.24
        const diningLength = builtLength * 0.19
        const diningBreadth = builtBreadth * 0.26
        const extraBathLength = builtLength * 0.19
        const extraBathBreadth = builtBreadth * 0.22
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
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
        //update dimensions and positions
        setTimeout(() => {
          
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
            position: { right: Math.floor(bed4Length)*(scale)+9, top:0 }}))

        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { right:0, bottom:0}
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
            position: { top: 0, right:0 }}))
         
         store.dispatch(
            updateRoomData({
             id: 'ne',
             roomType:'extraBath',
             length:extraBathLength,
             breadth:extraBathBreadth,
             position: { right:0, top:Math.floor(bed4Breadth)*scale }}))
            

        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: {left: Math.floor(bed3Length)*(scale)+9, bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
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
              position: {top:0, right:Math.floor(bed4Length+bed1Length)*(scale)+12 }
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
            position: { top: Math.floor(kitchenBreadth) *scale, left:0 }
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
        // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        // position: { right:0, top: Math.floor(stairCaseBreadth+setbacks.front) *scale } }))
        // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
        // // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: { bottom: 0, left:0 }}))
        // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        position: { left:0, bottom:0 } }))




        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { top: 0 *scale, left:Math.floor(kitchenLength+diningLength)*scale+setbacks.left*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: {right:Math.floor(bed2Length)*(scale)+9+setbacks.right*scale, bottom:Math.floor(setbacks.front)*scale}
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: {right:Math.floor(bed2Length)*(scale)+9, bottom:Math.floor(sitoutBreadth)*scale-12}
            // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top:0, left: Math.floor(kitchenLength)*scale }
          })

        )
             
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))        
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false
       }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor:false}))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor:false }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
  if(plotLength >= 68 && plotLength <= 70) //Breadth :68-70
    {
        const bed1Length = builtLength * 0.28
        const bed1Breadth = builtBreadth * 0.34
        const bed2Length = builtLength * 0.25
        const bed2Breadth = builtBreadth * 0.42
        const bed3Length = builtLength * 0.25  
        const bed3Breadth = builtBreadth * 0.4  
        const bed4Length = builtLength * 0.28  
        const bed4Breadth = builtBreadth * 0.33            
        const livingLength = builtLength * 0.36
        const livingBreadth = builtBreadth * 0.34
        const drawingLength = builtLength * 0.21
        const drawingBreadth = builtBreadth * 0.64
        const kitchenLength = builtLength * 0.19
        const kitchenBreadth = builtBreadth * 0.39
        const poojaLength = builtLength * 0.1
        const poojaBreadth = builtBreadth * 0.12
        const parkingLength = builtLength * 0.25
        const parkingBreadth = builtBreadth * 0.25  
        const staircaseLength = builtLength * 0.28
        const stairCaseBreadth = builtBreadth * 0.17
        const toilet1Length = builtLength * 0.10
        const toilet1Breadth = builtBreadth * 0.12
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.08
        const toilet3Breadth = builtBreadth * 0.22
        const toilet4Length = builtLength * 0.098
        const toilet4Breadth = builtBreadth * 0.21
        const commonToiletLength = builtLength * 0.15
        const commonToiletBreadth = builtBreadth * 0.19
        const sitoutLength = builtLength * 0.2
        const sitoutBreadth = builtBreadth * 0.15
        const mediaLength = builtLength * 0.14
        const mediaBreadth = builtBreadth * 0.33
        const diningLength = builtLength * 0.14
        const diningBreadth = builtBreadth * 0.3
        const extraBathLength = builtLength * 0.09
        const extraBathBreadth = builtBreadth * 0.45
 
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
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        //update dimensions and positions
        setTimeout(() => {
      
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
            position: {right:0, top:Math.floor(bed4Breadth)*scale }
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { left: Math.floor(bed3Length)*scale+14, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
          }))
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            // position: { left: 0, bottom:0 }
            position: { left: 0, bottom:Math.floor(stairCaseBreadth*scale)-setbacks.front*scale }}))
        
         store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: {right:0, top:0 }


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { right: Math.floor(mediaLength)*scale+6, bottom:0 }}))

        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'extraBath',
            length: extraBathLength,
            breadth:extraBathBreadth,
            position: {top:Math.floor(bed4Breadth)*(scale-4), right:0 }}))
            
        }, 100);
        setTimeout(() => {
     
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { bottom: Math.floor(livingBreadth)*scale+10, right:Math.floor(bed1Length)*(scale+1) }
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
            position: { top: Math.floor(kitchenBreadth-poojaBreadth) *scale, left:0 }
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
        position: { right:0, top: Math.floor(stairCaseBreadth+setbacks.front) *scale } }))
        // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
        // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: { bottom: 0, left:0 }}))
        // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
        // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth}))




        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: {top: Math.floor(kitchenBreadth)*scale+setbacks.back*scale, left:0}
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { left: Math.floor(kitchenLength+diningLength)*scale+8, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { bottom:0, right:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top:0, left:Math.floor(kitchenLength)*scale }
          })

        )
               
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
       
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
                
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
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
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status:false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'extraBath', id: 'nw' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
  if(plotLength >= 71 && plotLength <= 73) //Breadth :71-73
  {
  const bed1Length = builtLength * 0.27
  const bed1Breadth = builtBreadth * 0.35
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.42
  const bed3Length = builtLength * 0.25  
  const bed3Breadth = builtBreadth * 0.42  
  const bed4Length = builtLength * 0.25  
  const bed4Breadth = builtBreadth * 0.42            
  const livingLength = builtLength * 0.36
  const livingBreadth = builtBreadth * 0.42
  const drawingLength = builtLength * 0.20
  const drawingBreadth = builtBreadth * 0.58
  const kitchenLength = builtLength * 0.21
  const kitchenBreadth = builtBreadth * 0.28
  const poojaLength = builtLength * 0.10
  const poojaBreadth = builtBreadth * 0.12
  const parkingLength = builtLength * 0.25
  const parkingBreadth = builtBreadth * 0.25  
  const staircaseLength = builtLength * 0.25
  const stairCaseBreadth = builtBreadth * 0.17
  const toilet1Length = builtLength * 0.10
  const toilet1Breadth = builtBreadth * 0.12
  const toilet2Length = builtLength * 0.07
  const toilet2Breadth = builtBreadth * 0.25
  const toilet3Length = builtLength * 0.08
  const toilet3Breadth = builtBreadth * 0.22
  const toilet4Length = builtLength * 0.1
  const toilet4Breadth = builtBreadth * 0.21
  const commonToiletLength = builtLength * 0.15
  const commonToiletBreadth = builtBreadth * 0.22
  const sitoutLength = builtLength * 0.12
  const sitoutBreadth = builtBreadth * 0.19
  const mediaLength = builtLength * 0.14
  const mediaBreadth = builtBreadth * 0.21
  const diningLength = builtLength * 0.14
  const diningBreadth = builtBreadth * 0.35

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
      position:{bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale,right:0}
     
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { right: Math.floor(bed1Length) *scale+9, bottom:0 }
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'se',
      roomType: 'bedroom',
      length: bed3Length,
      breadth: bed3Breadth,
      // position: { left: 0, bottom:0 }
      position:{ right:Math.floor(bed4Length)*scale, top:0 } }))

  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'bedroom',
      length: bed4Length,
      breadth: bed4Breadth,
      position: { right:0, top:0 }


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
        id: '',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: {top:0, right:Math.floor(bed4Length+bed3Length)*(scale+0.3) }
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
      position: { top: Math.floor(kitchenBreadth) *scale, left:0 }
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
      position: { bottom: 0, right:0 }
    })
  )
  store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
  position: { right:0, top: Math.floor(stairCaseBreadth+setbacks.front) *scale+12 } }))
  store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
  // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
  store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
  position: { bottom: 0, left:0 }}))
  // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
  store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth}))




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
      position: { top: Math.floor(kitchenBreadth+poojaBreadth) *(scale+1), left:0}
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: {left: Math.floor(livingLength+setbacks.left)*(scale+0.5), bottom:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: {right: 0, top:Math.floor(bed4Breadth)*scale }
     
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top:0, left: Math.floor(kitchenLength)*scale }
    })

  )
    
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false , roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))        
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
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
  store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
  //Add opening
  store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
  store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening:false }))
  store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false}))
  //Add doors  
  store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
  store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
  store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: true }))
  store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
  store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
  store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
  if(plotLength >= 74 && plotLength <= 76) //Breadth :74-76
 {
  const bed1Length = builtLength * 0.245
  const bed1Breadth = builtBreadth * 0.35
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.42
  const bed3Length = builtLength * 0.25  
  const bed3Breadth = builtBreadth * 0.4  
  const bed4Length = builtLength * 0.25  
  const bed4Breadth = builtBreadth * 0.39            
  const livingLength = builtLength * 0.25
  const livingBreadth = builtBreadth * 0.45
  const drawingLength = builtLength * 0.35
  const drawingBreadth = builtBreadth * 0.48
  const kitchenLength = builtLength * 0.25
  const kitchenBreadth = builtBreadth * 0.25
  const poojaLength = builtLength * 0.07
  const poojaBreadth = builtBreadth * 0.14
  const parkingLength = builtLength * 0.25
  const parkingBreadth = builtBreadth * 0.3  
  const staircaseLength = builtLength * 0.28
  const stairCaseBreadth = builtBreadth * 0.17
  const toilet1Length = builtLength * 0.10
  const toilet1Breadth = builtBreadth * 0.12
  const toilet2Length = builtLength * 0.07
  const toilet2Breadth = builtBreadth * 0.25
  const toilet3Length = builtLength * 0.15
  const toilet3Breadth = builtBreadth * 0.125
  const toilet4Length = builtLength * 0.1
  const toilet4Breadth = builtBreadth * 0.21
  const commonToiletLength = builtLength * 0.1
  const commonToiletBreadth = builtBreadth * 0.16
  const sitoutLength = builtLength * 0.2
  const sitoutBreadth = builtBreadth * 0.15
  const mediaLength = builtLength * 0.15
  const mediaBreadth = builtBreadth * 0.22
  const diningLength = builtLength * 0.26
  const diningBreadth = builtBreadth * 0.23

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
      position: { left:Math.floor(bed3Length)*scale, bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { right:0, bottom:0 }
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'se',
      roomType: 'bedroom',
      length: bed3Length,
      breadth: bed3Breadth,
      position: { left: 0, bottom:0 }
      // position: { left: 0, bottom:Math.floor(parkingBreadth*scale)-setbacks.front*scale }


    })
  )
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'bedroom',
      length: bed4Length,
      breadth: bed4Breadth,
      position: { right: Math.floor(mediaLength)*(scale-1)+setbacks.right*scale, top:0 }


    })
  )
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'living',
      length: livingLength,
      breadth: livingBreadth,
      position: { right: Math.floor(bed2Length)*scale+6, bottom:0 }
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
        position:{ top:0, left:Math.floor(kitchenLength)*(scale)}
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
      position: { top: Math.floor(bed1Breadth) *scale+12, left:0 }
    })
  )
      
}, 100);
setTimeout(() => {
  
  store.dispatch(
    updateRoomData({
      id: 'ne',
      roomType: 'stairCase',
      length: staircaseLength,
      breadth: stairCaseBreadth,
      position: { bottom:0, left:0 }
    })
  )
  store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
  position: { right:0, top: Math.floor(stairCaseBreadth+setbacks.front) *scale } }))
  store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
  // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
  store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
  position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
  store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth}))




  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'parking',
      length: parkingLength,
      breadth: parkingBreadth,
      position: { bottom: 0, left:385 }
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'commonToilet',
      length: commonToiletLength,
      breadth: commonToiletBreadth,
      position: { right:0, bottom:Math.floor(bed2Breadth)*scale+setbacks.front*scale }
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: { left: Math.floor(kitchenLength)*(scale+2)+setbacks.right*scale+3, top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: { right:0, top:0 }
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top: Math.floor(kitchenBreadth)*scale, left:0 }
    })
  )
  
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))        
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
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
  store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
  //Add opening
  store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
  store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
  store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
  //Add doors  
  store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
  store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
  store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
  store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
   }
  if(plotLength >= 77 && plotLength <= 79) //Breadth :77-79
{
  const bed1Length = builtLength * 0.25
  const bed1Breadth = builtBreadth * 0.42
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.42
  const bed3Length = builtLength * 0.25  
  const bed3Breadth = builtBreadth * 0.4  
  const bed4Length = builtLength * 0.25  
  const bed4Breadth = builtBreadth * 0.43            
  const livingLength = builtLength * 0.26
  const livingBreadth = builtBreadth * 0.5
  const drawingLength = builtLength * 0.3
  const drawingBreadth = builtBreadth * 0.4
  const kitchenLength = builtLength * 0.25
  const kitchenBreadth = builtBreadth * 0.31
  const poojaLength = builtLength * 0.08
  const poojaBreadth = builtBreadth * 0.18
  const parkingLength = builtLength * 0.18
  const parkingBreadth = builtBreadth * 0.25  
  const staircaseLength = builtLength * 0.28
  const stairCaseBreadth = builtBreadth * 0.17
  const toilet1Length = builtLength * 0.10
  const toilet1Breadth = builtBreadth * 0.12
  const toilet2Length = builtLength * 0.07
  const toilet2Breadth = builtBreadth * 0.25
  const toilet3Length = builtLength * 0.08
  const toilet3Breadth = builtBreadth * 0.22
  const toilet4Length = builtLength * 0.1
  const toilet4Breadth = builtBreadth * 0.21
  const commonToiletLength = builtLength * 0.15
  const commonToiletBreadth = builtBreadth * 0.16
  const sitoutLength = builtLength * 0.18
  const sitoutBreadth = builtBreadth * 0.15
  const mediaLength = builtLength * 0.14
  const mediaBreadth = builtBreadth * 0.22
  const diningLength = builtLength * 0.25
  const diningBreadth = builtBreadth * 0.27
  const extraBathLength = builtLength * 0.14
  const extraBathBreadth = builtBreadth * 0.25

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
  // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
  // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
  // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' })) 
  store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
  //update dimensions and positions
  setTimeout(() => {
    
  store.dispatch(
    updateRoomData({
      id: 'ne',
      roomType: 'bedroom',
      length: bed1Length,
      breadth: bed1Breadth,
      position: { right:Math.floor(bed1Length)*scale, bottom:0 }}))

  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { right: 0, bottom:0 }
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
      position: { right:0, top:0 }


    })
  )
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'living',
      length: livingLength,
      breadth: livingBreadth,
      position: { left:Math.floor(bed3Length)*(scale-0.5)+setbacks.left*scale, 
      bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }}))

  store.dispatch(
     updateRoomData({
       id: 'nw',
       roomType: 'extraBath',
       length: extraBathLength,
       breadth: extraBathBreadth,
       position: {bottom:0, right:Math.floor(bed2Length)*scale}}))

    
  }, 100);
  setTimeout(() => {
    
  store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { top: 0, left:Math.floor(kitchenLength)*scale}
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
      position: { top: Math.floor(kitchenBreadth) *scale, left:0 }
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
  // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
  // position: { right:0, top: Math.floor(stairCaseBreadth+setbacks.front) *scale } }))
  store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
  
  // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
  // position: { bottom: 0, left:0 }}))
  
  // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth}))




  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'parking',
      length: parkingLength,
      breadth: parkingBreadth,
      position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'commonToilet',
      length: commonToiletLength,
      breadth: commonToiletBreadth,
      position: { top: Math.floor(bed4Breadth+setbacks.back) *scale, right:0 }
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: {left: Math.floor(kitchenLength)*scale+setbacks.left*scale, top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: { right:Math.floor(bed4Length)*(scale+1.5), top:0 }
     
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top: Math.floor(kitchenBreadth)*scale, left:0 }
    })

  )
  
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false , roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))        
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
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
  store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
  
  //Add opening
  store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
  store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
  store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
  //Add doors  
  store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: false }))  
  store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
  store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }

  if(plotLength >= 80 && plotLength <= 90) //Breadth :80-90
{
  const bed1Length = builtLength * 0.25
  const bed1Breadth = builtBreadth * 0.42
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.42
  const bed3Length = builtLength * 0.25  
  const bed3Breadth = builtBreadth * 0.4  
  const bed4Length = builtLength * 0.25  
  const bed4Breadth = builtBreadth * 0.43            
  const livingLength = builtLength * 0.26
  const livingBreadth = builtBreadth * 0.5
  const drawingLength = builtLength * 0.3
  const drawingBreadth = builtBreadth * 0.4
  const kitchenLength = builtLength * 0.25
  const kitchenBreadth = builtBreadth * 0.31
  const poojaLength = builtLength * 0.08
  const poojaBreadth = builtBreadth * 0.18
  const parkingLength = builtLength * 0.18
  const parkingBreadth = builtBreadth * 0.25  
  const staircaseLength = builtLength * 0.28
  const stairCaseBreadth = builtBreadth * 0.17
  const toilet1Length = builtLength * 0.10
  const toilet1Breadth = builtBreadth * 0.12
  const toilet2Length = builtLength * 0.07
  const toilet2Breadth = builtBreadth * 0.25
  const toilet3Length = builtLength * 0.08
  const toilet3Breadth = builtBreadth * 0.22
  const toilet4Length = builtLength * 0.1
  const toilet4Breadth = builtBreadth * 0.21
  const commonToiletLength = builtLength * 0.15
  const commonToiletBreadth = builtBreadth * 0.16
  const sitoutLength = builtLength * 0.18
  const sitoutBreadth = builtBreadth * 0.15
  const mediaLength = builtLength * 0.14
  const mediaBreadth = builtBreadth * 0.22
  const diningLength = builtLength * 0.25
  const diningBreadth = builtBreadth * 0.27
  const extraBathLength = builtLength * 0.2
  const extraBathBreadth = builtBreadth * 0.18

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
  // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
  // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
  // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
  store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' })) 
  store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
  //update dimensions and positions
  setTimeout(() => {
    
  store.dispatch(
    updateRoomData({
      id: 'ne',
      roomType: 'bedroom',
      length: bed1Length,
      breadth: bed1Breadth,
      position: { right:Math.floor(bed1Length)*scale, bottom:0 }}))

  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { right: 0, bottom:0 }
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
      position: { right:0, top:0 }


    })
  )
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'living',
      length: livingLength,
      breadth: livingBreadth,
      position: { left:Math.floor(bed3Length)*(scale-1)+setbacks.left*scale, 
      bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }}))

  store.dispatch(
     updateRoomData({
       id: 'nw',
       roomType: 'extraBath',
       length: extraBathLength,
       breadth: extraBathBreadth,
       position: {bottom:0, right:Math.floor(bed2Length)*scale}}))

    
  }, 100);
  setTimeout(() => {
    
  store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { top: 0, left:Math.floor(kitchenLength)*scale}
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
      position: { top: Math.floor(kitchenBreadth) *scale, left:0 }
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
  // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
  // position: { right:0, top: Math.floor(stairCaseBreadth+setbacks.front) *scale } }))
  // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
  
  store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
  position: { bottom: 0, left:0 }}))
  
  // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth}))




  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'parking',
      length: parkingLength,
      breadth: parkingBreadth,
      position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'commonToilet',
      length: commonToiletLength,
      breadth: commonToiletBreadth,
      position: { top: Math.floor(bed4Breadth+setbacks.back) *scale, right:0 }
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: {left: Math.floor(kitchenLength)*scale+setbacks.left*scale, top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: { right:Math.floor(bed4Length)*(scale+1.5), top:0 }
     
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top: Math.floor(kitchenBreadth)*scale, left:0 }
    })

  )
  
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false , roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))        
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
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
  store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
  
  //Add opening
  store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: false }))
  store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
  store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: false }))
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