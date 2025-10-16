import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// Import dairy images
import milk from "../images/milk.jpg";
import butter from "../images/butter.jpg";
import curd from "../images/curd.jpg";
import cheese from "../images/chees.jpg";
import cream from "../images/cream.jpg";
import yogurt from "../images/yogurt.jpg";
import icecream from "../images/icecream.jpg";
import cheeseSlices from "../images/cheese_slices.jpg";
import processedCheese from "../images/processed_cheese.jpg";
import ghee from "../images/ghee.jpg";

function Dairy() {
  const { addToCart } = useCart();

   const [toastMessage, setToastMessage] = useState(" ");
    const [showToast, setShowToast] = useState(false);

  const dairyProducts = [
    { name: "Fresh Milk", price: 50, oldPrice: 60, weight: "1 Litre", image: milk },
    { name: "Butter", price: 200, oldPrice: 250, weight: "500 g", image: butter },
    { name: "Curd", price: 60, oldPrice: 80, weight: "1 kg", image: curd },
    { name: "Cheese", price: 280, oldPrice: 320, weight: "500 g", image: cheese },
    { name: "Fresh Cream", price: 150, oldPrice: 180, weight: "200 g", image: cream },
    { name: "Yogurt", price: 90, oldPrice: 120, weight: "500 g", image: yogurt },
    { name: "Ice Cream", price: 250, oldPrice: 300, weight: "500 ml", image: icecream },
    { name: "Cheese Slices", price: 120, oldPrice: 150, weight: "200 g", image: cheeseSlices },
    { name: "Processed Cheese", price: 180, oldPrice: 220, weight: "250 g", image: processedCheese },
    { name: "Ghee", price: 400, oldPrice: 450, weight: "500 g", image: ghee },
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
        <h2 className="section-title">Dairy Products</h2>
        
      </div>
      <div className="row g-4">
        {dairyProducts.map((product, idx) => {
          const savings = product.oldPrice - product.price;
          return (
            <div className="col-md-3" key={idx}>
              <div className="card product-card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="price">
                    ₹{product.price} <span className="old-price">₹{product.oldPrice}</span>{" "}
                    <span className="save">SAVE ₹{savings}</span>
                  </p>
                  <small>{product.weight}</small>
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

export default Dairy;
