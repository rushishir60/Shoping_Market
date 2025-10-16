import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// Import herb images
import basil from "../images/basil.jpg";
import mint from "../images/mint.jpg";
import coriander from "../images/coriander.jpg";
import parsley from "../images/parsley.jpg";
import rosemary from "../images/rosemary.jpg";
import thyme from "../images/thyme.jpg";
import oregano from "../images/oregano.jpg";
import dill from "../images/dill.jpg";
import sage from "../images/sage.jpg";
import curryLeaves from "../images/curry_leaves.jpg";

function Herbs() {
  const { addToCart } = useCart();

   const [toastMessage, setToastMessage] = useState(" ");
   const [showToast, setShowToast] = useState(false);

  const herbs = [
    { name: "Basil", price: 25, oldPrice: 40, weight: "100 g", image: basil },
    { name: "Mint", price: 20, oldPrice: 35, weight: "100 g", image: mint },
    { name: "Coriander", price: 15, oldPrice: 25, weight: "100 g", image: coriander },
    { name: "Parsley", price: 30, oldPrice: 45, weight: "100 g", image: parsley },
    { name: "Rosemary", price: 40, oldPrice: 55, weight: "100 g", image: rosemary },
    { name: "Thyme", price: 35, oldPrice: 50, weight: "100 g", image: thyme },
    { name: "Oregano", price: 38, oldPrice: 55, weight: "100 g", image: oregano },
    { name: "Dill", price: 28, oldPrice: 40, weight: "100 g", image: dill },
    { name: "Sage", price: 32, oldPrice: 45, weight: "100 g", image: sage },
    { name: "Curry Leaves", price: 18, oldPrice: 30, weight: "100 g", image: curryLeaves },
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
        <h2 className="section-title">Herbs</h2>
      </div>

      <div className="row g-4">
        {herbs.map((prod, idx) => {
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
                    ₹{prod.price}{" "}
                    <span className="old-price">₹{prod.oldPrice}</span>
                    <span className="save"> SAVE ₹{savings}</span>
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

export default Herbs;
