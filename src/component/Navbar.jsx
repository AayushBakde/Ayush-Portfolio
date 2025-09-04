import React, { useState } from 'react';
import pic from "../assets/Ayush.jpg";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setmenu] = useState(false);

  const navItem = [
    { id: 1, text: "Home" },
    { id: 2, text: "About Us" },
    { id: 3, text: "Project" },
    { id: 4, text: "Exprince" },
    { id: 5, text: "Contact us" }
  ];

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 fixed z-50 top-0 left-0 right-0 bg-gradient-to-r from-[#4F46E5]/70 to-[#6D28D9]/70 backdrop-blur-lg shadow-xl'>
      <div className='flex justify-between h-16 items-center text-white'>
        {/* Left: Logo and Name */}
        <div className='flex items-center space-x-3'>
          <img src={pic} alt="profile" className='w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white/30' />
          <div>
            <h1 className='font-bold text-base md:text-lg'>Ayush</h1>
            <p className='text-sm text-white/70'>Web Developer</p>
          </div>
        </div>

        {/* Right: Nav menu */}
        <div>
          <ul className='hidden md:flex space-x-10 font-semibold'>
            {navItem.map(({ id, text }) => (
              <li key={id} className='hover:text-yellow-300 duration-150 cursor-pointer'>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <div onClick={() => setmenu(!menu)} className='md:hidden cursor-pointer text-white'>
            {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menu && (
        <div className='md:hidden w-full left-0 bg-gradient-to-b from-[#4F46E5] to-[#6D28D9] text-white shadow-md'>
          {/* <div className='md:hidden w-full fixed left-0 top-16 bg-gradient-to-b from-[#6D28D9] to-[#8B5CF6] text-white shadow-md z-40'> */}

          <ul className='flex flex-col h-screen items-center justify-center space-y-6 text-lg font-bold'>
            {navItem.map(({ id, text }) => (
              <li key={id} className='hover:text-yellow-300 duration-150 cursor-pointer'>
                <Link
                  onClick={() => setmenu(false)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
