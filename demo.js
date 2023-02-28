const arr = [
  { pos: 'x', value: '12' },
  { pos: 'y', value: '10' },
  { pos: 'z', value: '-15' }
]
let foundIndex
arr.forEach((item, index) => {
  if (item.pos === 'y') foundIndex = index
})
console.log(foundIndex)
arr.splice(foundIndex, 1)
console.log(arr)
