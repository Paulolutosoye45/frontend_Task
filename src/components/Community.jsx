import React from 'react'
import vector_2 from '../assets/vector_2.png'
import belba from '../assets/belba.png'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { IoMdPlay } from "react-icons/io";
import event from '../assets/event.jpg'

function Community() {
  return (
    <div className="bg-[#f9f1ff] min-h-screen pt-20  ">
          <section className="relative min-h-screen">
            <div className="">
              <div className="text-center py-12 px-4 ">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Register And Be Part of Our Community
                </h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                  Join our community of over 1000+ founders, developers, and tech junkies
                  in general. Be inspired by people who live to inspire!
                </p>
              </div>
              <div className="relative ">
                <div className="relative w-full  bg-[#f9f1ff]">
                  <img
                    src={vector_2}
                    alt="Background"
                    className="absolute inset-0 w-full  object-cover z-0"
                  />

                  <div className="relative z-50 p-8 w-full h-40 mx-auto max-w-screen-2xl">
                    <div className="absolute left-0 top-0 w-full h-full">
                      <div className="absolute top-32 left-10 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 p-1 border-purple-400 shadow-md">
                        <img
                          src={belba}
                          alt="Profile 1"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute -top-7 left-[20%] w-16 h-16 md:w-20 md:h-20 rounded-full border-2 p-1 border-[#2f6c62] shadow-md">
                        <img
                          src={belba}
                          alt="Profile 2"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className='flex justify-center items-center space-x-8  mt-24'>
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-red-400 p-1 shadow-md">
                          <img
                            src={belba}
                            alt="Profile 2"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-400 p-1 shadow-md">
                          <img
                            src={belba}
                            alt="Profile 2"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-red-400 p-1 shadow-md">
                          <img
                            src={belba}
                            alt="Profile 2"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>

                      <div className="absolute top-32 right-10 w-16 h-16 md:w-20 md:h-20 rounded-full p-1 border-2  border-[#ff9500]  shadow-md">
                        <img
                          src={belba}
                          alt="Profile 1"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute -top-7 right-[20%] w-16 h-16 md:w-20 md:h-20 rounded-full p-1  border-2 border-[#30b0c7] shadow-md">
                        <img
                          src={belba}
                          alt="Profile 2"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="text-center mt-20">
                <button className="inline-flex items-center justify-center border-[#a649ff] border-2 text-[#a649ff] px-6 py-2 rounded-full hover:bg-[#8a3dcf] hover:text-white transition">
                  Register Now
                  <GoArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </section>


          {/* Event Section */}
          <section className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-12 font-Montserrat">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2">
              <img
                src={event}
                alt="Event video"
                className="rounded-lg shadow-lg w-full"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f9f1ff] text-[#8a3dcf] rounded-full p-3 hover:scale-110 transition">
                <IoMdPlay className="text-2xl" />
              </button>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                At Founder's Friday, Every Friday Is a Learning Experience!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join us in our mission to transform ideas into impact and shape the
                future of Nigeria's startup landscape.
              </p>
              <button className="bg-[#b86dff] text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition duration-300 shadow-md mx-auto md:mx-0">
                Register
                <GoArrowRight className="ml-2" />
              </button>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-[#f9f1ff] py-12 px-4 font-Montserrat container mx-auto my-4 ">
            {/* Title Section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                What Do Our Attendees Have To Say?
              </h2>
              <p className="text-gray-500 text-sm">Well See For Yourself!</p>
            </div>

            {/* Testimonial Cards */}
            <div className='flex items-center justify-end mx-auto gap-6 p-4  max-w-5xl'>
              <button className="flex items-center justify-center w-16   h-16 md:w-16 md:h-16 border-2 border-[#a649ff] rounded-full text-black text-3xl font-bold hover:bg-[#a649ff] hover:text-white transition">
                <GoArrowLeft />
              </button>
              <button className="flex items-center justify-center w-16 h-16 md:w-16 md:h-16  border-2 border-[#a649ff] rounded-full text-black text-3xl font-bold hover:bg-[#a649ff] hover:text-white transition">
                <GoArrowRight />
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center">


              {/* Testimonials */}
              <div className="flex flex-wrap justify-center gap-6 ">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="text-center bg-[#f9f1ff] w-64 sm:w-72 p-4 "
                    >
                      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 p-2 border-4 border-[#8a3dcf]">
                        <img
                          src={belba}
                          alt="Testimonial"
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        Mr Belba Ngoy
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Always a remarkable experience for my team and myself
                      </p>
                    </div>
                  ))}
              </div>

            </div>
          </section>
        </div>
  )
}

export default Community