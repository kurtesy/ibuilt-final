import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Built from './Built'
import plot, { changeScale, decreaseScale, setBuiltup } from '../../redux/plot'
import Staircase from '../components/Staircase'
import CommonToilet from '../components/CommonToilet'
import Sitout from '../components/Sitout'
import Parking from '../components/Parking'
import { generatePlot } from '../constants/rooms'
export default function Plot({ isSiderOpen, plotref }) {
  const { plotLength, plotBreadth, scale, setbacks, facing, type } = useSelector((state) => state.plot)
  const [zoomLevel, setZoomLevel] = useState(20)
  const { addedRooms } = useSelector((state) => state.rooms)
  const [selectedItems, setSelectedItems] = useState([])
  const { darkMode } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  useEffect(() => {
    setSelectedItems(addedRooms)
  }, [addedRooms])
  useEffect(() => {
    if (plotLength && plotBreadth) {
      const builtLength = parseFloat(plotLength) - parseFloat(setbacks.left) - parseFloat(setbacks.right)
      const builtBreadth = parseFloat(plotBreadth) - parseFloat(setbacks.front) - parseFloat(setbacks.back)
      dispatch(setBuiltup({ builtLength, builtBreadth }))
    }
  }, [plotLength, plotBreadth, setbacks, scale])

  useEffect(() => {
    dispatch(changeScale({ scale: zoomLevel }))
  }, [zoomLevel])

  function handleWheel(event) {
    console.log(event.deltaY)
    if (event.deltaY > 0) setZoomLevel((prev) => prev - 1)
    else setZoomLevel((prev) => prev + 1)
  }
  useEffect(() => {
    let currentWindowWidth = isSiderOpen ? window.innerWidth - 400 : window.innerWidth
    if (plotBreadth * scale >= window.innerHeight) {
      const currentScale = Math.floor((window.innerHeight - 20) / plotBreadth)
      dispatch(changeScale({ scale: currentScale }))
    }
    if (plotLength * scale >= currentWindowWidth) {
      const currentScale = Math.floor(currentWindowWidth / plotLength)
      dispatch(changeScale({ scale: currentScale }))
    }
  }, [plotLength, plotBreadth, scale])
  return (
    <div
      className={`z-40 shadow-2xl shadow-black absolute ${isSiderOpen ? '' : ''} ${
        darkMode ? 'bg-white' : 'bg-gray-400'
      }`}
      style={{ width: plotLength * scale, height: plotBreadth * scale }}
      // onWheel={handleWheel}
      ref={plotref}>
      {/* outer walls */}
      {/* top */}
      <div className='w-full h-[6px] bg-cyan-800 z-50 absolute top-0 left-0'>
        {/* <WindowComp side='back' position={{ left: '50%' }} /> */}
      </div>
      {/* bottom */}
      <div className='w-full h-[6px] bg-cyan-800 z-50 absolute bottom-0 left-0' />
      {/* left */}
      <div className='h-[calc(100%-12px)] w-[6px] bg-cyan-800 z-50 absolute top-[6px] left-0' />
      {/* right */}
      <div className='h-[calc(100%-12px)] w-[6px] bg-cyan-800 z-50 absolute top-[6px] right-0' />
      <Built />
      {selectedItems?.map((item) => item.roomType === 'commonToilet' && <CommonToilet id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'staircase' && <Staircase id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'sitout' && <Sitout id={item.position} />)}
      {selectedItems?.map((item) => item.roomType === 'parking' && <Parking id={item.position} />)}
    </div>
  )
}
