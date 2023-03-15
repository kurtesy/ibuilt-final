const addedRooms = [
  { position: 'nw', roomType: 'bedroom' },
  { position: 'nw', roomType: 'living' },
  { position: 'nw', roomType: 'kitchen' },
  { position: 'nw', roomType: 'pooja' },
  { position: 'nw', roomType: 'office' }
]

function deleteRoom(position, roomType) {
  let indexOfDeleted
  addedRooms.forEach((room, index) => {
    if (room.position === position && room.roomType === roomType) {
      indexOfDeleted = index
    }
  })
  addedRooms.splice(indexOfDeleted, 1)
  console.log(addedRooms)
}

deleteRoom('nw', 'living')
