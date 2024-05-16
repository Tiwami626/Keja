import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import React from "react";

// Use React.lazy to dynamically import components
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: "Nunito, sans-serif" }}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Use React.lazy components wrapped in Suspense */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
