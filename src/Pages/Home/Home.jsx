import React from 'react'
import Navbar from '../../components/Navbar'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full overflow-hidden'>
      <Navbar />
      {/* HERO */}
      <section className='w-full h-full bg-white'>
        <div className='w-full h-full flex items-center justify-around px-6 gap-3'>
          <div className='flex items-start px-24 flex-col gap-4  w-1/2'>
            <div className='text-3xl text-slate-800  font-bold'>Build yourself a home with iBuiltup</div>
            <div className='text-primaryLime text-3xl pb-6  font-bold'>Build your Drawing</div>
            <div className='text-lg text-slate-800'>iBuiltup is committed to empower you with simplified technical skills, therefore carve out your dream home project by yourself.</div>
            <Link
              to='/drawing'
              className='bg-primaryLime px-6 py-3 my-10 flex items-center justify-around gap-4 font-semibold rounded-md text-2xl hover:scale-110 ease-linear duration-300 cursor-pointer'>
              Get Started
              <BsFillArrowRightCircleFill size={24} />
            </Link>
          </div>
          <div className='w-1/2 flex items-center justify-center font-thin bg-slate-800 h-[600px]'>YOUR VIDEO</div>
        </div>
      </section>
    </div>
  );
}
