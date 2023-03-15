import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Bedroom from './Bedroom'
import { setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import LivingRoom from './LivingRoom'

export default function Built() {
  const { builtLength, builtBreadth, scale, setbacks } = useSelector((state) => state.plot)
  const { addedRooms } = useSelector((state) => state.rooms)
  const [style, setStyle] = useState({})
  const [selectedItems, setSelectedItems] = useState([])
  const dispatch = useDispatch()
  const makeStyle = () => {
    const width = Math.floor(parseFloat(builtLength) * parseInt(scale))
    const height = Math.floor(parseFloat(builtBreadth) * parseInt(scale))
    const top = setbacks.back * scale
    const left = setbacks.left * scale
    setStyle({ width, height, top, left })
  }
  useEffect(() => {
    makeStyle()
  }, [builtLength, builtBreadth, scale, setbacks, selectedItems])
  useEffect(() => {
    setSelectedItems(addedRooms)
  }, [addedRooms])
  return (
    <div
      className='bg-gray-600 absolute'
      style={style}
      // onClick={(e) => {
      //   e.stopPropagation()
      //   dispatch(setSelectedRoomId({ selectedId: null, roomType: '' }))
      // }}
    >
      {selectedItems?.map((item) => item.roomType === 'bedroom' && <Bedroom id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'living' && <LivingRoom id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'kitchen' && <div>KITCHEN</div>)}
      {selectedItems?.map((item) => item.roomType === 'drawing' && <div>DRAWING</div>)}
      {selectedItems?.map((item) => item.roomType === 'sitout' && <div>SITOUT</div>)}
      {selectedItems?.map((item) => item.roomType === 'store' && <div>STORE</div>)}
      {selectedItems?.map((item) => item.roomType === 'office' && <div>OFFICE</div>)}
      {selectedItems?.map((item) => item.roomType === 'media' && <div>MEDIA</div>)}
    </div>
  )
}
