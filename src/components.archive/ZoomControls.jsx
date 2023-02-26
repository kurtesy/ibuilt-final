import React, { useEffect, useState } from 'react'
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { changeScale } from '../../redux/plot'
export default function ZoomControls() {
  const [currScale, setCurrScale] = useState(20)
  const dispatch = useDispatch()
  const handleIncreaseScale = () => {
    setCurrScale((prev) => prev + 1)
  }
  const handleDecreaseScale = () => {
    setCurrScale((prev) => prev - 1)
  }
  useEffect(() => {
    dispatch(changeScale({ scale: currScale }))
  }, [currScale])
  return (
    <div className='absolute right-2 top-2 '>
      <div className='bg-slate-700  rounded-lg shadow-xl'>
        <AiFillPlusSquare size={48} className='text-primaryLime hover:cursor-pointer' onClick={handleIncreaseScale} />
        <AiFillMinusSquare size={48} className='text-primaryLime  hover:cursor-pointer' onClick={handleDecreaseScale} />
      </div>
    </div>
  )
}
