import useWindowSize from 'use-window-hook'
import MainArea from '../../components/MainArea'
import Sider from '../../components/Sider'
import React, { useEffect, useState } from 'react'
// import DisplayScreenWidthError from '../../components/DisplayScreenWidthError'
import PremiumButton from '../../components/PremiumButton'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { restorePreviousPlotState } from '../../../redux/plot'
import { restorePreviousRoomsState } from '../../../redux/rooms'
// import { setDarkMode } from '../../../redux/plot'
import { Slider } from 'antd'
import DragComponent from '../../components/Dragcomponent'
export default function Drawing() {
  const [_, width] = useWindowSize()
  const [currentWidth, setCurrentWidth] = useState(width)
  const { plotLength, plotBreadth, isGenerating } = useSelector((state) => state.plot)
  const [isSiderOpen, setIsSiderOpen] = useState(false)
const { darkMode } = useSelector((state) => state.app);
  useEffect(() => {
    setCurrentWidth(width)
  }, [width])
  const dispatch = useDispatch()

  return (
    <>
      <div className={`h-full w-full ${darkMode ? "bg-slate-800" : ""}`}>
        {plotLength && plotBreadth ? (
          <>
            {plotLength && plotBreadth && width >= 1024 ? <Sider isSiderOpen={isSiderOpen} /> : null}
            {width >= 1024 ? (
              <button
                className={`absolute text-primaryLime font-bold transition-all top-[50%] bg-slate-900 h-12 cursor-pointer z-50  ease-in-out ${isSiderOpen ? "left-[400px]" : "left-0"}`}
                onClick={() => setIsSiderOpen((prev) => !prev)}>
                {isSiderOpen ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
              </button>
            ) : null}
          </>
        ) : null}
        <MainArea isSiderOpen={isSiderOpen} />
        {/* <Loader /> */}
      </div>
    </>
  );
}
