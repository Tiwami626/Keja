
const express = require("express");
const app = express();

require('dotenv').config();
const cors = require("cors");
const pool = require("./db/db");
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES:

//Create a New Host
app.post("/hosts", async (req, res) => {
    try {
        const { first_name, last_name, email, phone_number, profile_picture, bio } = req.body;

        // Validate input
        if (!first_name || !last_name || !email || !phone_number) {
            return res.status(400).json({ error: "Please provide all required fields (first_name, last_name, email, phone_number)" });
        }

        const newHost = await pool.query(
            "INSERT INTO hosts (first_name, last_name, email, phone_number, profile_picture, bio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [first_name, last_name, email, phone_number, profile_picture, bio]
        );
        res.json(newHost.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

//Create a New Home Listing
app.post("/homes", async (req, res) => {
    try {
        const { host_id, title, description, address, city, state, country, zip_code, latitude, longitude, price_per_night, max_guests, number_of_bedrooms, number_of_bathrooms } = req.body;
        const newHome = await pool.query(
            "INSERT INTO homes (host_id, title, description, address, city, state, country, zip_code, latitude, longitude, price_per_night, max_guests, number_of_bedrooms, number_of_bathrooms) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
            [host_id, title, description, address, city, state, country, zip_code, latitude, longitude, price_per_night, max_guests, number_of_bedrooms, number_of_bathrooms]
        );
        res.json(newHome.rows[0]); 
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message }); 
    }
});

//Update Home Listing
app.put("/homes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, address, city, state, country, zip_code, latitude, longitude, price_per_night, max_guests, number_of_bedrooms, number_of_bathrooms } = req.body;
        const updatedHome = await pool.query(
            "UPDATE homes SET title = $1, description = $2, address = $3, city = $4, state = $5, country = $6, zip_code = $7, latitude = $8, longitude = $9, price_per_night = $10, max_guests = $11, number_of_bedrooms = $12, number_of_bathrooms = $13 WHERE home_id = $14 RETURNING *",
            [title, description, address, city, state, country, zip_code, latitude, longitude, price_per_night, max_guests, number_of_bedrooms, number_of_bathrooms, id]
        );
        if (updatedHome.rows.length === 0) {
            return res.status(404).json({ error: "Home not found" });
        }
        res.json(updatedHome.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

//Delete Home Listing
app.delete("/homes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteHome = await pool.query(
            "DELETE FROM homes WHERE home_id = $1 RETURNING *",
            [id]
        );
        if (deleteHome.rows.length === 0) {
            return res.status(404).json({ error: "Home not found" });
        }
        res.json({ message: "Home deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

// Book a Home
app.post("/bookings", async (req, res) => {
    try {
        const { home_id, guest_id, start_date, end_date, total_price } = req.body;
        const newBooking = await pool.query(
            "INSERT INTO bookings (home_id, guest_id, start_date, end_date, total_price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [home_id, guest_id, start_date, end_date, total_price]
        );
        res.json(newBooking.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

//Get Bookings by Guest
app.get("/bookings/guests/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const bookings = await pool.query(
            "SELECT * FROM bookings WHERE guest_id = $1",
            [id]
        );
        res.json(bookings.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});