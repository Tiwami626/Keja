import { useState, useEffect } from "react";
import axios from "axios";

const Hosting = () => {
  // State variables
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",

    // Add other fields as needed
  });
  const [homes, setHomes] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch homes and bookings data on component mount
  useEffect(() => {
    fetchHomes();
    fetchBookings();
  }, []);

  // Function to fetch homes data from the server
  const fetchHomes = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/homes");
      setHomes(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching homes:", error);
    }
  };

  // Function to fetch bookings data from the server
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/bookings");
      setBookings(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  // Function to handle form submission for creating a new home listing
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/homes", formData);
      setHomes([...homes, response.data]); // Update homes state with the new home
      setLoading(false);
    } catch (error) {
      console.error("Error creating home listing:", error);
    }
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mx-auto justify-center align-center mt-24 h-screen'>
      <h1>Hosting Dashboard</h1>

      {/* Create New Home Form */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          placeholder='Title'
        />
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
          placeholder='Description'
        />
        <input
          type='text'
          name='address'
          value={formData.address}
          onChange={handleChange}
          placeholder='Address'
        />
        {/* Add other input fields as needed */}
        <button type='submit'>Create New Home Listing</button>
      </form>

      {/* List of Existing Home Listings */}
      <h2>Existing Home Listings:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {homes.map((home) => (
            <li key={home.id}>
              {home.title} - {home.address}
            </li>
          ))}
        </ul>
      )}

      {/* List of Bookings */}
      <h2>Bookings:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              Booking ID: {booking.id}, Home ID: {booking.home_id}, Guest ID:{" "}
              {booking.guest_id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Hosting;
