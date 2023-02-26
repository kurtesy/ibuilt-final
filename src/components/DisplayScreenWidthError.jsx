import React from 'react'
import robo from '../assets/svg/robo.png'
export default function DisplayScreenWidthError() {
  return (
    <div className='w-screen h-screen bg-slate-800 text-slate-400 flex flex-col items-center justify-center text-2xl relative'>
      <div className='absolute w-screen h-screen '>
        <img src={robo} alt='robo' className='w-screen h-screen -z-50 opacity-20' />
      </div>
      <div className='text-4xl text-primaryLime'>Oh no!</div>
      <div className='text-center my-6 text-xl italic text-lime-500'>
        <q> Your screen is feeling a bit shy and not quite up to the task of displaying our application properly! </q>
      </div>
      {/* <div className=' px-6'>
        It's okay, we won't judge - we all have our "screen size" limitations. But fear not, we're not ones to
        discriminate based on size. We love all screens equally, big or small. Unfortunately, in this case, our
        application needs a little bit more screen real estate to show off its full potential. We suggest giving your
        screen a little pep talk and maybe a few compliments to boost its confidence. Who knows, maybe it'll grow a few
        pixels or two! If all else fails, we recommend trying a different device with a larger screen size to fully
        enjoy our application. Don't worry, your tiny screen will forgive you - eventually.
      </div> */}
    </div>
  )
}
