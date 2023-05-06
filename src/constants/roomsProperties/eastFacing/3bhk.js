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
