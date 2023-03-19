import React, { useEffect, useState } from 'react'
import { components } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { addIcontoList } from '../../redux/rooms'
export default function AddIconComponent() {
  console.log(components.beds)
  const [isInAddMode, setIsInAddMode] = useState(false)
  const [selectedType, setSelectedType] = useState(null)
  const [variants, setVariants] = useState([])
  const [selectedVariant, setSelectedVariant] = useState(null)
  const { selectedRoom } = useSelector((state) => state.rooms)
  const dispatch = useDispatch()
  useEffect(() => {
    if (selectedType) setVariants(components[selectedType.toString()])
  }, [selectedType])
  useEffect(() => {
    if (selectedRoom.id && selectedType && selectedVariant) {
      const icon = {
        type: selectedType,
        variants: selectedVariant,
        id: `${selectedRoom.roomType}-${selectedRoom.id}-${selectedType}-${selectedVariant}`,
        src: variants[selectedVariant - 1].icon
      }
      dispatch(addIcontoList({ icon }))
    }
  }, [selectedVariant])
  return (
    <>
      <div className='flex items-center justify-between'>
        <button
          disabled={!selectedRoom.id}
          className={`text-slate-900 text-xs px-3 py-1 rounded-md font-semibold ${
            !isInAddMode ? 'bg-primaryLime' : 'bg-red-400'
          }`}
          onClick={() => setIsInAddMode((prev) => !prev)}>
          {!isInAddMode ? 'Add New Icon' : 'Cancel'}
        </button>
        {isInAddMode && (
          <select
            className='bg-slate-900 text-primaryLime text-xs px-3 py-1 rounded-md font-semibold cursor-pointer outline-none'
            onChange={(e) => setSelectedType(e.target.value)}
            value={selectedType}>
            <option value={null}>Select Type</option>
            <option value='beds'>Bed</option>
            <option value='sofas'>Sofa</option>
          </select>
        )}
      </div>
      {isInAddMode && selectedType && (
        <div className=' my-2 p-1 bg-slate-900 text-primaryLime  w-full flex justify-center flex-col'>
          select variant
          <div className='w-full bg-primaryLime h-[1px] my-2' />
          <div className='mt-3 flex flex-wrap w-full items-center justify-center gap-6'>
            {variants.map((variant, index) => (
              <img
                src={variant.icon}
                alt='bed'
                className='w-8 cursor-pointer hover:scale-125 duration-300'
                key={index}
                onClick={() => setSelectedVariant(variant.id)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
