import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import doorImg from '../assets/svg/door.svg'
export default function Wall({ position, length, thickness, side, hasDoor, doorPosition }) {
  const { scale } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})
  const makeStyle = () => {
    const currStyle = {}
    if (position.top !== undefined) currStyle['top'] = position.top
    else currStyle['bottom'] = position.bottom
    if (position.left !== undefined) currStyle['left'] = position.left
    else currStyle['right'] = position.right

    if (side === 'front' || side === 'back') {
      currStyle['width'] = Math.ceil(length * scale)
      currStyle['height'] = thickness
    } else {
      currStyle['height'] = Math.ceil(length * scale)
      currStyle['width'] = thickness
    }
    setStyle(currStyle)
  }
  // console.log(doorPosition)
  useEffect(() => {
    makeStyle()
  }, [position, length, thickness, side])
  return (
    <div className='bg-gray-500  absolute' style={style}>
      {hasDoor && (
        <div
          className={`absolute bg-white flex items-end justify-center ${
            side === 'left' || side === 'right' ? 'h-[30px] w-[30px]' : 'h-[6px] w-[30px]'
          }`}
          style={doorPosition}>
          {
            <img
              src={doorImg}
              alt='door'
              style={
                side === 'left' || side === 'right'
                  ? { transform: 'scaleX(-1) ', rotate: '-90deg', width: '100%', height: '100%' }
                  : {}
              }
            />
          }
        </div>
      )}
    </div>
  )
}
