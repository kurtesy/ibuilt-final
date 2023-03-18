import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToPlot, removeRoomFromPlot, setSelectedRoomId } from '../../redux/rooms'
import { FiEdit } from 'react-icons/fi'
import { BsTrash2Fill } from 'react-icons/bs'
import SubMenu from './Submenu'
export default function MultiSelectComponent() {
  const [position, setPosition] = useState(null)
  const [roomType, setRoomType] = useState([])
  const [data, setData] = useState([])
  const { addedRooms } = useSelector((state) => state.rooms)
  const [thisRooms, setThisRooms] = useState([])
  const dispatch = useDispatch()
  const { selectedRoom } = useSelector((state) => state.rooms)
  useEffect(() => {
    setData(addedRooms)
  }, [addedRooms])
  useEffect(() => {
    if (position) setThisRooms(addedRooms.filter((room) => room.position === position))
  }, [position])
  useEffect(() => {
    if (position !== null) {
      if (roomType.length !== 0) {
        roomType.forEach((item) => {
          dispatch(addRoomToPlot(item))
        })
      }
    }
  }, [roomType])
  useEffect(() => {
    setRoomType([])
  }, [position])

  const handleChange = (e) => {
    setRoomType([...roomType, { position, roomType: e.target.value }])
  }
  const handleDelete = (position, roomType) => {
    console.log('called handleDElete: ', position, roomType)
    dispatch(removeRoomFromPlot({ position, roomType }))
    dispatch(setSelectedRoomId({ id: '', roomType: null }))
  }
  const handleEdit = (position, roomType) => {
    console.log('edit ', position, roomType)
    dispatch(setSelectedRoomId({ selectedId: position, roomType }))
  }
  const options = [
    { label: 'Bedroom', value: 'bedroom' },
    { label: 'Livingroom', value: 'living' },
    { label: 'Kitchen', value: 'kitchen' },
    { label: 'Pooja', value: 'pooja' },
    { label: 'Drawing', value: 'drawing' },
    { label: 'Sitout', value: 'sitout' },
    { label: 'Store', value: 'store' },
    { label: 'Office', value: 'office' },
    { label: 'Media', value: 'media' }
  ]
  return (
    <div className='flex flex-col w-full gap-3'>
      <div className='w-full flex gap-3'>
        <div className='flex flex-col gap-3 w-1/2'>
          <select className='w-full' onChange={(e) => setPosition(e.target.value)}>
            <option value={null}>Select Location</option>
            <option value='nw'>North West</option>
            <option value='ne'>North East</option>
            <option value='sw'>South West</option>
            <option value='se'>South East</option>
          </select>
          <div className='w-full'>
            <select onChange={handleChange}>
              <option>Select Room</option>
              {options.map((room, index) => (
                <option value={room.value} key={index}>
                  {room.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex flex-col h-auto gap-1 w-1/2 border-2 p-1 rounded-md bg-white'>
          {data.map((room) => (
            <div className='bg-slate-900 rounded-md flex items-center text-primaryLime justify-end gap-2 h-8 px-2'>
              <div className='flex items-center text-xs rounded-md font-semibold cursor-pointer'>
                {room.position}/{room.roomType}
              </div>
              <div className='cursor-pointer text-blue-500' onClick={() => handleEdit(room.position, room.roomType)}>
                <FiEdit size={16} />
              </div>
              <div className='cursor-pointer text-red-500' onClick={() => handleDelete(room.position, room.roomType)}>
                <BsTrash2Fill size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>{selectedRoom.roomType && <SubMenu roomType={selectedRoom.roomType} id={selectedRoom.id} />}</div>
    </div>
  )
}
