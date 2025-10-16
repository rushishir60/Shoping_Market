import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// Import fruit images
import apple from "../images/apple.jpg";
import banana from "../images/banana.jpg";
import mango from "../images/mango.jpg";
import orange from "../images/orange.jpg";
import kiwi from "../images/kiwi.jpg";
import papaya from "../images/papaya.jpg";
import grapes from "../images/grapes.jpg";
import pineapple from "../images/pineapple.jpg";
import strawberry from "../images/strawberry.jpg";
import pomegranate from "../images/pomegranate.jpg";

function Fruits() {
  const { addToCart } = useCart();

   const [toastMessage, setToastMessage] = useState(" ");
    const [showToast, setShowToast] = useState(false);

  const fruits = [
    { name: "Apple", price: 150, oldPrice: 200, weight: "1 kg", image: apple },
    { name: "Banana", price: 59, oldPrice: 80, weight: "1 kg", image: banana },
    { name: "Mango", price: 180, oldPrice: 250, weight: "1 kg", image: mango },
    { name: "Orange", price: 28, oldPrice: 35, weight: "1 kg", image: orange },
    { name: "Kiwi", price: 120, oldPrice: 150, weight: "500 g", image: kiwi },
    { name: "Papaya", price: 70, oldPrice: 90, weight: "1 kg", image: papaya },
    { name: "Grapes", price: 120, oldPrice: 150, weight: "500 g", image: grapes },
    { name: "Pineapple", price: 90, oldPrice: 120, weight: "1 piece", image: pineapple },
    { name: "Strawberry", price: 250, oldPrice: 300, weight: "250 g", image: strawberry },
    { name: "Pomegranate", price: 120, oldPrice: 150, weight: "1 kg", image: pomegranate },
  ];

   const handleAddToCart = (prod, idx) => {
    addToCart({
      id: `snack-${idx}`,
      name: prod.name,
      price: prod.price,
      image: prod.image,
    });

    setToastMessage(`${prod.name} added to cart!`);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title">Fresh Fruits</h2>
        
      </div>
      
      
      <div className="row g-4">
        {fruits.map((fruit, idx) => {
          const savings = fruit.oldPrice - fruit.price;
          return (
            <div className="col-md-3" key={idx}>
              <div className="card product-card h-100">
                <img
                  src={fruit.image}
                  className="card-img-top"
                  alt={fruit.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{fruit.name}</h5>
                  <p className="price">
                    ₹{fruit.price} <span className="old-price">₹{fruit.oldPrice}</span>{" "}
                    <span className="save">SAVE ₹{savings}</span>
                  </p>
                  <small>{fruit.weight}</small>
                  <br />
                  <button
                    className="btn btn-custom mt-2"
                    onClick={() =>
                     handleAddToCart(prod, idx)
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
    </section>
  );
}

export default Fruits;

