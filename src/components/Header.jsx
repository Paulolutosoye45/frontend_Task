import { FiExternalLink } from "react-icons/fi";
import cafe from '../assets/cafe.png'
import solana from '../assets/solana_logo.png'
import may from '../assets/may.jpg'
import right from '../assets/right.png'
import down from '../assets/down.jpg'
import ppl from '../assets/ppl.png'
import {FaSackDollar } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import Mswitch from '../assets/Mswitch.png'
import star from '../assets/star.png'
import bold from '../assets/bold.png'
import speaker from '../assets/speaker.jpg'
import vector_1 from '../assets/vector_1.png'

function Header() {
  return (
     <div className="relative  bg-[#f9f1ff] overflow-hidden">
          <div className="relative w-full ">
            <img
              src={vector_1}
              alt="Background"
              className="absolute  inset-0 w-full  object-cover   "
            />

            <div className="relative ">
              <section className="py-2  sm:py-28   grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className=' text-center sm:text-left  py-16 px-6  sm:px-10 my-4 font-Montserrat'>
                  <h4 className='font-semibold text-sm sm:text-base font-Montserrat py-2 text-left '>Join our premier monthly meetup for startup founders and tech visionaries</h4>
                  <h1 className="text-2xl sm:text-4xl font-bold text-purple-800 leading-tight mb-6 text-left ">
                    Connect, Collaborate, Innovate!
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 text-left  sm:">
                    Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-2 sm:px-6 py-4 text-base md:text-base m font-semibold text-[#6f00d9] border-2 border-[#6f00d9] rounded-full hover:bg-[#6f00d9] hover:text-white transition duration-300"
                  >
                    Register For Our Next Event
                    <span className="ml-2">➔</span>
                  </a>

                  <p className="text-sm  font-bold  sm:text-base text-purple-700 mt-6 drop-shadow-lg">
                    Join us for our next meetup on the 26th of July 2024
                  </p>

                  <div className="bg-[#f9f1ff] py-2  flex justify-center  sm:justify-normal gap-2 md:gap-8 items-center mt-10 mb-6">
                    <img src={cafe} alt="cafe" className="w-14 sm:h-16 sm:w-16 object-contain rounded-full" />
                    <img src={Mswitch} alt="cafe" className="w-14 sm:h-16 sm:w-16 object-contain rounded-full" />
                    <img src={star} alt="cafe" className="w-14 sm:h-16 sm:w-16 object-contain rounded-full" />
                    <img src={bold} alt="cafe" className="w-14 sm:h-16 sm:w-16 object-contain rounded-full" />
                    <img src={solana} alt="cafe" className="w-14 sm:h-16 sm:w-16 object-contain rounded-full" />
                  </div>
                  <div className="">
                    <a href="#" className="text-sm sm:text-lg font-semibold text-gray-800 flex  items-center gap-2 justify-center sm:justify-normal">
                      Become a collaborator today
                      <span className="inline-block">
                        <FiExternalLink className="w-5 h-5" />
                      </span>
                    </a>
                  </div>
                </div>

                {/* //section2 */}
                <div className="px-10 sm:px-3 text-center rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-0  text-white">
                    <div className='-rotate-12 sm:-rotate-6 border-2 border-[#b86dff] px-1 py-2 sm:pb-4  rounded-lg bg-[#b86dff]'>
                      <img
                        src={speaker}
                        alt="Founder's Friday Event"
                        className="rounded-lg shadow-md   h-[90%] sm:h-[90%] object-cover" />
                      <h3 className="font-Italianno text-xl sm:text-2xl text-white text-center">
                        Founder's Friday
                      </h3>
                      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f9f1ff] text-[#8a3dcf] rounded-full p-3 hover:scale-110 transition">
                        <IoMdPlay className="text-2xl" />
                      </button>
                    </div>
                    <div className=' rotate-6 sm:rotate-12 border-2 border-[#6f00d9] sm:pb-4  p-2 rounded-lg bg-[#6f00d9] sm:translate-y-20 sm:-translate-x-10'>
                      <img src={ppl} alt="Founder's Friday Event" className="rounded-lg shadow-md w-full h-[90%] object-cover" />
                      <h3 className="font-Italianno text-xl sm:text-2xl text-white text-center mt-2">
                        Founder's Friday
                      </h3>
                    </div>
                    <div className="rotate-6  p-2 rounded-lg translate-y-4 translate-x-2  sm:grid sm:grid-cols-2 sm:gap-4 text-black">
                      <div className='sm:rotate-12 sm:border-2 sm:px-1 sm:py-2 sm:pb-4  sm:rounded-lg sm:translate-y-20 sm:translate-x-12 md:w-[200%] lg:w-full'>
                        <img src={down} alt="Founder's Friday Event" className="rounded-lg shadow-md w-full h-[90%] object-cover  " />
                        <h3 className='font-oswald capitalize text-base font-medium'>founder's friday</h3>
                      </div>
                      <div className='sm:-rotate-12 sm:border-2 sm:px-1 sm:py-2 sm:pb-4 sm:rounded-lg sm:translate-y-32  sm:translate-x-20 md:w-[200%] lg:w-full'>
                        <img src={right} alt="Founder's Friday Event" className="rounded-lg shadow-md w-full h-[90%] object-cover" />
                        <h3 className='font-Italianno text-base font-medium '>founder's friday</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </section>




              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8  p-6 lg:p-12 ">
                {/* Left Section: Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={may}
                    alt="Founders Friday Event"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Right Section: Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 relative border-4 border-[#6f00d9] p-6 lg:p-8 rounded-lg shadow-md">
                  {/* Title */}
                  <h2 className="text-3xl lg:text-4xl font-bold text-black font-Montserrat bg-[#f9f1ff] px-4 py-2 rounded-md absolute -top-8 left-4">
                    Who Are We?
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 text-lg leading-relaxed mt-8">
                    Born from the vibrant startup ecosystem of Abuja, we recognized the need
                    for a consistent, high-quality networking platform where founders,
                    innovators, and tech enthusiasts could connect, share ideas, and foster
                    collaboration.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    {/* Register Button */}
                    <button className="bg-[#b86dff] text-white px-8 py-3 rounded-full font-medium font-Montserrat flex items-center justify-center gap-2 transition duration-300  shadow-md">
                      Register →
                    </button>
                    {/* Donate Button */}
                    <button className="border-2 border-[#b86dff] mb-6 sm:mb-0 text-[#b86dff] px-8 py-3 rounded-full font-Montserrat flex items-center justify-center gap-2 transition duration-300 shadow-md">
                      Donate
                      <FaSackDollar />
                    </button>
                  </div>

                  {/* Footer Text */}
                  <div className="bg-[#f9f1ff] px-4 py-2 rounded-md shadow-sm absolute -bottom-6 left-4 max-w-full">
                    <p className="text-gray-800 font-semibold">
                      Founder's Friday is more than just a meetup — it's a movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header