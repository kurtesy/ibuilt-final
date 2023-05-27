import React from 'react'
import { Link } from 'react-router-dom'
import appleLogo from '../assets/logos/apple-logo.svg'
import googleLogo from '../assets/logos/google-logo.svg'
import microsoftLogo from '../assets/logos/microsoft-logo.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'
export default function SignupComponent() {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[60px] flex justify-center items-end text-primaryLime font-bold text-3xl'>iBuiltup</div>
      <div className='w-120px h-[calc(100%-60px)] flex items-center justify-center'>
        <Link to='/'>
          <AiOutlineArrowLeft size={32} className='absolute top-[64px] left-[64px] cursor-pointer z-50' />
        </Link>
        <div className='w-1/3 flex items-center flex-col justify-center gap-6'>
          <div className='text-3xl font-semibold text-slate-800'>Create your account</div>
          <div className='w-1/2 text-sm'>Please note that phone verification is required for signup. Your number will only be used to verify your identity for security purposes.</div>
          <input placeholder='Email address' className='bg-white border-[1px] h-[48px] w-[50%] px-3 py-2 outline-none text-slate-600 rounded-sm' />
          <button className='bg-primaryCyan h-[48px] w-[50%] px-3 outline-none text-white font-semibold rounded-sm'>Continue</button>
          <div className='text-md font-thin'>
            Already have an account?
            <Link className='text-primaryLime font-blod px-2 cursor-pointer h-full z-50' to='/auth'>
              Login
            </Link>
          </div>
          <div className='w-full flex items-center justify-center gap-3  text-gray-500'>
            <div className='h-[1px] w-[22%]  bg-gray-500' />
            <div>OR</div>
            <div className='h-[1px] w-[22%] bg-gray-500 ' />
          </div>
          <button className='bg-white border-[1px] h-[48px] w-[50%] px-3 outline-none text-slate-600 rounded-sm cursor-pointer'>
            <div className='flex  items-center h-full justify-between'>
              <img src={googleLogo} alt='logo' className='h-6' />
              <div className='font-semibold pr-6'>Continue With Google</div>
            </div>
          </button>
          <button className='bg-white border-[1px] h-[48px] w-[50%] px-3 outline-none text-slate-600 rounded-sm cursor-pointer'>
            <div className='flex  items-center h-full justify-between'>
              <img src={microsoftLogo} alt='logo' className='h-6' />
              <div className='font-semibold pr-6'>Continue With Microsoft</div>
            </div>
          </button>{' '}
          <button className='bg-white border-[1px] h-[48px] w-[50%] px-3 outline-none text-slate-600 rounded-sm cursor-pointer'>
            <div className='flex  items-center h-full justify-between'>
              <img src={appleLogo} alt='logo' className='h-8' />
              <div className='font-semibold pr-6'>Continue With Apple</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
