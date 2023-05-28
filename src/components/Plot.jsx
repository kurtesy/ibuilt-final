import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Built from './Built'
import {BsChevronBarDown,BsChevronBarUp,BsChevronBarLeft,BsChevronBarRight} from 'react-icons/bs'
import plot, { changeScale, decreaseScale, setBuiltup } from '../../redux/plot'
import Staircase from '../components/Staircase'
import CommonToilet from '../components/CommonToilet'
import Sitout from '../components/Sitout'
import Parking from '../components/Parking'
import Corridor from '../components/Corridor'
import ExtraBath from '../components/ExtraBath'
import ExtraSitout from '../components/ExtraSitout'
import { generatePlot } from '../constants/rooms'
export default function Plot({ isSiderOpen, plotref }) {
  const { plotLength, plotBreadth, scale, setbacks, facing, type,rotation,builtLength,builtBreadth } = useSelector((state) => state.plot)
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
    if (event.deltaY > 0) setZoomLevel((prev) => prev - 1)
    else setZoomLevel((prev) => prev + 1)
  }
  useEffect(() => {
    let currentWindowWidth = isSiderOpen ? window.innerWidth - 400 : window.innerWidth
    if (plotBreadth * scale >= window.innerHeight) {
      const currentScale = Math.floor((window.innerHeight - 80) / plotBreadth)
      dispatch(changeScale({ scale: currentScale }))
    }
    if (plotLength * scale >= currentWindowWidth) {
      const currentScale = Math.floor(currentWindowWidth / plotLength)
      dispatch(changeScale({ scale: currentScale }))
    }
  }, [plotLength, plotBreadth, scale])
  return (
    <div
      className={`z-40 shadow-2xl shadow-black absolute ${isSiderOpen ? '' : ''} ${darkMode ? 'bg-white' : 'bg-gray-400'} `}
      style={{ width: plotLength * scale, height: plotBreadth * scale, rotate: `${rotation}deg` }}
      // onWheel={handleWheel}
      ref={plotref}>
      {/* outer walls */}
      {/* top */}
      <div className='w-full h-[6px] bg-cyan-800 z-[99] absolute top-0 left-0 text-blue-500'>
        <div className='h-[2px] absolute top-[-28px] bg-blue-500' style={{ width: plotLength * scale }} />
        <div className='w-full z-50 absolute  top-[-42px] font-bold flex items-center justify-center'>
          <BsChevronBarLeft size={32} className='absolute left-[-16px] top-[-1px]' />
          <BsChevronBarRight size={32} className='absolute right-[-16px] top-[-1px]' />
          <div className='bg-white w-[72px] px-2 border-2 border-blue-500'>{plotLength} ft</div>
        </div>
      </div>
      {/* bottom */}
      <div className='w-full h-[6px] bg-cyan-800 z-[99] absolute bottom-0 left-0 text-red-500'>
        <div className='h-[2px] absolute bottom-[-28px] bg-red-500' style={{ width: builtLength * scale, left: setbacks.left * scale }} />
        <div className='w-full z-50 absolute  bottom-[-42px] font-bold flex items-center justify-center '>
          <BsChevronBarLeft size={32} className='absolute left-[16px] bottom-[-1px]' />
          <BsChevronBarRight size={32} className='absolute right-[16px] bottom-[-1px]' />
          <div className='bg-white w-[90px] px-2 border-2 border-red-500 text-red-500 '>{builtLength} ft</div>
        </div>
      </div>

      {/* left */}
      <div className='h-[calc(100%-12px)] w-[6px] bg-cyan-800 z-[99] absolute top-[6px] left-0 text-blue-500'>
        <div className='w-[2px] absolute left-[-28px] bg-blue-500' style={{ height: plotBreadth * scale }} />

        <div className='h-full z-50 absolute  left-[-57px] font-bold flex items-center justify-center'>
          <BsChevronBarUp size={32} className='absolute top-[-16px]' />
          <BsChevronBarDown size={32} className='absolute bottom-[-26px]' />
          <div className='-rotate-90 bg-white w-[60px] px-2 border-2 border-blue-500'>{plotBreadth} ft</div>
        </div>
      </div>
      {/* right */}
      <div className='h-[calc(100%-12px)] w-[6px] bg-cyan-800 z-[99] absolute top-[6px] right-0 text-red-500'>
        <div className='w-[2px] absolute right-[-28px] bg-red-500' style={{ height: builtBreadth * scale, top: setbacks.back * scale }} />

        <div className='h-full z-50 absolute  right-[-70px] font-bold flex items-center justify-center'>
          <BsChevronBarUp size={32} className='absolute top-[16px] left-[31px]' />
          <BsChevronBarDown size={32} className='absolute bottom-[62px] left-[31px]' />
          <div className='-rotate-90 bg-white w-[90px] px-2 border-2 border-red-500'>{builtBreadth} ft</div>
        </div>
      </div>
      <Built />
      {selectedItems?.map((item, index) => item.roomType === 'commonToilet' && <CommonToilet id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === 'staircase' && <Staircase id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === 'sitout' && <Sitout id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === 'parking' && <Parking id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === 'corridor' && <Corridor id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === 'extraBath' && <ExtraBath id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === 'extraSitout' && <ExtraSitout id={item.position} key={index} />)}
    </div>
  )
}
