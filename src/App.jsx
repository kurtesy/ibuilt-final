import useWindowSize from 'use-window-hook'
import MainArea from './components/MainArea'
import Sider from './components/Sider'
import React, { useEffect, useState } from 'react'
import DisplayScreenWidthError from './components/DisplayScreenWidthError'
import PremiumButton from './components/PremiumButton'
import { useSelector } from 'react-redux'
import Loader from './components/Loader'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

export default function App() {
  const [_, width] = useWindowSize()
  const [currentWidth, setCurrentWidth] = useState(width)
  const { plotLength, plotBreadth } = useSelector((state) => state.plot)
  const [isSiderOpen, setIsSiderOpen] = useState(false)
  useEffect(() => {
    setCurrentWidth(width)
  }, [width])

  return (
    <>
      {width <= 1024 ? (
        <DisplayScreenWidthError />
      ) : (
        <div className='w-screen h-screen bg-black flex '>
          {plotLength && plotBreadth && <Sider isSiderOpen={isSiderOpen} />}
          <button
            className={`absolute text-primaryLime font-bold transition-all top-[50%] bg-slate-900 h-12 cursor-pointer z-50  ease-in-out ${
              isSiderOpen ? 'left-[400px]' : 'left-0'
            }`}
            onClick={() => setIsSiderOpen((prev) => !prev)}>
            {isSiderOpen ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
          </button>
          <MainArea isSiderOpen={isSiderOpen} />
          {/* <Loader /> */}
        </div>
      )}
    </>
  )
}
