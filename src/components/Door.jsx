import React, { useEffect, useState } from 'react'
import doorImg from '../assets/door.svg'
export default function Door({ id, position, side }) {
  const [rotated, setRotated] = useState(false)
  useEffect(() => {
    if (side === 'left' || side === 'right') {
      setRotated(true)
    } else {
      setRotated(false)
    }
  }, [side])
  return (
    <div
      className={`absolute  flex items-end justify-center ${
        side === 'left' || side === 'right' ? 'h-[30px] w-[30px] right-0' : 'h-[6px] w-[30px] '
      }`}
      style={position}>
      <div
        className={`absolute bg-white flex items-end justify-center ${
          side === 'left' || side === 'right' ? 'h-[30px] w-[6px] right-0' : 'h-[6px] w-[30px]'
        }`}></div>
      {
        <img
          src={doorImg}
          alt='door'
          style={
            side === 'left' || side === 'right'
              ? { transform: 'scaleX(-1) ', rotate: '-90deg', width: '100%', height: '100%' }
              : { position: 'absolute', bottom: '6px', left: '0' }
          }
        />
      }
    </div>
  )
}
