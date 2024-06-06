import images from "../images";

const hostsAndPrices = [
  { host: "John", price: "KSh.4000" },
  { host: "Shiro", price: "Ksh.5000" },
  { host: "Kantai", price: "Ksh.4200" },
  { host: "Gladys", price: "Ksh.5800" },
  { host: "Jaymo", price: "ksh.5,500" },
  { host: "Peter", price: "ksh.5,500" },
  { host: "Brian", price: "ksh.5,500" },
  { host: "Njeri", price: "ksh.5,500" },
];

const Body = () => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='flex items-center justify-center mb-8'>
        <h1 className='text-2xl bg-gray-200 bg-opacity-40 shadow-md rounded px-4'>
          Featured Hosts
        </h1>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {images.map((image, index) => {
          const { host, price } = hostsAndPrices[index];
          return (
            <div
              className='relative p-4'
              key={index}
              style={{ position: "relative" }}>
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
