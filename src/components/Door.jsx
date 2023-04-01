import React, { useEffect, useState } from 'react'
import doorImg from '../assets/svg/doors/default.svg'
export default function Door({ side, position }) {
  const [rotated, setRotated] = useState(false)
  const [altDirection, setAltDirection] = useState({})
  const [custClass, setCustClass] = useState('')
  useEffect(() => {
    if (side === 'front') {
      setAltDirection({ bottom: 0 })
      setRotated('0deg')
      setCustClass('w-[60px] h-[6px] bottom-0')
    }
    if (side === 'back') {
      setAltDirection({ top: 0 })
      setRotated('180deg')
      setCustClass('w-[60px] h-[6px] top-0')
    }
    if (side === 'right') {
      setAltDirection({ right: 0 })
      setRotated('-90deg')
      setCustClass('w-[6px] h-[60px] right-0')
    }
    if (side === 'left') {
      setAltDirection({ left: 0 })
      setRotated('90deg')
      setCustClass('w-[6px] h-[60px] left-0')
    }
  }, [side])
  return (
    <div className={`w-[60px] h-[60px] bg-transparent absolute `} style={{ ...position, ...altDirection }}>
      <div className={`bg-white absolute  ${custClass}`} />
      <img src={doorImg} alt='door' style={{ rotate: rotated }} />
    </div>
  )
}
