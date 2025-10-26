import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiHamburgerFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowForward, IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropDown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <header className="text-gray-600 body-font relative">
      
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_black_9e78b44631.webp&w=1920&q=75"
            width="300px"
            height="300px"
            alt="ChefKart Logo"
          />
        </Link>
        {/* Navbar links (hidden in mobile) */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
          
          <div className="relative">
            
            <button
              className="mr-5 hover:text-black font-bold flex items-center"
              onClick={toggleDropDown}
            >
              
              Our Services
              <span className="ml-2 flex items-center">
                
                {isDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            {isDropDownOpen && (
              <div className="absolute mt-2 w-60 bg-white shadow-lg rounded-md z-10">
                
                <Link
                  to="/cook-for-a-month"
                  className="block px-4 text-md text-gray-800 h-11 hover:text-orange-700 hover:font-bold flex items-center justify-between"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  
                  Cook for a Month <IoIosArrowForward className="ml-2" />
                </Link>
                <hr />
                <Link
                  to="/one-time-cook"
                  className="block px-4 text-md text-gray-800 h-11 hover:text-orange-700 hover:font-bold flex items-center justify-between"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  
                  Chef: One Time Cook <IoIosArrowForward className="ml-2" />
                </Link>
                <hr />
                <Link
                  to="/chef-for-party"
                  className="block px-4 text-md text-gray-800 h-11 hover:text-orange-700 hover:font-bold flex items-center justify-between"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  
                  Chef for Party <IoIosArrowForward className="ml-2" />
                </Link>
                <hr />
              </div>
            )}
          </div>
          <Link
            to="/join-with-chef"
            className="mr-5 hover:text-black font-bold"
          >
            
            ChefKart से जुड़ें
          </Link>
          <Link to="#" className="mr-5 hover:text-black font-bold">
            
            Cooks Near Me
          </Link>
        </nav>
        {/* Contact Us Button */}
        <Link to="/contact">
          
          <button className="inline-flex items-center bg-orange-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-950 text-white rounded text-base mt-4 md:mt-0">
            
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
        {/* Burger Icon (visible everywhere now) */}
        <button
          className="text-red-900 focus:outline-none ml-4"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          
          <PiHamburgerFill className="w-10 h-10" />
        </button>
        {/* Sidebar Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-3/4 md:w-1/3 h-full bg-black shadow-lg z-50 transition-transform duration-300 p-6">
            
            <div className="w-full flex justify-center items-center h-16">
              
              <h2 className="text-white text-2xl font-bold">Menu</h2>
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                
                <RxCross2 className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 text-white text-lg">
              
              <Link
                to="#"
                className="hover:text-orange-500"
                onClick={toggleMenu}
              >
                
                About Us
              </Link>
              <Link
                to="#"
                className="hover:text-orange-500"
                onClick={toggleMenu}
              >
                
                Blog
              </Link>
              <Link
                to="#"
                className="hover:text-orange-500"
                onClick={toggleMenu}
              >
                
                Careers
              </Link>
              <Link
                to="#"
                className="hover:text-orange-500"
                onClick={toggleMenu}
              >
                
                Investor Relations
              </Link>
              <Link
                to="#"
                className="hover:text-orange-500"
                onClick={toggleMenu}
              >
                
                Testimonials
              </Link>
              <Link to="/contact" onClick={toggleMenu}>
                
                <button className="w-full inline-flex justify-center items-center bg-orange-700 border-0 py-2 px-3 focus:outline-none hover:bg-red-950 text-white rounded text-base">
                  
                  Contact Us
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
