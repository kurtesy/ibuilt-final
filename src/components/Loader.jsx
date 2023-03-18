import React, { useEffect, useState } from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { AiFillCheckCircle } from 'react-icons/ai'
// import Typist from 'react-text-typist'
const prompts = ['Gathering inputs', 'Calculating dimensions', 'Rendering', 'Done!']
export default function Loader({ delay = 1000 }) {
  const [currentPrompt, setCurrentPrompt] = useState('')

  const makePrompts = () => {
    prompts.forEach((el, i) => {
      setTimeout(() => {
        setCurrentPrompt(el)
      }, delay * i)
    })
  }
  useEffect(() => makePrompts(), [])
  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center gap-10'>
      <PropagateLoader color='#d9fc35' size={15} />
      <div className='text-primaryLime  italic font-extralight'>{currentPrompt}. . .</div>
    </div>
  )
}
