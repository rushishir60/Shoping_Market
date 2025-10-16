import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// Import pulse images
import toorDal from "../images/tur dal.jpg";
import moongDal from "../images/moong dal.jpg";
import chanaDal from "../images/chana dal.jpg";
import uradDal from "../images/urd dal.jpg";
import masoorDal from "../images/masoor_dal.jpg";
import lentils from "../images/lentils.jpg";
import blackGram from "../images/black_gram.jpg";
import redLentils from "../images/red_lentils.jpg";
import greenGram from "../images/green_gram.jpg";
import soybean from "../images/soyabean.jpg";

function Pulses() {
  const { addToCart } = useCart();

  const [toastMessage, setToastMessage] = useState(" ");
  const [showToast, setShowToast] = useState(false);

  const pulses = [
    { name: "Toor Dal", price: 120, oldPrice: 150, weight: "1 kg", image: toorDal },
    { name: "Moong Dal", price: 95, oldPrice: 120, weight: "1 kg", image: moongDal },
    { name: "Chana Dal", price: 80, oldPrice: 100, weight: "1 kg", image: chanaDal },
    { name: "Urad Dal", price: 110, oldPrice: 140, weight: "1 kg", image: uradDal },
    { name: "Masoor Dal", price: 85, oldPrice: 100, weight: "1 kg", image: masoorDal },
    { name: "Lentils", price: 75, oldPrice: 90, weight: "1 kg", image: lentils },
    { name: "Black Gram", price: 100, oldPrice: 120, weight: "1 kg", image: blackGram },
    { name: "Red Lentils", price: 90, oldPrice: 110, weight: "1 kg", image: redLentils },
    { name: "Green Gram", price: 95, oldPrice: 120, weight: "1 kg", image: greenGram },
    { name: "Soybean", price: 120, oldPrice: 150, weight: "1 kg", image: soybean },
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
         <h2 className="text-center mb-4">Pulses</h2>
        
      </div>
      <div className="row g-4">
        {pulses.map((prod, idx) => {
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
                    ₹{prod.price} <span className="old-price">₹{prod.oldPrice}</span>{" "}
                    <span className="save">SAVE ₹{savings}</span>
                  </p>
                  <small>{prod.weight}</small>
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

export default Pulses;
