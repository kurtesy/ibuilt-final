import React, { useEffect, useState } from 'react'
import Home from './Pages/Home/Home'
import Drawing from './Pages/Drawing/Drawing'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../redux/app'
import LoginComponent from './components/LoginComponent'
import SignupComponent from './components/SignupComponent'
import Auth from './Pages/Auth/Auth'
export default function App() {
  const { darkMode } = useSelector((state) => state.app)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeMediaQuery.matches)

    const handleDarkModeChange = (event) => setIsDarkMode(event.matches)

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange)

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange)
    }
  }, [])
  useEffect(() => {
    dispatch(setDarkMode({ mode: isDarkMode }))
  }, [isDarkMode])
  return (
    <div className={`w-screen h-screen flex `}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />}>
          <Route index element={<LoginComponent />} />
          <Route path='signup' element={<SignupComponent />} />
        </Route>
        <Route path='/drawing' element={<Drawing />} />
      </Routes>
    </div>
  )
}
