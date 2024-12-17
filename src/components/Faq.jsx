import React, { useState } from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

function Faq() {
    const [items, setItems] = useState([
        {
          id: 1,
          header: "What services does Belsoft Systems offer?",
          text: "Belsoft Systems offers web development, mobile app development, desktop software development, maintenance, and technical support.",
          isOpen: false,
        },
        {
          id: 2,
          header: "What industries does Belsoft Systems serve?",
          text: "We cater to diverse industries including healthcare, finance, education, e-commerce, and entertainment",
          isOpen: false,
        },
        {
          id: 3,
          header: "How do I get started with Belsoft Systems?",
          text: "Simply reach out to us through our contact form or email, and we'll promptly discuss your project requirements and provide a personalized solution.",
          isOpen: false,
        },
        {
          id: 4,
          header: "What technologies does Belsoft Systems use?",
          text: "We specialize in JavaScript, Python, Java, PHP, Swift, React Native, and more",
          isOpen: false,
        },
        {
          id: 5,
          header: "How experienced is the team at Belsoft Systems?",
          text: "Our team comprises seasoned professionals with a track record of delivering high-quality projects.",
          isOpen: false,
        },
    
        {
          id: 6,
          header: "How does Belsoft Systems ensure project security?",
          text: "We follow industry best practices for secure coding and implement robust security measures.",
          isOpen: false,
        }
      ])

      const toggleItem = (id) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, isOpen: !item.isOpen } : item
          )
        );
      };

  return (
    <section className="py-12 px-4 md:px-8  container mx-auto ">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left md:text-left">
              FAQs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl p-2 mx-auto">
              {items.map((item) => (
                <div key={item.id} className="mb-4">
                  <div

                    className="flex  items-center  border-gray-200 py-3"
                  >
                    <p className="text-[#340066] text-sm font-semibold md:text-base  overflow-hidden transition-all duration-500 ease-in-out   opacity-100 ">
                      {item.isOpen
                        ? item.header
                        : "Lorem ipsum dolor sit amet, consectetur adi elit."}

                    </p>
                    {item.isOpen ? (<GoChevronUp className="text-lg font-bold text-purple-800 cursor-pointer" onClick={() => toggleItem(item.id)} />) : (<GoChevronDown className="text-lg font-bold text-purple-800 cursor-pointer" onClick={() => toggleItem(item.id)} />)}

                  </div>
                  {item.isOpen && (
                    <p className="text-[#340066] text-sm font-medium md:text-base mt-2">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
  )
}

export default Faq