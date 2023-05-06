import { saveCode } from '../../redux/plot'
import { store } from '../../redux/store'
import { generateS2 } from './roomsProperties/southFacing/2bhk'
import { generateE2 } from './roomsProperties/eastFacing/2bhk'
export function generatePlot(builtLength, builtBreadth, facing, type) {
  if (facing === 'S') {
    if (type == '2BHK') {
      generateS2()
    }
  }
  if (facing === 'E') {
    if (type === '2BHK') {
      generateE2()
    }
    if (type === '3BHK') {
      generateE3()
    }
    if (type === '4BHK') {
      generateE4()
    }
  }
  store.dispatch(saveCode())
}
