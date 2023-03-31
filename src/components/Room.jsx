import React, { useEffect, useState } from 'react'
import { positions } from '../constants/facingAndPosition'
import { useDispatch, useSelector } from 'react-redux'
import { addRoom, setSelectedRoom, updateRoom } from '../../redux/data'
export default function Room({ room, id }) {
  const [length, setLength] = useState(12)
  const [breadth, setBreadth] = useState(12)
  const [area, setArea] = useState(0)
  const [position, setPosition] = useState({})
  const [style, setStyle] = useState({})
  const [active, setActive] = useState(false)
  const { facing, scale } = useSelector((state) => state.plot)
  const { selectedRoom } = useSelector((state) => state.data)
  const { builtupDetails } = useSelector((state) => state.data)
  const bedrooms = useSelector((state) => state.data.roomsDetails.bedrooms)
  const thisRoom = useSelector((state) => state.data.roomsDetails[room])
  // const toilets = useSelector((state) => state.data.roomsDetails.toilets)
  // const balconies = useSelector((state) => state.data.roomsDetails.balconies)
  // const kitchen = useSelector((state) => state.data.roomsDetails.kitchen)
  // const pooja = useSelector((state) => state.data.roomsDetails.pooja)
  // const drawing = useSelector((state) => state.data.roomsDetails.drawing)
  // const sitout = useSelector((state) => state.data.roomsDetails.sitout)
  // const store = useSelector((state) => state.data.roomsDetails.store)
  // const utility = useSelector((state) => state.data.roomsDetails.utility)
  // const commonToilet = useSelector((state) => state.data.roomsDetails.commonToilet)
  // const office = useSelector((state) => state.data.roomsDetails.office)
  // const parking = useSelector((state) => state.data.roomsDetails.parking)
  // const media = useSelector((state) => state.data.roomsDetails.media)
  // const staircase = useSelector((state) => state.data.roomsDetails.staircase)

  const [currentRoom, setCurrentRoom] = useState({})

  const dispatch = useDispatch()

  //On load, set length and breadth values
  useEffect(() => {
    if (id && room && length && breadth)
      dispatch(
        updateRoom({
          id,
          room,
          length: parseFloat(builtupDetails.length / 2) < 20 ? parseFloat(builtupDetails.length / 2) : 20,
          breadth: parseFloat(builtupDetails.breadth / 2) ? parseFloat(builtupDetails.breadth / 2) : 20
        })
      )
  }, [builtupDetails])

  console.log('builtupDetails: ' + builtupDetails.length)
  useEffect(() => {
    if (room === 'bedroom') {
      const room = bedrooms?.filter((room) => room.id === id)[0]
      setCurrentRoom(room)
    } else {
      setCurrentRoom(thisRoom)
    }
  }, [bedrooms, thisRoom])
  console.log('currentRoom: ' + JSON.stringify(currentRoom))
  //Update initial data when loaded
  // useEffect(() => {
  //   if (id && length && breadth && area && position)
  //     dispatch(addRoom({ room, data: { id, length, breadth, position, area } }))
  // }, [id, room, length, breadth, position, area])

  //update position based on the id provided
  useEffect(() => {
    if (id && room && position)
      dispatch(updateRoom({ id, room, position: positions[facing.toString()][id.toString()] }))
    console.log('facing changes: ' + { id, room, position: positions[facing.toString()][id.toString()] })
  }, [facing])

  //scale dimensions
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = Math.floor(length * scale)
    currStyle['height'] = Math.floor(breadth * scale)
    setStyle({ ...currStyle, ...currentRoom?.position })
  }

  //update when length and breadth changes
  useEffect(() => {
    makeStyle()
  }, [length, breadth, facing, scale, currentRoom, position])

  useEffect(() => {
    setLength(currentRoom?.length)
    setBreadth(currentRoom?.breadth)
  }, [currentRoom])
  console.log('style: ' + JSON.stringify(style))
  //update when position changes
  useEffect(() => {
    if (selectedRoom.id === id && selectedRoom.room === room) setActive(true)
    else setActive(false)
  }, [selectedRoom])

  const handleSelect = () => {
    if (id && room) dispatch(setSelectedRoom({ id, room }))
  }

  console.log('is active: ', active)

  return (
    <div
      className={`absolute cursor-pointer ${active ? 'bg-green-400 z-50' : 'bg-white'}`}
      style={style}
      onClick={handleSelect}>
      <div
        className='bg-slate-800 text-white w-fit absolute top-[50%] left-[50%] text-xs'
        style={{ transform: 'translate(-50%, -50%)' }}>
        <div>{room.toUpperCase()}</div>
        <div>
          {length} X {breadth}
        </div>
      </div>
    </div>
  )
}
