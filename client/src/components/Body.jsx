import images from "../images";
import { useNavigate } from "react-router-dom";

const hostsAndPrices = [
  { host: "John", price: "KSh.4000", dates: "12th June 2024 - 18th June 2024" },
  {
    host: "Shiro",
    price: "Ksh.5000",
    dates: "20th June 2024 - 25th June 2024",
  },
  { host: "Kantai", price: "Ksh.4200", dates: "1st July 2024 - 7th July 2024" },
  {
    host: "Gladys",
    price: "Ksh.5800",
    dates: "15th July 2024 - 20th July 2024",
  },
  {
    host: "Jaymo",
    price: "Ksh.5500",
    dates: "10th August 2024 - 15th August 2024",
  },
  {
    host: "Peter",
    price: "Ksh.5500",
    dates: "20th August 2024 - 25th August 2024",
  },
  {
    host: "Brian",
    price: "Ksh.5500",
    dates: "1st September 2024 - 5th September 2024",
  },
  {
    host: "Njeri",
    price: "Ksh.5500",
    dates: "10th September 2024 - 15th September 2024",
  },
];

const Body = () => {
  const navigate = useNavigate();

  const handleBookingClick = (host, price, dates) => {
    navigate("/rooms", { state: { host, price, dates } });
  };

  return (
    <div className='container mx-auto mt-10'>
      <div className='flex items-center justify-center mb-8'>
        <h1 className='text-2xl bg-gray-200 bg-opacity-40 shadow-md rounded px-4'>
          Featured Hosts
        </h1>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {images.map((image, index) => {
          const { host, price, dates } = hostsAndPrices[index];
          return (
            <div
              className='relative p-4'
              key={index}
              style={{ position: "relative" }}
              onClick={() => handleBookingClick(host, price, dates)}>
              <img
                src={image}
                alt=''
                className='rounded-md w-full h-full object-cover'
              />
              <div className='absolute bottom-0 left-0 p-2 mb-8 mx-8 rounded'>
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
      </div>
    </div>
  );
};

export default Body;
