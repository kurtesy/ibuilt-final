import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Bedroom from './Bedroom'
import { setSelectedRoomId, updateRoomData } from '../../redux/rooms'
import LivingRoom from './LivingRoom'
import Kitchen from './Kitchen'
import WindowComp from './WindowComp'
import Pooja from './Pooja'
import Drawing from './Drawing'
import Dining from './Dining'
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
  }, [builtLength, builtBreadth, scale, setbacks, selectedItems, addedRooms])
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
      {/* outer walls */}
      {/* top */}
      <div className='w-full h-[9px] bg-slate-800 z-50 absolute top-0 left-0'>
        <WindowComp side='back' position={{ left: '50%' }} />
      </div>
      {/* bottom */}
      <div className='w-full h-[9px] bg-slate-800 z-50 absolute bottom-0 left-0' />
      {/* left */}
      <div className='h-[calc(100%-18px)] w-[9px] bg-slate-800 z-50 absolute top-[9px] left-0' />
      {/* right */}
      <div className='h-[calc(100%-18px)] w-[9px] bg-slate-800 z-50 absolute top-[9px] right-0' />

      {selectedItems?.map((item) => item.roomType === 'bedroom' && <Bedroom id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'living' && <LivingRoom id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'kitchen' && <Kitchen id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'drawing' && <Drawing id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'dining' && <Dining id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'pooja' && <Pooja id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'sitout' && <div>SITOUT</div>)}
      {/* {selectedItems?.map((item) => item.roomType === 'store' && <div>STORE</div>)} */}
      {selectedItems?.map((item) => item.roomType === 'office' && <div>OFFICE</div>)}
      {selectedItems?.map((item) => item.roomType === 'media' && <div>MEDIA</div>)}
    </div>
  )
}
