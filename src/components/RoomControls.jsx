import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRoom } from '../../redux/rooms'
import { updateSelectedRoom } from '../../redux/common'

export default function RoomControls() {
  const { selectedRoom, positions } = useSelector((state) => state.common)
  const { bedrooms } = useSelector((state) => state.rooms)
  const [position, setPosition] = useState(0)
  const [length, setLength] = useState(8)
  const [breadth, setBreadth] = useState(8)
  const [selectedBedroom, setSelectedBedroom] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateRoom({ position, length, breadth, room: selectedRoom?.room, id: selectedRoom?.data.id }))
  }, [length, breadth, position])
  const handleChange = (e) => {
    const { name, value } = e.target
    setPosition({ ...position, [name]: value })
  }
  const handleSelectChange = (e) => {
    setSelectedBedroom(e.target.value)
    dispatch(updateSelectedRoom({ room: 'bedrooms', data: bedrooms.find((room) => room.id == e.target.value) }))
  }
  return (
    <>
      {/* MIAN CONTROLS */}
      <div className='bg-primaryLime w-full px-3 rounded-lg font-bold'>Main Controls</div>
      <div className='w-full flex mt-2'>
        <select className='bg-slate-300 rounded-lg w-1/2 h-[32px]' onChange={handleSelectChange}>
          <option>Select Room</option>
          <option value={1}>Bedroom-1</option>
          <option value={2}>Bedroom-2</option>
          <option value={3}>Bedroom-3</option>
          <option value={4}>Bedroom-4</option>
        </select>
        <div className='w-1/2 flex flex-col items-start px-3'>
          <div className='flex items-center justify-center gap-2'>
            <input type='radio' />
            <div>Bath+WC+Shower</div>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <input type='radio' />
            <div>Bath+Shower</div>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <input type='radio' />
            <div>WC</div>
          </div>
          <div className='h-[2px] bg-[#d9fc35] w-full' />
          <div className='flex items-center justify-center gap-2'>
            <input type='checkbox' />
            <div>Wardrobe</div>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <input type='checkbox' />
            <div>Balcony</div>
          </div>
        </div>
      </div>
      {/* MAIN CONTROLS END */}
      {/* ROOM CONTROLS */}
      <div className='bg-primaryLime w-full px-3 rounded-lg font-bold'>Room Controls : Bedroom-{selectedBedroom}</div>
      <div className='w-full flex mt-2 bg-slate-900 text-primaryLime px-3 rounded-lg'>
        <div>Position</div>
      </div>
      <div className='mt-2 font-semibold text-sm'>X-Direction</div>
      <div className='w-full flex gap-3 '>
        <input
          className='w-2/3 cursor-pointer'
          type='range'
          min={Math.min(...positions.x)}
          max={Math.max(...positions.x)}
          step={0.5}
          name='x'
          defaultValue={0}
          onChange={handleChange}
        />
        <input input='text' className='w-1/3 border-primaryLime border-2 rounded-lg px-3 outline-none' />
      </div>
      <div className='mt-2 font-semibold text-sm'>Y-Direction</div>
      <div className='w-full flex gap-3 '>
        <input
          type='range'
          className='w-2/3 cursor-pointer'
          min={Math.min(...positions.y)}
          max={Math.max(...positions.y)}
          step={0.5}
          name='y'
          defaultValue={0}
          onChange={handleChange}
        />
        <input input='text' className='w-1/3 border-primaryLime border-2 rounded-lg px-3 outline-none' />
      </div>
      <div className='w-full flex mt-2 bg-slate-900 text-primaryLime px-3 rounded-lg'>
        <div>Dimensions</div>
      </div>
      <div className='mt-2 font-semibold text-sm'>Length</div>
      <div className='w-full flex gap-3 '>
        <input
          type='range'
          className='w-2/3 cursor-pointer'
          min={selectedRoom?.data.minLength}
          max={selectedRoom?.data.maxLength}
          step={0.01}
          name='length'
          defaultValue={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <input
          input='number'
          className='w-1/3 border-primaryLime border-2 rounded-lg px-3 outline-none'
          onChange={(e) => setLength(e.target.value)}
          value={length}
        />
      </div>
      <div className='mt-2 font-semibold text-sm'>Breadth</div>
      <div className='w-full flex gap-3 '>
        <input
          type='range'
          className='w-2/3'
          min={selectedRoom?.data.minBreadth}
          max={selectedRoom?.data.maxBreadth}
          step={0.01}
          name='breadth'
          defaultValue={selectedRoom?.data.breadth}
          onChange={(e) => setBreadth(e.target.value)}
        />
        <input
          input='text'
          className='w-1/3 border-primaryLime border-2 rounded-lg px-3 outline-none'
          onChange={(e) => setLength(e.target.value)}
          value={breadth}
        />
      </div>
      {/* ROOM CONTROLS END */}
    </>
  )
}
