import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToPlot, removeRoomFromPlot, setSelectedRoomId } from '../../redux/rooms'
import { BsTrash2Fill, BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import SubMenu from './Submenu'
import RoomandPositionSelector from './RoomandPositionSelector'
import EditSaveDeleteComponent from './EditSaveDeleteComponent'
export default function MultiSelectComponent({ isSiderOpen }) {
  const [position, setPosition] = useState(null)
  const [roomType, setRoomType] = useState([])
  const [data, setData] = useState([])
  const { addedRooms } = useSelector((state) => state.rooms)
  const [activeStyle, setActiveStyle] = useState({})
  const [activeIndex, setActiveIndex] = useState(-1)
  const [index, setIndex] = useState(2)
  const [reverse, setReverse] = useState(false)
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)
  const inActiveClass = `bg-slate-900 rounded-md flex items-center text-primaryLime justify-end gap-2 h-8 px-2 font-thin`
  const activeClass = `bg-primaryLime rounded-md flex items-center text-slate-900 justify-end gap-2 h-8 px-2 font-bold`
  const ref = useRef(null)
  // useEffect(() => {
  //   setData(addedRooms)
  // }, [addedRooms])

  // useEffect(() => {
  //   ref.current.selectedIndex = 0
  // }, [position])
  // useEffect(() => {
  //   if (position !== null) {
  //     if (roomType.length !== 0) {
  //       roomType.forEach((item) => {
  //         dispatch(addRoomToPlot(item))
  //       })
  //     }
  //   }
  // }, [roomType])

  // const handleChange = (e) => {
  //   if (e.target.value !== 'none') setRoomType([...roomType, { position, roomType: e.target.value }])
  // }
  // const handleDelete = (position, roomType) => {
  //   console.log('called handleDElete: ', position, roomType)
  //   dispatch(removeRoomFromPlot({ position, roomType }))
  //   dispatch(setSelectedRoomId({ id: null, roomType: null }))
  // }
  // const handleEdit = (index, position, roomType) => {
  //   setActiveIndex(index)
  //   dispatch(setSelectedRoomId({ selectedId: position, roomType }))
  // }
  function handleShowHideList() {
    let rem = index % 3
    console.log('rem: ' + rem)
    console.log('length: ' + options.length)
    console.log('index: ' + index)
    if (index >= 2 && !reverse) {
      if ((index + 1) % 3 === 0) {
        if (index >= options.length - 1) setIndex(options.length - 1)
        else setIndex((prev) => prev + 3)
      } else setIndex((prev) => prev + (rem - 1))
    }

    if (index > 2 && reverse) setIndex((prev) => prev - 3)
  }

  console.log('index==>' + index)
  useEffect(() => {
    if (index >= options.length) setReverse(true)
    if (index <= 2) setReverse(false)
  }, [index])

  const options = [
    { label: 'Bedroom', value: 'bedroom' },
    { label: 'Livingroom', value: 'living' },
    { label: 'Kitchen', value: 'kitchen' },

    { label: 'Pooja', value: 'pooja' },
    { label: 'Drawing', value: 'drawing' },
    { label: 'Sitout', value: 'sitout' },

    { label: 'Store', value: 'store' },
    { label: 'Office', value: 'office' },
    { label: 'Media', value: 'media' },

    { label: 'Parking', value: 'parking' },
    { label: 'Stair Case', value: 'staircase' },
    { label: 'Lift', value: 'lift' },
    { label: 'Duct/Shaft', value: 'duct' }
  ]

  const filteredOptions = options.filter((opt, i) => i <= index)
  const [rooms, setRooms] = useState([])
  const [currentRoom, setCurrentRoom] = useState('')
  const [active, setActive] = useState(false)
  return (
    <div className='flex relative'>
      <div className='flex flex-col w-full gap-3'>
        {filteredOptions.map((room, index) => (
          <RoomandPositionSelector
            key={index}
            value={room.value}
            label={room.label}
            rooms={rooms}
            setRooms={setRooms}
            currentRoom={currentRoom}
            setCurrentRoom={setCurrentRoom}
            selected={active}
            setSelected={setActive}
          />
        ))}

        <button
          className='w-2/3 flex items-center justify-center bg-slate-900 rounded-md shadow-xl'
          onClick={handleShowHideList}>
          {!reverse && <BsChevronCompactDown className='text-primaryLime font-semibold animate-ping' />}
          {reverse && <BsChevronCompactUp className='text-primaryLime font-semibold animate-ping' />}
        </button>
      </div>
      {isSiderOpen && <EditSaveDeleteComponent />}
      {/* <div className='w-full flex gap-3 justify-between'>
        <div className='flex flex-col gap-3 w-1/2'>
          <select
            className='w-full outline-none font-bold h-[32px] flex items-center justify-between text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-lg drop-shadow-2xl text-slate-800 text-xs'
            onChange={(e) => setPosition(e.target.value)}>
            <option value={null}>Select Location</option>
            <option value='nw'>North West</option>
            <option value='ne'>North East</option>
            <option value='sw'>South West</option>
            <option value='se'>South East</option>
          </select>
          <div className='w-full'>
            <select
              onChange={handleChange}
              ref={ref}
              className='w-full outline-none font-bold h-[32px] flex items-center justify-between text-left px-3 bg-gradient-to-r from-slate-50 to-primaryLime rounded-lg drop-shadow-2xl text-slate-800 text-xs'>
              <option value={null}>Select Room</option>
              {options.map((room, index) => (
                <option value={room.value} key={index}>
                  {room.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex flex-col h-auto gap-1 w-1/2 border-2 p-1 rounded-md bg-white'>
          {data.map((room, index) => (
            <div className={activeIndex === index ? activeClass : inActiveClass} key={index}>
              <div className='flex items-center text-xs rounded-md  cursor-pointer'>
                {room.position}/{room.roomType}
              </div>
              <div
                className='cursor-pointer text-blue-500'
                onClick={() => handleEdit(index, room.position, room.roomType)}>
                <FiEdit size={16} />
              </div>
              <div className='cursor-pointer text-red-500' onClick={() => handleDelete(room.position, room.roomType)}>
                <BsTrash2Fill size={16} />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div>{selectedRoom.roomType && <SubMenu roomType={selectedRoom.roomType} id={selectedRoom.id} />}</div>
    </div>
  )
}
