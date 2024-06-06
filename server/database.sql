CREATE DATABASE keja_hosts;

CREATE TABLE hosts (
    host_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    profile_picture VARCHAR(255),
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE homes (
    home_id SERIAL PRIMARY KEY,
    host_id INT REFERENCES hosts(host_id),
    title VARCHAR(100) NOT NULL,
    description TEXT,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    zip_code VARCHAR(20),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    price_per_night DECIMAL(10, 2) NOT NULL,
    max_guests INT NOT NULL,
    number_of_bedrooms INT NOT NULL,
    number_of_bathrooms INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE home_photos (
    photo_id SERIAL PRIMARY KEY,
    home_id INT REFERENCES homes(home_id),
    photo_url VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE amenities (
    amenity_id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE home_amenities (
    home_id INT REFERENCES homes(home_id),
    amenity_id INT REFERENCES amenities(amenity_id),
    PRIMARY KEY (home_id, amenity_id)
);

CREATE TABLE bookings (
    booking_id SERIAL PRIMARY KEY,
    home_id INT REFERENCES homes(home_id),
    guest_id INT REFERENCES guests(guest_id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    booking_status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE guests (
    guest_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    profile_picture VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    home_id INT REFERENCES homes(home_id),
    guest_id INT REFERENCES guests(guest_id),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES guests(guest_id),
    FOREIGN KEY (receiver_id) REFERENCES hosts(host_id)
);

CREATE TABLE bookings (
    booking_id SERIAL PRIMARY KEY,
    home_id INTEGER REFERENCES homes(home_id),
    guest_id INTEGER REFERENCES guests(guest_id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_price NUMERIC NOT NULL
);