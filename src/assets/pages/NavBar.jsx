
import { Outlet, Link } from 'react-router-dom'
import React, { useState } from 'react';
import './cssNavBar.css';
import logo from '../logo/log.jpg'
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex '>

      <div className='bg-opacity-1 fixed w-[100%] opacity-100 z-10  '>

        <nav className="p-4 bg-fonNavBar" >
          <div className="container mx-auto flex items-center justify-between ">
          <img src={logo} className='w-[80px] h-[55px] sm:mt-[0px] 
                    sm:h-[50px]  sm:visible' alt="" />
            <div className="flex items-center ">
            
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#e9ba58"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Menu Links for Larger Screens */}
            <div className="hidden md:flex space-x-4  ">
            <Link to="/" className='text-white hover:text-colorLetras'>Home</Link>
            <Link to="/About" className='text-white hover:text-colorLetras'>About</Link>
            <Link to="/Works" className='text-white hover:text-colorLetras'>Works</Link>
            <Link to="/Contact" className='text-white hover:text-colorLetras'>Contact</Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden text-center ">
              <Link to="/" className='text-white hover:text-colorLetras'>Home</Link>
              <br />
              <Link to="/About" className='text-white hover:text-colorLetras'>About</Link>
              <br />
              <Link to="/Works" className='text-white hover:text-colorLetras'>Works</Link>
              <br />
              <Link to="/Contact" className='text-white hover:text-colorLetras'>Contact</Link>
              
            </div>
          )}
        </nav>
      </div>
      <Outlet />

    </div>
  );
}

