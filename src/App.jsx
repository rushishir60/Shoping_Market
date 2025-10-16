import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import Vegetables from "./assets/pages/Vegetables";
import Fruits from "./assets/pages/Fruits";
import Grains from "./assets/pages/Grains";
import Dairy from "./assets/pages/Dairy";
import Cart from "./assets/pages/Cart";
import Farmer from "./assets/pages/Farmer";
import Carousel from "./assets/components/Carousel";
import DryFruits from "./assets/pages/DryFruits";
import Beverages from "./assets/pages/Beverages";
import Herbs from "./assets/pages/Herbs";


import Pulses from "./assets/pages/Pulses";
import Snacks from "./assets/pages/Snacks";
import Contact from "./assets/pages/Contact";
import About from "./assets/pages/About";



function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/DryFruits" element={<DryFruits />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/herbs" element={<Herbs />} />
        <Route path="/pulses" element={<Pulses />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/grains" element={<Grains />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
