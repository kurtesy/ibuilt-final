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
  const { bedRooms, livingRooms, toilets } = state.rooms
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

  // Save bedtooms
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
  console.log('saved data: ' + JSON.stringify([data]))
  return [data]
}
export async function saveToCsv() {
  const data = finalSave()
  const csv = await json2csv(data)
  return csv
}
