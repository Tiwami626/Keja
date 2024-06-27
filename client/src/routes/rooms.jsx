import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate("/booking", {
      state: {
        host: "Sandra",
        price: "KSh.3000",
        dates: "2024-07-01 to 2024-07-02",
      },
    });
  };

  return (
    <div className='container mt-20 py-5 ml-2'>
      <h1>Ngong Road Apartments</h1>
      <div className='container mt-4 w-[500px]'>
        <div className='card shadow-sm p-4'>
          <h1 className='mb-4'>KSh.3000 / night</h1>
          <div></div>
          <button className='btn btn-dark mt-4' onClick={handleReserveClick}>
            Reserve
          </button>
        </div>
      </div>
      <h2 className='mt-4'>Hosted By:</h2>
      <p>1 year hosting</p>
      <div className='container mt-4'>
        <h1>What this place offers</h1>
        <p>Kitchen</p>
        <p>Free Parking on premises</p>
        <p>Wifi</p>
        <p>TV</p>
        <p>Refrigerator</p>
      </div>
      <div className='container mt-4'>
        <h1>Reviews</h1>
      </div>
      <div className='container mt-5'>
        <div className='card shadow-sm'>
          <div className='card-body'>
            <h1 className='card-title text-center mb-4'>Meet your Host</h1>
            <div className='d-flex justify-content-between'>
              <div>
                <h2 className='font-bold text-lg'>Sandra</h2>
                <h3 className='text-muted'>Host</h3>
                <p>Reviews</p>
                <p>Rating</p>
                <p>Years Hosting</p>
              </div>
              <div>
                <h2 className='font-bold text-lg'>Host Details</h2>
                <p>Response Rate: 100%</p>
                <p>Responds within an hour</p>
                <button className='btn btn-dark mt-2'>Message Host</button>
              </div>
            </div>
            <p className='text-muted text-center mt-4'>
              To protect your payment, never transact or communicate with the host outside
              Keja&apos;s platform.
            </p>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <h1>For your Information</h1>
        <h2>House Rules</h2>
        <p>Check-in after 2:00 PM</p>
        <p>Check out before 11:00 AM</p>
        <p>2 guests maximum</p>
        <h2>Safety & property</h2>
        <p>Carbon monoxide alarm not reported</p>
        <p>Smoke alarm not reported</p>
        <h2>Cancellation Policy</h2>
        <p>Free cancellation before Jun 30</p>
        <p>
          Review the Host&apos;s full cancellation policy which applies even if
          you cancel for illness
        </p>
      </div>
    </div>
  );
};

export default Rooms;
