
import React, { useState } from "react";
import {CiMenuFries} from 'react-icons/ci'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full bg-[#0A2C52]">
        <div className="w-full h-auto bg-[#0A2C52] px-5 md:px-10 flex justify-center">
          <nav className="container bg-[#0A2C52] h-auto w-full py-4 flex justify-between items-center">
            {/* Left Section: Logo and Text */}
            <div className="flex items-center">
              <img className="h-[60px] w-[45px] mr-4" src="NavImg.png" alt="NavLogo" />
              <div className="text-xs md:text-sm flex gap-2 flex-wrap">
                <p className="text-white font-bold">
                  Your Family Advisor Jane welcomes you on board
                </p>
                <p className="underline underline-offset-2 text-[#7592F2]">
                  Learn More
                </p>
              </div>
            </div>

            {/* Right Section: Contact Info */}
            <div className="hidden md:flex items-center space-x-6 ">
              {/* Phone */}
              <div className="flex items-center space-x-1 relative">
                <img className="h-6 w-6" src="Ellipse47.png" alt="Phone Ellipse" />
                <img className="absolute inset-0 h-4 w-4 m-auto" src="phone-rounded_svgrepo.com.png" alt="Phone Icon" />
                <p className="text-white font-semibold text-xs md:text-sm ">800-294-9940</p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-1 relative">
                <img className="h-6 w-6" src="Ellipse47.png" alt="Email Ellipse" />
                <img className="absolute inset-0 h-4 w-4 m-auto" src="email-1_svgrepo.com.png" alt="Email Icon" />
                <p className="text-white font-semibold text-xs md:text-sm ">support@abc.com</p>
              </div>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden text-xl">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <CiMenuFries/>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full bg-[#0A2C52] px-5 py-4 md:hidden`}
        >
          <div className="flex flex-col space-y-4">
            {/* Phone */}
            <div className="flex items-center space-x-1 relative">
              <img className="h-6 w-6" src="Ellipse47.png" alt="Phone Ellipse" />
              <img className="absolute inset-0 h-4 w-4 m-auto" src="phone-rounded_svgrepo.com.png" alt="Phone Icon" />
              <p className="text-white font-semibold">800-294-9940</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-1 relative">
              <img className="h-6 w-6" src="Ellipse47.png" alt="Email Ellipse" />
              <img className="absolute inset-0 h-4 w-4 m-auto" src="email-1_svgrepo.com.png" alt="Email Icon" />
              <p className="text-white font-semibold">support@abc.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;