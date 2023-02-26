import React, { useEffect, useState } from 'react'
import { ClockLoader } from 'react-spinners'

const alerts = ['Gathering Requirements', 'Surveying', 'Verifing Requirements', 'Building Plan', 'Completed']

export default function Loader({ delay = 2000 }) {
  const [prompt, setPrompt] = useState('')
  const makePrompts = () => {
    alerts.forEach((el, i) => {
      setTimeout(() => setPrompt(el), delay * i)
    })
  }
  useEffect(() => makePrompts(), [])
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <ClockLoader color='#36d7b7' />
      <div className='text-xs mt-6'>{prompt}. . .</div>
    </div>
  )
}
