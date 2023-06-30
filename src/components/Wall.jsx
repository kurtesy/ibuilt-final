import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Opening from './Opening'
import Door from './Door'

export default function Wall({ id, position, length, thickness, side, door, added, window, opening }) {
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
  }, [position, length, thickness, side, scale])
  return (
    <>
      {added ? (
        <div className='bg-slate-900 border-[1px] border-black absolute z-50 hover:bg-green-400' style={style}>
          {opening.includes && <Opening length={opening.length} position={opening.position} side={side} id={id} />}
          {door.includes && <Door position={door.position} side={side} id={id} />}
          {/* {window.includes && <WindowComp position={window.position} side={side} />} */}
        </div>
      ) : null}
    </>
  )
}
