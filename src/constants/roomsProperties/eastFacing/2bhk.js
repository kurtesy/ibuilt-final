import { ScaleLoader } from 'react-spinners'
import { setSetBacks } from '../../../../redux/plot'
import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from '../../../../redux/rooms'
import { store } from '../../../../redux/store'

export async function generateE2() {
  const state = store.getState()
  const { plotLength, plotBreadth } = state.plot
  if (plotLength <= plotBreadth) {
    const number = Math.floor(Math.random() * 5) + 1
    generateTypeA(2)
  } else {
  }
}

function generateTypeA(number) {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot
      
     if (plotBreadth >= 15 && plotBreadth < 24)
    //Breadth range = 15-25
{

  const bed1Length = builtLength * 1.0
  const bed1Breadth = builtBreadth * 0.55
  store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
  store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
  const toilet1Length = builtLength * 0.35
  const toilet1Breadth = builtBreadth * 0.4
  
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: { bottom: 0, left: 0 } }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(updateWall({ id: 'toilet-nw-front', hasDoor: true }))
  
    setTimeout(() => {
  //living
  const livingLength = builtLength * 0.55
  const livingBreadth = builtBreadth * 0.45

    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', length: livingLength, breadth: livingBreadth }))
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', position: { bottom: 0, right: 0 } }))

  //drawing
  // const drawingLength = builtLength * 0.54
  // const drawingBreadth = builtBreadth * 0.25

  //   store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
  //   store.dispatch(updateRoomData({ id: '', roomType: 'drawing', length: drawingLength, breadth: drawingBreadth, 
  //   position: { bottom: Math.floor(kitchenBreadth) * scale, left: 0 } }))
  //   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'drawing', id: 'ne' }))
  }, 100);

  setTimeout(() => {
  //kitchen
  const kitchenLength = builtLength * 0.47
  const kitchenBreadth = builtBreadth * 0.453

    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth, 
    position: { bottom: 0, left: 0 } }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.2 * kitchenBreadth, hasOpening: true }))

    //dining
    const diningLength = builtLength * 0.35
    const diningBreadth = builtBreadth * 0.15

    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
    store.dispatch(updateRoomData({ id: '', roomType: 'dining', length: diningLength, breadth: diningBreadth }))
    store.dispatch(updateRoomData({ id: '', roomType: 'dining', position: { bottom: Math.floor(kitchenBreadth * parseInt(scale))} }))
  }, 100);
    
    //staircase
    setTimeout(() => {
    const staircaseLength = builtLength * 0.35
    const stairCaseBreadth = builtBreadth * 0.12
    store.dispatch(updateRoomData({ id: 'se', roomType: 'stairCase', length: staircaseLength, breadth: stairCaseBreadth, 
    position: { bottom: 0, left: 0 }}))

    //parking

    const parkingLength = builtLength * 0.2
    const parkingBreadth = builtBreadth * 0.15
    store.dispatch(updateRoomData({ id: 'sw', roomType: 'parking', length: parkingLength, breadth: parkingBreadth, position: { bottom: 0, right: 0 } }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
  }, 100);

    //sitout
    setTimeout(() => {
    // const sitoutLength = builtLength * 0.05
    // const sitoutBreadth = builtBreadth * 0.12
    // store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
    // store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', position: { bottom: Math.floor(livingBreadth * parseInt(scale)), right: 0 } }))
    // store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth }))
    // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    // store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.6 * sitoutBreadth, hasOpening: true }))
  
    //common Bath
    
    // const commonToiletLength = builtLength * 0.10
    // const commonToiletBreadth = builtBreadth * 0.12
    // store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
    // store.dispatch(updateRoomData({ id: 'se', roomType: 'commonToilet', 
    // position: { bottom: Math.floor(stairCaseBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), left: 0 } }))
    // store.dispatch(updateRoomData({ id: '', roomType: 'commonToilet', length: commonToiletLength, breadth: commonToiletBreadth }))
    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    // store.dispatch(updateWall({ id: 'commonToilet-se-right', hasDoor: true }))
  }, 100); 
     }
     if (plotBreadth >= 25 && plotBreadth < 34) 
    //Breadth range = 22-35
    {
           
      const bed1Length = builtLength * 0.5
      const bed1Breadth = builtBreadth * 0.5
      setTimeout(() => {
        
      
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'ne', roomType: 'bedroom', length: bed1Length,breadth: bed1Breadth, 
      position:{top:0, left:0}}))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'ne' }))
    }, 100);
      const toilet2Length = builtLength * 0.49
      const toilet2Breadth = builtBreadth * 0.15
      
      setTimeout(() => {
        
      
      store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth, position: {top: 0, left: 0} }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))

      const bed2Length = builtLength * 0.5
      const bed2Breadth = builtBreadth * 0.5
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'nw',roomType: 'bedroom',length: bed2Length,breadth: bed2Breadth}))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      // const toilet1Length = builtLength * 0.30
      // const toilet1Breadth = builtBreadth * 0.14
      // store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: {top: 0, left: 0 } }))
      // store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
      
      const livingLength = builtLength * 0.6
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
    }, 100);
     
    setTimeout(() => {
      const kitchenLength = builtLength * 0.4
      const kitchenBreadth = builtBreadth * 0.5
      store.dispatch( updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth,position: { bottom: 0, left: 0 }}))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))

      const poojaLength = builtLength * 0.15
      const poojaBreadth = builtBreadth * 0.15
      store.dispatch( updateRoomData({ id: '', roomType: 'pooja', 
      position: { top: Math.floor(bed1Breadth * parseInt(scale)), right:Math.floor(sitoutLength)*scale }  }))
      store.dispatch( updateRoomData({id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth, }))
      store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))

    
   
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
      const sitoutBreadth = builtBreadth * 0.2      
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch( updateRoomData({ id: '',roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth, 
      position: { right:0, top:Math.floor(bed2Breadth)*scale }  }))
      store.dispatch(addWallToRoom({ side: 'left', status:true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))

      const diningLength = builtLength * 0.25
      const diningBreadth = builtBreadth * 0.15
 
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
      store.dispatch( updateRoomData({ id: '', roomType: 'dining',length: diningLength,  breadth: diningBreadth}))
      store.dispatch(updateRoomData({ id: '', roomType: 'dining', position: { top: Math.floor((kitchenBreadth-diningBreadth) * parseInt(scale)), left:0 } }) )
    }, 100);

    setTimeout(() => {
    
      const parkingLength = builtLength * 0.521
      const parkingBreadth = builtBreadth * 0.18
      store.dispatch( updateRoomData({id: 'ne', roomType: 'parking',length: parkingLength, breadth: parkingBreadth, }) )
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))
  

      const staircaseLength = builtLength * 0.4
      const stairCaseBreadth = builtBreadth * 0.17
      store.dispatch( updateRoomData({ id: 'se', roomType: 'stairCase', length: staircaseLength, breadth: stairCaseBreadth, }) )
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
    

      // const corridorLength = builtLength * 0.41
      // const corridorBreadth = builtBreadth * 0.23
      // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'corridor' }))
      // store.dispatch(updateRoomData({id: '',roomType: 'corridor',length: corridorLength,breadth: corridorBreadth,position: { bottom: 0, left:0 }}))
    }, 100);
 
    }
     if (plotBreadth >= 35 && plotBreadth < 37) //Breadth range = 35-37 

    {
      const bed1Length = builtLength * 0.5
      const bed1Breadth = builtBreadth * 0.5
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'ne', roomType: 'bedroom', length: bed1Length,breadth: bed1Breadth}))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
      const toilet2Length = builtLength * 0.49
      const toilet2Breadth = builtBreadth * 0.15
      store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth, position: {bottom: 0, right: 0} }))
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))
      store.dispatch(updateWall({ id: 'toilet-ne-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-ne-right', hasDoor: false }))

      const bed2Length = builtLength * 0.42
      const bed2Breadth = builtBreadth * 0.5
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'nw',roomType: 'bedroom',length: bed2Length,breadth: bed2Breadth}))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      const toilet1Length = builtLength * 0.30
      const toilet1Breadth = builtBreadth * 0.14
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: {top: 0, left: 0 } }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))


      const livingLength = builtLength * 0.58
      const livingBreadth = builtBreadth * 0.28
      store.dispatch(updateRoomData({id: 'sw',roomType: 'living',length: livingLength,breadth: livingBreadth,}))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'living' }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'living', id: 'nw' }))
      store.dispatch(updateWall({ id: 'living-nw-front', openingLength: 0.6 * livingLength, hasOpening: true }))
      
      setTimeout(() => {
        
      
      const drawingLength = builtLength * 0.58
      const drawingBreadth = builtBreadth * 0.21
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(updateRoomData({id: '',roomType: 'drawing',length: drawingLength,breadth: drawingBreadth,
      position: { top: Math.floor(livingBreadth)*scale+6, left:0 }}))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))

      const kitchenLength = builtLength * 0.32
      const kitchenBreadth = builtBreadth * 0.38
      store.dispatch( updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth,position: { bottom: 0, left: 0 }}))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
      store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))

      // const poojaLength = builtLength * 0.2
      // const poojaBreadth = builtBreadth * 0.10
      // store.dispatch( updateRoomData({ id: '', roomType: 'pooja', position: { bottom: Math.floor(bed1Breadth * parseInt(scale)), right: 0 }  }))
      // store.dispatch( updateRoomData({id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth, }))
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))

      const parkingLength = builtLength * 0.521
      const parkingBreadth = builtBreadth * 0.18
      store.dispatch( updateRoomData({id: 'ne', roomType: 'parking',length: parkingLength, breadth: parkingBreadth, }) )
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))


      const staircaseLength = builtLength * 0.4
      const stairCaseBreadth = builtBreadth * 0.17
      store.dispatch( updateRoomData({ id: 'se', roomType: 'stairCase', length: staircaseLength, breadth: stairCaseBreadth, }) )
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      
    }, 100);
            
      
      

      const commonToiletLength = builtLength * 0.19
      const commonToiletBreadth = builtBreadth * 0.25
      setTimeout(() => {
        
      
      store.dispatch( updateRoomData({ id: 'ne', roomType: 'commonToilet',length: commonToiletLength, breadth: commonToiletBreadth, }) )
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch( updateRoomData({id: 'ne',roomType: 'commonToilet', position: { left:0, top:0 }  }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(updateWall({ id: 'commonToilet- -right', hasDoor: false }))

      const sitoutLength = builtLength * 0.12
      const sitoutBreadth = builtBreadth * 0.2
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch( updateRoomData({ id: 'nw',roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth, 
      position: { top: Math.floor(bed2Breadth * parseInt(scale) ), right: 0 }}) )
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(updateWall({ id: 'sitout-se-left', openingLength: 0.4 * sitoutBreadth, hasOpening: true }))
      

      const sitout2Length = builtLength * 0.12
      const sitout2Breadth = builtBreadth * 0.2
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch( updateRoomData({ id: 'sw', roomType: 'sitout', length: sitout2Length, breadth: sitout2Breadth,
      position: { top: Math.floor(bed2Breadth * parseInt(scale) ), right: 0 } }))
    }, 100);

    
      
    setTimeout(() => {
      const diningLength = builtLength * 0.35
      const diningBreadth = builtBreadth * 0.14
      store.dispatch( updateRoomData({ id: '', roomType: 'dining',length: diningLength,  breadth: diningBreadth}))
      store.dispatch(updateRoomData({ id: '', roomType: 'dining', 
      position: { top: Math.floor((kitchenBreadth) * parseInt(scale)), left:0 } }) )
    

      const CorridorLength = builtLength * 0.41
      const CorridorBreadth = builtBreadth * 0.23
      
      store.dispatch(updateRoomData({id: '',roomType: 'Corridor',length: CorridorLength,breadth: CorridorBreadth,position: { top: 0, left:0 }}))
    }, 100);
     }
     if (plotBreadth >= 38 && plotBreadth < 43) //Breadth range = 38-43 
    {
       const bed1Length = builtLength * 0.52
      const bed1Breadth = builtBreadth * 0.35
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'sw', roomType: 'bedroom', length: bed1Length,breadth: bed1Breadth}))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'bedroom', id: 'sw' }))
      const toilet2Length = builtLength * 0.25
      const toilet2Breadth = builtBreadth * 0.12
      store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth, position: {bottom: 0, right: 0} }))
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
      store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: false }))
      store.dispatch(updateWall({ id: 'toilet-sw-right', hasDoor: false }))

      const bed2Length = builtLength * 0.48
      const bed2Breadth = builtBreadth * 0.35
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'nw',roomType: 'bedroom',length: bed2Length,breadth: bed2Breadth}))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      const toilet1Length = builtLength * 0.15
      const toilet1Breadth = builtBreadth * 0.10
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth, position: {top: 0, left: 0 } }))
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
setTimeout(() => {
  

      const bed3Length = builtLength * 0.42
      const bed3Breadth = builtBreadth * 0.3
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({id: 'ne',roomType: 'bedroom',length: bed3Length,breadth: bed3Breadth,
    position:{right:0, top:Math.floor(bed2Breadth)*scale+4}}))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'ne' }))

      // const toilet3Length = builtLength * 0.30
      // const toilet3Breadth = builtBreadth * 0.14
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth, position: {top: 0, left: 0 } }))
      // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
      // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))


      const livingLength = builtLength * 0.46
      const livingBreadth = builtBreadth * 0.35
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
      store.dispatch(updateRoomData({id: 'ne',roomType: 'living',length: livingLength,breadth: livingBreadth,position:{bottom:0,right:0 }}))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'living', id: 'ne' }))
      store.dispatch(updateWall({ id: 'living-ne-front', openingLength: 0.6 * livingLength, hasOpening: false }))
      
      const drawingLength = builtLength * 0.55
      const drawingBreadth = builtBreadth * 0.26
      store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      store.dispatch(updateRoomData({id: '',roomType: 'drawing',length: drawingLength,breadth: drawingBreadth,
      position: { left:0, top:Math.floor(bed1Breadth+setbacks.back)*scale}}))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))
    }, 100);

    setTimeout(() => {
      
    
      const kitchenLength = builtLength * 0.34
      const kitchenBreadth = builtBreadth * 0.355
      store.dispatch( updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth,position: { bottom: 0, left: 0 }}))
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: 'se' }))
      store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.3 * kitchenBreadth, hasOpening: true }))

      // const poojaLength = builtLength * 0.2
      // const poojaBreadth = builtBreadth * 0.10
      // store.dispatch( updateRoomData({ id: '', roomType: 'pooja', position: { bottom: Math.floor(bed1Breadth * parseInt(scale)), right: 0 }  }))
      // store.dispatch( updateRoomData({id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth, }))
      // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'pooja', id: '' }))
      // store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))

      const parkingLength = builtLength * 0.521
      const parkingBreadth = builtBreadth * 0.18
      store.dispatch( updateRoomData({id: 'ne', roomType: 'parking',length: parkingLength, breadth: parkingBreadth, }) )
      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: '' }))


      const staircaseLength = builtLength * 0.4
      const stairCaseBreadth = builtBreadth * 0.17
      store.dispatch( updateRoomData({ id: 'se', roomType: 'stairCase', length: staircaseLength, breadth: stairCaseBreadth, }) )
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'staircase' }))
      
      
            
      
      

      const commonToiletLength = builtLength * 0.12
      const commonToiletBreadth = builtBreadth * 0.15
      store.dispatch( updateRoomData({ id: 'ne', roomType: 'commonToilet',length: commonToiletLength, breadth: commonToiletBreadth, }) )
      store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
      store.dispatch( updateRoomData({id: 'ne',roomType: 'commonToilet', 
      position: { top: Math.floor(kitchenBreadth * parseInt(scale) ), left: 0  }  }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
      store.dispatch(updateWall({ id: 'commonToilet- -right', hasDoor: false }))
      store.dispatch(updateWall({ id: 'bedroom-sw-front', hasDoor: true }))
      store.dispatch(updateWall({ id: 'bedroom-ne-left', hasDoor: true }))
      const sitoutLength = builtLength * 0.12
      const sitoutBreadth = builtBreadth * 0.1
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch( updateRoomData({ id: 'nw',roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth}) )
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
      store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.4 * sitoutBreadth, hasOpening: false }))
      

      const sitout2Length = builtLength * 0.12
      const sitout2Breadth = builtBreadth * 0.2
      store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
      store.dispatch( updateRoomData({ id: 'sw', roomType: 'sitout', length: sitout2Length, breadth: sitout2Breadth,
      position: { bottom: Math.floor(kitchenBreadth * parseInt(scale) ), left: 0 } }))


      const diningLength = builtLength * 0.25
      const diningBreadth = builtBreadth * 0.25
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
      store.dispatch( updateRoomData({ id: '', roomType: 'dining',length: diningLength,  breadth: diningBreadth}))
      store.dispatch(updateRoomData({ id: '', roomType: 'dining', position: { bottom: Math.floor((kitchenBreadth) * parseInt(scale)), left:0 } }) )


      const CorridorLength = builtLength * 0.41
      const CorridorBreadth = builtBreadth * 0.23
      store.dispatch(addRoomToPlot({ position: '', roomType: 'Corridor' }))
      store.dispatch(updateRoomData({id: '',roomType: 'Corridor',length: CorridorLength,breadth: CorridorBreadth,position: { top: 0, left:0 }}))
    }, 100);
    }
     if (plotBreadth >= 44 && plotBreadth < 47) //Breadth range = 46-50
{
  //bedroom3
  const bed1Length = builtLength * 0.47
  const bed1Breadth = builtBreadth * 0.32
  store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
  store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
  const toilet2Length = builtLength * 0.17
    const toilet2Breadth = builtBreadth * 0.10
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'toilet' }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'nw' }))
    store.dispatch(updateWall({ id: 'toilet-nw-front', hasDoor: false }))

  setTimeout(() => {
  const extraBathLength = builtLength * 0.4
  const extraBathBreadth = builtBreadth * 0.11
  
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'extraBath', length: extraBathLength, breadth: extraBathBreadth, 
    position: { left: 0, top: Math.floor(bed2Breadth)*scale+setbacks.back*scale} }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(updateWall({ id: 'extraBath-nw-right', hasDoor: true }))
    
  }, 100);  
setTimeout(() => {
  

  //bedroom2
  const bed2Length = builtLength * 0.54
  const bed2Breadth = builtBreadth * 0.32
  store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
  store.dispatch(updateRoomData({ id: 'sw', roomType: 'bedroom', length: bed2Length, breadth: bed2Breadth }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
  
    // const toilet2Length = builtLength * 0.40
    // const toilet2Breadth = builtBreadth * 0.12
    // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
    // store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
    // store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
    // store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'sw' }))
    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
    // store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: true }))

    const bed3Length = builtLength * 0.5
    const bed3Breadth = builtBreadth * 0.28
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
    store.dispatch(updateRoomData({id: 'ne',roomType: 'bedroom',length: bed3Length,breadth: bed3Breadth,
    position:{left:0, top:Math.floor(bed2Breadth+setbacks.back+1)*scale+6}}))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))
  }, 100);
    // const toilet3Length = builtLength * 0.30
    // const toilet3Breadth = builtBreadth * 0.14
    // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet3Length, breadth: toilet3Breadth, position: {top: 0, left: 0 } }))
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    // store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'ne' }))
    // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'ne' }))  
  
  //living
  const livingLength = builtLength * 0.7
  const livingBreadth = builtBreadth * 0.327
  setTimeout(() => {
    
  
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', length: livingLength, breadth: livingBreadth }))
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', position: { bottom: 0, right: 0 } }))
  }, 100);

  //drawing
  const drawingLength = builtLength * 0.46
  const drawingBreadth = builtBreadth * 0.3
  setTimeout(() => {
    
    store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
    store.dispatch(updateRoomData({ id: '', roomType: 'drawing', length: drawingLength, breadth: drawingBreadth, 
    position: { top: Math.floor(bed1Breadth) * scale+12, right: 0 } }))
    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))
  }, 100);

  //kitchen
  const kitchenLength = builtLength * 0.35
  const kitchenBreadth = builtBreadth * 0.325
 setTimeout(() => {
 
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth, 
    position: { bottom: 0, left: 0 } }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(updateWall({ id: 'kitchen-se-left', openingLength: 0.2 * kitchenBreadth, hasOpening: true }))
  }, 100);
    //dining
    setTimeout(() => {
    const diningLength = builtLength * 0.36
    const diningBreadth = builtBreadth * 0.11
    
   
    
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
    store.dispatch(updateRoomData({ id: '', roomType: 'dining', length: diningLength, breadth: diningBreadth }))
    store.dispatch(updateRoomData({ id: '', roomType: 'dining', position: { left:0, bottom:Math.floor(kitchenBreadth-diningBreadth)*scale+6} }))
  
 

    //pooja
    // const poojaLength = builtLength * 0.2
    // const poojaBreadth = builtBreadth * 0.11
    // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
    // store.dispatch(updateRoomData({ id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth }))

    // store.dispatch(updateRoomData({ id: '', roomType: 'pooja', position: { top: Math.floor(diningBreadth + kitchenBreadth * parseInt(scale)), right: 0 } }))
    // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
    // // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
    // // store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: true }))
    
    
    //staircase

  const stairCaseLength = builtLength * 0.45
  const stairCaseBreadth = builtBreadth * 0.17
  
  store.dispatch(addRoomToPlot({ position: 'se', roomType: 'stairCase' }))
  store.dispatch(updateRoomData({ id: 'se', roomType: 'stairCase', length: stairCaseLength, breadth: stairCaseBreadth, position:{bottom:0, left:0} }))
  }, 100);


    //parking
    const parkingLength = builtLength * 0.5
    const parkingBreadth = builtBreadth * 0.2
    setTimeout(() => {
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))  
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'parking', length: parkingLength, breadth: parkingBreadth, position: { bottom: 0, right: 0 } }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'ne' }))
  }, 100);

    //sitout
    const sitoutLength = builtLength * 0.12
    const sitoutBreadth = builtBreadth * 0.20
     
    setTimeout(() => {
    store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', 
    position: { bottom: Math.floor(drawingBreadth)*scale, right: 0 } }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.6 * sitoutBreadth, hasOpening: true }))
  }, 100);

    //common Bath
    const commonToiletLength = builtLength * 0.12
    const commonToiletBreadth = builtBreadth * 0.12
setTimeout(() => {
    store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'commonToilet', 
    position: { top: Math.floor(livingBreadth * parseInt(scale)+setbacks.back*scale+12), right: 0 } }))
    store.dispatch(updateRoomData({ id: '', roomType: 'commonToilet', length: commonToiletLength, breadth: commonToiletBreadth }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(updateWall({ id: 'commonToilet-se-right', hasDoor: true }))
  }, 100); 
    }
     if (plotBreadth >= 48 && plotBreadth < 54) //Breadth range = 51-55 
{
  //bedroom3
  const bed1Length = builtLength * 0.47
  const bed1Breadth = builtBreadth * 0.30
  store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
  store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
  store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))

  setTimeout(() => {
  const extraBathLength = builtLength * 0.4
  const extraBathBreadth = builtBreadth * 0.10
  
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
    store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
    store.dispatch(updateRoomData({ id: 'nw', roomType: 'extraBath', length: extraBathLength, breadth: extraBathBreadth, 
    position: { top: 0, left: Math.floor(toilet2Length)*scale+40 } }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'nw' }))
    store.dispatch(updateWall({ id: 'extraBath-nw-right', hasDoor: true }))
    
  }, 100);  

  //bedroom2
  const bed2Length = builtLength * 0.54
  const bed2Breadth = builtBreadth * 0.377
  store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
  store.dispatch(updateRoomData({ id: 'sw', roomType: 'bedroom', length: bed2Length, breadth: bed2Breadth }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
  
  const toilet2Length = builtLength * 0.40
  const toilet2Breadth = builtBreadth * 0.11
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
    store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
    store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'sw' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
    store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: false }))
    store.dispatch(updateWall({ id: 'toilet-sw-right', hasDoor: true }))

   //bedroom3
  const bed3Length = builtLength * 0.54
  const bed3Breadth = builtBreadth * 0.235
  setTimeout(() => {
    
  
  store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
  store.dispatch(updateRoomData({ id: 'se', roomType: 'bedroom', length: bed3Length, breadth: bed3Breadth,
  position: { top:Math.floor(bed2Breadth)*scale+6, left: 0 } }))
  store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
  store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'se' }))
  
  // const extraBath1Length = builtLength * 0.2
  // const extraBath1Breadth = builtBreadth * 0.1
  //   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
  //   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
  //   store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: extraBath1Length, breadth: extraBath1Breadth }))
  //   store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'extraBath', id: 'sw' }))
  //   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
  //   store.dispatch(updateWall({ id: 'extraBath-sw-front', hasDoor: false })) 
  }, 100);
    //living
  const livingLength = builtLength * 0.63
  const livingBreadth = builtBreadth * 0.27
  setTimeout(() => {
    
  
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', length: livingLength, breadth: livingBreadth }))
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', 
    position: { bottom: Math.floor(parkingBreadth-4)*scale, right: 0 } }))
  }, 100);

  //drawing
  const drawingLength = builtLength * 0.46
  const drawingBreadth = builtBreadth * 0.35
  setTimeout(() => {
    
    store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
    store.dispatch(updateRoomData({ id: '', roomType: 'drawing', length: drawingLength, breadth: drawingBreadth, 
    position: { top: Math.floor(bed1Breadth) * scale+12, right: 0 } }))
    store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))
  }, 100);

  //kitchen
  const kitchenLength = builtLength * 0.36
  const kitchenBreadth = builtBreadth * 0.39
 setTimeout(() => {
 
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth, 
    position: { bottom: 0, left: 0 } }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
    store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.5 * kitchenBreadth, hasOpening: true }))
  }, 100);
    //dining
    const diningLength = builtLength * 0.36
    const diningBreadth = builtBreadth * 0.12
    
    setTimeout(() => {
    
    store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
    store.dispatch(updateRoomData({ id: '', roomType: 'dining', length: diningLength, breadth: diningBreadth }))
    store.dispatch(updateRoomData({ id: '', roomType: 'dining', 
    position: { bottom: Math.floor(kitchenBreadth-diningBreadth) * parseInt(scale)+3 } }))
  }, 100);
 

    //pooja
    // const poojaLength = builtLength * 0.2
    // const poojaBreadth = builtBreadth * 0.11
    // store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
    // store.dispatch(updateRoomData({ id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth }))

    // store.dispatch(updateRoomData({ id: '', roomType: 'pooja', position: { top: Math.floor(diningBreadth + kitchenBreadth * parseInt(scale)), right: 0 } }))
    // store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'pooja', id: '' }))
    // // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
    // store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
    // // store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: true }))
    
    
    //staircase

  const stairCaseLength = builtLength * 0.36
  const stairCaseBreadth = builtBreadth * 0.12
  setTimeout(() => {
  store.dispatch(addRoomToPlot({ position: 'se', roomType: 'stairCase' }))
  store.dispatch(updateRoomData({ id: 'se', roomType: 'stairCase', length: stairCaseLength, breadth: stairCaseBreadth, 
  position:{bottom:0, left:0} }))
  // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
  // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
}, 100);


    //parking
    const parkingLength = builtLength * 0.6
    const parkingBreadth = builtBreadth * 0.18
    setTimeout(() => {
    store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))  
    store.dispatch(updateRoomData({ id: 'ne', roomType: 'parking', length: parkingLength, breadth: parkingBreadth, 
    position: { bottom: 0, right: 0 } }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: 'ne' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'ne' }))
  }, 100);

    //sitout
    const sitoutLength = builtLength * 0.14
    const sitoutBreadth = builtBreadth * 0.20
     
    setTimeout(() => {
    store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', position: { top: Math.floor(livingBreadth * parseInt(scale)), right: 0 } }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth }))
    store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
    store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.6 * sitoutBreadth, hasOpening: true }))
  }, 100);

    //common Bath
    const commonToiletLength = builtLength * 0.14
    const commonToiletBreadth = builtBreadth * 0.20
setTimeout(() => {
    store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
    store.dispatch(updateRoomData({ id: 'se', roomType: 'commonToilet', 
    position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 } }))
    store.dispatch(updateRoomData({ id: '', roomType: 'commonToilet', length: commonToiletLength, breadth: commonToiletBreadth }))
    store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
    store.dispatch(updateWall({ id: 'commonToilet-se-right', hasDoor: true }))
  }, 100); 
    }
     if (plotBreadth >= 55 && plotBreadth < 60) //Breadth range = 56-60 
    {
      //bedroom3
      const bed1Length = builtLength * 0.5
      const bed1Breadth = builtBreadth * 0.38
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth }))
      store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
    
      setTimeout(() => {
      const extraBathLength = builtLength * 0.4
      const extraBathBreadth = builtBreadth * 0.10
      
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'extraBath', length: extraBathLength, breadth: extraBathBreadth, 
        position: { top: 0, left: Math.floor(toilet2Length)*scale+40 } }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(updateWall({ id: 'extraBath-nw-right', hasDoor: true }))
        
      }, 100);  
    
      //bedroom2
      const bed2Length = builtLength * 0.5
      const bed2Breadth = builtBreadth * 0.30
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'sw', roomType: 'bedroom', length: bed2Length, breadth: bed2Breadth }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'sw' }))
      
      const toilet2Length = builtLength * 0.40
      const toilet2Breadth = builtBreadth * 0.11
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-right', hasDoor: true }))
    
       //bedroom3
      const bed3Length = builtLength * 0.54
      const bed3Breadth = builtBreadth * 0.235
      setTimeout(() => {
        
      
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'se', roomType: 'bedroom', length: bed3Length, breadth: bed3Breadth,
      position: { top:Math.floor(bed1Breadth)*scale+9, right: 0 } }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      
      // const extraBath1Length = builtLength * 0.2
      // const extraBath1Breadth = builtBreadth * 0.1
      //   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      //   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      //   store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: extraBath1Length, breadth: extraBath1Breadth }))
      //   store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'extraBath', id: 'sw' }))
      //   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
      //   store.dispatch(updateWall({ id: 'extraBath-sw-front', hasDoor: false })) 
      }, 100);
        //living
      const livingLength = builtLength * 0.63
      const livingBreadth = builtBreadth * 0.30
      setTimeout(() => {
        
      
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', length: livingLength, breadth: livingBreadth }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', 
        position: { bottom: Math.floor(parkingBreadth-4)*scale, right: 0 } }))
      }, 100);
    
      //drawing
      const drawingLength = builtLength * 0.46
      const drawingBreadth = builtBreadth * 0.32
      setTimeout(() => {
        
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
        store.dispatch(updateRoomData({ id: '', roomType: 'drawing', length: drawingLength, breadth: drawingBreadth, 
        position: { top: Math.floor(bed2Breadth) * scale+14, left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))
      }, 100);
    
      //kitchen
      const kitchenLength = builtLength * 0.36
      const kitchenBreadth = builtBreadth * 0.39
     setTimeout(() => {
     
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth, 
        position: { bottom: 0, left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.5 * kitchenBreadth, hasOpening: true }))
      }, 100);
        //dining
        const diningLength = builtLength * 0.36
        const diningBreadth = builtBreadth * 0.14
        
        setTimeout(() => {
        
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
        store.dispatch(updateRoomData({ id: '', roomType: 'dining', length: diningLength, breadth: diningBreadth }))
        store.dispatch(updateRoomData({ id: '', roomType: 'dining', 
        position: { bottom: Math.floor(kitchenBreadth-diningBreadth) * parseInt(scale)+3 } }))
      }, 100);
     
    
        //pooja
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.1
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth }))
    
        store.dispatch(updateRoomData({ id: '', roomType: 'pooja', position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
        // store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: true }))
        
        
        //staircase
    
      const stairCaseLength = builtLength * 0.36
      const stairCaseBreadth = builtBreadth * 0.12
      setTimeout(() => {
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'stairCase' }))
      store.dispatch(updateRoomData({ id: 'se', roomType: 'stairCase', length: stairCaseLength, breadth: stairCaseBreadth, 
      position:{bottom:0, left:0} }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
    }, 100);
    
    
        //parking
        const parkingLength = builtLength * 0.6
        const parkingBreadth = builtBreadth * 0.18
        setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))  
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'parking', length: parkingLength, breadth: parkingBreadth, 
        position: { bottom: 0, right: 0 } }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'ne' }))
      }, 100);
    
        //sitout
        const sitoutLength = builtLength * 0.14
        const sitoutBreadth = builtBreadth * 0.20
         
        setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', position: { top: Math.floor(bed2Breadth+poojaBreadth) * parseInt(scale), left: 0 } }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.3 * sitoutBreadth, hasOpening: true }))
      }, 100);
    
        //common Bath
        const commonToiletLength = builtLength * 0.14
        const commonToiletBreadth = builtBreadth * 0.20
    setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'commonToilet', 
        position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 } }))
        store.dispatch(updateRoomData({ id: '', roomType: 'commonToilet', length: commonToiletLength, breadth: commonToiletBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(updateWall({ id: 'commonToilet-se-right', hasDoor: true }))
      }, 100); 
    }
    if (plotBreadth >= 61 && plotBreadth < 65) //Breadth range = 61-65 
    {
      //bedroom3
      const bed1Length = builtLength * 0.5
      const bed1Breadth = builtBreadth * 0.3
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      
      const mediaLength = builtLength * 0.35
      const mediaBreadth = builtBreadth * 0.151
      store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
      store.dispatch(updateRoomData({ id: '', roomType: 'media', length: mediaLength, breadth: mediaBreadth,
      position:{right:0, top:Math.floor(bed1Breadth)*scale} }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
      
      setTimeout(() => {
      const extraBathLength = builtLength * 0.13
      const extraBathBreadth = builtBreadth * 0.15
      
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'extraBath', length: extraBathLength, breadth: extraBathBreadth, 
        position:{right:0, top:Math.floor(bed1Breadth)*scale+setbacks.back*scale+3} }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(updateWall({ id: 'extraBath-nw-right', hasDoor: true }))
        
      }, 100);  
    
      //bedroom2
      const bed2Length = builtLength * 0.5
      const bed2Breadth = builtBreadth * 0.30
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'sw', roomType: 'bedroom', length: bed2Length, breadth: bed2Breadth }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'bedroom', id: 'sw' }))
      
      const toilet2Length = builtLength * 0.30
      const toilet2Breadth = builtBreadth * 0.09
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-right', hasDoor: false }))
    
       //bedroom3
      const bed3Length = builtLength * 0.5
      const bed3Breadth = builtBreadth * 0.25
      setTimeout(() => {
        
      
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'se', roomType: 'bedroom', length: bed3Length, breadth: bed3Breadth,
      position:{right:0, top:Math.floor(bed1Breadth+mediaBreadth)*scale} }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      
      // const extraBath1Length = builtLength * 0.2
      // const extraBath1Breadth = builtBreadth * 0.1
      //   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      //   store.dispatch(addRoomToPlot({ position: 'se', roomType: 'extraBath' }))
      //   store.dispatch(updateRoomData({ id: 'se', roomType: 'toilet', length: extraBath1Length, breadth: extraBath1Breadth }))
      //   store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'extraBath', id: 'sw' }))
      //   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'sw' }))
      //   store.dispatch(updateWall({ id: 'extraBath-sw-front', hasDoor: false })) 
      }, 100);
        //living
      const livingLength = builtLength * 0.63
      const livingBreadth = builtBreadth * 0.20
      setTimeout(() => {
        
      
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', length: livingLength, breadth: livingBreadth }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', 
        position: { bottom: Math.floor(parkingBreadth)*scale-setbacks.front*scale, right: 0 } }))
      }, 100);
    
      //drawing
      const drawingLength = builtLength * 0.46
      const drawingBreadth = builtBreadth * 0.32
      setTimeout(() => {
        
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
        store.dispatch(updateRoomData({ id: '', roomType: 'drawing', length: drawingLength, breadth: drawingBreadth, 
        position: { top: Math.floor(bed2Breadth) * scale+14, left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))
      }, 100);
    
      //kitchen
      const kitchenLength = builtLength * 0.36
      const kitchenBreadth = builtBreadth * 0.30
     setTimeout(() => {
     
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth, 
        position: { bottom: 0, left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.5 * kitchenBreadth, hasOpening: true }))
      }, 100);
        //dining
        const diningLength = builtLength * 0.42
        const diningBreadth = builtBreadth * 0.10
        
        setTimeout(() => {
        
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
        store.dispatch(updateRoomData({ id: '', roomType: 'dining', length: diningLength, breadth: diningBreadth }))
        store.dispatch(updateRoomData({ id: '', roomType: 'dining', 
        position: { bottom: Math.floor(kitchenBreadth-diningBreadth) * parseInt(scale)+3 } }))
      }, 100);
     
    
        //pooja
        const poojaLength = builtLength * 0.15
        const poojaBreadth = builtBreadth * 0.1
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth }))
    
        store.dispatch(updateRoomData({ id: '', roomType: 'pooja', position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
        // store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: true }))
        
        
        //staircase
    
      const stairCaseLength = builtLength * 0.36
      const stairCaseBreadth = builtBreadth * 0.12
      setTimeout(() => {
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'stairCase' }))
      store.dispatch(updateRoomData({ id: 'se', roomType: 'stairCase', length: stairCaseLength, breadth: stairCaseBreadth, 
      position:{bottom:0, left:0} }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
    }, 100);
    
    
        //parking
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.18
        setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))  
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'parking', length: parkingLength, breadth: parkingBreadth, 
        position: { bottom: 0, right: 0 } }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'ne' }))
      }, 100);
    
        //sitout
        const sitoutLength = builtLength * 0.14
        const sitoutBreadth = builtBreadth * 0.20
         
        setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', position: { top: Math.floor(bed2Breadth+poojaBreadth) * parseInt(scale), left: 0 } }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.3 * sitoutBreadth, hasOpening: true }))
      }, 100);
    
        //common Bath
        const commonToiletLength = builtLength * 0.14
        const commonToiletBreadth = builtBreadth * 0.20
    setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'commonToilet', 
        position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 } }))
        store.dispatch(updateRoomData({ id: '', roomType: 'commonToilet', length: commonToiletLength, breadth: commonToiletBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(updateWall({ id: 'commonToilet-se-right', hasDoor: true }))
      }, 100); 
    }
    if (plotBreadth >= 66 && plotBreadth < 75) //Breadth range = 66-71 
    {
      //bedroom3
      const bed1Length = builtLength * 0.42
      const bed1Breadth = builtBreadth * 0.28
      store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'nw', roomType: 'bedroom', length: bed1Length, breadth: bed1Breadth }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'nw' }))
      
      const mediaLength = builtLength * 0.3
      const mediaBreadth = builtBreadth * 0.13
      store.dispatch(addRoomToPlot({ position: '', roomType: 'media' }))
      store.dispatch(updateRoomData({ id: '', roomType: 'media', length: mediaLength, breadth: mediaBreadth,
      position:{right:0, top:Math.floor(bed1Breadth)*scale+12} }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'media', id: '' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'media', id: '' }))
      
      setTimeout(() => {
      const extraBathLength = builtLength * 0.132
      const extraBathBreadth = builtBreadth * 0.22
      
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(addRoomToPlot({ position: 'nw', roomType: 'extraBath' }))
        store.dispatch(updateRoomData({ id: 'nw', roomType: 'extraBath', length: extraBathLength, breadth: extraBathBreadth, 
        position:{right:Math.floor(bed2Length)*scale+12, top:0} }))
        store.dispatch(addWallToRoom({ side: 'right', status: false, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'extraBath', id: 'nw' }))
        store.dispatch(updateWall({ id: 'extraBath-nw-right', hasDoor: true }))
        
      }, 100);  
    
      //bedroom2
      const bed2Length = builtLength * 0.45
      const bed2Breadth = builtBreadth * 0.24
      store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'sw', roomType: 'bedroom', length: bed2Length, breadth: bed2Breadth }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'sw' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'sw' }))
      
      const toilet2Length = builtLength * 0.30
      const toilet2Breadth = builtBreadth * 0.09
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(addRoomToPlot({ position: 'sw', roomType: 'toilet' }))
        store.dispatch(updateRoomData({ id: 'sw', roomType: 'toilet', length: toilet2Length, breadth: toilet2Breadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'toilet', id: 'sw' }))
        store.dispatch(updateWall({ id: 'toilet-sw-front', hasDoor: false }))
        store.dispatch(updateWall({ id: 'toilet-sw-right', hasDoor: false }))
    
       //bedroom3
      const bed3Length = builtLength * 0.45
      const bed3Breadth = builtBreadth * 0.26
      setTimeout(() => {
        
      
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'se', roomType: 'bedroom', length: bed3Length, breadth: bed3Breadth,
      position:{right:0, top:Math.floor(bed1Breadth+mediaBreadth)*scale} }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'bedroom', id: 'se' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'se' }))
      
      const bed4Length = builtLength * 0.30
      const bed4Breadth = builtBreadth * 0.22

      store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'bedroom' }))
      store.dispatch(updateRoomData({ id: 'ne', roomType: 'bedroom', length: bed4Length, breadth: bed4Breadth,
      position:{bottom:0, bottom:Math.floor(kitchenBreadth)*scale} }))
      store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'bedroom', id: 'ne' }))
      store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'bedroom', id: 'ne' }))

      }, 100);
        //living
      const livingLength = builtLength * 0.63
      const livingBreadth = builtBreadth * 0.20
      setTimeout(() => {
        
      
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'living' }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', length: livingLength, breadth: livingBreadth }))
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'living', 
        position: { bottom: Math.floor(parkingBreadth)*scale-setbacks.front*scale, right: 0 } }))
      }, 100);
    
      //drawing
      const drawingLength = builtLength * 0.49
      const drawingBreadth = builtBreadth * 0.16
      setTimeout(() => {
        
        store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
        store.dispatch(updateRoomData({ id: '', roomType: 'drawing', length: drawingLength, breadth: drawingBreadth, 
        position: { top: Math.floor(bed2Breadth) * scale+14, left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'front', status: false, roomType: 'drawing', id: 'ne' }))
      }, 100);
    
      //kitchen
      const kitchenLength = builtLength * 0.36
      const kitchenBreadth = builtBreadth * 0.30
     setTimeout(() => {
     
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'kitchen' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'kitchen', length: kitchenLength, breadth: kitchenBreadth, 
        position: { bottom: 0, left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'kitchen', id: '' }))
        store.dispatch(updateWall({ id: 'kitchen-se-right', openingLength: 0.5 * kitchenBreadth, hasOpening: true }))
      }, 100);
        //dining
        const diningLength = builtLength * 0.42
        const diningBreadth = builtBreadth * 0.10
        
        setTimeout(() => {
        
        store.dispatch(addRoomToPlot({ position: 'se', roomType: 'dining' }))
        store.dispatch(updateRoomData({ id: '', roomType: 'dining', length: diningLength, breadth: diningBreadth }))
        store.dispatch(updateRoomData({ id: '', roomType: 'dining', 
        position: { bottom: Math.floor(kitchenBreadth-diningBreadth) * parseInt(scale)+3 } }))
      }, 100);
     
    
        //pooja
        const poojaLength = builtLength * 0.10
        const poojaBreadth = builtBreadth * 0.1
        store.dispatch(addRoomToPlot({ position: '', roomType: 'pooja' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'pooja', length: poojaLength, breadth: poojaBreadth }))
    
        store.dispatch(updateRoomData({ id: '', roomType: 'pooja', position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: 0 } }))
        store.dispatch(addWallToRoom({ side: 'back', status: false, roomType: 'pooja', id: '' }))
        // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'pooja', id: '' }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'pooja', id: '' }))
        // store.dispatch(updateWall({ id: 'pooja-se-front', openingLength: 0.5 * poojaLength, hasOpening: true }))
        
        
        //staircase
    
      const stairCaseLength = builtLength * 0.36
      const stairCaseBreadth = builtBreadth * 0.12
      setTimeout(() => {
      store.dispatch(addRoomToPlot({ position: 'se', roomType: 'stairCase' }))
      store.dispatch(updateRoomData({ id: 'se', roomType: 'stairCase', length: stairCaseLength, breadth: stairCaseBreadth, 
      position:{bottom:0, left:0} }))
      // store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'bedroom', id: 'nw' }))
      // store.dispatch(addWallToRoom({ side: 'left', status: false, roomType: 'bedroom', id: 'nw' }))
    }, 100);
    
    
        //parking
        const parkingLength = builtLength * 0.4
        const parkingBreadth = builtBreadth * 0.18
        setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'parking' }))  
        store.dispatch(updateRoomData({ id: 'ne', roomType: 'parking', length: parkingLength, breadth: parkingBreadth, 
        position: { bottom: 0, right: 0 } }))
        store.dispatch(addWallToRoom({ side: 'left', status: true, roomType: 'parking', id: 'ne' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'parking', id: 'ne' }))
      }, 100);
    
        //sitout
        const sitoutLength = builtLength * 0.12
        const sitoutBreadth = builtBreadth * 0.15
         
        setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: '', roomType: 'sitout' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', position: { top: Math.floor(bed2Breadth+poojaBreadth) * parseInt(scale), left: 0 } }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'sitout', length: sitoutLength, breadth: sitoutBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'sitout', id: '' }))
        store.dispatch(updateWall({ id: 'sitout-se-right', openingLength: 0.3 * sitoutBreadth, hasOpening: true }))
      }, 100);
    
        //common Bath
        const commonToiletLength = builtLength * 0.14
        const commonToiletBreadth = builtBreadth * 0.12
    setTimeout(() => {
        store.dispatch(addRoomToPlot({ position: '', roomType: 'commonToilet' }))
        store.dispatch(updateRoomData({ id: 'se', roomType: 'commonToilet', 
        position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 } }))
        store.dispatch(updateRoomData({ id: '', roomType: 'commonToilet', length: commonToiletLength, breadth: commonToiletBreadth }))
        store.dispatch(addWallToRoom({ side: 'right', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'back', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'commonToilet', id: '' }))
        store.dispatch(updateWall({ id: 'commonToilet-se-right', hasDoor: true }))
      }, 100); 
    }

  else if 
  (plotLength >= 15 && plotLength <= 20) //Breadth :15-20 
  
  
  (plotLength >= 21 && plotLength <= 25) //Breadth : 21-25
    

  (plotLength >= 26 && plotLength <= 30) //Breadth :26-30
    

   (plotLength >= 31 && plotLength <= 35) //Breadth :31-35 
    

   (plotLength >= 36 && plotLength <= 40) //Breadth :36-40
    
    
   (plotLength >= 41 && plotLength <= 45) //Breadth :41-45 
    
  
}
// length > breadth
function generateTypeB(number) {
  const state = store.getState()
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot
  if (plotLength >= 16 && plotLength < 30) {
  } else if (plotLength >= 30 && plotLength <= 45) {
  } else if (plotLength > 45) {
  }
}
