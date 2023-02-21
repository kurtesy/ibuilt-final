class Bedroom {
  constructor(id, length, breadth, position) {
    this.id = id
    this.length = length
    this.breadth = breadth
    this.position = position
    this.area = (parseFloat(length) * parseFloat(breadth)).toFixed(2)
  }
  setLength(length) {
    this.length = length
  }
  getLength() {
    return this.length
  }
  setBreadth(breadth) {
    this.breadth = breadth
  }
  getBreadth() {
    return this.breadth
  }
  setPosition(position) {
    this.position = position
  }
  getPosition() {
    return this.position
  }
  getArea() {
    return this.area
  }
}
