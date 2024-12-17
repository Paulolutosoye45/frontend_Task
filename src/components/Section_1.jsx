import React from 'react'
import vector_3 from '../assets/vector_3.png'
import orange from '../assets/orange.jpg'
import { GoArrowRight } from 'react-icons/go'
import down from '../assets/down.jpg'


function Section_1() {
  return (
    <div className="relative pb-20 sm:pb-36 bg-[#f9f1ff] overflow-hidden">
    <div className="relative w-full ">
      <img
        src={vector_3}
        alt="Background"
        className="absolute top-96 sm:top-11 lg:-top-96 inset-0 w-full  object-cover z-0"
      />
      <div className="relative ">
        <div className=" flex flex-col justify-between sm:flex-row  lg:items-start gap-8  p-6 sm:p-12 ">
          <div className=' w-full sm:w-[50%]'>
            <h2 className='text-[#6f00d9] font-bold capitalize font-Montserrat my-5'>founder friday</h2>
            <h1 className="text-3xl lg:text-4xl font-bold text-black font-Montserrat capitalize mb-6">what happen  at founder friday</h1>
            <div className='py-2'>
              <p className='my-4 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquam ratione iure, deleniti, error sunt voluptates corporis et ipsa at quidem architecto! Unde, tenetur earum. Qui assumenda adipisci voluptate expedita.</p>
              <button
                className=" font-Montserrat font-medium inline-flex items-center justify-center px-2 sm:px-6 py-2 text-base sm:text-xl  border-2 border-[#6f00d9] text-white rounded-md bg-[#6f00d9]  transition duration-300"
              >
                Learn more
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="relative sm:mb-52  mb-96 pb-7">
            <img
              src={down}
              alt="Founder's Friday Event"
              className="object-cover shadow-md rounded-lg sm:w-[361px] lg:h-[450px] sm:h-[100%] lg:w-[361px] h-[450px] mb-5 sm:mb-0 "
            />
            <img
              src={orange}
              alt="Founder's Friday Event"
              className=" object-cover shadow-md h-[450px] lg:h-[450px] sm:h-[100%] rounded-lg absolute  sm:top-60 lg:right-40"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section_1