import React, { useEffect, useRef, useState } from 'react'
import UserInputs from './UserInputs'
import Plot from './Plot'
import { useSelector } from 'react-redux'
import ZoomControls from './ZoomControls'
import PositionPointer from './PositionPointer'
import Loader from './Loader'
import CurrentSaveButton from './CurrentSaveButton'
import ConfirmationModal from './ConfirmationModal'
import Particles from '../components/Particles'
import SaveAsPdfButton from './SaveAsPdfButton'
export default function MainArea({ isSiderOpen }) {
  const [show, setShow] = useState(false)
  const [showMainBtn, setShowMainBtn] = useState(true)
  const { plot } = useSelector((state) => state)
  const [loading, setLoading] = useState(false)
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false)
  useEffect(() => {
    if (plot.plotLength && plot.plotBreadth) setShowMainBtn(false)
  }, [plot.plotLength, plot.plotBreadth])

  const handleDelete = (e) => {
    if (e.key === 'Delete') setOpenDeleteConfirmation(true)
  }
  const plotref = useRef()
  return (
    <div
      tabIndex={0}
      onKeyDown={handleDelete}
      className={` relative h-full flex items-center justify-center  ${
        isSiderOpen ? 'w-[calc(100%-400px)] left-[400px]' : 'w-full'
      }`}>
      {!plot.plotLength && !plot.plotBreadth && <Particles />}
      <UserInputs show={show} setShow={setShow} setLoading={setLoading} isSiderOpen={isSiderOpen} />
      {plot.plotLength && plot.plotBreadth && (
        <>
          <PositionPointer />
          <PositionPointer isBottom={true} />
          <CurrentSaveButton />
          <SaveAsPdfButton plotref={plotref} />
          <ZoomControls />
        </>
      )}
      {showMainBtn && (
        <button
          className='bg-primaryLime h-12 px-2 rounded-xl shadow-2xl text-slate-800 font-semibold hover:scale-110 duration-300 shadow-white animate-pulse'
          onClick={() => {
            setShow(true)
            setShowMainBtn(false)
          }}>
          Please Enter Dimensions
        </button>
      )}
      {loading ? (
        <Loader />
      ) : (
        plot.plotLength && plot.plotBreadth && <Plot isSiderOpen={isSiderOpen} plotref={plotref} />
      )}
      {/* {plot.plotLength && plot.plotBreadth && <Plot isSiderOpen={isSiderOpen} />} */}

      {openDeleteConfirmation && <ConfirmationModal setOpenDeleteConfirmation={setOpenDeleteConfirmation} />}
    </div>
  )
}
