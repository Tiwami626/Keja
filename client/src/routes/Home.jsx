import { IoSearchCircleSharp } from "react-icons/io5";
import Body from "../components/Body";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className='h-auto w-screen flex flex-col items-start backdrop-brightness-20 border-b border-gray-300'>
      <div className='mx-auto bg-black  py-6 px-8 gap-8 shadow-lg shadow-neutral-300 rounded flex justify-center items-center mt-36'>
        <h1 className='text-2xl font-bold mb-4 text-zinc-300'>
          Search Destinations
        </h1>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Where are you going?'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
          />
        </div>
        <div className='flex justify-between mb-4'>
          <input
            type='date'
            placeholder='Check-in'
            className='w-1/2 mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
          />
          <input
            type='date'
            placeholder='Check-out'
            className='w-1/2 ml-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none'
          />
        </div>
        <motion.div className='mb-4' whileHover={{ scale: 1.1 }}>
          <IoSearchCircleSharp
            className='py-0 cursor-pointer'
            style={{ color: "white" }}
            size={38}
          />
        </motion.div>
      </div>
      <Body />
    </div>
  );
};

export default Home;
