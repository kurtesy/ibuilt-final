import positions from '../constants/facingAndPosition'
class Bedroom {
  constructor(location,facing) {
    this.id='bedroom_'+location
    this.location = location
    this.length=null
    this.breadth=null
    this.position=positions[facing.toString()][location.toString]
  }
  setDimensions(length, breadth) {
    this.length = length
    this.breadth = breadth
  }
  getDimensions() {
    return { length: this.length, breadth: this.breadth }
  }
  getArea(){
    return (this.length*this.breadth).toFixed(2)
  }
}

facing,noOFbhk,plotdimension
s,3,[20,34]


facing=>N, S, E, W
bhk => 1 2 3 4
plot dims