import React from "react";
import { useNavigate } from "react-router-dom";

function ProductSection({ title, products, link, onAddToCart }) { // ✅ add onAddToCart prop
  const navigate = useNavigate();

  return (
    <section className="my-5 custom-padding">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title">{title}</h2>
        <button
          className="see-all btn btn-link"
          onClick={() => navigate(link)}
        >
          See All
        </button>
      </div>

      <div className="row g-4">
        {products.map((prod, idx) => {
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
                      onAddToCart({
                        id: `${title}-${idx}`,
                        name: prod.name,
                        price: prod.price,
                        image: prod.image,
                      })
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
    </section>
  );
}

export default ProductSection;


// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// function ProductSection({ title, products, link }) {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   return (
//     <section className="my-5 custom-padding">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2 className="section-title">{title}</h2>
//         <button
//           className="see-all btn btn-link"
//           onClick={() => navigate(link)}
//         >
//           See All
//         </button>
//       </div>

//       <div className="row g-4">
//         {products.map((prod, idx) => {
//           const savings = prod.oldPrice - prod.price;

//           return (
//             <div className="col-md-3" key={idx}>
//               <div className="card product-card h-100">
//                 <img
//                   src={prod.image}
//                   className="card-img-top"
//                   alt={prod.name}
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{prod.name}</h5>
//                   <p className="price">
//                     ₹{prod.price}{" "}
//                     <span className="old-price">₹{prod.oldPrice}</span>
//                     <span className="save"> SAVE ₹{savings}</span>
//                   </p>
//                   <small>{prod.weight}</small>
//                   <br />
//                   <button
//                     className="btn btn-custom mt-2"
//                     onClick={() =>
//                       addToCart({
//                         id: `${title}-${idx}`,
//                         name: prod.name,
//                         price: prod.price,
//                         image: prod.image
//                       })
                      
//                     }
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default ProductSection;



// import React from "react";
// import { useNavigate } from "react-router-dom";

// function ProductSection({ title, link, products, onAddToCart }) {
//   const navigate = useNavigate();

//   return (
//     <section className="container my-5">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>{title}</h2>
//         <button className="btn btn-link" onClick={() => navigate(link)}>
//           View All
//         </button>
//       </div>

//       <div className="row g-4">
//         {products.map((product, idx) => {
//           const savings = product.oldPrice - product.price;
//           return (
//             <div className="col-md-3" key={idx}>
//               <div className="card product-card h-100">
//                 <img
//                   src={product.image}
//                   className="card-img-top"
//                   alt={product.name}
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="price">
//                     ₹{product.price}{" "}
//                     <span className="old-price">₹{product.oldPrice}</span>{" "}
//                     <span className="save">SAVE ₹{savings}</span>
//                   </p>
//                   <small>{product.weight}</small>
//                   <br />
//                   <button
//                     className="btn btn-custom mt-2"
//                     onClick={() => onAddToCart(product)} // ✅ call the toast handler
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default ProductSection;
