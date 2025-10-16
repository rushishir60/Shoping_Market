import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// ✅ Import images
import chips from "../images/chips.jpg";
import biscuits from "../images/biscuits.jpg";
import nutsMix from "../images/nuts_mix.jpg";
import popcorn from "../images/popcorn.jpg";
import cookies from "../images/cookies.jpg";
import samosa from "../images/samosa.jpg";
import namkeen from "../images/namkeen.jpg";
import khakhra from "../images/khakhra.jpg";
import sev from "../images/sev.jpg";
import chakli from "../images/chakli.jpg";

function Snacks() {
  const { addToCart } = useCart();

  const [toastMessage, setToastMessage] = useState(" ");
  const [showToast, setShowToast] = useState(false);


  const snacks = [
    { name: "Potato Chips", price: 50, oldPrice: 70, weight: "200 g", image: chips },
    { name: "Biscuits", price: 40, oldPrice: 55, weight: "150 g", image: biscuits },
    { name: "Nuts Mix", price: 150, oldPrice: 200, weight: "100 g", image: nutsMix },
    { name: "Popcorn", price: 60, oldPrice: 80, weight: "150 g", image: popcorn },
    { name: "Cookies", price: 70, oldPrice: 90, weight: "200 g", image: cookies },
    { name: "Samosa Pack", price: 100, oldPrice: 120, weight: "6 pcs", image: samosa },
    { name: "Namkeen", price: 90, oldPrice: 110, weight: "250 g", image: namkeen },
    { name: "Khakhra", price: 120, oldPrice: 150, weight: "200 g", image: khakhra },
    { name: "Sev", price: 80, oldPrice: 100, weight: "250 g", image: sev },
    { name: "Chakli", price: 110, oldPrice: 140, weight: "200 g", image: chakli },
  ];

  const handleAddToCart = (item, idx) => {
    addToCart({
      id: `snack-${idx}`,
      name: item.name,
      price: item.price,
      image: item.image,
    });

    setToastMessage(`${item.name} added to cart!`);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };


  return (
    <section className="container my-5">
      
      <div className="d-flex justify-content-between align-items-center mb-3">
         <h2 className="text-center mb-4">Snacks</h2>
        
      </div>
      <div className="row g-4">
        {snacks.map((item, idx) => {
          const savings = item.oldPrice - item.price;
          return (
            <div className="col-md-3" key={idx}>
              <div className="card product-card h-100">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="price">
                    ₹{item.price} <span className="old-price">₹{item.oldPrice}</span>{" "}
                    <span className="save">SAVE ₹{savings}</span>
                  </p>
                  <small>{item.weight}</small>
                  <br />
                  <button
                    className="btn btn-custom mt-2"
                    onClick={() =>
                      handleAddToCart(item, idx)
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

export default Snacks;
