import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// Import grain images
import basmatiRice from "../images/basmati rice.jpg";
import wheat from "../images/wheet.jpg";
import jowar from "../images/jowar.jpg";
import bajra from "../images/bajra.jpg";
import ragi from "../images/ragi.jpg";
import maize from "../images/maize.jpg";
import barley from "../images/barley.jpg";
import foxtailMillet from "../images/foxtail_millet.jpg";
import kodoMillet from "../images/kodo_millet.jpg";
import littleMillet from "../images/little_millet.jpg";

function Grains() {
  const { addToCart } = useCart();

   const [toastMessage, setToastMessage] = useState(" ");
    const [showToast, setShowToast] = useState(false);

  const grains = [
    { name: "Basmati Rice", price: 90, oldPrice: 120, weight: "1 kg", image: basmatiRice },
    { name: "Wheat", price: 45, oldPrice: 60, weight: "1 kg", image: wheat },
    { name: "Jowar", price: 40, oldPrice: 55, weight: "1 kg", image: jowar },
    { name: "Bajra", price: 38, oldPrice: 50, weight: "1 kg", image: bajra },
    { name: "Ragi", price: 42, oldPrice: 55, weight: "1 kg", image: ragi },
    { name: "Maize", price: 35, oldPrice: 45, weight: "1 kg", image: maize },
    { name: "Barley", price: 50, oldPrice: 65, weight: "1 kg", image: barley },
    { name: "Foxtail Millet", price: 60, oldPrice: 75, weight: "1 kg", image: foxtailMillet },
    { name: "Kodo Millet", price: 55, oldPrice: 70, weight: "1 kg", image: kodoMillet },
    { name: "Little Millet", price: 50, oldPrice: 65, weight: "1 kg", image: littleMillet },
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
    <section className="my-5 custom-padding">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title">Grains</h2>
        
      </div>

      <div className="row g-4">
        {grains.map((prod, idx) => {
          const savings = prod.oldPrice - prod.price;
          return (
            <div className="col-md-3" key={idx}>
              <div className="card product-card h-100">
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="price">
                    ₹{prod.price} <span className="old-price">₹{prod.oldPrice}</span>
                    <span className="save"> SAVE ₹{savings}</span>
                  </p>
                  <small>{prod.weight}</small>
                  <br />
                  <button
                    className="btn btn-custom mt-2"
                    onClick={() => handleAddToCart(prod, idx)}
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

export default Grains;
