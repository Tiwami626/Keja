import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./routes/Booking";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Hosting from "./routes/Hosting";
import About from "./routes/About";
import Rooms from "./routes/rooms";


const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: "Nunito, sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/hosting' element={<Hosting />} />
          <Route path='/about' element={<About />} />
          <Route path='/rooms' element={<Rooms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
