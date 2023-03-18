import React, { useEffect, useState } from 'react'
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri'
import InputWithLabel from './InputWithLabel'
import ExtraInputs from './ExtraInputs'
import { useDispatch, useSelector } from 'react-redux'
import { setPlotDetails } from '../../redux/plot'
import PlotDetails from './PlotDetails'
export default function UserInputs({ show, setShow, setLoading }) {
  const { plot } = useSelector((state) => state)
  const [length, setLength] = useState(plot.plotLength ? plot.plotLength : 0)
  const [breadth, setBreadth] = useState(plot.plotBreadth ? plot.plotBreadth : 0)
  const dispatch = useDispatch()

  return (
    <>
      {show ? (
        <div className={`absolute  bg-slate-800 top-0 right-0 h-[48px] flex items-center cursor-pointer  z-50 w-full`}>
          <RiMenuFoldFill
            className={`absolute w-12 h-8 hover:scale-110 duration-300 z-50 text-primaryLime }`}
            onClick={() => setShow(false)}
          />
          <div className='w-full flex items-center justify-between'>
            <div className='flex-1 absolute right-32 h-full flex items-center justify-center gap-3 w-full '>
              <InputWithLabel label='length' value={length} setValue={setLength} min={10} max={70} />
              <InputWithLabel label='breadth' value={breadth} setValue={setBreadth} min={10} max={70} />
              <ExtraInputs dimensions={{ length, breadth }} setShow={setShow} setLoading={setLoading} />
            </div>
            <PlotDetails />
          </div>
        </div>
      ) : (
        <div className='absolute w-12 bg-transparent top-0 left-0 h-[48px] flex items-center cursor-pointer '>
          <RiMenuUnfoldFill
            className={`absolute w-12 h-8 hover:scale-110 duration-300 text-primaryLime z-50 `}
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
      )}
    </>
  )
}
