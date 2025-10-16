import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// ✅ Import images
import cola from "../images/cola.jpg";
import orangeJuice from "../images/orange_juice.jpg";
import tea from "../images/green_tea.jpg";
import coffee from "../images/coffee_powder.jpg";
import milkshake from "../images/strawberry_milkshake.jpg";
import lemonade from "../images/lemon_juice.jpg";
import mangoJuice from "../images/mango_shake.jpg";
import energyDrink from "../images/energy_drink.jpg";
import coconutWater from "../images/cocoant_water.jpg";
import buttermilk from "../images/butter_milk.jpg";

function Beverages() {
  const { addToCart } = useCart();

   const [toastMessage, setToastMessage] = useState(" ");
   const [showToast, setShowToast] = useState(false);

  const beverages = [
    { name: "Cola Drink", price: 40, oldPrice: 55, weight: "500 ml", image: cola },
    { name: "Orange Juice", price: 60, oldPrice: 80, weight: "500 ml", image: orangeJuice },
    { name: "Green Tea", price: 120, oldPrice: 150, weight: "100 g", image: tea },
    { name: "Coffee Powder", price: 250, oldPrice: 300, weight: "200 g", image: coffee },
    { name: "Strawberry Milkshake", price: 80, oldPrice: 100, weight: "250 ml", image: milkshake },
    { name: "Lemonade", price: 50, oldPrice: 70, weight: "300 ml", image: lemonade },
    { name: "Mango Juice", price: 70, oldPrice: 90, weight: "500 ml", image: mangoJuice },
    { name: "Energy Drink", price: 100, oldPrice: 130, weight: "350 ml", image: energyDrink },
    { name: "Coconut Water", price: 60, oldPrice: 80, weight: "300 ml", image: coconutWater },
    { name: "Buttermilk", price: 40, oldPrice: 60, weight: "200 ml", image: buttermilk },
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
        <h2 className="section-title">Beverages</h2>
        
      </div>
      <div className="row g-4">
        {beverages.map((item, idx) => {
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

export default Beverages;
