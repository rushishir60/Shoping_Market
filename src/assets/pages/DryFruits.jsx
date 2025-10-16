import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// Import dry fruit images
import almonds from "../images/almond.jpg";
import cashews from "../images/cashwas.jpg";
import walnuts from "../images/walnats.jpg";
import pistachio from "../images/pistochs.jpg";
import raisin from "../images/raisin.jpg";
import cashewKaju from "../images/cashew(kaju).jpg";
import hazelnut from "../images/hazelnuts.jpg";
import pistaKernels from "../images/pista_kernels.jpg";
import driedFig from "../images/driedfigs.jpg";
import walnutPieces from "../images/walnut_pieces.jpg";

function DryFruitsSection() {
  const { addToCart } = useCart();

   const [toastMessage, setToastMessage] = useState(" ");
    const [showToast, setShowToast] = useState(false);

  const dryFruits = [
    { name: "Almonds", price: 499, oldPrice: 600, weight: "500 g", image: almonds },
    { name: "Cashews", price: 650, oldPrice: 800, weight: "400 g", image: cashews },
    { name: "Walnuts", price: 720, oldPrice: 900, weight: "1 kg", image: walnuts },
    { name: "Pistachio", price: 850, oldPrice: 1000, weight: "1 kg", image: pistachio },
    { name: "Raisin", price: 300, oldPrice: 400, weight: "500 g", image: raisin },
    { name: "Cashew Kaju", price: 700, oldPrice: 850, weight: "500 g", image: cashewKaju },
    { name: "Hazelnut", price: 750, oldPrice: 900, weight: "500 g", image: hazelnut },
    { name: "Pista Kernels", price: 800, oldPrice: 1000, weight: "500 g", image: pistaKernels },
    { name: "Dried Fig", price: 400, oldPrice: 500, weight: "500 g", image: driedFig },
    { name: "Walnut Pieces", price: 780, oldPrice: 950, weight: "500 g", image: walnutPieces },
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
        <h2 className="section-title">Dry Fruits</h2>
        
      </div>

      <div className="row g-4">
        {dryFruits.map((prod, idx) => {
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

export default DryFruitsSection;
