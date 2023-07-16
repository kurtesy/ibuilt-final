import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Built from "./Built"
import Ruler from './Ruler'

import { BsChevronBarDown, BsChevronBarUp, BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs"
import plot, { changeScale, decreaseScale, setBuiltup } from "../../redux/plot"
import Staircase from "../components/Staircase"
import CommonToilet from "../components/CommonToilet"
import Sitout from "../components/Sitout"
import Parking from "../components/Parking"
import Corridor from "../components/Corridor"
import ExtraBath from "../components/ExtraBath"
import ExtraSitout from "../components/ExtraSitout"
import { generatePlot } from "../constants/rooms"

const facings = {
  N: {
    opposite: "S",
    right: "W",
    left: "E"
  },
  S: {
    opposite: "N",
    right: "E",
    left: "W"
  },
  E: {
    opposite: "W",
    right: "N",
    left: "S"
  },
  W: {
    opposite: "E",
    right: "S",
    left: "N"
  }
}

export default function Plot({ isSiderOpen, plotref }) {
  const { plotLength, plotBreadth, scale, setbacks, facing, type, rotation, builtLength, builtBreadth, isRuler } = useSelector((state) => state.plot)
  const [zoomLevel, setZoomLevel] = useState(25)
  const { addedRooms } = useSelector((state) => state.rooms)
  const [selectedItems, setSelectedItems] = useState([])

  const [rulerStart, setRulerStart] = useState({ X: window.innerWidth / 2, Y: window.innerHeight / 2 })
  const [rulerEnd, setRulerEnd] = useState({ X: window.innerWidth / 2 + 50, Y: window.innerHeight / 2 })
  const [clickCount, setClickCount] = useState(0)

  const { darkMode } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  // const smallerScale=plotLength*plotBreadth<700?35:zoomLevel

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

  const rulerDraw = (event) => {
    if (!isRuler) {
      return
    }
    if (clickCount == 0) {
      setRulerStart({ X: event.clientX, Y: event.clientY })
      setClickCount(clickCount + 1)
    }
    else {
      setRulerEnd({ X: event.clientX, Y: event.clientY })
      setClickCount(0)
    }
    event.stopPropagation()
  }

  const handleRuler = (event) => {
    if (!isRuler) {
      return
    }
    setRulerEnd({ X: event.clientX, Y: event.clientY })
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

  useEffect(() => {
    if (!isRuler) {
      const rulerText = document.getElementById("ruler_text")
      if (rulerText) {
        rulerText.remove()
      }
    }
  }, [isRuler])

  return (
    <div
      className={`z-40 shadow-xl shadow-black absolute ${isSiderOpen ? "" : ""} ${darkMode ? "bg-white" : "bg-green-100"} `}
      style={{ width: plotLength * scale, height: plotBreadth * scale, rotate: `${rotation}deg`, cursor: isRuler ? "cell" : "" }}
      // onWheel={handleWheel}
      onMouseDown={rulerDraw}
      onMouseMove={clickCount == 1 ? handleRuler : null}
      ref={plotref}
      id='plot'>
      {/* outer walls */}
      {/* top */}
      {isRuler}
      {isRuler && <Ruler rulerStart={rulerStart} rulerEnd={rulerEnd} />}
      <div className='w-full h-[6px] bg-cyan-800 z-[65] absolute top-0 left-0 text-blue-800'>
        <div className='w-full flex items-center justify-center  absolute -top-5'>
          <div className="text-blue-900 font-semibold">{facings[`${facing}`].opposite}</div>
        </div>
        <div className='h-[2px] absolute top-[-28px] bg-green-800' style={{ width: plotLength * scale }} />

        <div className='w-full z-50 absolute  top-[-36px] font-bold flex items-center justify-center'>
          {/* <BsChevronBarLeft size={32} className='absolute left-[-16px] top-[-1px]' /> */}
          {/* <BsChevronBarRight size={32} className='absolute right-[-16px] top-[-1px]' /> */}
          <div className='bg-white w-[90px] px-2 border-2 border-green-800 text-xs'>{plotLength} ft</div>
        </div>
      </div>
      {/* bottom */}
      <div className='w-full h-[6px] bg-cyan-800 z-[65] absolute bottom-0 left-0 text-red-500'>
        <div className='w-full flex items-center justify-center font-bold text-primaryLime'>
          <div className="text-blue-800 font-semibold">{facing}</div>
        </div>
        {setbacks.left != 0 && setbacks.right != 0 ? (
          <>
            <div className='h-[2px] absolute bottom-[-28px] bg-red-500' style={{ width: builtLength * scale, left: setbacks.left * scale }} />
            <div className='w-full z-50 absolute  bottom-[-36px] font-bold flex items-center justify-center '>
              {/* <BsChevronBarLeft size={32} className='absolute left-[16px] bottom-[-1px]'/> */}
              {/* <BsChevronBarRight size={32} className='absolute right-[16px] bottom-[-1px]'/> */}
              <div className='bg-white w-[90px] px-2 border-2 border-red-500 text-red-500 text-xs'>{builtLength} ft</div>
            </div>
          </>
        ) : null}
      </div>

      {/* left */}
      <div className='h-[calc(100%-12px)] w-[6px] bg-cyan-800 z-[65] absolute top-[6px] left-0 text-green-800'>
        <div className='w-[2px] absolute left-[-28px] bg-green-800' style={{ height: plotBreadth * scale }} />

        <div className='h-full z-50 absolute  left-[-72px] font-bold flex items-center justify-center'>
          {/* <BsChevronBarUp size={32} className='absolute top-[-16px] ' /> */}
          {/* <BsChevronBarDown size={32} className='absolute bottom-[-27px]' /> */}
          <div className='-rotate-90 bg-white w-[90px] px-2 border-2 border-green-800 text-xs'>{plotBreadth} ft</div>
        </div>
      </div>
      {/* right */}
      <div className='h-[calc(100%-12px)] w-[6px] bg-cyan-800 z-[65] absolute top-[6px] right-0 text-red-500'>
        {setbacks.front != 0 && setbacks.back != 0 ? (
          <>
            <div className='w-[2px] absolute right-[-28px] bg-red-500' style={{ height: builtBreadth * scale, top: setbacks.back * scale }} />

            <div className='h-full z-50 absolute  right-[-72px] font-bold flex items-center justify-center'>
              {/* <BsChevronBarUp size={32} className='absolute top-[16px] left-[31px]' /> */}
              {/* <BsChevronBarDown size={32} className='absolute bottom-[62px] left-[31px]'/> */}
              <div className='-rotate-90 bg-white w-[90px] px-2 border-2 border-red-500 text-xs'>{builtBreadth} ft</div>
            </div>
          </>
        ) : null}
      </div>
      <Built />
      {selectedItems?.map((item, index) => item.roomType === "commonToilet" && <CommonToilet id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "staircase" && <Staircase id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "sitout" && <Sitout id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "parking" && <Parking id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "corridor" && <Corridor id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "extraBath" && <ExtraBath id={item.position} key={index} />)}
      {selectedItems?.map((item, index) => item.roomType === "extraSitout" && <ExtraSitout id={item.position} key={index} />)}
    </div>
  )
}
