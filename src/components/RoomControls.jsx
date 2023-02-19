import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRoom } from '../../redux/rooms'

export default function RoomControls() {
  const { selectedRoom, positions } = useSelector((state) => state.common)
  const [position, setPosition] = useState(selectedRoom.data.position)
  const [length, setLength] = useState(selectedRoom.data.length)
  const [breadth, setBreadth] = useState(selectedRoom.data.breadth)
  const [toiletRequired, setToiletRequired] = useState(selectedRoom.data.toiletRequired)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      updateRoom({ position, length, breadth, room: selectedRoom.room, id: selectedRoom.data.id, toiletRequired })
    )
  }, [length, breadth, position, toiletRequired])
  const handleChange = (e) => {
    const { name, value } = e.target
    setPosition({ ...position, [name]: value })
  }

  return (
    <div className='w-full gap-2 mt-3 flex flex-col'>
      <div className='font-semibold'>Room Controls</div>
      <div className=' font-semibold'>Position</div>
      X:
      <input
        className='cursor-pointer'
        type='range'
        min={Math.min(...positions.x)}
        max={Math.max(...positions.x)}
        step={positions.x[1] - positions.x[0]}
        name='x'
        defaultValue={0}
        onChange={handleChange}
      />
      Y:
      <input
        className='cursor-pointer'
        type='range'
        min={Math.min(...positions.y)}
        max={Math.max(...positions.y)}
        step={positions.y[1] - positions.y[0]}
        name='y'
        defaultValue={0}
        onChange={handleChange}
      />
      <div className=' font-semibold'>Dimensions</div>
      Length:
      <div className='flex gap-3 justify-between'>
        <input
          className='cursor-pointer flex-1'
          type='range'
          min={selectedRoom.data.minLength}
          max={selectedRoom.data.maxLength}
          step={1}
          name='length'
          defaultValue={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <input
          onChange={(e) => setLength(e.target.value)}
          value={length}
          className='text-gray-800 w-[50px] px-3 rounded-md'
        />
      </div>
      Breadth:
      <div div className='flex gap-3 justify-between'>
        <input
          className='cursor-pointer'
          type='range'
          min={selectedRoom.data.minBreadth}
          max={selectedRoom.data.maxBreadth}
          step={1}
          name='breadth'
          defaultValue={selectedRoom.data.breadth}
          onChange={(e) => setBreadth(e.target.value)}
        />
        <input
          onChange={(e) => setLength(e.target.value)}
          value={breadth}
          className='text-gray-800 w-[50px] px-3 rounded-md'
        />
      </div>
      <div className=' font-semibold'>Toilet</div>
      <div className='flex gap-2 items-center justify-center text-xs'>
        <label>Required</label>
        <input
          className='cursor-pointer '
          type='radio'
          name='toiletRequired'
          value={1}
          onChange={(e) => setToiletRequired(e.target.value)}
        />
        <label>Not required</label>
        <input
          className='cursor-pointer '
          name='toiletRequired'
          type='radio'
          value={0}
          onChange={(e) => setToiletRequired(e.target.value)}
        />
      </div>
    </div>
  )
}
