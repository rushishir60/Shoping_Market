
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

// Import vegetable images
import onion from "../images/onion.jpg";
import cabbage from "../images/cabega.jpg";
import tomato from "../images/tomato.jpg";
import carrot from "../images/carrote.jpg";
import cucumber from "../images/cucumbar.jpg";
import potato from "../images/potato.jpg";
import greenPeas from "../images/green_peas.jpg";
import ginger from "../images/ginger.jpg";
import garlic from "../images/garlic.jpg";
import brinjal from "../images/brinjal.jpg";

// Navbar logo
import logo from "../images/super_market.png";

function Vegetables() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Toast states
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const vegetables = [
    { name: "Onion", price: 36, oldPrice: 48, weight: "1 kg", image: onion },
    { name: "Cabbage", price: 27, oldPrice: 37, weight: "1 kg", image: cabbage },
    { name: "Tomato", price: 23, oldPrice: 30, weight: "1 kg", image: tomato },
    { name: "Carrot", price: 67, oldPrice: 89, weight: "200 g", image: carrot },
    { name: "Cucumber", price: 67, oldPrice: 89, weight: "500 g", image: cucumber },
    { name: "Potato", price: 30, oldPrice: 40, weight: "1 kg", image: potato },
    { name: "Green Peas", price: 90, oldPrice: 110, weight: "500 g", image: greenPeas },
    { name: "Ginger", price: 150, oldPrice: 200, weight: "250 g", image: ginger },
    { name: "Garlic", price: 80, oldPrice: 100, weight: "250 g", image: garlic },
    { name: "Brinjal", price: 45, oldPrice: 60, weight: "1 kg", image: brinjal },
  ];

  const handleAddToCart = (veg, idx) => {
    // Add to global cart (your context)
    addToCart({
      id: `vegetable-${idx}`,
      name: veg.name,
      price: veg.price,
      image: veg.image,
    });

    // Show toast
    setToastMessage(`${veg.name} added to cart!`);
    setShowToast(true);

    // Auto hide after 3s
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      {/* Vegetable Products */}
      <section className="my-5 custom-padding">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="section-title">Fresh Vegetables</h2>
        </div>

        <div className="row g-4">
          {vegetables.map((veg, idx) => {
            const savings = veg.oldPrice - veg.price;
            return (
              <div className="col-md-3" key={idx}>
                <div className="card product-card h-100">
                  <img
                    src={veg.image}
                    className="card-img-top"
                    alt={veg.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{veg.name}</h5>
                    <p className="price">
                      ₹{veg.price}{" "}
                      <span className="old-price">₹{veg.oldPrice}</span>{" "}
                      <span className="save">SAVE ₹{savings}</span>
                    </p>
                    <small>{veg.weight}</small>
                    <br />
                    <button
                      className="btn btn-custom mt-2"
                      onClick={() => handleAddToCart(veg, idx)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ✅ Toast Notification */}
      {showToast && (
        <div
          className="position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 11 }}
        >
          <div className="toast show align-items-center text-bg-success border-0">
            <div className="d-flex">
              <div className="toast-body">{toastMessage}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vegetables;
