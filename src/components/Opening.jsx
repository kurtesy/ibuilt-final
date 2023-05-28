import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOpening } from '../../redux/rooms'

export default function Opening({ id, length, position, side }) {
  const { scale } = useSelector((state) => state.plot)
  const dispatch = useDispatch()
  const [style, setStyle] = useState({})
  const [selected, setSelected] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(
    side === 'front' || side === 'back' ? position.right : position.top
  )
 
  const [currentLength, setCurrentLength] = useState(length)

 
  const makeStyle = () => {
    let currStyle = {}
    if (side === 'front' || side === 'back') {
      currStyle['width'] = Math.floor(parseFloat(length) * scale)
      currStyle['height'] = '120%'
    } else {
      currStyle['height'] = Math.floor(parseFloat(length) * scale)
      currStyle['width'] = '150%'
    }
    currStyle = { ...currStyle, ...position }
    setStyle(currStyle)
  }
  const hanldeSelect = (e) => {
    e.preventDefault()
    setSelected(true)
  }
  useEffect(() => {
    makeStyle()
  }, [length, position, side])

  const handleKeyDown = (e) => {
    //left
    if (e.keyCode === 37) {
      if (side === 'front' || side === 'back') setCurrentPosition((prev) => prev - 1)
    }
    //left+ctrl
    if (e.keyCode === 37 && e.ctrlKey) {
      if (side === 'front' || side === 'back') setCurrentLength((prev) => prev - 1)
    }

    //up
    if (e.keyCode === 38) {
      if (side === 'left' || side === 'right') setCurrentPosition((prev) => prev - 1)
    }
    //up+ctrl
    if (e.keyCode === 38 && e.ctrlKey) {
      if (side === 'left' || side === 'right') setCurrentLength((prev) => prev + 1)
    }
    //right
    if (e.keyCode === 39) {
      if (side === 'front' || side === 'back') setCurrentPosition((prev) => prev + 1)
    }
    //right+ctrl
    if (e.keyCode === 39 && e.ctrlKey) {
      if (side === 'front' || side === 'back') setCurrentLength((prev) => prev + 1)
    }
    //down
    if (e.keyCode === 40) {
      if (side === 'left' || side === 'right') setCurrentPosition((prev) => prev + 1)
    }
    //up+ctrl
    if (e.keyCode === 40 && e.ctrlKey) {
      if (side === 'left' || side === 'right') setCurrentLength((prev) => prev - 1)
    }
  }
  useEffect(() => {
    const positionToUpdate = side === 'front' || side === 'back' ? { right: currentPosition } : { top: currentPosition }
    dispatch(updateOpening({ id, position: positionToUpdate }))
  }, [currentPosition])
  useEffect(() => {
    dispatch(updateOpening({ id, length: currentLength }))
  }, [currentLength])
  return (
    <div
      tabIndex={0}
      className={`absolute ${selected ? 'bg-amber-500' : 'bg-white'}`}
      style={style}
      onClick={hanldeSelect}
      onContextMenu={() => setSelected(false)}
      onKeyDown={handleKeyDown}></div>
  )
}
