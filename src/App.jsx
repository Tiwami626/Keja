import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import { Suspense } from "react";

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: "Nunito, sans-serif" }}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
        </Suspense>
        <Home />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
