import { json2csv } from 'json-2-csv'
import { store } from '../../redux/store'

export function saveBedRoom(selectedRoom) {
  const state = store.getState()
  const currentBedroom = state.rooms.bedRooms.find((room) => room.id === selectedRoom.id)
  window.localStorage.setItem(`bedroom-${selectedRoom.id}`, JSON.stringify(currentBedroom))
}
export function finalSave() {
  const state = store.getState()
  const { addedRooms } = state.rooms
  const {
    bedRooms,
    livingRooms,
    toilets,
    balconies,
    kitchen,
    utility,
    dining,
    drawing,
    pooja,
    media,
    stairCase,
    parking,
    sitout,
    commonToilet
  } = state.rooms
  const storeRoom = state.rooms.store
  const { facing, type, plotLength, plotBreadth, plotArea, builtLength, builtBreadth, builtArea, setbacks } = state.plot
  const data = {}
  data['facing'] = facing
  data['type'] = type
  data['plot_length'] = plotLength
  data['plot_breadth'] = plotBreadth
  data['plot_area'] = plotArea
  data['built_length'] = builtLength
  data['built_breadth'] = builtBreadth
  data['built_area'] = builtArea
  data['setback_left'] = setbacks.left
  data['setback_right'] = setbacks.right
  data['setback_front'] = setbacks.front
  data['setback_back'] = setbacks.back
  // window.localStorage.setItem('data', JSON.stringify(data))

  // Save bedrooms
  bedRooms.forEach((room, index) => {
    data[`bedroom_${index}_length`] = room.length
    data[`bedroom_${index}_breadth`] = room.breadth
    data[`bedroom_${index}_area`] = room.area
    data[`bedroom_${index}_position_bottom`] = room.position?.bottom
    data[`bedroom_${index}_position_top`] = room.position?.top
    data[`bedroom_${index}_position_left`] = room.position?.left
    data[`bedroom_${index}_position_right`] = room.position?.right
    //walls
    room.walls.forEach((wall, idx) => {
      data[`bedroom_${index}_wall_${idx}_added`] = wall.added
      data[`bedroom_${index}_wall_${idx}_side`] = wall.side
      data[`bedroom_${index}_wall_${idx}_length`] = wall.length
      data[`bedroom_${index}_wall_${idx}_thickness`] = wall.thickness
      data[`bedroom_${index}_wall_${idx}_area`] = wall.area

      data[`bedroom_${index}_wall_${idx}_position_bottom`] = wall.position?.bottom
      data[`bedroom_${index}_wall_${idx}_position_top`] = wall.position?.top
      data[`bedroom_${index}_wall_${idx}_position_left`] = wall.position?.left
      data[`bedroom_${index}_wall_${idx}_position_right`] = wall.position?.right

      data[`bedroom_${index}_wall_${idx}_door_includes`] = wall.door.includes
      data[`bedroom_${index}_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
      data[`bedroom_${index}_wall_${idx}_door_position_top`] = wall.door.position?.top
      data[`bedroom_${index}_wall_${idx}_door_position_left`] = wall.door.position?.left
      data[`bedroom_${index}_wall_${idx}_door_position_right`] = wall.door.position?.right

      data[`bedroom_${index}_wall_${idx}_opening_includes`] = wall.opening.includes
      data[`bedroom_${index}_wall_${idx}_opening_length`] = wall.opening.length
      data[`bedroom_${index}_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
      data[`bedroom_${index}_wall_${idx}_opening_position_top`] = wall.opening.position?.top
      data[`bedroom_${index}_wall_${idx}_opening_position_left`] = wall.opening.position?.left
      data[`bedroom_${index}_wall_${idx}_opening_position_right`] = wall.opening.position?.right
    })
  })
  //save livingrooms
  livingRooms.forEach((room, index) => {
    data[`living_${index}_length`] = room.length
    data[`living_${index}_breadth`] = room.breadth
    data[`living_${index}_area`] = room.area
    data[`living_${index}_position_bottom`] = room.position?.bottom
    data[`living_${index}_position_top`] = room.position?.top
    data[`living_${index}_position_left`] = room.position?.left
    data[`living_${index}_position_right`] = room.position?.right
    //walls
    room.walls.forEach((wall, idx) => {
      data[`living_${index}_wall_${idx}_added`] = wall.added
      data[`living_${index}_wall_${idx}_side`] = wall.side
      data[`living_${index}_wall_${idx}_length`] = wall.length
      data[`living_${index}_wall_${idx}_thickness`] = wall.thickness
      data[`living_${index}_wall_${idx}_area`] = wall.area

      data[`living_${index}_wall_${idx}_position_bottom`] = wall.position?.bottom
      data[`living_${index}_wall_${idx}_position_top`] = wall.position?.top
      data[`living_${index}_wall_${idx}_position_left`] = wall.position?.left
      data[`living_${index}_wall_${idx}_position_right`] = wall.position?.right

      data[`living_${index}_wall_${idx}_door_includes`] = wall.door.includes
      data[`living_${index}_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
      data[`living_${index}_wall_${idx}_door_position_top`] = wall.door.position?.top
      data[`living_${index}_wall_${idx}_door_position_left`] = wall.door.position?.left
      data[`living_${index}_wall_${idx}_door_position_right`] = wall.door.position?.right

      data[`living_${index}_wall_${idx}_opening_includes`] = wall.opening.includes
      data[`living_${index}_wall_${idx}_opening_length`] = wall.opening.length
      data[`living_${index}_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
      data[`living_${index}_wall_${idx}_opening_position_top`] = wall.opening.position?.top
      data[`living_${index}_wall_${idx}_opening_position_left`] = wall.opening.position?.left
      data[`living_${index}_wall_${idx}_opening_position_right`] = wall.opening.position?.right
    })
  })
  //save toilets
  toilets.forEach((room, index) => {
    data[`toilet_${index}_length`] = room.length
    data[`toilet_${index}_breadth`] = room.breadth
    data[`toilet_${index}_area`] = room.area
    data[`toilet_${index}_position_bottom`] = room.position?.bottom
    data[`toilet_${index}_position_top`] = room.position?.top
    data[`toilet_${index}_position_left`] = room.position?.left
    data[`toilet_${index}_position_right`] = room.position?.right
    //walls
    room.walls.forEach((wall, idx) => {
      data[`toilet_${index}_wall_${idx}_added`] = wall.added
      data[`toilet_${index}_wall_${idx}_side`] = wall.side
      data[`toilet_${index}_wall_${idx}_length`] = wall.length
      data[`toilet_${index}_wall_${idx}_thickness`] = wall.thickness
      data[`toilet_${index}_wall_${idx}_area`] = wall.area

      data[`toilet_${index}_wall_${idx}_position_bottom`] = wall.position?.bottom
      data[`toilet_${index}_wall_${idx}_position_top`] = wall.position?.top
      data[`toilet_${index}_wall_${idx}_position_left`] = wall.position?.left
      data[`toilet_${index}_wall_${idx}_position_right`] = wall.position?.right

      data[`toilet_${index}_wall_${idx}_door_includes`] = wall.door.includes
      data[`toilet_${index}_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
      data[`toilet_${index}_wall_${idx}_door_position_top`] = wall.door.position?.top
      data[`toilet_${index}_wall_${idx}_door_position_left`] = wall.door.position?.left
      data[`toilet_${index}_wall_${idx}_door_position_right`] = wall.door.position?.right

      data[`toilet_${index}_wall_${idx}_opening_includes`] = wall.opening.includes
      data[`toilet_${index}_wall_${idx}_opening_length`] = wall.opening.length
      data[`toilet_${index}_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
      data[`toilet_${index}_wall_${idx}_opening_position_top`] = wall.opening.position?.top
      data[`toilet_${index}_wall_${idx}_opening_position_left`] = wall.opening.position?.left
      data[`toilet_${index}_wall_${idx}_opening_position_right`] = wall.opening.position?.right
    })
  })
  //save balconies
  balconies.forEach((room, index) => {
    data[`balcony_${index}_length`] = room.length
    data[`balcony_${index}_breadth`] = room.breadth
    data[`balcony_${index}_area`] = room.area
    data[`balcony_${index}_position_bottom`] = room.position?.bottom
    data[`balcony_${index}_position_top`] = room.position?.top
    data[`balcony_${index}_position_left`] = room.position?.left
    data[`balcony_${index}_position_right`] = room.position?.right
    //walls
    // room.walls.forEach((wall, idx) => {
    //   data[`balcony_${index}_wall_${idx}_added`] = wall.added
    //   data[`balcony_${index}_wall_${idx}_side`] = wall.side
    //   data[`balcony_${index}_wall_${idx}_length`] = wall.length
    //   data[`balcony_${index}_wall_${idx}_thickness`] = wall.thickness
    //   data[`balcony_${index}_wall_${idx}_area`] = wall.area

    //   data[`balcony_${index}_wall_${idx}_position_bottom`] = wall.position?.bottom
    //   data[`balcony_${index}_wall_${idx}_position_top`] = wall.position?.top
    //   data[`balcony_${index}_wall_${idx}_position_left`] = wall.position?.left
    //   data[`balcony_${index}_wall_${idx}_position_right`] = wall.position?.right

    //   data[`balcony_${index}_wall_${idx}_door_includes`] = wall.door.includes
    //   data[`balcony_${index}_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    //   data[`balcony_${index}_wall_${idx}_door_position_top`] = wall.door.position?.top
    //   data[`balcony_${index}_wall_${idx}_door_position_left`] = wall.door.position?.left
    //   data[`balcony_${index}_wall_${idx}_door_position_right`] = wall.door.position?.right

    //   data[`balcony_${index}_wall_${idx}_opening_includes`] = wall.opening.includes
    //   data[`balcony_${index}_wall_${idx}_opening_length`] = wall.opening.length
    //   data[`balcony_${index}_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    //   data[`balcony_${index}_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    //   data[`balcony_${index}_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    //   data[`balcony_${index}_wall_${idx}_opening_position_right`] = wall.opening.position?.right
    // })
  })
  //save kitchen
  data[`kitchen_length`] = kitchen.length
  data[`kitchen_breadth`] = kitchen.breadth
  data[`kitchen_area`] = kitchen.area
  data[`kitchen_position_bottom`] = kitchen.position?.bottom
  data[`kitchen_position_top`] = kitchen.position?.top
  data[`kitchen_position_left`] = kitchen.position?.left
  data[`kitchen_position_right`] = kitchen.position?.right
  //walls
  kitchen.walls.forEach((wall, idx) => {
    data[`kitchen_wall_${idx}_added`] = wall.added
    data[`kitchen_wall_${idx}_side`] = wall.side
    data[`kitchen_wall_${idx}_length`] = wall.length
    data[`kitchen_wall_${idx}_thickness`] = wall.thickness
    data[`kitchen_wall_${idx}_area`] = wall.area

    data[`kitchen_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`kitchen_wall_${idx}_position_top`] = wall.position?.top
    data[`kitchen_wall_${idx}_position_left`] = wall.position?.left
    data[`kitchen_wall_${idx}_position_right`] = wall.position?.right

    data[`kitchen_wall_${idx}_door_includes`] = wall.door.includes
    data[`kitchen_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`kitchen_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`kitchen_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`kitchen_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`kitchen_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`kitchen_wall_${idx}_opening_length`] = wall.opening.length
    data[`kitchen_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`kitchen_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`kitchen_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`kitchen_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })

  //save dining
  data[`dining_length`] = dining.length
  data[`dining_breadth`] = dining.breadth
  data[`dining_area`] = dining.area
  data[`dining_position_bottom`] = dining.position?.bottom
  data[`dining_position_top`] = dining.position?.top
  data[`dining_position_left`] = dining.position?.left
  data[`dining_position_right`] = dining.position?.right
  //walls
  dining.walls.forEach((wall, idx) => {
    data[`dining_wall_${idx}_added`] = wall.added
    data[`dining_wall_${idx}_side`] = wall.side
    data[`dining_wall_${idx}_length`] = wall.length
    data[`dining_wall_${idx}_thickness`] = wall.thickness
    data[`dining_wall_${idx}_area`] = wall.area

    data[`dining_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`dining_wall_${idx}_position_top`] = wall.position?.top
    data[`dining_wall_${idx}_position_left`] = wall.position?.left
    data[`dining_wall_${idx}_position_right`] = wall.position?.right

    data[`dining_wall_${idx}_door_includes`] = wall.door.includes
    data[`dining_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`dining_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`dining_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`dining_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`dining_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`dining_wall_${idx}_opening_length`] = wall.opening.length
    data[`dining_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`dining_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`dining_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`dining_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })

  //save utility
  data[`utility_length`] = utility.length
  data[`utility_breadth`] = utility.breadth
  data[`utility_area`] = utility.area
  data[`utility_position_bottom`] = utility.position?.bottom
  data[`utility_position_top`] = utility.position?.top
  data[`utility_position_left`] = utility.position?.left
  data[`utility_position_right`] = utility.position?.right
  //walls
  utility.walls.forEach((wall, idx) => {
    data[`utility_wall_${idx}_added`] = wall.added
    data[`utility_wall_${idx}_side`] = wall.side
    data[`utility_wall_${idx}_length`] = wall.length
    data[`utility_wall_${idx}_thickness`] = wall.thickness
    data[`utility_wall_${idx}_area`] = wall.area

    data[`utility_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`utility_wall_${idx}_position_top`] = wall.position?.top
    data[`utility_wall_${idx}_position_left`] = wall.position?.left
    data[`utility_wall_${idx}_position_right`] = wall.position?.right

    data[`utility_wall_${idx}_door_includes`] = wall.door.includes
    data[`utility_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`utility_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`utility_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`utility_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`utility_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`utility_wall_${idx}_opening_length`] = wall.opening.length
    data[`utility_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`utility_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`utility_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`utility_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })
  //save storeRoom
  data[`storeRoom_length`] = storeRoom.length
  data[`storeRoom_breadth`] = storeRoom.breadth
  data[`storeRoom_area`] = storeRoom.area
  data[`storeRoom_position_bottom`] = storeRoom.position?.bottom
  data[`storeRoom_position_top`] = storeRoom.position?.top
  data[`storeRoom_position_left`] = storeRoom.position?.left
  data[`storeRoom_position_right`] = storeRoom.position?.right
  //walls
  storeRoom.walls.forEach((wall, idx) => {
    data[`storeRoom_wall_${idx}_added`] = wall.added
    data[`storeRoom_wall_${idx}_side`] = wall.side
    data[`storeRoom_wall_${idx}_length`] = wall.length
    data[`storeRoom_wall_${idx}_thickness`] = wall.thickness
    data[`storeRoom_wall_${idx}_area`] = wall.area

    data[`storeRoom_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`storeRoom_wall_${idx}_position_top`] = wall.position?.top
    data[`storeRoom_wall_${idx}_position_left`] = wall.position?.left
    data[`storeRoom_wall_${idx}_position_right`] = wall.position?.right

    data[`storeRoom_wall_${idx}_door_includes`] = wall.door.includes
    data[`storeRoom_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`storeRoom_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`storeRoom_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`storeRoom_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`storeRoom_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`storeRoom_wall_${idx}_opening_length`] = wall.opening.length
    data[`storeRoom_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`storeRoom_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`storeRoom_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`storeRoom_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })
  //save drawing
  data[`drawing_length`] = drawing.length
  data[`drawing_breadth`] = drawing.breadth
  data[`drawing_area`] = drawing.area
  data[`drawing_position_bottom`] = drawing.position?.bottom
  data[`drawing_position_top`] = drawing.position?.top
  data[`drawing_position_left`] = drawing.position?.left
  data[`drawing_position_right`] = drawing.position?.right
  //walls
  drawing.walls.forEach((wall, idx) => {
    data[`drawing_wall_${idx}_added`] = wall.added
    data[`drawing_wall_${idx}_side`] = wall.side
    data[`drawing_wall_${idx}_length`] = wall.length
    data[`drawing_wall_${idx}_thickness`] = wall.thickness
    data[`drawing_wall_${idx}_area`] = wall.area

    data[`drawing_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`drawing_wall_${idx}_position_top`] = wall.position?.top
    data[`drawing_wall_${idx}_position_left`] = wall.position?.left
    data[`drawing_wall_${idx}_position_right`] = wall.position?.right

    data[`drawing_wall_${idx}_door_includes`] = wall.door.includes
    data[`drawing_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`drawing_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`drawing_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`drawing_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`drawing_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`drawing_wall_${idx}_opening_length`] = wall.opening.length
    data[`drawing_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`drawing_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`drawing_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`drawing_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })

  //save pooja
  data[`pooja_length`] = pooja.length
  data[`pooja_breadth`] = pooja.breadth
  data[`pooja_area`] = pooja.area
  data[`pooja_position_bottom`] = pooja.position?.bottom
  data[`pooja_position_top`] = pooja.position?.top
  data[`pooja_position_left`] = pooja.position?.left
  data[`pooja_position_right`] = pooja.position?.right
  //walls
  pooja.walls.forEach((wall, idx) => {
    data[`pooja_wall_${idx}_added`] = wall.added
    data[`pooja_wall_${idx}_side`] = wall.side
    data[`pooja_wall_${idx}_length`] = wall.length
    data[`pooja_wall_${idx}_thickness`] = wall.thickness
    data[`pooja_wall_${idx}_area`] = wall.area

    data[`pooja_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`pooja_wall_${idx}_position_top`] = wall.position?.top
    data[`pooja_wall_${idx}_position_left`] = wall.position?.left
    data[`pooja_wall_${idx}_position_right`] = wall.position?.right

    data[`pooja_wall_${idx}_door_includes`] = wall.door.includes
    data[`pooja_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`pooja_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`pooja_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`pooja_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`pooja_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`pooja_wall_${idx}_opening_length`] = wall.opening.length
    data[`pooja_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`pooja_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`pooja_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`pooja_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })

  //save media
  data[`media_length`] = media.length
  data[`media_breadth`] = media.breadth
  data[`media_area`] = media.area
  data[`media_position_bottom`] = media.position?.bottom
  data[`media_position_top`] = media.position?.top
  data[`media_position_left`] = media.position?.left
  data[`media_position_right`] = media.position?.right
  //walls
  media.walls.forEach((wall, idx) => {
    data[`media_wall_${idx}_added`] = wall.added
    data[`media_wall_${idx}_side`] = wall.side
    data[`media_wall_${idx}_length`] = wall.length
    data[`media_wall_${idx}_thickness`] = wall.thickness
    data[`media_wall_${idx}_area`] = wall.area

    data[`media_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`media_wall_${idx}_position_top`] = wall.position?.top
    data[`media_wall_${idx}_position_left`] = wall.position?.left
    data[`media_wall_${idx}_position_right`] = wall.position?.right

    data[`media_wall_${idx}_door_includes`] = wall.door.includes
    data[`media_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`media_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`media_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`media_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`media_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`media_wall_${idx}_opening_length`] = wall.opening.length
    data[`media_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`media_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`media_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`media_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })
  //save stairCase
  data[`stairCase_length`] = stairCase.length
  data[`stairCase_breadth`] = stairCase.breadth
  data[`stairCase_area`] = stairCase.area
  data[`stairCase_position_bottom`] = stairCase.position?.bottom
  data[`stairCase_position_top`] = stairCase.position?.top
  data[`stairCase_position_left`] = stairCase.position?.left
  data[`stairCase_position_right`] = stairCase.position?.right
  //walls
  stairCase.walls.forEach((wall, idx) => {
    data[`stairCase_wall_${idx}_added`] = wall.added
    data[`stairCase_wall_${idx}_side`] = wall.side
    data[`stairCase_wall_${idx}_length`] = wall.length
    data[`stairCase_wall_${idx}_thickness`] = wall.thickness
    data[`stairCase_wall_${idx}_area`] = wall.area

    data[`stairCase_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`stairCase_wall_${idx}_position_top`] = wall.position?.top
    data[`stairCase_wall_${idx}_position_left`] = wall.position?.left
    data[`stairCase_wall_${idx}_position_right`] = wall.position?.right

    data[`stairCase_wall_${idx}_door_includes`] = wall.door.includes
    data[`stairCase_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`stairCase_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`stairCase_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`stairCase_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`stairCase_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`stairCase_wall_${idx}_opening_length`] = wall.opening.length
    data[`stairCase_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`stairCase_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`stairCase_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`stairCase_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })

  //save sitout
  data[`sitout_length`] = sitout.length
  data[`sitout_breadth`] = sitout.breadth
  data[`sitout_area`] = sitout.area
  data[`sitout_position_bottom`] = sitout.position?.bottom
  data[`sitout_position_top`] = sitout.position?.top
  data[`sitout_position_left`] = sitout.position?.left
  data[`sitout_position_right`] = sitout.position?.right
  //walls
  sitout.walls.forEach((wall, idx) => {
    data[`sitout_wall_${idx}_added`] = wall.added
    data[`sitout_wall_${idx}_side`] = wall.side
    data[`sitout_wall_${idx}_length`] = wall.length
    data[`sitout_wall_${idx}_thickness`] = wall.thickness
    data[`sitout_wall_${idx}_area`] = wall.area

    data[`sitout_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`sitout_wall_${idx}_position_top`] = wall.position?.top
    data[`sitout_wall_${idx}_position_left`] = wall.position?.left
    data[`sitout_wall_${idx}_position_right`] = wall.position?.right

    data[`sitout_wall_${idx}_door_includes`] = wall.door.includes
    data[`sitout_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`sitout_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`sitout_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`sitout_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`sitout_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`sitout_wall_${idx}_opening_length`] = wall.opening.length
    data[`sitout_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`sitout_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`sitout_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`sitout_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })

  //save parking
  data[`parking_length`] = parking.length
  data[`parking_breadth`] = parking.breadth
  data[`parking_area`] = parking.area
  data[`parking_position_bottom`] = parking.position?.bottom
  data[`parking_position_top`] = parking.position?.top
  data[`parking_position_left`] = parking.position?.left
  data[`parking_position_right`] = parking.position?.right
  //walls
  parking.walls.forEach((wall, idx) => {
    data[`parking_wall_${idx}_added`] = wall.added
    data[`parking_wall_${idx}_side`] = wall.side
    data[`parking_wall_${idx}_length`] = wall.length
    data[`parking_wall_${idx}_thickness`] = wall.thickness
    data[`parking_wall_${idx}_area`] = wall.area

    data[`parking_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`parking_wall_${idx}_position_top`] = wall.position?.top
    data[`parking_wall_${idx}_position_left`] = wall.position?.left
    data[`parking_wall_${idx}_position_right`] = wall.position?.right

    data[`parking_wall_${idx}_door_includes`] = wall.door.includes
    data[`parking_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`parking_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`parking_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`parking_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`parking_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`parking_wall_${idx}_opening_length`] = wall.opening.length
    data[`parking_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`parking_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`parking_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`parking_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })

  //save commonToilet
  data[`commonToilet_length`] = commonToilet.length
  data[`commonToilet_breadth`] = commonToilet.breadth
  data[`commonToilet_area`] = commonToilet.area
  data[`commonToilet_position_bottom`] = commonToilet.position?.bottom
  data[`commonToilet_position_top`] = commonToilet.position?.top
  data[`commonToilet_position_left`] = commonToilet.position?.left
  data[`commonToilet_position_right`] = commonToilet.position?.right
  //walls
  commonToilet.walls.forEach((wall, idx) => {
    data[`commonToilet_wall_${idx}_added`] = wall.added
    data[`commonToilet_wall_${idx}_side`] = wall.side
    data[`commonToilet_wall_${idx}_length`] = wall.length
    data[`commonToilet_wall_${idx}_thickness`] = wall.thickness
    data[`commonToilet_wall_${idx}_area`] = wall.area

    data[`commonToilet_wall_${idx}_position_bottom`] = wall.position?.bottom
    data[`commonToilet_wall_${idx}_position_top`] = wall.position?.top
    data[`commonToilet_wall_${idx}_position_left`] = wall.position?.left
    data[`commonToilet_wall_${idx}_position_right`] = wall.position?.right

    data[`commonToilet_wall_${idx}_door_includes`] = wall.door.includes
    data[`commonToilet_wall_${idx}_door_position_bottom`] = wall.door.position?.bottom
    data[`commonToilet_wall_${idx}_door_position_top`] = wall.door.position?.top
    data[`commonToilet_wall_${idx}_door_position_left`] = wall.door.position?.left
    data[`commonToilet_wall_${idx}_door_position_right`] = wall.door.position?.right

    data[`commonToilet_wall_${idx}_opening_includes`] = wall.opening.includes
    data[`commonToilet_wall_${idx}_opening_length`] = wall.opening.length
    data[`commonToilet_wall_${idx}_opening_position_bottom`] = wall.opening.position?.bottom
    data[`commonToilet_wall_${idx}_opening_position_top`] = wall.opening.position?.top
    data[`commonToilet_wall_${idx}_opening_position_left`] = wall.opening.position?.left
    data[`commonToilet_wall_${idx}_opening_position_right`] = wall.opening.position?.right
  })
  console.log('saved data: ' + JSON.stringify([data]))
  return [data]
}
export async function saveToCsv() {
  const data = finalSave()
  const csv = await json2csv(data)
  return csv
}
