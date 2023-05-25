import { ScaleLoader } from 'react-spinners'
import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../../../redux/rooms'
import { store } from '../../../../redux/store'

export async function generateW2() {
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

     if (plotBreadth >= 15 && plotBreadth <= 24) //Breadth range = 15-24
    //Breadth range = 15-25
{
setTimeout(() => {
  
  const bed1Length = builtLength * 0.62
  const bed1Breadth = builtBreadth *0.7
  store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
  store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth,
  position: { top: 0, left: 0 } }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
  const extraBathLength = builtLength * 0.32
  const extraBathBreadth = builtBreadth * 0.56
  
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'extraBath', length: extraBathLength, breadth:extraBathBreadth, 
    position: { bottom: 0, left: 0 } }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(updateWall({ id: 'extraBath-nw-front', hasDoor: true }))

  }, 100);

setTimeout(() => {
  //living
  const livingLength = builtLength * 0.38
  const livingBreadth = builtBreadth * 0.45

    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', length: livingLength, breadth: livingBreadth }))
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', position: {bottom: 0, right: 0 } }))

  }, 100);

  setTimeout(() => {
  //kitchen
  const kitchenLength = builtLength * 0.38
  const kitchenBreadth = builtBreadth * 0.55

    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth, 
    position: { top: 0, right: 0 } }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.2 * kitchenBreadth, hasOpening: true }))

  }, 100);
    
    //sitout
    setTimeout(() => {
    const drawingLength = builtLength * 0.62
    const drawingBreadth = builtBreadth * 0.30
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'drawing' }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'drawing', length:drawingLength, breadth:drawingBreadth, 
    position: {bottom:0, left:0}}))
    store.dispatch(addWallToRoom({ side: 'right', status:false, roomType: 'drawing', id: 'nw' }))
    //parking

    const parkingLength = builtLength * 0.55
    const parkingBreadth = builtBreadth * 0.25
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
    store.dispatch(updateRoomData({ id: 'sw', roomType: 'parking', length: parkingLength, breadth: parkingBreadth, 
    position: { bottom: 0, left: Math.floor(parkingLength/1.5)*scale} }))
    store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'parking', id: '' }))
  }, 100);

     }
      if (plotBreadth >= 25 && plotBreadth <= 29) //Breadth range = 25-29
    //Breadth range = 22-35
    {
           
      setTimeout(() => {
      const bed1Length = builtLength * 0.62
      const bed1Breadth = builtBreadth * 0.5
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'ne', roomType: 'bedroom', length: bed1Length,breadth: bed1Breadth, 
      position:{top:0, left:0}}))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'bedroom', id: 'ne' }))
      
      const toilet2Length = builtLength * 0.49
      const toilet2Breadth = builtBreadth * 0.15
      store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth, position: {top: 0, left: 0} }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
    }, 100);
    setTimeout(() => {
      
        
      const bed2Length = builtLength * 0.5
      const bed2Breadth = builtBreadth * 0.5
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'nw',roomType: 'bedroom',length: bed2Length,breadth: bed2Breadth}))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status:false, roomType: 'bedroom', id: 'nw' }))
      // const toilet1Length = builtLength * 0.30
      // const toilet1Breadth = builtBreadth * 0.14
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: {top: 0, left: 0 } }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    }, 100);
    setTimeout(() => {
      
    }, 100);
      const livingLength = builtLength * 0.5
      const livingBreadth = builtBreadth * 0.5
      store.dispatch(updateRoomData({id: 'sw',roomType: 'living',length: livingLength,breadth: livingBreadth, position:{bottom:0, right:0}}))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'living', id: 'nw' }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: true }))
      
    

      // const drawingLength = builtLength * 0.58
      // const drawingBreadth = builtBreadth * 0.20
      
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      // store.dispatch(updateRoomData({id: '',roomType: 'drawing',length: drawingLength,breadth: drawingBreadth,
      // position: { bottom: Math.floor(livingBreadth)*scale, right:0 }}))
      // store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))
   
     
    setTimeout(() => {
      const kitchenLength = builtLength * 0.38
      const kitchenBreadth = builtBreadth * 0.5
      store.dispatch( updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth,
      position: { top: 0, right: 0 }}))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))

      const extraBathLength = builtLength * 0.25
      const extraBathBreadth = builtBreadth * 0.3
      store.dispatch( updateRoomData({id: 'se', roomType: 'extraBath', length:extraBathLength, breadth:extraBathBreadth, 
      position: { left:0, top:Math.floor(bed1Breadth)*scale}}))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'extraBath', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'extraBath', id: 'se' }))

    
   
      const commonToiletLength = builtLength * 0.15
      const commonToiletBreadth = builtBreadth * 0.20
      store.dispatch( updateRoomData({ id: 'ne', roomType: 'commonToilet',length: commonToiletLength, breadth: commonToiletBreadth, }) )
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'commonToilet' }))
      store.dispatch( updateRoomData({id: 'ne',roomType: 'commonToilet', position:{top:0*scale, right: 0 }}) )
     
      
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: 'ne' }))
      store.dispatch(updateWall({ id: 'commonToilet-ne-right', hasDoor: false }))
       
    
      const sitoutLength = builtLength * 0.15
      const sitoutBreadth = builtBreadth * 0.15      
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch( updateRoomData({ id: '',roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth, 
      position: { right:0, top:Math.floor(bed2Breadth)*scale }  }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))

      const diningLength = builtLength * 0.25
      const diningBreadth = builtBreadth * 0.10
 
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
      store.dispatch( updateRoomData({ id: '', roomType: 'dining',length: diningLength,  breadth: diningBreadth}))
      store.dispatch(updateRoomData({ id: '', roomType: 'dining', 
      position: { bottom: Math.floor((kitchenBreadth) * parseInt(scale)), right:0 } }) )
    }, 100);

    setTimeout(() => {
    
      const parkingLength = builtLength * 0.5
      const parkingBreadth = builtBreadth * 0.22
      store.dispatch( updateRoomData({id: 'ne', roomType: 'parking',length: parkingLength, breadth: parkingBreadth, 
      position:{bottom:0, right:0}}) )
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
  

      const staircaseLength = builtLength * 0.5
      const stairCaseBreadth = builtBreadth * 0.22
      store.dispatch( updateRoomData({ id: 'se', roomType: 'stairCase', length: staircaseLength, breadth: stairCaseBreadth,
      position:{bottom:0, left:0} }) )
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    

      // const corridorLength = builtLength * 0.41
      // const corridorBreadth = builtBreadth * 0.23
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'corridor' }))
      // store.dispatch(updateRoomData({id: '',roomType: 'corridor',length: corridorLength,breadth: corridorBreadth,position: { bottom: 0, left:0 }}))
    }, 100);
 
    }
     if (plotBreadth >= 30 && plotBreadth <= 35) //d Breadth range = 30-35 

    {
        const bed1Length = builtLength * 0.52
        const bed1Breadth = builtBreadth * 0.45
        const bed2Length = builtLength * 0.55
        const bed2Breadth = builtBreadth * 0.45
             
        const livingLength = builtLength * 0.45
        const livingBreadth = builtBreadth * 0.48
        
        const kitchenLength = builtLength * 0.48
        const kitchenBreadth = builtBreadth * 0.3
        const poojaLength = builtLength * 0.13
        const poojaBreadth = builtBreadth * 0.115
        const parkingLength = builtLength * 0.55
        const parkingBreadth = builtBreadth * 0.25  
        const staircaseLength = builtLength * 0.5
        const stairCaseBreadth = builtBreadth * 0.2
        const toilet1Length = builtLength * 0.2
        const toilet1Breadth = builtBreadth * 0.12
        const toilet2Length = builtLength * 0.2
        const toilet2Breadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.18
        const commonToiletBreadth = builtBreadth * 0.25
        const sitoutLength = builtLength * 0.22
        const sitoutBreadth = builtBreadth * 0.20
            
        const diningLength = builtLength * 0.34
        const diningBreadth = builtBreadth * 0.2

        const extraBathLength = builtLength * 0.28
        const extraBathBreadth = builtBreadth * 0.2
        const extraBath1Length = builtLength * 0.28
        const extraBath1Breadth = builtBreadth * 0.2


 
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
       
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
        
 
        //update dimensions and positions
        setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
            position:{top:0,left:0}
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position:{bottom:0,left:0}
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
            position: { bottom: Math.floor(bed2Breadth)*scale+10, right:Math.floor(livingLength)*scale+14 }
          })
        )
      }, 100);
      setTimeout(() => {
       
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth,}))

        store.dispatch(
          updateRoomData({
            id: 'sw',
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
            position: { top: Math.floor(kitchenBreadth+setbacks.back) *scale-6, right:0 }
           
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
            position: { right:0, top:Math.floor(kitchenBreadth+diningBreadth)*scale+setbacks.back*scale+12 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth) *scale, right:0 }}))
            
        store.dispatch(
           updateRoomData({
            id: 'nw',
            roomType: 'extraBath',
            length: extraBathLength,
            breadth: extraBathBreadth,
            position: {top: Math.floor(bed1Breadth+extraBath1Breadth) *scale-setbacks.back*scale, left:0 }}))

            store.dispatch(
              updateRoomData({
               id: 'ne',
               roomType: 'extraBath',
               length: extraBath1Length,
               breadth: extraBath1Breadth,
               position: { top: Math.floor(bed2Breadth) *scale-setbacks.back*scale+12, left:0}}))

      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'living', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
        //Add opening
        store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- front', hasDoor: false }))
     }
      if (plotBreadth >= 36 && plotBreadth <= 39) //d Breadth range = 36-39 
     {
     const bed1Length = builtLength * 0.51
     const bed1Breadth = builtBreadth * 0.32
     const bed2Length = builtLength * 0.54
     const bed2Breadth = builtBreadth * 0.31
     const bed3Length = builtLength * 0.43  
     const bed3Breadth = builtBreadth * 0.37              
     const livingLength = builtLength * 0.45
     const livingBreadth = builtBreadth * 0.33
     const drawingLength = builtLength * 0.45
     const drawingBreadth = builtBreadth * 0.25
     const kitchenLength = builtLength * 0.26
     const kitchenBreadth = builtBreadth * 0.25
     const poojaLength = builtLength * 0.15
     const poojaBreadth = builtBreadth * 0.10
     const parkingLength = builtLength * 0.4
     const parkingBreadth = builtBreadth * 0.18  
     const staircaseLength = builtLength * 0.4
     const stairCaseBreadth = builtBreadth * 0.16
     const toilet1Length = builtLength * 0.18
     const toilet1Breadth = builtBreadth * 0.12
     const toilet2Length = builtLength * 0.18
     const toilet2Breadth = builtBreadth * 0.13
     const toilet3Length = builtLength * 0.43
     const toilet3Breadth = builtBreadth * 0.13
     const commonToiletLength = builtLength * 0.15
     const commonToiletBreadth = builtBreadth * 0.15
     const sitoutLength = builtLength * 0.20
     const sitoutBreadth = builtBreadth * 0.28
     const mediaLength = builtLength * 0.09
     const mediaBreadth = builtBreadth * 0.25
     const diningLength = builtLength * 0.36
     const diningBreadth = builtBreadth * 0.21

     //add rooms
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
     store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
     store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
     store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
    //  store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
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
         position:{top:0,left:0}
        
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'nw',
         roomType: 'bedroom',
         length: bed2Length,
         breadth: bed2Breadth,
         position:{bottom:0,left:0}
       })
     )
     store.dispatch(
       updateRoomData({
         id: 'se',
         roomType: 'bedroom',
         length: bed3Length,
         breadth: bed3Breadth,
         position: { bottom: Math.floor(bed2Breadth)*scale+18, left:0 }
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
       })
       )
     store.dispatch(
         updateRoomData({
           id: '',
           roomType: 'drawing',
           length: drawingLength,
           breadth: drawingBreadth,
           position: { bottom: Math.floor(livingBreadth)*scale, right:0 }
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
         position: { top: Math.floor(sitoutBreadth)*scale-14, left:Math.floor(bed2Length)*scale-12 }
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

     store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
     position: {bottom: 0, right: 0}}))

     store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
     position: {bottom: 0, left: 0}}))
       
    store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
    position: {top: Math.floor(bed2Breadth)*scale, left: 0}}))

     store.dispatch(
       updateRoomData({
         id: 'sw',
         roomType: 'parking',
         length: parkingLength,
         breadth: parkingBreadth,
         position:{right:0, bottom:0}
       })
     )
    
    }, 100);
    
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'commonToilet',
         length: commonToiletLength,
         breadth: commonToiletBreadth,
         position: { right:0, top:Math.floor(kitchenBreadth)*scale }
        
        
       })
     )

    setTimeout(() => {
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'sitout',
         length: sitoutLength,
         breadth: sitoutBreadth,
         position: { right: Math.floor(kitchenLength+setbacks.right)*scale+16, top:0 }
       })
     )


    //  store.dispatch(
    //    updateRoomData({
    //      id: '',
    //      roomType: 'media',
    //      length: mediaLength,
    //      breadth: mediaBreadth,
    //      position: { top: Math.floor(kitchenBreadth+diningBreadth) *scale, right:0 }
    //    })
    //  )
    
     store.dispatch(
       updateRoomData({
         id: '',
         roomType: 'dining',
         length: diningLength,
         breadth: diningBreadth,
         position: { top: Math.floor(kitchenBreadth) *scale, right:0 }
       })
     )
    }, 100);
     //Add walls
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'se' }))
     store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))

     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
     store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
     store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'commonToilet', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
     store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'living', id: 'ne' }))
   
     //Add opening
     store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
     store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
     //Add doors  
     store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: true }))
     store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: true }))
     
     store.dispatch(updateWall({ id: 'toilet-se-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
     store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
     }
      if (plotBreadth >= 40 && plotBreadth <= 42) //d Breadth range = 40-42
     {
         //bedroom3
         const bed1Length = builtLength * 0.4
         const bed1Breadth = builtBreadth * 0.4
         const bed2Length = builtLength * 0.45
         const bed2Breadth = builtBreadth * 0.35
         const bed3Length = builtLength * 0.40  
         const bed3Breadth = builtBreadth * 0.30              
         const livingLength = builtLength * 0.55
         const livingBreadth = builtBreadth * 0.33
         const drawingLength = builtLength * 0.45
         const drawingBreadth = builtBreadth * 0.26
         const kitchenLength = builtLength * 0.4
         const kitchenBreadth = builtBreadth * 0.22
         const poojaLength = builtLength * 0.15
         const poojaBreadth = builtBreadth * 0.10
         const parkingLength = builtLength * 0.45
         const parkingBreadth = builtBreadth * 0.15  
         const staircaseLength = builtLength * 0.35
         const stairCaseBreadth = builtBreadth * 0.15
         
         const commonToiletLength = builtLength * 0.13
         const commonToiletBreadth = builtBreadth * 0.15
         const sitoutLength = builtLength * 0.13
         const sitoutBreadth = builtBreadth * 0.15
         const mediaLength = builtLength * 0.22
         const mediaBreadth = builtBreadth * 0.26
         const diningLength = builtLength * 0.4
         const diningBreadth = builtBreadth * 0.175
         
         const extraBathLength = builtLength * 0.16
         const extraBathBreadth = builtBreadth * 0.2
         
         const extraSitoutLength = builtLength * 0.4
         const extraSitoutBreadth = builtBreadth * 0.08 
         
         const extraBath2Length = builtLength * 0.16
         const extraBath2Breadth = builtBreadth * 0.2
  
         //add rooms
         store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
         store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))  
         store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
         store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
         store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
         store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
         store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
         store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
         
         store.dispatch(addRoomToPlot({ position: 'se', roomType: 'commonToilet' }))
         store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'sitout' }))
         store.dispatch(addRoomToPlot({ position: 'se', roomType: 'media' }))
         store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
         store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'drawing' }))
         store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
         store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'extraBath' }))
         store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' }))
  
         //update dimensions and positions
       setTimeout(() => {
         
       
         store.dispatch(
           updateRoomData({
             id: 'ne',
             roomType: 'bedroom',
             length: bed1Length,
             breadth: bed1Breadth,
            
           })
         )
         store.dispatch(
           updateRoomData({
             id: 'nw',
             roomType: 'bedroom',
             length: bed2Length,
             breadth: bed2Breadth,
             position: { top: Math.floor(bed1Breadth)*scale, left:0 }
           })
         )
         store.dispatch(
           updateRoomData({
             id: 'se',
             roomType: 'bedroom',
             length: bed3Length,
             breadth: bed3Breadth,
             position: { right:0, top: Math.floor(kitchenBreadth+diningBreadth)*scale-9 }
 
           })
         )
         store.dispatch(
           updateRoomData({
             id: 'sw',
             roomType: 'living',
             length: livingLength,
             breadth: livingBreadth,
           })
           )
         store.dispatch(
             updateRoomData({
               id: 'nw',
               roomType: 'drawing',
               length: drawingLength,
               breadth: drawingBreadth,
               position: { bottom: 0, left:0 }
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
             position: {left: Math.floor(bed1Length)*scale+12, top:Math.floor(mediaBreadth)*scale }
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
         
         store.dispatch(
           updateRoomData({
             id: 'sw',
             roomType: 'parking',
             length: parkingLength,
             breadth: parkingBreadth,
           })
         )
        
         store.dispatch(
           updateRoomData({
             id: 'nw',
             roomType: 'commonToilet',
             length: commonToiletLength,
             breadth: commonToiletBreadth,
             position: {top: Math.floor(bed1Breadth+bed2Breadth) *scale+setbacks.back*scale-5, left: 0 }
            
            
           })
         )
 
 
         store.dispatch(
           updateRoomData({
             id: 'nw',
             roomType: 'sitout',
             length: sitoutLength,
             breadth: sitoutBreadth,
             position: { bottom: Math.floor(drawingBreadth)*scale-setbacks.front*scale+6, left:0 }
           })
         )
 
 
         store.dispatch(
           updateRoomData({
             id: 'se',
             roomType: 'media',
             length: mediaLength,
             breadth: mediaBreadth,
             position: { top:0, left:Math.floor(bed1Length)*scale+9 }
           })
         )
        
         store.dispatch(
           updateRoomData({
             id: 'se',
             roomType: 'dining',
             length: diningLength,
             breadth: diningBreadth,
             position: { top: Math.floor(kitchenBreadth) *scale-9, right:0 }
           }))
           store.dispatch(
            updateRoomData({
              id: 'se',
              roomType: 'extraSitout',
              length: extraSitoutLength,
              breadth:extraSitoutBreadth,
              position: { top:0, right: Math.floor(kitchenLength) *scale-9 }}))

            store.dispatch(
            updateRoomData({
              id: 'sw',
              roomType: 'extraBath',
              length: extraBathLength,
              breadth:extraBathBreadth,
              position: { top: Math.floor(kitchenBreadth+diningBreadth) *scale-9 , right:0}}))       
            
            store.dispatch(
            updateRoomData({
              id: 'nw',
              roomType: 'extraBath',
              length: extraBath2Length,
              breadth:extraBath2Breadth,
              position: {top: Math.floor(bed1Breadth) *scale-9 , left:0}}))                                


 
       }, 100);
         //Add walls
         store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
         store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
         store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
         store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'pooja', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
         store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
         store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
          store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
         store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'commonToilet', id: '' }))
         store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: '' }))
         store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
         store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'sitout', id: '' }))
         store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: '' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
         store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
         store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'living', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
         store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
         store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
         store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraSitout', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraSitout', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraSitout', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
         store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
         store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'sw' }))
         store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'sw' }))
         store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))

         //Add opening
         store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
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
      if (plotBreadth >= 43 && plotBreadth <= 45) //d Breadth range = 43-45 
     {
  //bedroom3
        const bed1Length = builtLength * 0.36
        const bed1Breadth = builtBreadth * 0.4
        const bed2Length = builtLength * 0.54
        const bed2Breadth = builtBreadth * 0.35
        const bed3Length = builtLength * 0.38  
        const bed3Breadth = builtBreadth * 0.30              
        const livingLength = builtLength * 0.45
        const livingBreadth = builtBreadth * 0.39
        const drawingLength = builtLength * 0.55
        const drawingBreadth = builtBreadth * 0.25
        const kitchenLength = builtLength * 0.27
        const kitchenBreadth = builtBreadth * 0.32
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.10
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.18  
        const staircaseLength = builtLength * 0.5
        const stairCaseBreadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.13
        const commonToiletBreadth = builtBreadth * 0.15
        const sitoutLength = builtLength * 0.15
        const sitoutBreadth = builtBreadth * 0.13
        const mediaLength = builtLength * 0.2
        const mediaBreadth = builtBreadth * 0.2
        const diningLength = builtLength * 0.45
        const diningBreadth = builtBreadth * 0.16
        const extraBathLength = builtLength * 0.20
        const extraBathBreadth = builtBreadth * 0.2 
        const extraBath2Length = builtLength * 0.25
        const extraBath2Breadth = builtBreadth * 0.12
 
 
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
        
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'media' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))

 
        //update dimensions and positions
        setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { top: Math.floor(bed1Breadth)*scale+9, left:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
           position: { left: Math.floor(bed1Length)*scale+5, top:0 }

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
          })
          )
        store.dispatch(
            updateRoomData({
              id: 'nw',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { bottom: 0, left:0 }
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
            position: { top: Math.floor(bed3Breadth+diningBreadth/1.3)*scale, left:Math.floor(bed2Length)*scale }
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
  

        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{right:0,bottom:0}
          })
        )
       
          store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { bottom: Math.floor(drawingBreadth)*scale, left:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { top: Math.floor(kitchenBreadth+diningBreadth) *scale, right:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth) *scale, right:0 }}))

            store.dispatch(
              updateRoomData({
                id: 'sw',
                roomType: 'commonToilet',
                length: commonToiletLength,
                breadth: commonToiletBreadth,
                position: { top: Math.floor(kitchenBreadth) *scale+setbacks.back*scale+12, right:0 }}))
                 
                store.dispatch(
                  updateRoomData({
                    id: 'nw',
                    roomType: 'extraBath',
                    length:extraBathLength,
                    breadth:extraBathBreadth,
                    position: {top: Math.floor(bed1Breadth) *scale, left:0 }}))
                    
                store.dispatch(
                   updateRoomData({
                    id: 'se',
                    roomType: 'extraBath',
                    length:extraBath2Length,
                    breadth:extraBath2Breadth,
                    position: {top:0, left:Math.floor(bed1Length)*scale-setbacks.left*scale}}))



      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'pooja', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'pooja', id: 'ne' }))

        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'commonToilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'sitout', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'sitout', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'sitout', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' })
        )
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'se' }))
        //Add opening
        store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
     }
      if (plotBreadth >= 46 && plotBreadth <= 47) //dd Breadth range = 46-48 
    {
      //bedroom3
      const bed1Length = builtLength * 0.42
        const bed1Breadth = builtBreadth * 0.4
        const bed2Length = builtLength * 0.42
        const bed2Breadth = builtBreadth * 0.28
        const bed3Length = builtLength * 0.5  
        const bed3Breadth = builtBreadth * 0.32              
        const livingLength = builtLength * 0.50
        const livingBreadth = builtBreadth * 0.33
        const drawingLength = builtLength * 0.32
        const drawingBreadth = builtBreadth * 0.31
        const kitchenLength = builtLength * 0.29
        const kitchenBreadth = builtBreadth * 0.37
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.10
        const parkingLength = builtLength * 0.35
        const parkingBreadth = builtBreadth * 0.18  
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.13
        const toilet1Length = builtLength * 0.13
        const toilet1Breadth = builtBreadth * 0.2
        const toilet2Length = builtLength * 0.22
        const toilet2Breadth = builtBreadth * 0.11
        const toilet3Length = builtLength * 0.4
        const toilet3Breadth = builtBreadth * 0.11
        const commonToiletLength = builtLength * 0.12
        const commonToiletBreadth = builtBreadth * 0.12
        const sitoutLength = builtLength * 0.10
        const sitoutBreadth = builtBreadth * 0.25
        const mediaLength = builtLength * 0.28
        const mediaBreadth = builtBreadth * 0.22
        const diningLength = builtLength * 0.28
        const diningBreadth = builtBreadth * 0.19
 
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
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
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { top: Math.floor(bed1Breadth)*scale+8, left:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            position: { left: 0, bottom:0 }

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
          })
          )
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
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
            position: { bottom: Math.floor(drawingBreadth)*scale+12, left:0 }
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
            position:{left:0, bottom:0}
          })
        )
        // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        // position: {top: 0, left: 0 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
        position: {bottom: 0, right: 0}}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: {bottom: 0, right: 0}}))

        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{right:0, bottom:0}}))
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { bottom: Math.floor(livingBreadth) *scale, right: 0 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { bottom: Math.floor(livingBreadth+setbacks.front)*scale+12, right:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left: Math.floor(bed1Length) *scale+10, right:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { left: Math.floor(bed1Length) *scale+10, top:Math.floor(mediaBreadth)*scale }
          })
        )
      }, 100);

        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
         store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
      
     }
      if (plotBreadth >= 48 && plotBreadth <= 50) //d Breadth range = 49-50 
    {
      //bedroom3
        const bed1Length = builtLength * 0.39
        const bed1Breadth = builtBreadth * 0.27
        const bed2Length = builtLength * 0.50
        const bed2Breadth = builtBreadth * 0.32
       
        const bed4Length = builtLength * 0.59 
        const bed4Breadth = builtBreadth * 0.26            
        const livingLength = builtLength * 0.5
        const livingBreadth = builtBreadth * 0.33
        const drawingLength = builtLength * 0.6
        const drawingBreadth = builtBreadth * 0.30
        const kitchenLength = builtLength * 0.3
        const kitchenBreadth = builtBreadth * 0.25
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.10
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.22  
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.13
       
        const commonToiletLength = builtLength * 0.15
        const commonToiletBreadth = builtBreadth * 0.15
        const sitoutLength = builtLength * 0.15
        const sitoutBreadth = builtBreadth * 0.19
        const mediaLength = builtLength * 0.24
        const mediaBreadth = builtBreadth * 0.17
        const diningLength = builtLength * 0.3
        const diningBreadth = builtBreadth * 0.15
        const extraBathLength = builtLength * 0.30
        const extraBathBreadth = builtBreadth * 0.15
        const extraBath1Length = builtLength * 0.22
        const extraBath1Breadth = builtBreadth * 0.2
        const extraSitoutLength = builtLength * 0.15
        const extraSitoutBreadth = builtBreadth * 0.25
 
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
       
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))
       
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'media' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraSitout' })) 
        //update dimensions and positions
        setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
            position: { left: 0, bottom:Math.floor(bed2Breadth)*scale-9 }
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { left: 0, bottom:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { left:0, top:0 }
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
              id: 'ne',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { bottom: Math.floor(livingBreadth)*scale, right:0 }
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
      }, 100);
      setTimeout(() => {
      
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'pooja',
            length: poojaLength,
            breadth: poojaBreadth,
            position: { top: Math.floor(bed4Breadth)*scale, left:Math.floor(bed1Length)*scale+9 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'stairCase',
            length: staircaseLength,
            breadth: stairCaseBreadth,
          })
        )
      
      }, 100);
setTimeout(() => {
  
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{right:0, bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { top: Math.floor(kitchenBreadth+diningBreadth) *scale, right: 0 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { bottom: Math.floor(livingBreadth+setbacks.front)*scale-10, right:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left:Math.floor(extraSitoutLength)*scale, top:Math.floor(bed4Breadth)*scale+6 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
          }))

          store.dispatch(
            updateRoomData({
              id: 'nw',
              roomType: 'extraBath',
              length: extraBathLength,
              breadth: extraBathBreadth,
              position: {bottom:Math.floor(bed2Breadth)*scale, left:0 }
            }))    
            store.dispatch(
              updateRoomData({
                id: 'ne',
                roomType: 'extraBath',
                length: extraBath1Length,
                breadth: extraBath1Breadth,
                position: { top: 0, right:Math.floor(kitchenLength)*scale+setbacks.right*scale }
              }))    
              store.dispatch(
                updateRoomData({
                  id: 'se',
                  roomType: 'extraSitout',
                  length: extraSitoutLength,
                  breadth: extraSitoutBreadth,
                  position: { left: 0, top:Math.floor(bed1Breadth)*scale }
                }))                  


      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
         store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraSitout', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraSitout', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraSitout', id: 'se' }))

        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true })) 
     }
      if (plotBreadth >= 51 && plotBreadth <= 53) //d Breadth range = 51-53 
    {
      //bedroom3
        const bed1Length = builtLength * 0.42
        const bed1Breadth = builtBreadth * 0.37
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
        const kitchenLength = builtLength * 0.32
        const kitchenBreadth = builtBreadth * 0.20
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.10
        const parkingLength = builtLength * 0.25
        const parkingBreadth = builtBreadth * 0.18  
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.13
        const toilet1Length = builtLength * 0.15
        const toilet1Breadth = builtBreadth * 0.10
        const toilet2Length = builtLength * 0.27
        const toilet2Breadth = builtBreadth * 0.10
        const toilet3Length = builtLength * 0.32
        const toilet3Breadth = builtBreadth * 0.10
        const toilet4Length = builtLength * 0.15
        const toilet4Breadth = builtBreadth * 0.10
        const commonToiletLength = builtLength * 0.17
        const commonToiletBreadth = builtBreadth * 0.22
        const sitoutLength = builtLength * 0.25
        const sitoutBreadth = builtBreadth * 0.235
        const mediaLength = builtLength * 0.265
        const mediaBreadth = builtBreadth * 0.20
        const diningLength = builtLength * 0.45
        const diningBreadth = builtBreadth * 0.14
 
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
 
        //update dimensions and positions
        setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
           
          })
        )
        // store.dispatch(
        //   updateRoomData({
        //     id: 'nw',
        //     roomType: 'bedroom',
        //     length: bed2Length,
        //     breadth: bed2Breadth,
        //     position: { left:0, bottom:0 }
        //   })
        // )
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
            position: { top:0, right:Math.floor(kitchenLength+mediaLength)*scale+10 }
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
            position:{right:0,bottom:0}
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
            position: { top: Math.floor(bed1Breadth) *scale+setbacks.back*scale+12, left:0 }}))

        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { right: Math.floor(kitchenLength)*scale+9, top:0 }}))
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale,right:0}
          })
        )
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        
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
        store.dispatch(addWallToRoom({ side: 'right', status:true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:false, roomType: 'drawing', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
     }
      if (plotBreadth >= 54 && plotBreadth <= 56) //d Breadth range = 54-56 
    {
      //bedroom3
        const bed1Length = builtLength * 0.54 
        const bed1Breadth = builtBreadth * 0.29
        const bed2Length = builtLength * 0.0
        const bed2Breadth = builtBreadth * 0.0
        const bed3Length = builtLength * 0.4  
        const bed3Breadth = builtBreadth * 0.28 
        const bed4Length = builtLength * 0.5 
        const bed4Breadth = builtBreadth * 0.32            
        const livingLength = builtLength * 0.5
        const livingBreadth = builtBreadth * 0.28
        const drawingLength = builtLength * 0.59
        const drawingBreadth = builtBreadth * 0.29
        const kitchenLength = builtLength * 0.30
        const kitchenBreadth = builtBreadth * 0.28
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.10
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.18  
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.13
        const toilet1Length = builtLength * 0.3
        const toilet1Breadth = builtBreadth * 0.1
        const toilet2Length = builtLength * 0.24
        const toilet2Breadth = builtBreadth * 0.1
        const toilet3Length = builtLength * 0.20
        const toilet3Breadth = builtBreadth * 0.10
        const commonToiletLength = builtLength * 0.25
        const commonToiletBreadth = builtBreadth * 0.10
        const sitoutLength = builtLength * 0.15
        const sitoutBreadth = builtBreadth * 0.15
        const mediaLength = builtLength * 0.16
        const mediaBreadth = builtBreadth * 0.19
        const diningLength = builtLength * 0.3
        const diningBreadth = builtBreadth * 0.20
        const extraBathLength = builtLength * 0.45
        const extraBathBreadth = builtBreadth * 0.15
 
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'parking' }))
        // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
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
              roomType: 'extraBath',
              length: extraBathLength,
              breadth: extraBathBreadth,
              position:{ top: Math.floor(bed1Breadth)*scale+setbacks.back*scale+3, left:0 } }))
           
           
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
           
          })
        )
        
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            position:{ bottom: Math.floor(livingBreadth)*scale+12, left:0 }


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { right: 0, bottom:0 }  
          })
        )
      }, 100);
      setTimeout(() => {
      
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { left: 0, bottom:0 }  }))
            
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position:{ bottom: Math.floor(bed4Breadth)*scale+10, right:0 }
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
            position:{ top: Math.floor(bed1Breadth)*scale+3, left:Math.floor(extraBathLength)*scale-setbacks.left*scale }
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
            postion:{right:0,bottom:0}
          })
        )
        // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        // position: {bottom: 0, left: 0 } }))
        // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
        // position: {bottom: 0, right: 0}}))
        // store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        // position: {bottom: 0, right: 0}}))




        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            postion:{left:0,bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position:{ bottom: Math.floor(bed4Breadth)*scale+setbacks.front*scale, right:0 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale, right: 0 }}))


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position:{ top: 0, right:Math.floor(kitchenLength)*scale } }))
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
          })
        )
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
 
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))

        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'media', id: '' }))
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
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
     }
      if (plotBreadth >= 57 && plotBreadth <= 59) //d Breadth range = 57-59 
    {
      //bedroom3
      const bed1Length = builtLength * 0.40
        const bed1Breadth = builtBreadth * 0.37
        const bed2Length = builtLength * 0.33
        const bed2Breadth = builtBreadth * 0.32
        const bed3Length = builtLength * 0.32  
        const bed3Breadth = builtBreadth * 0.34  
        const bed4Length = builtLength * 0.34  
        const bed4Breadth = builtBreadth * 0.30            
        const livingLength = builtLength * 0.37
        const livingBreadth = builtBreadth * 0.33
        const drawingLength = builtLength * 0.26
        const drawingBreadth = builtBreadth * 0.36
        const kitchenLength = builtLength * 0.27
        const kitchenBreadth = builtBreadth * 0.31
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.09
        const parkingLength = builtLength * 0.25
        const parkingBreadth = builtBreadth * 0.18  
        const staircaseLength = builtLength * 0.35
        const stairCaseBreadth = builtBreadth * 0.13
        const toilet1Length = builtLength * 0.13
        const toilet1Breadth = builtBreadth * 0.10
        const toilet2Length = builtLength * 0.13
        const toilet2Breadth = builtBreadth * 0.2
        const toilet3Length = builtLength * 0.24
        const toilet3Breadth = builtBreadth * 0.13
        const commonToiletLength = builtLength * 0.09
        const commonToiletBreadth = builtBreadth * 0.2
        const sitoutLength = builtLength * 0.13
        const sitoutBreadth = builtBreadth * 0.18
        const mediaLength = builtLength * 0.32
        const mediaBreadth = builtBreadth * 0.2
        const diningLength = builtLength * 0.35
        const diningBreadth = builtBreadth * 0.18
 
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
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
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
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { left: Math.floor(bed3Length)*scale, bottom:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            position: { left: 0, bottom:0 }


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { left: Math.floor(bed1Length)*scale, top:0 }

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
              position: { top: Math.floor(kitchenBreadth)*scale+3, right:Math.floor(diningLength)*scale }
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
            position: { bottom: Math.floor(bed3Breadth)*scale+8, left:0 }
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
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth,
        position: {bottom: 0, left: 0 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
        position: {bottom: 0, right: 0}}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: {bottom: 0, right: 0}}))




        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{right:0,bottom:0}
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
            position: { top: Math.floor(kitchenBreadth) *scale, right: 0 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { bottom: Math.floor(livingBreadth+setbacks.front)*scale+12, right:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { bottom: Math.floor(bed3Breadth+poojaBreadth) *scale+5, left:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
          })
        )
         
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'living', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
     }
      if (plotBreadth >= 60 && plotBreadth <= 64) //d Breadth range = 60-64 
    {
      //bedroom3
      const bed1Length = builtLength * 0.5
        const bed1Breadth = builtBreadth * 0.30
        const bed2Length = builtLength * 0.5
        const bed2Breadth = builtBreadth * 0.25
        const bed3Length = builtLength * 0.35  
        const bed3Breadth = builtBreadth * 0.27  
                    
        const livingLength = builtLength * 0.65
        const livingBreadth = builtBreadth * 0.25
        const drawingLength = builtLength * 0.50
        const drawingBreadth = builtBreadth * 0.25
        const kitchenLength = builtLength * 0.36
        const kitchenBreadth = builtBreadth * 0.22
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.09
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.17  
        const staircaseLength = builtLength * 0.45
        const stairCaseBreadth = builtBreadth * 0.17

        const commonToiletLength = builtLength * 0.15
        const commonToiletBreadth = builtBreadth * 0.15
        const sitoutLength = builtLength * 0.2
        const sitoutBreadth = builtBreadth * 0.20
        const mediaLength = builtLength * 0.29
        const mediaBreadth = builtBreadth * 0.16
        const diningLength = builtLength * 0.4
        const diningBreadth = builtBreadth * 0.10
        const extraBathLength = builtLength * 0.28
        const extraBathBreadth = builtBreadth * 0.16
        const extraBath1Length = builtLength * 0.20
        const extraBath1Breadth = builtBreadth * 0.23
        const extraSitoutLength = builtLength * 0.35
        const extraSitoutBreadth = builtBreadth * 0.15
        //add rooms
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
        
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'pooja' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'staircase' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'parking' }))

        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'media' }))
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'drawing' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'extraSitout' }))
 
        //update dimensions and positions
        setTimeout(() => {

        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { right: 0, bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            position: { left: 0, bottom:Math.floor(drawingBreadth*scale)+stairCaseBreadth*scale-setbacks.front*scale-12 }


          })
        )
       

      
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position:{ bottom: Math.floor(bed2Breadth+parkingBreadth)*scale-setbacks.front*scale-9, right:0 }}))
          }, 100);
          setTimeout(() => {
        store.dispatch(
            updateRoomData({
              id: 'nw',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale, left:0 }
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
            position: { left: 0, top:Math.floor(bed1Breadth)*scale+4}
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


        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position: { bottom:0, right:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { bottom: Math.floor(drawingBreadth+stairCaseBreadth) *scale-setbacks.front*scale, left: 0 }
  
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top: Math.floor(kitchenBreadth+diningBreadth+mediaBreadth)*scale, right:0 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { top: Math.floor(kitchenBreadth+diningBreadth) *scale+12, right:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale+9, right:0 }}))

                store.dispatch(
                  updateRoomData({
                    id: 'ne',
                    roomType: 'extraSitout',
                    length: extraSitoutLength,
                    breadth: extraSitoutBreadth,
                    position: { top: Math.floor(bed1Breadth)*scale, left:0 }}))                            

                  store.dispatch(
                  updateRoomData({
                    id: 'ne',
                    roomType: 'extraBath',
                    length: extraBathLength,
                    breadth: extraBathBreadth,
                    position: { top: 0,right:Math.floor(kitchenLength)*scale+setbacks.right*scale-3 }}))                            
                    
                    store.dispatch(
                      updateRoomData({
                        id: 'nw',
                        roomType: 'extraBath',
                        length: extraBath1Length,
                        breadth: extraBath1Breadth,
                        position: { bottom: Math.floor(bed2Breadth)*scale+setbacks.back*scale, right:0 }}))                            

      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
        
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'stairCase', id: '' }))

        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraSitout', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraSitout', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraSitout', id: 'ne' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
     }
      if (plotBreadth >= 65 && plotBreadth <= 70) //d Breadth range = 65-78 
     {
       //bedroom3
       const bed1Length = builtLength * 0.42
        const bed1Breadth = builtBreadth * 0.28
        const bed2Length = builtLength * 0.33
        const bed2Breadth = builtBreadth * 0.255
        const bed3Length = builtLength * 0.32  
        const bed3Breadth = builtBreadth * 0.25  
        const bed4Length = builtLength * 0.34  
        const bed4Breadth = builtBreadth * 0.28            
        const livingLength = builtLength * 0.355
        const livingBreadth = builtBreadth * 0.30
        const drawingLength = builtLength * 0.66
        const drawingBreadth = builtBreadth * 0.23
        const kitchenLength = builtLength * 0.34
        const kitchenBreadth = builtBreadth * 0.25
        const poojaLength = builtLength * 0.12
        const poojaBreadth = builtBreadth * 0.10
        const parkingLength = builtLength * 0.32
        const parkingBreadth = builtBreadth * 0.17  
        const staircaseLength = builtLength * 0.39
        const stairCaseBreadth = builtBreadth * 0.17
        
        const toilet2Length = builtLength * 0.25
        const toilet2Breadth = builtBreadth * 0.1

        const commonToiletLength = builtLength * 0.15
        const commonToiletBreadth = builtBreadth * 0.14
        const sitoutLength = builtLength * 0.20
        const sitoutBreadth = builtBreadth * 0.224
        const mediaLength = builtLength * 0.3
        const mediaBreadth = builtBreadth * 0.16
        const diningLength = builtLength * 0.23
        const diningBreadth = builtBreadth * 0.23
        const extraBathLength = builtLength * 0.4
        const extraBathBreadth = builtBreadth * 0.13
 
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
        
        
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
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
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: {right: Math.floor(livingLength)*scale+2, bottom:Math.floor(parkingBreadth)*scale-setbacks.front*scale-6 }
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'se',
            roomType: 'bedroom',
            length: bed3Length,
            breadth: bed3Breadth,
            position: { left: 0, bottom:Math.floor(stairCaseBreadth+setbacks.front*scale) }


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'bedroom',
            length: bed4Length,
            breadth: bed4Breadth,
            position: { top: Math.floor(kitchenBreadth)*scale+16, right:0 }}))
       

      }, 100);
      setTimeout(() => {
      
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position:{bottom:0, right:0}
          })
          )
        store.dispatch(
            updateRoomData({
              id: 'se',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { bottom: Math.floor(bed3Breadth+stairCaseBreadth)*scale-setbacks.front*scale+9, left:0 }
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
            position: { left: Math.floor(mediaLength)*scale+6, top:Math.floor(bed1Breadth)*scale+10}
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

        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,
        position: {bottom: 0, right: 0}}))
 


        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'parking',
            length: parkingLength,
            breadth: parkingBreadth,
            position:{bottom:0, left:Math.floor(staircaseLength)*scale}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { top: Math.floor(kitchenBreadth) *scale, right: 0 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { bottom: Math.floor(livingBreadth)*scale+setbacks.front*scale, right:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { top: Math.floor(bed1Breadth)*scale+10, left:0 }
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position:{ top: 0, right:Math.floor(bed4Length)*scale+8 }
          }))
          store.dispatch(
            updateRoomData({
                  id: 'nw',
                  roomType: 'extraBath',
                  length: extraBathLength,
                  breadth: extraBathBreadth,
                  position: { bottom: Math.floor(bed3Breadth+stairCaseBreadth)*scale-setbacks.front*scale+20, left:0 }}))            
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
       
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'toilet', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status:true, roomType: 'extraBath', id: 'nw' }))
        
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: false }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-nw-back', hasDoor: false }))
        store.dispatch(updateWall({ id: 'media-right', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'commonToilet- right', hasDoor: true }))
      }
    }   
// length > breadth
  function generateTypeB() {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot
    
   if(plotLength >= 15 && plotLength <= 19) //Breadth :15-20 
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
        const parkingLength = builtLength * 0.5
        const parkingBreadth = builtBreadth * 0.45  
        const staircaseLength = builtLength * 0.5
        const stairCaseBreadth = builtBreadth * 0.4
        const toilet1Length = builtLength * 0.5
        const toilet1Breadth = builtBreadth * 0.29
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.18
        const toilet3Breadth = builtBreadth * 0.15
        const toilet4Length = builtLength * 0.12
        const toilet4Breadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.14
        const commonToiletBreadth = builtBreadth * 0.55
        const sitoutLength = builtLength * 0.14
        const sitoutBreadth = builtBreadth * 0.55
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
        store.dispatch(addRoomToPlot({ position: '', roomType: 'dining' }))
        // store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
 
        setTimeout(() => {
          
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
      }, 100);
      setTimeout(() => {
        
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { right: 0, bottom:0 }
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
        position: { left: 0, top:Math.floor(stairCaseBreadth+setbacks.front)*scale+12 } }))
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
            position: { right: 0 *scale, top:Math.floor(drawingLength)*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top:Math.floor(toilet1Breadth)*scale+setbacks.back*scale , left:0 }
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
            position: { right:Math.floor(kitchenLength)*scale, top:0 }
          })

        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
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
   if(plotLength >= 20 && plotLength <= 24) //Breadth :20-24 
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
            position: { right: 0, bottom:0 }
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
            position: { right: 0 *scale, top:Math.floor(drawingLength)*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { top:Math.floor(toilet1Breadth)*scale+setbacks.back*scale , left:0 }
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
            position: { right:Math.floor(kitchenLength)*scale, top:0 }
          })
        )
                
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'kitchen', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'toilet', id: 'nw' }))
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
        const kitchenLength = builtLength * 0.42
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
        const commonToiletLength = builtLength * 0.17
        const commonToiletBreadth = builtBreadth * 0.35
        const sitoutLength = builtLength * 0.26
        const sitoutBreadth = builtBreadth * 0.2
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.20
        const diningLength = builtLength * 0.3
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
            position: { left: 0, bottom:0 }
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
            position: { right: 0, bottom:0 }
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
            position: { left: 0, top:Math.floor(setbacks.back)*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: {left:Math.floor(setbacks.left)*scale+commonToiletLength*scale-20, top:Math.floor(setbacks.back)*scale }
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
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'se' }))
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
   if(plotLength >= 29 && plotLength <= 33) //Breadth :29-33 
     {
      const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.52
        const bed2Breadth = builtBreadth * 0.75
        const bed3Length = builtLength * 0.52  
        const bed3Breadth = builtBreadth * 0.45  
        const bed4Length = builtLength * 0.37  
        const bed4Breadth = builtBreadth * 0.42            
        const livingLength = builtLength * 0.48
        const livingBreadth = builtBreadth * 0.55
        const drawingLength = builtLength * 0.27
        const drawingBreadth = builtBreadth * 0.43  
        const kitchenLength = builtLength * 0.3
        const kitchenBreadth = builtBreadth * 0.45
        const poojaLength = builtLength * 0.12
        const poojaBreadth = builtBreadth * 0.22
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.35  
        const staircaseLength = builtLength * 0.308
        const stairCaseBreadth = builtBreadth * 0.35
        const toilet1Length = builtLength * 0.18
        const toilet1Breadth = builtBreadth * 0.37
        const toilet2Length = builtLength * 0.07
        const toilet2Breadth = builtBreadth * 0.25
        const toilet3Length = builtLength * 0.18
        const toilet3Breadth = builtBreadth * 0.25
        const toilet4Length = builtLength * 0.12
        const toilet4Breadth = builtBreadth * 0.12
        const commonToiletLength = builtLength * 0.12
        const commonToiletBreadth = builtBreadth * 0.35
        const sitoutLength = builtLength * 0.25
        const sitoutBreadth = builtBreadth * 0.3
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.20
        const diningLength = builtLength * 0.18
        const diningBreadth = builtBreadth * 0.5
 
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
            position: { right: 0, bottom:0 }
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
        position: { top: Math.floor(toilet3Breadth)*scale+44, bottom:0 } }))
        // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth,}))
        // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: { bottom:0, left:0 }}))
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
            position: { right: 0 *scale, top:Math.floor(drawingLength)*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { left:Math.floor(setbacks.left)*scale, bottom:Math.floor(setbacks.front)*scale }
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
            position: { right:Math.floor(kitchenLength)*scale, top:0 }
          })

        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))          
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status:true, roomType: 'kitchen', id: '' }))
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
      const poojaBreadth = builtBreadth * 0.22
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
      const diningLength = builtLength * 0.22
      const diningBreadth = builtBreadth * 0.24

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
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'bedroom',
          length: bed4Length,
          breadth: bed4Breadth,
          position: { bottom: 0, left:0 }
      
        })
      )
    
    setTimeout(() => {
      
      store.dispatch(
        updateRoomData({
          id: 'sw',
          roomType: 'living',
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, bottom:0 }
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
      store.dispatch(
        updateRoomData({
          id: 'se',
          roomType: 'kitchen',
          length: kitchenLength,
          breadth: kitchenBreadth,
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
          position: { right: 0 *scale, top:Math.floor(drawingLength)*scale }
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
          position: { top:0, right:Math.floor(kitchenLength)*scale+6 }
        })
      )
    }, 100);
      //Add walls
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
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
   if(plotLength >= 37 && plotLength <= 39) //Breadth :37-39 
     {
      const bed1Length = builtLength * 0.29
      const bed1Breadth = builtBreadth * 0.36
      const bed2Length = builtLength * 0.40
      const bed2Breadth = builtBreadth * 0.51
      const bed3Length = builtLength * 0.28  
      const bed3Breadth = builtBreadth * 0.50  
      const bed4Length = builtLength * 0.3  
      const bed4Breadth = builtBreadth * 0.57            
      const livingLength = builtLength * 0.3
      const livingBreadth = builtBreadth * 0.43
      const drawingLength = builtLength * 0.27
      const drawingBreadth = builtBreadth * 0.43  
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
          position: { right: Math.floor(drawingLength)*scale+10, bottom:0 }
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
            position: { bottom: 0, right:0 }
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
          position: { top: 0, left:0 }
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
          position:{left:Math.floor(staircaseLength*parseInt(scale)), bottom:0}
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'commonToilet',
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { right: 0 *scale, top:Math.floor(drawingLength)*scale }
         
         
        })
      )


      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'sitout',
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { right: 0, top:0 }
        })
      )


      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'media',
          length: mediaLength,
          breadth: mediaBreadth,
          // position: { left: 0, top:0 }
          position: { left: Math.floor(bed3Length)*scale+16, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
         
        })
      )
     
      store.dispatch(
        updateRoomData({
          id: '',
          roomType: 'dining',
          length: diningLength,
          breadth: diningBreadth,
          position: { right:0, top:Math.floor(kitchenBreadth)*scale+6 }
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
  if(plotLength >= 40 && plotLength <= 43) //Breadth :40-43
     {
  const bed1Length = builtLength * 0.29
  const bed1Breadth = builtBreadth * 0.36
  const bed2Length = builtLength * 0.35
  const bed2Breadth = builtBreadth * 0.51
  const bed3Length = builtLength * 0.28  
  const bed3Breadth = builtBreadth * 0.50  
  const bed4Length = builtLength * 0.3  
  const bed4Breadth = builtBreadth * 0.57            
  const livingLength = builtLength * 0.3
  const livingBreadth = builtBreadth * 0.43
  const drawingLength = builtLength * 0.27
  const drawingBreadth = builtBreadth * 0.43  
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
      position: { right: Math.floor(drawingLength)*scale+10, bottom:0 }
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
        position: { bottom: 0, right:0 }
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
      position: { top: 0, left:0 }
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
      position: { right: 0 *scale, top:Math.floor(drawingLength)*scale }
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: { right: 0, top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      // position: { left: 0, top:0 }
      position: { left: Math.floor(bed3Length)*scale+6, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
     
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { right:0, top:Math.floor(kitchenBreadth)*scale+6 }
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
  if(plotLength >= 44 && plotLength <= 46) //Breadth :44-46
     {
        const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.35
        const bed2Breadth = builtBreadth * 0.51
        const bed3Length = builtLength * 0.28  
        const bed3Breadth = builtBreadth * 0.50  
        const bed4Length = builtLength * 0.3  
        const bed4Breadth = builtBreadth * 0.57            
        const livingLength = builtLength * 0.3
        const livingBreadth = builtBreadth * 0.43
        const drawingLength = builtLength * 0.35
        const drawingBreadth = builtBreadth * 0.58  
        const kitchenLength = builtLength * 0.22
        const kitchenBreadth = builtBreadth * 0.42
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
        const commonToiletLength = builtLength * 0.12
        const commonToiletBreadth = builtBreadth * 0.2
        const sitoutLength = builtLength * 0.3
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
            position: { top: 0, left:0 }
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
            position: { right: Math.floor(kitchenLength+setbacks.right)*scale+12, top:0 }
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
            position: { right:Math.floor(kitchenLength)*scale, top:0 }
          })
        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
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
        const bed2Length = builtLength * 0.33
        const bed2Breadth = builtBreadth * 0.51
        const bed3Length = builtLength * 0.28  
        const bed3Breadth = builtBreadth * 0.50  
        const bed4Length = builtLength * 0.25  
        const bed4Breadth = builtBreadth * 0.57            
        const livingLength = builtLength * 0.27
        const livingBreadth = builtBreadth * 0.5
        const drawingLength = builtLength * 0.25
        const drawingBreadth = builtBreadth * 0.5  
        const kitchenLength = builtLength * 0.22
        const kitchenBreadth = builtBreadth * 0.43
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
        const commonToiletLength = builtLength * 0.11
        const commonToiletBreadth = builtBreadth * 0.35
        const sitoutLength = builtLength * 0.4
        const sitoutBreadth = builtBreadth * 0.13
        const mediaLength = builtLength * 0.20
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
              position: { top: 0, right:Math.floor(kitchenLength+diningLength)*scale }
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
            position: { top: Math.floor(commonToiletBreadth)*scale-setbacks.back*scale+6, left:Math.floor(bed2Length)*scale+2 }
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
            position: { top: 0 *scale, left:Math.floor(bed2Length)*scale+setbacks.left*scale+1 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: 0, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            // position: { left: 0, top:0 }
            position: { left: Math.floor(bed2Length)*scale-setbacks.left*scale-12, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
           
          })
        )
       
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
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'sw' }))          
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
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
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
  if(plotLength >= 50 && plotLength <= 53) //Breadth :50-53
    {
       const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.33
        const bed2Breadth = builtBreadth * 0.51
        const bed3Length = builtLength * 0.28  
        const bed3Breadth = builtBreadth * 0.50  
        const bed4Length = builtLength * 0.25  
        const bed4Breadth = builtBreadth * 0.6            
        const livingLength = builtLength * 0.26
        const livingBreadth = builtBreadth * 0.56
        const drawingLength = builtLength * 0.27
        const drawingBreadth = builtBreadth * 0.43  
        const kitchenLength = builtLength * 0.25
        const kitchenBreadth = builtBreadth * 0.40
        const poojaLength = builtLength * 0.11
        const poojaBreadth = builtBreadth * 0.22
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
        const toilet4Breadth = builtBreadth * 0.19
        const commonToiletLength = builtLength * 0.112
        const commonToiletBreadth = builtBreadth * 0.35
        const sitoutLength = builtLength * 0.187
        const sitoutBreadth = builtBreadth * 0.18
        const mediaLength = builtLength * 0.22
        const mediaBreadth = builtBreadth * 0.35
        const diningLength = builtLength * 0.13
        const diningBreadth = builtBreadth * 0.40
 
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
            position: { bottom: 0, right:0 }
           


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { right: Math.floor(bed4Length)*scale+18, bottom:0 }
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
              position: { top: 0, right:Math.floor(kitchenLength+diningLength)*scale-setbacks.right*scale }
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
            position: { top: Math.floor(commonToiletBreadth)*scale-setbacks.back*scale+0, left:Math.floor(bed2Length)*scale+12 }
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
        position: { top: Math.floor(bed4Breadth)*scale-(setbacks.front)*scale-12, bottom:0 } }))




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
            position: { top: 0 *scale, left:Math.floor(bed2Length)*scale+setbacks.left*scale+9 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: Math.floor(diningLength+kitchenLength+setbacks.right)*scale-3, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            // position: { left: 0, top:0 }
            position: { left: Math.floor(bed3Length)*scale+3, bottom:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top:0, right:Math.floor(kitchenLength)*scale+6 }
          })
        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))        
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
  if(plotLength >= 54 && plotLength <= 56) //Breadth :54-56 
    {
  const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.28
        const bed2Breadth = builtBreadth * 0.51
        const bed3Length = builtLength * 0.25  
        const bed3Breadth = builtBreadth * 0.67  
        const bed4Length = builtLength * 0.21  
        const bed4Breadth = builtBreadth * 0.6            
        const livingLength = builtLength * 0.26
        const livingBreadth = builtBreadth * 0.56
        const drawingLength = builtLength * 0.27
        const drawingBreadth = builtBreadth * 0.43  
        const kitchenLength = builtLength * 0.25
        const kitchenBreadth = builtBreadth * 0.40
        const poojaLength = builtLength * 0.15
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
        const commonToiletBreadth = builtBreadth * 0.38
        const sitoutLength = builtLength * 0.2
        const sitoutBreadth = builtBreadth * 0.18
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.35
        const diningLength = builtLength * 0.13
        const diningBreadth = builtBreadth * 0.39
 
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
            position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale+6 }
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
            position: { right: Math.floor(bed4Length)*scale+(setbacks.right)*scale-12, bottom:0 }
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
              position: { top: 0, right:Math.floor(kitchenLength+diningLength)*scale-setbacks.right*scale }
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
            position: { top: 0, left:Math.floor(mediaLength)*scale }
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
        position: { top: Math.floor(bed4Breadth)*scale-(setbacks.front)*scale+12, bottom:0 } }))




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
            position: { top: 0 *scale, left:Math.floor(poojaLength+mediaLength)*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: Math.floor(diningLength+kitchenLength+setbacks.right)*scale-3, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left: 0, top:0 }
            // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top:0, right:Math.floor(kitchenLength)*scale+6 }
          })
        )
      }, 100);
        //Add walls
        // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
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
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
        store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
  if(plotLength >= 57 && plotLength <= 59) //Breadth :57-59 
    {
  const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.36
        const bed2Length = builtLength * 0.25
        const bed2Breadth = builtBreadth * 0.42
        const bed3Length = builtLength * 0.25  
        const bed3Breadth = builtBreadth * 0.4  
        const bed4Length = builtLength * 0.27  
        const bed4Breadth = builtBreadth * 0.35            
        const livingLength = builtLength * 0.18
        const livingBreadth = builtBreadth * 0.35
        const drawingLength = builtLength * 0.31
        const drawingBreadth = builtBreadth * 0.47  
        const kitchenLength = builtLength * 0.19
        const kitchenBreadth = builtBreadth * 0.39
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.20
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
        const commonToiletLength = builtLength * 0.20
        const commonToiletBreadth = builtBreadth * 0.11
        const sitoutLength = builtLength * 0.32
        const sitoutBreadth = builtBreadth * 0.22
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.35
        const diningLength = builtLength * 0.19
        const diningBreadth = builtBreadth * 0.26
 
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
        store.dispatch(
          updateRoomData({
            id: 'ne',
            roomType: 'bedroom',
            length: bed1Length,
            breadth: bed1Breadth,
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
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
            position: { bottom: 0, right:0 }
           


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { right: Math.floor(bed4Length)*scale, bottom:0 }
          })
          )
        store.dispatch(
            updateRoomData({
              id: '',
              roomType: 'drawing',
              length: drawingLength,
              breadth: drawingBreadth,
              position: { bottom: Math.floor(livingBreadth)*scale+16, right:Math.floor(diningLength)*scale+16 }
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
            position: { top: Math.floor(bed1Breadth) *scale+6, left:0 }
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
        position: { right:0, top: Math.floor(stairCaseBreadth+setbacks.front) *scale+12 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
        // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: { bottom: 0, left:0 }}))
        // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        position: { left: Math.floor(bed4Breadth)*scale-6, bottom:0 } }))




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
            position: { top: 0 *scale, left:Math.floor(bed1Length)*scale+setbacks.left*scale+10 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: Math.floor(kitchenLength+setbacks.right)*scale+8, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left: Math.floor(bed1Length)*scale+10, top:0 }
            // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
          })




        )
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false , roomType: 'bedroom', id: 'se' }))
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
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
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
  const bed1Length = builtLength * 0.29
  const bed1Breadth = builtBreadth * 0.36
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.42
  const bed3Length = builtLength * 0.25  
  const bed3Breadth = builtBreadth * 0.4  
  const bed4Length = builtLength * 0.27  
  const bed4Breadth = builtBreadth * 0.35            
  const livingLength = builtLength * 0.235
  const livingBreadth = builtBreadth * 0.35
  const drawingLength = builtLength * 0.26
  const drawingBreadth = builtBreadth * 0.47  
  const kitchenLength = builtLength * 0.19
  const kitchenBreadth = builtBreadth * 0.39
  const poojaLength = builtLength * 0.15
  const poojaBreadth = builtBreadth * 0.24
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
  const commonToiletLength = builtLength * 0.20
  const commonToiletBreadth = builtBreadth * 0.11
  const sitoutLength = builtLength * 0.32
  const sitoutBreadth = builtBreadth * 0.22
  const mediaLength = builtLength * 0.20
  const mediaBreadth = builtBreadth * 0.35
  const diningLength = builtLength * 0.19
  const diningBreadth = builtBreadth * 0.26

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
     
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { left: Math.floor(bed3Length)*scale+4, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
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
      position: { bottom: 0, right:0 }

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
      position: { right: Math.floor(bed4Length)*scale, bottom:0 }
    })
    )
  store.dispatch(
      updateRoomData({
        id: '',
        roomType: 'drawing',
        length: drawingLength,
        breadth: drawingBreadth,
        position: { bottom: Math.floor(livingBreadth)*scale+16, right:Math.floor(diningLength)*scale+16 }
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
      position: { top: Math.floor(bed1Breadth) *scale+10, left:0 }
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
  position: { left: Math.floor(bed4Breadth)*scale-6, bottom:0 } }))




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
      position: { top: 0 *scale, left:Math.floor(bed1Length)*scale+setbacks.left*scale+10 }
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: { right: Math.floor(kitchenLength+setbacks.right)*scale+8, top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: { left: Math.floor(bed1Length)*scale+10, top:0 }
      // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
     
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
    })
  )
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false , roomType: 'bedroom', id: 'se' }))
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
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
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
  const bed1Length = builtLength * 0.29
        const bed1Breadth = builtBreadth * 0.35
        const bed2Length = builtLength * 0.25
        const bed2Breadth = builtBreadth * 0.42
        const bed3Length = builtLength * 0.25  
        const bed3Breadth = builtBreadth * 0.4  
        const bed4Length = builtLength * 0.27  
        const bed4Breadth = builtBreadth * 0.35            
        const livingLength = builtLength * 0.245
        const livingBreadth = builtBreadth * 0.35
        const drawingLength = builtLength * 0.32
        const drawingBreadth = builtBreadth * 0.40  
        const kitchenLength = builtLength * 0.19
        const kitchenBreadth = builtBreadth * 0.39
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.24
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
        const commonToiletLength = builtLength * 0.123
        const commonToiletBreadth = builtBreadth * 0.18
        const sitoutLength = builtLength * 0.2
        const sitoutBreadth = builtBreadth * 0.28
        const mediaLength = builtLength * 0.20
        const mediaBreadth = builtBreadth * 0.35
        const diningLength = builtLength * 0.19
        const diningBreadth = builtBreadth * 0.26
 
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
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { left: Math.floor(bed3Length)*scale+14, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
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
            position: { bottom: 0, right:0 }
           


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { right: Math.floor(bed4Length)*scale, bottom:0 }
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
              position: { bottom: Math.floor(livingBreadth)*scale+16, right:Math.floor(diningLength)*scale }
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
            position: { top: Math.floor(bed1Breadth) *scale+8, left:0 }
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
        position: { right:0, top: Math.floor(stairCaseBreadth+setbacks.front) *scale+12 } }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth}))
        // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth,
        position: { bottom: 0, left:0 }}))
        // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet4Length, breadth: toilet4Breadth,
        position: { left: Math.floor(bed4Breadth)*scale+setbacks.right*scale, bottom:0 } }))




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
            position: { top: 0 *scale, left:Math.floor(bed1Length+mediaLength)*scale+setbacks.left*scale+12 }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: Math.floor(kitchenLength+setbacks.right)*scale+10, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { left: Math.floor(bed1Length)*scale+5, top:0 }
            // position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
          })

        )
             
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true , roomType: 'bedroom', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false , roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'sw' }))        
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
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
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
  if(plotLength >= 68 && plotLength <= 70) //Breadth :68-70
    {
  const bed1Length = builtLength * 0.291
        const bed1Breadth = builtBreadth * 0.35
        const bed2Length = builtLength * 0.25
        const bed2Breadth = builtBreadth * 0.42
        const bed3Length = builtLength * 0.25  
        const bed3Breadth = builtBreadth * 0.4  
        const bed4Length = builtLength * 0.32  
        const bed4Breadth = builtBreadth * 0.35            
        const livingLength = builtLength * 0.36
        const livingBreadth = builtBreadth * 0.34
        const drawingLength = builtLength * 0.36
        const drawingBreadth = builtBreadth * 0.27
        const kitchenLength = builtLength * 0.19
        const kitchenBreadth = builtBreadth * 0.39
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.21
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
        const commonToiletLength = builtLength * 0.1
        const commonToiletBreadth = builtBreadth * 0.16
        const sitoutLength = builtLength * 0.2
        const sitoutBreadth = builtBreadth * 0.28
        const mediaLength = builtLength * 0.14
        const mediaBreadth = builtBreadth * 0.3
        const diningLength = builtLength * 0.14
        const diningBreadth = builtBreadth * 0.3
 
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
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { left: Math.floor(bed3Length)*scale+14, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
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
            position: { left: Math.floor(bed1Length)*scale+10, top:0 }


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { right: Math.floor(mediaLength)*scale+6, bottom:0 }
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
              position: { bottom: Math.floor(livingBreadth)*scale+10, right:Math.floor(diningLength+setbacks.right)*scale-14 }
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
            position: { top: Math.floor(bed1Breadth) *scale+3, left:0 }
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
            position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { top: Math.floor(toilet4Breadth+setbacks.back) *scale, left:Math.floor(bed4Length)*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: Math.floor(kitchenLength+setbacks.right)*scale+8, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { top: Math.floor(kitchenBreadth+diningBreadth)*scale, right:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
          })

        )
               
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
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
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'parking', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'stairCase', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'media', id: '' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }
  if(plotLength >= 71 && plotLength <= 73) //Breadth :71-73
  {
  const bed1Length = builtLength * 0.25
  const bed1Breadth = builtBreadth * 0.35
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.42
  const bed3Length = builtLength * 0.25  
  const bed3Breadth = builtBreadth * 0.4  
  const bed4Length = builtLength * 0.32  
  const bed4Breadth = builtBreadth * 0.35            
  const livingLength = builtLength * 0.36
  const livingBreadth = builtBreadth * 0.34
  const drawingLength = builtLength * 0.37
  const drawingBreadth = builtBreadth * 0.3
  const kitchenLength = builtLength * 0.25
  const kitchenBreadth = builtBreadth * 0.31
  const poojaLength = builtLength * 0.15
  const poojaBreadth = builtBreadth * 0.21
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
  const toilet4Length = builtLength * 0.1
  const toilet4Breadth = builtBreadth * 0.21
  const commonToiletLength = builtLength * 0.1
  const commonToiletBreadth = builtBreadth * 0.16
  const sitoutLength = builtLength * 0.18
  const sitoutBreadth = builtBreadth * 0.28
  const mediaLength = builtLength * 0.14
  const mediaBreadth = builtBreadth * 0.22
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
     
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { left: Math.floor(bed3Length) *scale+9, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
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
      position: { left: Math.floor(bed1Length)*scale+10, top:0 }


    })
  )
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'living',
      length: livingLength,
      breadth: livingBreadth,
      position: { right: Math.floor(mediaLength)*scale+12, bottom:0 }
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
        position: { bottom: Math.floor(livingBreadth)*scale+8, right:Math.floor(diningLength)*scale }
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
      id: 'sw',
      roomType: 'stairCase',
      length: staircaseLength,
      breadth: stairCaseBreadth,
      position: { bottom: 0, left:0 }
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
      position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'commonToilet',
      length: commonToiletLength,
      breadth: commonToiletBreadth,
      position: { top: Math.floor(toilet4Breadth+setbacks.back) *scale, left:Math.floor(bed4Length)*scale-12-setbacks.left*scale-14}
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: { right: Math.floor(kitchenLength+setbacks.right)*scale, top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: { right:0, bottom:0 }
     
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
    })

  )
    
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
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
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
  store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
  //Add opening
  store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
  store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
  store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
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
  const bed1Length = builtLength * 0.260
  const bed1Breadth = builtBreadth * 0.35
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.42
  const bed3Length = builtLength * 0.25  
  const bed3Breadth = builtBreadth * 0.4  
  const bed4Length = builtLength * 0.32  
  const bed4Breadth = builtBreadth * 0.35            
  const livingLength = builtLength * 0.35
  const livingBreadth = builtBreadth * 0.34
  const drawingLength = builtLength * 0.35
  const drawingBreadth = builtBreadth * 0.30
  const kitchenLength = builtLength * 0.25
  const kitchenBreadth = builtBreadth * 0.31
  const poojaLength = builtLength * 0.15
  const poojaBreadth = builtBreadth * 0.15
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
  const sitoutLength = builtLength * 0.17
  const sitoutBreadth = builtBreadth * 0.28
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
     
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { right:0, bottom:Math.floor(stairCaseBreadth)*scale-setbacks.front*scale }
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
      position: { left: Math.floor(bed1Length)*scale+20, top:0 }


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
        position: { bottom: Math.floor(livingBreadth)*scale+12, right:Math.floor(diningLength)*scale+6 }
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
      id: 'sw',
      roomType: 'stairCase',
      length: staircaseLength,
      breadth: stairCaseBreadth,
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
      position: { top: Math.floor(toilet4Breadth+setbacks.back) *scale, left:Math.floor(bed4Length)*scale-setbacks.left*scale-16 }
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: { right: Math.floor(kitchenLength)*scale+setbacks.right*scale+3, top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: { left: Math.floor(bed3Length) *scale+setbacks.left+3, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
    })
  )
  
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
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
  const bed1Breadth = builtBreadth * 0.35
  const bed2Length = builtLength * 0.25
  const bed2Breadth = builtBreadth * 0.42
  const bed3Length = builtLength * 0.25  
  const bed3Breadth = builtBreadth * 0.4  
  const bed4Length = builtLength * 0.32  
  const bed4Breadth = builtBreadth * 0.35            
  const livingLength = builtLength * 0.36
  const livingBreadth = builtBreadth * 0.34
  const drawingLength = builtLength * 0.35
  const drawingBreadth = builtBreadth * 0.3
  const kitchenLength = builtLength * 0.25
  const kitchenBreadth = builtBreadth * 0.31
  const poojaLength = builtLength * 0.15
  const poojaBreadth = builtBreadth * 0.21
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
  const toilet4Length = builtLength * 0.1
  const toilet4Breadth = builtBreadth * 0.21
  const commonToiletLength = builtLength * 0.1
  const commonToiletBreadth = builtBreadth * 0.16
  const sitoutLength = builtLength * 0.18
  const sitoutBreadth = builtBreadth * 0.28
  const mediaLength = builtLength * 0.14
  const mediaBreadth = builtBreadth * 0.22
  const diningLength = builtLength * 0.14
  const diningBreadth = builtBreadth * 0.47

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
     
    })
  )
  store.dispatch(
    updateRoomData({
      id: 'nw',
      roomType: 'bedroom',
      length: bed2Length,
      breadth: bed2Breadth,
      position: { left: Math.floor(bed3Length+setbacks.left) *scale-22, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
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
      position: { left: Math.floor(bed1Length)*scale+20, top:0 }


    })
  )
  store.dispatch(
    updateRoomData({
      id: 'sw',
      roomType: 'living',
      length: livingLength,
      breadth: livingBreadth,
      position: { right: Math.floor(mediaLength)*scale+12, bottom:0 }
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
        position: { bottom: Math.floor(livingBreadth)*scale+8, right:Math.floor(diningLength)*scale+setbacks.right*scale-12 }
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
      id: 'sw',
      roomType: 'stairCase',
      length: staircaseLength,
      breadth: stairCaseBreadth,
      position: { bottom: 0, left:0 }
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
      position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'commonToilet',
      length: commonToiletLength,
      breadth: commonToiletBreadth,
      position: { top: Math.floor(toilet4Breadth+setbacks.back) *scale, left:Math.floor(bed4Length)*(scale-1)-setbacks.left*scale-12 }
     
     
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'sitout',
      length: sitoutLength,
      breadth: sitoutBreadth,
      position: { right: Math.floor(kitchenLength+setbacks.right)*scale+12, top:0 }
    })
  )


  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'media',
      length: mediaLength,
      breadth: mediaBreadth,
      position: { right:0, bottom:0 }
     
    })
  )
 
  store.dispatch(
    updateRoomData({
      id: '',
      roomType: 'dining',
      length: diningLength,
      breadth: diningBreadth,
      position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
    })

  )
  
}, 100);
  //Add walls
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
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
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
  //Add opening
  store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
  store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
  store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
  //Add doors  
  store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
  store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
  store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: true }))
  store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
  store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
  store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
  store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }

  if(plotLength >= 80 && plotLength <= 90) //Breadth :80-90
{
  const bed1Length = builtLength * 0.25
        const bed1Breadth = builtBreadth * 0.35
        const bed2Length = builtLength * 0.25
        const bed2Breadth = builtBreadth * 0.42
        const bed3Length = builtLength * 0.25  
        const bed3Breadth = builtBreadth * 0.4  
        const bed4Length = builtLength * 0.32  
        const bed4Breadth = builtBreadth * 0.35            
        const livingLength = builtLength * 0.356
        const livingBreadth = builtBreadth * 0.34
        const drawingLength = builtLength * 0.356
        const drawingBreadth = builtBreadth * 0.3
        const kitchenLength = builtLength * 0.25
        const kitchenBreadth = builtBreadth * 0.31
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.183
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
        const toilet4Length = builtLength * 0.1
        const toilet4Breadth = builtBreadth * 0.21
        const commonToiletLength = builtLength * 0.1
        const commonToiletBreadth = builtBreadth * 0.16
        const sitoutLength = builtLength * 0.16
        const sitoutBreadth = builtBreadth * 0.28
        const mediaLength = builtLength * 0.14
        const mediaBreadth = builtBreadth * 0.22
        const diningLength = builtLength * 0.14
        const diningBreadth = builtBreadth * 0.47
 
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
           
          })
        )
        store.dispatch(
          updateRoomData({
            id: 'nw',
            roomType: 'bedroom',
            length: bed2Length,
            breadth: bed2Breadth,
            position: { left: Math.floor(bed3Length)*scale+setbacks.left+13, bottom:Math.floor(parkingBreadth-setbacks.front)*scale }
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
            position: { left: Math.floor(bed1Length)*scale+14, top:0 }


          })
        )
        store.dispatch(
          updateRoomData({
            id: 'sw',
            roomType: 'living',
            length: livingLength,
            breadth: livingBreadth,
            position: { right: Math.floor(mediaLength)*scale+6, bottom:0 }
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
              position: { bottom: Math.floor(livingBreadth)*scale+12, right:Math.floor(diningLength)*scale+6 }
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
            position: { top: Math.floor(bed1Breadth) *scale, left:0 }
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
        position: { right:0, top: Math.floor(stairCaseBreadth)*(scale+3.5)+setbacks.front*scale } }))
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
            position:{left:Math.floor(parkingLength*parseInt(scale))+(setbacks.left)*scale, bottom:0}
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'commonToilet',
            length: commonToiletLength,
            breadth: commonToiletBreadth,
            position: { top: Math.floor(toilet4Breadth+setbacks.back) *scale, left:Math.floor(bed4Length)*(scale-1.5)-setbacks.left*scale }
           
           
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'sitout',
            length: sitoutLength,
            breadth: sitoutBreadth,
            position: { right: Math.floor(kitchenLength)*scale+setbacks.right, top:0 }
          })
        )


        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'media',
            length: mediaLength,
            breadth: mediaBreadth,
            position: { right:0, bottom:0 }
           
          })
        )
       
        store.dispatch(
          updateRoomData({
            id: '',
            roomType: 'dining',
            length: diningLength,
            breadth: diningBreadth,
            position: { top: Math.floor(kitchenBreadth)*scale, right:0 }
          })

        )
        
      }, 100);
        //Add walls
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
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
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'living', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'media', id: '' }))
        //Add opening
        store.dispatch(updateWall({ id: 'media-se-right', openingLength: 0.3 * mediaBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'sitout-se-front', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
        store.dispatch(updateWall({ id: 'pooja-nw-right', openingLength: 0.1 * livingLength, hasOpening: true }))
        //Add doors  
        store.dispatch(updateWall({ id: 'bedroom-ne-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'bedroom-se-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: true }))
        store.dispatch(updateWall({ id: 'toilet-sw-left', hasDoor: true }))  
        store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-nw-right', hasDoor: true }))
        store.dispatch(updateWall({ id: 'commonToilet-sw-front', hasDoor: false }))
   }

}