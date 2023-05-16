import { saveCode } from '../../redux/plot'
import { store } from '../../redux/store'
import { generateS2 } from './roomsProperties/southFacing'
import { generateE2 } from './roomsProperties/eastFacing'
import {generateW2} from './roomsProperties/westFacing'
import {generateN2} from './roomsProperties/northFacing'
export function generatePlot(builtLength, builtBreadth, facing, type) {
  if(facing==='N') generateN2()
  else if(facing==='S') generateS2()
  else if(facing==='E') generateE2()
  else if(facing==='W') generateW2()
}
