import React from 'react'
import Faq from './Faq'
import logo from '../assets/logo.png'
import { GoArrowLeft, GoArrowRight, GoChevronDown, GoChevronUp } from 'react-icons/go';
import { FaFacebookF, FaInstagram, FaSackDollar } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className=" bg-[#f9f1ff] text-gray-800 font-Montserrat ">
           <Faq/>

          {/* Call-To-Action Section */}
          <section className="border-t border-gray-200 py-12 px-4 text-center container mx-auto">
            <div className="flex  items-center mb-6">
              <img
                src={logo}
                alt="Founders Friday Logo"
                className="w-[40%] sm:w-[20%] mr-2"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Want To Be A Part Of Abuja’s Biggest Tech Community?
            </h2>
            <button className="inline-flex items-center  justify-center border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
              Register For Our Next Event
              <GoArrowRight className="ml-2" />
            </button>
          </section>
          {/* Footer Section */}
          <footer className="py-6 bg-[#f9f1ff] border-t border-[#a649ff] ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 px-4 md:px-8">
              {/* Social Icons */}
              <div className="flex gap-4 justify-center">
                <a
                  href="#"
                  className="text-white p-2 hover:text-white rounded-full border-[#a649ff] border-2 bg-[#a649ff]"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white p-2 hover:text-white rounded-full border-[#a649ff] border-2 bg-[#a649ff]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-white p-2 hover:text-white rounded-full border-[#a649ff] border-2  bg-[#a649ff]"
                >
                  <FaXTwitter />
                </a>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm font-medium text-gray-600 text-center">
                <a href="#" className="text-purple-600">
                  Home
                </a>
                <a href="#" className="hover:text-purple-600">
                  About Us
                </a>
                <a href="#" className="hover:text-purple-600">
                  Gallery
                </a>
                <a href="#" className="hover:text-purple-600">
                  Contact Us
                </a>
              </div>
            </div>
          </footer>
        </div>
  )
}

export default Footer