import React, { useEffect, useState } from 'react'
import { GoArrowRight } from 'react-icons/go';
import side_logo from '../assets/side_logo.png'

function MayEdition() {
    const textList = [
        "Abuja",
        "Kano",
        "kaduna"
        ];
      
        const [currentIndex, setCurrentIndex] = useState(0);
        const [animationStage, setAnimationStage] = useState("text-in");
      
        useEffect(() => {
          const textInTimer = 3000;
          const textOutTimer = 2800;
      
          const textAnimation = setTimeout(() => {
            setAnimationStage("text-out");
      
            setTimeout(() => {
              setCurrentIndex((prevIndex) =>
                prevIndex === textList.length - 1 ? 0 : prevIndex + 1
              );
              setAnimationStage("text-in");
            }, 500); // Match the animation duration
          }, textInTimer);
      
          return () => clearTimeout(textAnimation);
        }, [currentIndex]);

        
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-[url('./assets/bg-founder.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="relative  text-white px-6 md:px-16 flex flex-col md:flex-row gap-8 justify-between items-center font-Montserrat ">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                Founders Friday is coming to
              </h1>
              <p className="animate-text">
              <span className={`${animationStage} text-[#a649ff] text-6xl font-bold animate-text uppercase`}>{textList[currentIndex]}</span>
            </p>
              <p className="text-gray-300 my-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
                dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
                suscipit id. Pellentesque habitant morbi tristique.
              </p>
              <button className="flex items-center justify-center gap-2 border-2 border-[#a649ff] text-[#a649ff] hover:bg-[#a649ff] hover:text-white font-semibold py-2 px-6 rounded-full transition-all duration-300">
                Register{" "}
                <span className="text-lg font-bold transform translate-x-1">
                  <GoArrowRight />
                </span>
              </button>
            </div>
            {/* Right Side Icon */}
            <div className="hidden md:block">
              <img src={side_logo} className='lg:h-[60vh] md:h-[40vh]' alt="founder" />
            </div>
          </div>
        </div>
  )
}

export default MayEdition