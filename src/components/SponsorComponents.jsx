import {  GoArrowRight } from 'react-icons/go';


function SponsorCompoents() {
  return (
    <div className='bg-[#f9f1ff]'>
          <div className='px-3 py-6 '>
            <h4 className='capitalize text-[#6f00d9] font-bold font-Montserrat p-2 lg:ml-7'>sponsor the next friday</h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-black font-Montserrat capitalize text-center">
              why sponsor founders friday ?
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row  gap-8 lg:gap-12 py-4 p-2 lg:p-12">

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 lg:w-[50%] flex-grow border-4 border-[#b86dff] rounded-md bg-white drop-shadow-lg lg:gap-6 lg:p-4 gap-2 px-2 py-4  ">

              <div className="flex items-center justify-center">
                <div className="h-48 sm:h-56 w-56 border-4 bg-[#DCB6FF] rounded-full border-[#A649FF] drop-shadow-lg flex items-center justify-center">
                  <div className="text-center px-4">
                    <h2 className="capitalize text-[#3c3641] font-bold font-Montserrat text-base sm:text-xl mb-2">
                      Networking Opportunities
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-base">
                      Connect with industry leaders, founders, and potential partners
                    </p>
                  </div>
                </div>
              </div>


              <div className="flex items-center justify-center">
                <div className="h-48 sm:h-56 w-56 bg-[#EDDBFF] border-4 border-[#A649FF] rounded-full shadow-lg flex items-center justify-center">
                  <div className="text-center px-4">
                    <h2 className="capitalize text-[#3c3641] font-bold font-Montserrat text-base sm:text-xl mb-2">
                      Community Impact
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-base">
                      Support the growth and development of the startup ecosystem
                    </p>
                  </div>
                </div>
              </div>


              <div className="flex items-center justify-center">
                <div className="h-48 sm:h-56 w-56 border-4 bg-[#DCB6FF] rounded-full border-[#A649FF] drop-shadow-lg flex items-center justify-center">
                  <div className="text-center px-4">
                    <h2 className="capitalize text-[#3c3641] font-bold font-Montserrat text-base sm:text-xl mb-2">
                      Brand Association
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-base">
                      Align your brand with innovation and entrepreneurial success
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className=" h-48 sm:h-56 w-56 border-4 bg-[#EDDBFF] rounded-full border-[#A649FF] drop-shadow-lg flex items-center justify-center">
                  <div className="text-center px-2 sm:px-4">
                    <h2 className="capitalize text-[#3c3641] font-bold font-Montserrat text-base sm:text-xl mb-2">
                      Visibility
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-base">
                      Gain exposure to a targeted audience of young professionals and entrepreneurs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md mx-auto lg:max-w-[50%] relative">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4  text-[#3c3641]">
                How To Sponsor
              </h2>
              <p className="text-gray-700 mb-4 ">
                Ready to Make an Impact?
              </p>
              <p className="text-gray-700 mb-6">
                Fill out the form below or contact us at <a href="mailto:contact@foundersfriday.com" className="text-[#A649FF] font-semibold">contact@foundersfriday.com</a> to learn more about how you can sponsor the next Founders Friday.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-[#A649FF] focus:border-[#A649FF] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Your company name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-[#A649FF] focus:border-[#A649FF] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-[#A649FF] focus:border-[#A649FF] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-[#A649FF] focus:border-[#A649FF] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex  ">
                  <button
                    type="submit"
                    className="bg-[#A649FF] hover:bg-[#8B37E6] text-white font-bold py-2 px-6 rounded-md shadow-md transition duration-300"
                  >
                    Sponsor Now
                    <GoArrowRight className='inline-block text-2xl font-Montserrat ml-2' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

export default SponsorCompoents