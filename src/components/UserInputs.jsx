import React, { useEffect, useState } from 'react'
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri'
import InputWithLabel from './InputWithLabel'
import ExtraInputs from './ExtraInputs'
import { useDispatch } from 'react-redux'
import { setPlotDetails } from '../../redux/plot'
import PlotDetails from './PlotDetails'
export default function UserInputs({ show, setShow }) {
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    if (length && breadth) {
      dispatch(setPlotDetails({ length, breadth }))
    }
  }, [length, breadth])

  return (
    <>
      {show ? (
        <div className='absolute w-full bg-slate-800 top-0 h-[48px] flex items-center cursor-pointer z-50'>
          <RiMenuFoldFill
            className='absolute w-12 h-8 hover:scale-110 duration-300 z-50 text-primaryLime'
            onClick={() => setShow(false)}
          />
          <div className='flex-1 absolute right-32 h-full flex items-center justify-center gap-3 w-full '>
            <InputWithLabel label='length' value={length} setValue={setLength} min={10} max={70} />
            <InputWithLabel label='breadth' value={breadth} setValue={setBreadth} min={10} max={70} />
            <ExtraInputs />
          </div>
          <PlotDetails />
        </div>
      ) : (
        <div className='absolute w-12 bg-transparent top-0 left-0 h-[48px] flex items-center cursor-pointer '>
          <RiMenuUnfoldFill
            className='absolute w-12 h-8 hover:scale-110 duration-300 text-primaryLime z-50'
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
      )}
    </>
  )
}
