import React, { useState } from 'react'
import InputWithLabel from './InputWithLabel'
import BHKSelector from './BHKSelector'
import PlotDetails from './PlotDetails'
import { useDispatch, useSelector } from 'react-redux'
import { setPlotDetails, setSetBacks, toggleGeneratePlot } from '../../redux/plot'
export default function SetbacksModal({ dimensions, setShow, setLoading }) {
  const { setbacks } = useSelector((state) => state.plot)
  const [front, setFront] = useState(setbacks.front)
  const [back, setBack] = useState(setbacks.back)
  const [left, setLeft] = useState(setbacks.left)
  const [right, setRight] = useState(setbacks.right)
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()
  function generatePlot() {
    setShow(false)
    setLoading(true)
    updateSetbacks()
    setTimeout(() => {
      const { length, breadth } = dimensions
      dispatch(setPlotDetails({ length: parseFloat(length).toFixed(2), breadth: parseFloat(breadth).toFixed(2) }));
      dispatch(toggleGeneratePlot({ isGenerating: true }))
      if (length && breadth) {
        setLoading(false)
      }
    }, 0)
  }
  const updateSetbacks = () => {
    dispatch(setSetBacks({ setbacks: { front, left, right, back } }))
    setDisabled(true)
  }
  return (
    <div className='absolute bg-[#d9fc3599] top-12 left-20 p-3 shadow-lg rounded-lg flex flex-col gap-3 shadow-gray-500'>
      <div className='flex w-full gap-3'>
        <InputWithLabel label='Front' value={front} setValue={setFront} min={0} max={15} disabled={disabled} />
        <InputWithLabel label='Back' value={back} setValue={setBack} min={0} max={15} disabled={disabled} />
      </div>
      <div className='flex w-full gap-3'>
        <InputWithLabel label='Left' value={left} setValue={setLeft} min={0} max={15} disabled={disabled} />
        <InputWithLabel label='Right' value={right} setValue={setRight} min={0} max={15} disabled={disabled} />
      </div>
      <div className='h-[2px] bg-slate-800 w-full' />
      <BHKSelector />
      {/* <PlotDetails /> */}
      <div className='w-full flex items-center justify-center'>
        <button className='bg-gradient-to-tl from-gray-900 to-green-500 h-8 w-[50%] rounded-lg shadow-2xl shadow-primaryLime' onClick={generatePlot}>
          GO!
        </button>
      </div>
    </div>
  );
}
