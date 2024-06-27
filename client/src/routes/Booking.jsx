import { useState } from "react";
import { useLocation } from "react-router-dom";
import payment from "../apis/mpesa-payment";
import "bootstrap/dist/css/bootstrap.min.css";
import mpesaLogo from "../assets/icons/icons8-mpesa-48.png";

const Booking = () => {
  const location = useLocation();
  const {
    host = "Unknown Host",
    price = "KSh.0",
    dates = "Unavailable",
  } = location.state || {};
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [guests, setGuests] = useState(2);

  const handleConfirmAndPay = async () => {
    try {
      const amount = parseInt(price.replace(/[^0-9]/g, "")) * guests + 500;
      const response = await payment.post("/api/v1/stkpush", { phone, amount });
      console.log("Response:", response.data);
      alert("STK Push initiated. Please check your phone.");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while initiating the STK Push.");
    }
    setShowModal(false);
  };

  return (
    <div className='container mt-20 py-5 ml-2'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <div className='card shadow-lg bg-white text-black'>
            <div className='card-header text-center'>
              <h1 className='card-title font-bold'>Confirm your booking</h1>
            </div>
            <div className='card-body'>
              <h2 className='card-text mt-4 underline decoration-gray-300'>
                Your Trip
              </h2>
              <div className='mb-3'>
                <p>
                  <strong>Host:</strong> {host}
                </p>
                <p>
                  <strong>Dates:</strong> {dates}
                </p>
                <label>
                  <strong>Guests:</strong>
                  <input
                    type='number'
                    className='form-control'
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    min='1'
                  />
                </label>
              </div>
              <h2 className='card-text mt-4 d-flex align-items-center underline decoration-gray-300'>
                Pay With Mpesa
                <img
                  src={mpesaLogo}
                  alt='Mpesa Logo'
                  width='28'
                  height='28'
                  className='ms-2'
                />
              </h2>

              <div className='mb-3'>
                <p>
                  <strong>Price Details:</strong>
                </p>
                <p>Price per guest per night: {price}</p>
                <p>
                  Subtotal: KSh.
                  {parseInt(price.replace(/[^0-9]/g, "")) * guests}
                </p>
                <p>Service Fee: KSh.500</p>
                <p>
                  Total: KSh.
                  {parseInt(price.replace(/[^0-9]/g, "")) * guests + 500}
                </p>
              </div>
              <h2 className='mt-4 md:2xl underline decoration-gray-300'>
                Cancellation Policy
              </h2>
              <p className='mb-3'>
                You have free cancellation for 48 hours after payment.
              </p>
              <h2 className='mt-4 underline decoration-gray-300'>
                Ground Rules
              </h2>
              <p>
                We urge you to adhere to the house rules and treat the
                host&apos;s place like your own home.
              </p>
              <button
                className='btn btn-primary w-[10rem] mt-3'
                onClick={() => setShowModal(true)}>
                Confirm and pay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex='-1'
        style={{
          display: showModal ? "block" : "none",
          paddingTop: "80px",
        }}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Enter your details</h5>
              <button
                type='button'
                className='btn-close'
                onClick={() => setShowModal(false)}></button>
            </div>
            <div className='modal-body'>
              <div className='mb-3'>
                <label htmlFor='fullName' className='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='fullName'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='phone' className='form-label'>
                  Phone Number
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => setShowModal(false)}>
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handleConfirmAndPay}>
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
