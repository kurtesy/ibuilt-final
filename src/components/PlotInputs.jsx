import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBuiltup, setPlotDetails } from '../../redux/plot'
export default function PlotInputs({ setHideInputs }) {
  const [plotDimensions, setPlotDimensions] = useState({ length: 0, breadth: 0 })
  const [scale, setScale] = useState(20)
  const [setbacks, setSetbacks] = useState({ back: 1.6, left: 1.6, front: 4.6, right: 1.6 })
  const [type, setType] = useState('2 BHK')
  const [openPlotModal, setOpenPlotModal] = useState(false)
  const [activeStyle, setActiveStyle] = useState({})
  const dispatch = useDispatch()
  const handleBuild = () => {
    setOpenPlotModal(false)
    setHideInputs(true)
    dispatch(setPlotDetails({ plotDimensions, scale, type, setbacks }))
    const builtLength = parseFloat(plotDimensions.length) - parseFloat(setbacks.left) - parseFloat(setbacks.right)
    const builtBreadth = parseFloat(plotDimensions.breadth) - parseFloat(setbacks.front) - parseFloat(setbacks.back)
    dispatch(setBuiltup({ builtLength, builtBreadth }))
  }

  const handleSelectType = (e) => {
    setType(e.target.name)
  }
  return (
    <>
      <div className='w-[80%] h-[60px] bg-lime-900 mt-3 mx-4 rounded-lg shadow-xl flex p-2 gap-3'>
        <div className='relative w-1/2 h-full'>
          <button
            className='w-full h-full bg-lime-300 rounded-lg font-semibold text-gray-600 hover:text-xl ease-in-out duration-300'
            onClick={() => setOpenPlotModal((prev) => !prev)}>
            Enter Plot Details
          </button>
          {/* PLOT INPUTS MODAL */}
          {openPlotModal && (
            <div className='w-[600px] h-[400px] bg-lime-300 absolute top-[50px] rounded-lg shadow-2xl p-3 z-10'>
              <label className='px-3 font-semibold text-lg text-gray-700'>Plot Details</label>
              <div className='flex w-full gap-2 p-3'>
                <input
                  className='w-[40%] h-[48px] px-3 outline-none rounded-lg'
                  placeholder='Length(ft)'
                  type='number'
                  name='length'
                  onChange={(e) => setPlotDimensions({ ...plotDimensions, [e.target.name]: e.target.value })}
                />
                <input
                  className='w-[40%] h-[48px] px-3 outline-none rounded-lg'
                  placeholder='Breadth(ft)'
                  type='number'
                  name='breadth'
                  onChange={(e) => setPlotDimensions({ ...plotDimensions, [e.target.name]: e.target.value })}
                />
                <input
                  className='w-[20%] h-[48px] px-3 outline-none rounded-lg'
                  placeholder='Scale'
                  type='number'
                  name='scale'
                  defaultValue={20}
                  onChange={(e) => setScale(e.target.value)}
                />
              </div>
              <div>
                <label className='px-3 font-semibold text-lg text-gray-700'>SetBacks</label>
                <div className=' flex w-full gap-2 p-3'>
                  <div className='flex flex-col w-full gap-3'>
                    <div className='flex  w-full justify-between'>
                      <div className='flex flex-col h-full'>
                        <label>Front</label>
                        <input
                          className='h-[48px] mt-2 outline-none px-3 placeholder:text-xs rounded-lg'
                          placeholder='Front'
                          type='number'
                          name='front'
                          value={setbacks.front}
                          onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
                        />
                      </div>
                      <div className='flex flex-col'>
                        <label>Back</label>
                        <input
                          className=' h-[48px] mt-2  outline-none px-3 placeholder:text-xs rounded-lg'
                          placeholder='Back'
                          type='number'
                          name='back'
                          value={setbacks.back}
                          onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className='flex justify-between w-full'>
                      <div className='flex flex-col'>
                        <label>Left</label>
                        <input
                          className='h-[48px] mt-2 outline-none px-3 placeholder:text-xs rounded-lg'
                          placeholder='Left'
                          type='number'
                          name='left'
                          value={setbacks.left}
                          onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
                        />
                      </div>
                      <div className='flex flex-col'>
                        <label>Right</label>
                        <input
                          className='h-[48px] mt-2 outline-none px-3 placeholder:text-xs rounded-lg'
                          placeholder='Right'
                          type='number'
                          name='right'
                          value={setbacks.right}
                          onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button className='w-1/2 bg-lime-300 rounded-lg font-semibold text-gray-600 hover:text-xl ease-in-out duration-300'>
          Select Building Properties
        </button>
        <button
          className='w-[90px] bg-green-300 rounded-lg font-semibold text-gray-600 hover:text-xl ease-in-out duration-300'
          onClick={handleBuild}>
          Build
        </button>

        {/* */}
      </div>
      {/* SETBACKS */}
      {/*
       */}
      {/* TYPE */}
      {/* <div className='py-2 font-semibold'>Select Type</div>
      <div className=' h-[40px] flex gap-1 rounded-md overflow-hidden bg-slate-900 text-slate-900 text-sm'>
        <button className='bg-yellow-400  font-semibold w-1/4' onClick={handleSelectType} name='1 BHK'>
          1 BHK
        </button>
        <button className='bg-yellow-400  font-semibold w-1/4' onClick={handleSelectType} name='2 BHK'>
          2 BHK
        </button>
        <button className='bg-yellow-400  font-semibold w-1/4' onClick={handleSelectType} name='3 BHK'>
          3 BHK
        </button>
        <button className='bg-yellow-400  font-semibold w-1/4' onClick={handleSelectType} name='4 BHK'>
          4 BHK
        </button> */}
      {/* </div> */}
    </>
  )
}
