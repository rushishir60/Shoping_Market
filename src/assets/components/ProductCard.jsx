import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card p-3 h-100">
      <img
        src={product.image}
        alt={product.name}
        style={{ height: "150px", objectFit: "cover" }}
        className="card-img-top"
      />
      <div className="card-body text-center">
        <h5>{product.name}</h5>
        <p>₹{product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
