import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import ProductSection from "../components/ProductSection";
import Contact from "../components/Contact";
import { useCart } from "../context/CartContext";

// Import images
import onion from "../images/onion.jpg";
import cabbge from "../images/cabega.jpg";
import tomato from "../images/tomato.jpg";
import carrot from "../images/carrote.jpg";
import cucumber from "../images/cucumbar.jpg";

import orange from "../images/orange.jpg";
import mango from "../images/mango.jpg";
import apple from "../images/apple.jpg";
import banana from "../images/banana.jpg";

import almonds from "../images/almond.jpg";
import cashews from "../images/cashwas.jpg";
import walnuts from "../images/walnats.jpg";
import pistachio from "../images/pistochs.jpg";

import toorDal from "../images/tur dal.jpg";
import moongDal from "../images/moong dal.jpg";
import chanaDal from "../images/chana dal.jpg";
import uradDal from "../images/urd dal.jpg";

import milk from "../images/milk.jpg";
import butter from "../images/butter.jpg";
import curd from "../images/curd.jpg";
import cheese from "../images/chees.jpg";

import rice from "../images/basmati rice.jpg";
import wheat from "../images/wheet.jpg";
import jowar from "../images/jowari.jpg";
import bajra from "../images/bajra.jpg";

function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Product Data
  const vegetables = [
    { name: "Onion", price: 36, oldPrice: 48, weight: "1 kg", image: onion },
    { name: "Cabbage", price: 27, oldPrice: 37, weight: "1 kg", image: cabbge },
    { name: "Tomato", price: 23, oldPrice: 30, weight: "1 kg", image: tomato },
    { name: "Carrot", price: 67, oldPrice: 89, weight: "200 g", image: carrot },
  ];

  const fruits = [
    { name: "Orange", price: 28, oldPrice: 35, weight: "1 kg", image: orange },
    { name: "Mango", price: 180, oldPrice: 250, weight: "1 kg", image: mango },
    { name: "Apple", price: 150, oldPrice: 200, weight: "1 kg", image: apple },
    { name: "Banana", price: 59, oldPrice: 80, weight: "1 kg", image: banana },
  ];

  const dryFruits = [
    { name: "Almonds", price: 499, oldPrice: 600, weight: "500 g", image: almonds },
    { name: "Cashews", price: 650, oldPrice: 800, weight: "400 g", image: cashews },
    { name: "Walnuts", price: 720, oldPrice: 900, weight: "1 kg", image: walnuts },
    { name: "Pistachio", price: 850, oldPrice: 1000, weight: "1 kg", image: pistachio },
  ];

  const pulses = [
    { name: "Toor Dal", price: 120, oldPrice: 150, weight: "1 kg", image: toorDal },
    { name: "Moong Dal", price: 95, oldPrice: 120, weight: "1 kg", image: moongDal },
    { name: "Chana Dal", price: 80, oldPrice: 100, weight: "1 kg", image: chanaDal },
    { name: "Urad Dal", price: 110, oldPrice: 140, weight: "1 kg", image: uradDal },
  ];

  const dairy = [
    { name: "Fresh Milk", price: 50, oldPrice: 60, weight: "1 Litre", image: milk },
    { name: "Butter", price: 200, oldPrice: 250, weight: "500 g", image: butter },
    { name: "Curd", price: 60, oldPrice: 80, weight: "1 kg", image: curd },
    { name: "Cheese", price: 280, oldPrice: 320, weight: "500 g", image: cheese },
  ];

  const grains = [
    { name: "Basmati Rice", price: 90, oldPrice: 120, weight: "1 kg", image: rice },
    { name: "Wheat", price: 45, oldPrice: 60, weight: "1 kg", image: wheat },
    { name: "Jowar", price: 40, oldPrice: 55, weight: "1 kg", image: jowar },
    { name: "Bajra", price: 38, oldPrice: 50, weight: "1 kg", image: bajra },
  ];

  const allProducts = [...vegetables, ...fruits, ...dryFruits, ...pulses, ...dairy, ...grains];

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Live search effect
  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <>
      <Carousel />
      <Categories />

      {/* Live Search Bar */}
      <div className="d-flex mb-4" style={{ height: "70px" }}>
        <input
          className="form-control me-0 searchBox"
          type="search"
          placeholder="Search products..."
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Show search results if any */}
      {searchResults.length > 0 && (
        <ProductSection
          title={`Search Results for "${searchQuery}"`}
          products={searchResults}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Product Sections */}
      <ProductSection title="Vegetables" link="/vegetables" products={vegetables} onAddToCart={handleAddToCart} />
      <ProductSection title="Fresh Fruits" link="/fruits" products={fruits} onAddToCart={handleAddToCart} />
      <ProductSection title="Dry Fruits" link="/dryfruits" products={dryFruits} onAddToCart={handleAddToCart} />
      <ProductSection title="Pulses" link="/pulses" products={pulses} onAddToCart={handleAddToCart} />
      <ProductSection title="Dairy Products" link="/dairy" products={dairy} onAddToCart={handleAddToCart} />
      <ProductSection title="Grains" link="/grains" products={grains} onAddToCart={handleAddToCart} />

      {/* Toast Message */}
      {showToast && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <div className="toast show align-items-center text-bg-success border-0">
            <div className="d-flex">
              <div className="toast-body">{toastMessage}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
              />
            </div>
          </div>
        </div>
      )}

      <Contact />
    </>
  );
}

export default Home;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Carousel from "../components/Carousel";
// import Categories from "../components/Categories";
// import ProductSection from "../components/ProductSection";
// // Import images
// import onion from "../images/onion.jpg";
// import cabbge from "../images/cabega.jpg";
// import tomato from "../images/tomato.jpg";
// import carrot from "../images/carrote.jpg";
// import cucumber from "../images/cucumbar.jpg";

// import orange from "../images/orange.jpg";
// import mango from "../images/mango.jpg";
// import apple from "../images/apple.jpg";
// import banana from "../images/banana.jpg";

// import almonds from "../images/almond.jpg";
// import cashews from "../images/cashwas.jpg";
// import walnuts from "../images/walnats.jpg";
// import pistachio from "../images/pistochs.jpg";

// import toorDal from "../images/tur dal.jpg";
// import moongDal from "../images/moong dal.jpg";
// import chanaDal from "../images/chana dal.jpg";
// import uradDal from "../images/urd dal.jpg";

// import milk from "../images/milk.jpg";
// import butter from "../images/butter.jpg";
// import curd from "../images/curd.jpg";
// import cheese from "../images/chees.jpg";

// import rice from "../images/basmati rice.jpg";
// import wheat from "../images/wheet.jpg";
// import jowar from "../images/jowari.jpg";
// import bajra from "../images/bajra.jpg";
// import Contact from "../components/Contact";
// import { useCart } from "../context/CartContext";



// function Home() {
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const [toastMessage, setToastMessage] = useState("");
//   const [showToast, setShowToast] = useState(false);


//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setToastMessage(`${product.name} added to cart!`);
//     setShowToast(true);

//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

 
//   // Product Data
//   const vegetables = [
//     { name: "Onion", price: 36, oldPrice: 48, weight: "1 kg", image: onion },
//     { name: "Cabbage", price: 27, oldPrice: 37, weight: "1 kg", image: cabbge },
//     { name: "Tomato", price: 23, oldPrice: 30, weight: "1 kg", image: tomato },
//     { name: "Carrot", price: 67, oldPrice: 89, weight: "200 g", image: carrot },

//   ];

//   const fruits = [
//     { name: "Orange", price: 28, oldPrice: 35, weight: "1 kg", image: orange },
//     { name: "Mango", price: 180, oldPrice: 250, weight: "1 kg", image: mango },
//     { name: "Apple", price: 150, oldPrice: 200, weight: "1 kg", image: apple },
//     { name: "Banana", price: 59, oldPrice: 80, weight: "1 kg", image: banana },
//   ];

//   const dryFruits = [
//     { name: "Almonds", price: 499, oldPrice: 600, weight: "500 g", image: almonds },
//     { name: "Cashews", price: 650, oldPrice: 800, weight: "400 g", image: cashews },
//     { name: "Walnuts", price: 720, oldPrice: 900, weight: "1 kg", image: walnuts },
//     { name: "Pistachio", price: 850, oldPrice: 1000, weight: "1 kg", image: pistachio },
//   ];

//   const pulses = [
//     { name: "Toor Dal", price: 120, oldPrice: 150, weight: "1 kg", image: toorDal },
//     { name: "Moong Dal", price: 95, oldPrice: 120, weight: "1 kg", image: moongDal },
//     { name: "Chana Dal", price: 80, oldPrice: 100, weight: "1 kg", image: chanaDal },
//     { name: "Urad Dal", price: 110, oldPrice: 140, weight: "1 kg", image: uradDal },
//   ];

//   const dairy = [
//     { name: "Fresh Milk", price: 50, oldPrice: 60, weight: "1 Litre", image: milk },
//     { name: "Butter", price: 200, oldPrice: 250, weight: "500 g", image: butter },
//     { name: "Curd", price: 60, oldPrice: 80, weight: "1 kg", image: curd },
//     { name: "Cheese", price: 280, oldPrice: 320, weight: "500 g", image: cheese },
//   ];

//   const grains = [
//     { name: "Basmati Rice", price: 90, oldPrice: 120, weight: "1 kg", image: rice },
//     { name: "Wheat", price: 45, oldPrice: 60, weight: "1 kg", image: wheat },
//     { name: "Jowar", price: 40, oldPrice: 55, weight: "1 kg", image: jowar },
//     { name: "Bajra", price: 38, oldPrice: 50, weight: "1 kg", image: bajra },
//   ];

//   return (
//     <>
//       <Carousel />
//       <Categories />

//       {/* Product Sections */}
//       <ProductSection
//         title="Vegetables"
//         link="/vegetables"
//         products={vegetables}
//         onAddToCart={handleAddToCart}
//       />
//       <ProductSection
//         title="Fresh Fruits"
//         link="/fruits"
//         products={fruits}
//         onAddToCart={handleAddToCart}
//       />
//       <ProductSection
//         title="Dry Fruits"
//         link="/dryfruits"
//         products={dryFruits}
//         onAddToCart={handleAddToCart}
//       />

//       <ProductSection title="Pulses" link="/pulses" products={pulses} onAddToCart={handleAddToCart}/>
//       <ProductSection title="Dairy Products" link="/dairy" products={dairy} onAddToCart={handleAddToCart}/>
//       <ProductSection title="Grains" link="/grains" products={grains} onAddToCart={handleAddToCart}/>

//       {showToast && (
//         <div
//           className="position-fixed bottom-0 end-0 p-3"
//           style={{ zIndex: 1050 }}
//         >
//           <div className="toast show align-items-center text-bg-success border-0">
//             <div className="d-flex">
//               <div className="toast-body">{toastMessage}</div>
//               <button
//                 type="button"
//                 className="btn-close btn-close-white me-2 m-auto"
//                 onClick={() => setShowToast(false)}
//               ></button>
//             </div>
//           </div>
//         </div>
//       )}

//       <Contact />
//     </>
//   );
// }

// export default Home;
