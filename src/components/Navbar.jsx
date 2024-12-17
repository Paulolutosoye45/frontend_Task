import { useEffect, useState } from 'react';
import side_logo from '../assets/side_logo.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-Montserrat">
          <div className="flex items-center justify-between  px-6 py-2  max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex items-center space-x-2" >
              <img src={side_logo} className='w-[10%]' alt=" founder logo" />
              <h1 className="text-xl font-bold text-black">Founder's Friday</h1>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-purple-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation for Larger Screens */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="#home"
                className="text-purple-600 font-semibold hover:text-purple-800"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-purple-800 transition"
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-purple-800 transition"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-800 transition"
              >
                Contact Us
              </a>
            </nav>

            {/* Register Button */}
            <a
              href="#register"
              className="hidden items-center px-4 py-2 bg-purple-100 border border-purple-600 rounded-full text-purple-600 font-medium hover:bg-purple-200 hover:text-purple-800 transition"
            >
              Register <span className="ml-2">→</span>
            </a>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className=" bg-white shadow-md">
              <nav className="flex flex-col items-start space-y-4 px-6 py-4">
                <a
                  href="#home" className="text-purple-600 font-semibold hover:text-purple-800 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-purple-800 transition w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 hover:text-purple-800 transition w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-purple-800 transition w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </a>
                <a
                  href="#register"
                  className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-600 rounded-full text-purple-600 font-medium hover:bg-purple-200 hover:text-purple-800 transition w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register <span className="ml-2">→</span>
                </a>
              </nav>
            </div>
          )}
        </div>
  )
}

export default Navbar