import useWindowSize from 'use-window-hook'
import MainArea from './components/MainArea'
import Sider from './components/Sider'
import React, { useEffect, useState } from 'react'
import DisplayScreenWidthError from './components/DisplayScreenWidthError'
import PremiumButton from './components/PremiumButton'
import { useSelector } from 'react-redux'
export default function App() {
  const [_, width] = useWindowSize()
  const [currentWidth, setCurrentWidth] = useState(width)
  const { plotLength, plotBreadth } = useSelector((state) => state.plot)
  useEffect(() => {
    setCurrentWidth(width)
  }, [width])

  return (
    <>
      {width <= 1024 ? (
        <DisplayScreenWidthError />
      ) : (
        <div className='w-screen h-screen bg-black flex '>
          {plotLength && plotBreadth && <Sider />}
          <MainArea />
        </div>
      )}
    </>
  )
}
