import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Hosting from "./components/Hosting";
import About from "./components/About";
import { Suspense } from "react";

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: "Nunito, sans-serif" }}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-keja/" element={<Navigate to="/project-keja/hosting" />} />
            <Route path="/project-keja/hosting" element={<Hosting />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;