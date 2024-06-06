import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black  pt-8'>
      <div className='container mx-auto py-8 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Support Section */}
        <div>
          <h6 className='text-xl sm:text-2xl font-bold text-white mb-4'>
            Support
          </h6>
          <ul className='space-y-2 text-gray-300'>
            <li className='text-sm'>Help Center</li>
            <li className='text-sm'>Anti-discrimination</li>
            <li className='text-sm'>Disability support</li>
            <li className='text-sm'>Cancellation options</li>
            <li className='text-sm'>Report neighborhood concern</li>
          </ul>
        </div>

        {/* Hosting Section */}
        <div>
          <h6 className='text-xl sm:text-2xl font-bold text-white mb-4'>
            Hosting
          </h6>
          <ul className='space-y-2 text-gray-300'>
            <li className='text-sm'>Airbnb your home</li>
            <li className='text-sm'>Hosting resources</li>
            <li className='text-sm'>Hosting responsibly</li>
            <li className='text-sm'>Airbnb-friendly apartments</li>
          </ul>
        </div>

        {/* Keja Section */}
        <div>
          <h6 className='text-xl sm:text-2xl font-bold text-white mb-4'>
            Keja
          </h6>
          <ul className='space-y-2 text-gray-300'>
            <li className='text-sm'>Blogs</li>
            <li className='text-sm'>Team</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div
        className='container mx-auto flex justify-center items-center py-4'
        style={{ color: "white" }}>
        <FaFacebookSquare className='text-3xl mr-4' />
        <FaInstagram className='text-3xl mr-4' />
        <FaTwitterSquare className='text-3xl' />
      </div>
    </footer>
  );
};

export default Footer;
