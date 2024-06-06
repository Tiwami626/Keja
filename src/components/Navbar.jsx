import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Auth from "./Auth";

const Navbar = () => {
  const [showLogIn, setShowLogIn] = useState(false);

  const toggleLogIn = () => {
    setShowLogIn(!showLogIn);
  };

  return (
    <nav className='fixed top-0 z-10 w-full bg-gray-200 shadow-md backdrop-blur-lg bg-opacity-20 flex justify-between items-center h-24 mx-auto px-20 border-b border-gray-200'>
      <Link to='/' className='text-2xl md:text-4xl font-bold text-zinc-800'>
        KE<span className='text-teal-400'>JA</span>
      </Link>
      <ul className='flex items-center gap-8 text-zinc-800 cursor-pointer'>
        <li className='hover:text-neutral-500'>
          <Link to='/hosting'>Airbnb your Home</Link>
        </li>
        <li className='hover:text-neutral-500' onClick={toggleLogIn}>
          Log in / Sign up
        </li>
        <li className='hover:text-neutral-500'>
          <Link to='/about'>About Keja</Link>
        </li>
        <li className='hover:text-neutral-500'>Help Center</li>
      </ul>
      {showLogIn && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='relative'>
            <IoClose
              className='absolute top-4 right-4 bg-gray-300 cursor-pointer'
              onClick={toggleLogIn}
              size={24}
            />
            <Auth />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
