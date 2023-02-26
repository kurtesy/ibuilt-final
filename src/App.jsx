import useWindowSize from 'use-window-hook'
import MainArea from './components/MainArea'
import Sider from './components/Sider'
import React, { useEffect, useState } from 'react'
import DisplayScreenWidthError from './components/DisplayScreenWidthError'
export default function App() {
  const [_, width] = useWindowSize()
  const [currentWidth, setCurrentWidth] = useState(width)
  useEffect(() => {
    setCurrentWidth(width)
  }, [width])
  console.log(currentWidth)
  return (
    <>
      {width <= 1024 ? (
        <DisplayScreenWidthError />
      ) : (
        <div className='w-screen h-screen bg-black flex'>
          <Sider />
          <MainArea />
        </div>
      )}
    </>
  )
}
