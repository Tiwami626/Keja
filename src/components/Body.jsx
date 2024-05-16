import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../images";

const hostsAndPrices = [
  { host: "John", price: "KSh.4000" },
  { host: "Shiro", price: "Ksh.5000" },
  { host: "Kantai", price: "Ksh.4200" },
  { host: "Gladys", price: "Ksh.5800" },
  { host: "Jaymo", price: "ksh.5,500" },
];

const Body = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      whileTap={{ cursor: "grabbing" }}
      ref={carousel}
      className='carousel cursor-grab overflow-hidden mt-10'>
      <div className='flex items-centre justify-center mx-auto'>
        <h1 className='text-2xl bg-gray-200 bg-opacity-40 shadow-md rounded px-4'>Featured Hosts</h1>
      </div>
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        className='inner-carousel flex'>
        {images.map((image, index) => {
          const { host, price } = hostsAndPrices[index];
          return (
            <div
              className='item min-h-80 w-1/3 p-6 relative'
              key={index}
              style={{ position: "relative" }}>
              <img
                src={image}
                alt=''
                className='rounded-md w-full h-full pointer-events-none'
              />
              <div className='text-container absolute bottom-0 left-0 p-2 mb-8 mx-8 rounded'>
                <p className='font-bold text-base bg-black bg-opacity-40 text-white px-4'>
                  Hosted By: {host}
                </p>
                <p className='font-normal text-sm bg-black bg-opacity-40 text-white px-4'>
                  {price} / night
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Body;
