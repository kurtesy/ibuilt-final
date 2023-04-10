import useWindowSize from 'use-window-hook'
import MainArea from './components/MainArea'
import Sider from './components/Sider'
import React, { useEffect, useState } from 'react'
import DisplayScreenWidthError from './components/DisplayScreenWidthError'
import PremiumButton from './components/PremiumButton'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './components/Loader'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { restorePreviousPlotState } from '../redux/plot'
import { restorePreviousRoomsState } from '../redux/rooms'

export default function App() {
  const [_, width] = useWindowSize()
  const [currentWidth, setCurrentWidth] = useState(width)
  const { plotLength, plotBreadth, isGenerating } = useSelector((state) => state.plot)
  const [isSiderOpen, setIsSiderOpen] = useState(false)
  const { darkMode } = useSelector((state) => state.app)
  useEffect(() => {
    setCurrentWidth(width)
  }, [width])
  const dispatch = useDispatch()

  //restore saved data
  useEffect(() => {
    const roomsData = getRoomsData()
    const plotData = getPlotData()
    dispatch(restorePreviousPlotState({ ...plotData }))
    dispatch(restorePreviousRoomsState({ ...roomsData }))
  }, [])

  function getPlotData() {
    const data = {}
    if (window.localStorage.getItem('type')) data['type'] = JSON.parse(window.localStorage.getItem('type'))
    if (window.localStorage.getItem('facing')) data['facing'] = JSON.parse(window.localStorage.getItem('facing'))
    if (window.localStorage.getItem('plotLength'))
      data['plotLength'] = JSON.parse(window.localStorage.getItem('plotLength'))
    if (window.localStorage.getItem('plotBreadth'))
      data['plotBreadth'] = JSON.parse(window.localStorage.getItem('plotBreadth'))
    if (window.localStorage.getItem('scale')) data['scale'] = JSON.parse(window.localStorage.getItem('scale'))
    if (window.localStorage.getItem('setbacks')) data['setbacks'] = JSON.parse(window.localStorage.getItem('setbacks'))
    return data
  }
  function getRoomsData() {
    const data = {}
    if (window.localStorage.getItem('bedRoomsData'))
      data['bedRoomsData'] = JSON.parse(window.localStorage.getItem('bedRoomsData'))
    if (window.localStorage.getItem('livingRoomsData'))
      data['livingRoomsData'] = JSON.parse(window.localStorage.getItem('livingRoomsData'))
    if (window.localStorage.getItem('toiletsData'))
      data['toiletsData'] = JSON.parse(window.localStorage.getItem('toiletsData'))
    if (window.localStorage.getItem('commonToiletData'))
      data['commonToiletData'] = JSON.parse(window.localStorage.getItem('commonToiletData'))
    if (window.localStorage.getItem('kitchenData'))
      data['kitchenData'] = JSON.parse(window.localStorage.getItem('kitchenData'))
    if (window.localStorage.getItem('storeData'))
      data['storeData'] = JSON.parse(window.localStorage.getItem('storeData'))
    if (window.localStorage.getItem('addedRoomsData'))
      data['addedRoomsData'] = JSON.parse(window.localStorage.getItem('addedRoomsData'))
    if (window.localStorage.getItem('balconiesData'))
      data['balconiesData'] = JSON.parse(window.localStorage.getItem('balconiesData'))
    if (window.localStorage.getItem('utilityData'))
      data['utilityData'] = JSON.parse(window.localStorage.getItem('utilityData'))
    return data
  }
  return (
    <>
      {width < 1280 ? (
        <DisplayScreenWidthError />
      ) : (
        <div className={`w-screen h-screen flex ${darkMode ? 'bg-black text-white' : 'bg-white text-slate-800'}`}>
          {plotLength && plotBreadth ? (
            <>
              {plotLength && plotBreadth ? <Sider isSiderOpen={isSiderOpen} /> : null}
              <button
                className={`absolute text-primaryLime font-bold transition-all top-[50%] bg-slate-900 h-12 cursor-pointer z-50  ease-in-out ${
                  isSiderOpen ? 'left-[400px]' : 'left-0'
                }`}
                onClick={() => setIsSiderOpen((prev) => !prev)}>
                {isSiderOpen ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
              </button>
            </>
          ) : null}
          <MainArea isSiderOpen={isSiderOpen} />
          {/* <Loader /> */}
        </div>
      )}
    </>
  )
}
