import React from "react";
import { Link } from "react-router-dom";
import vegImg from "../images/vegitable.jpg";
import fruitsImg from "../images/fruits.jpg";
import dairyImg from "../images/daairy_product.jpg";
import beveragesImg from "../images/Bevarage.jpg";
import dryFruitsImg from "../images/dry fruits.jpg";
import grainsImg from "../images/Grains.jpg";
import snacksImg from "../images/snakas.jpg";
import pulsesImg from "../images/pulses.jpg";
import herbsImg from "../images/herbs.jpg";
// import "../styles/categories.css"; // optional CSS file for circle-card styles

function Categories() {
  const categories = [
    { name: "Vegetables", img: vegImg, path: "/vegetables" },
    { name: "Fruits", img: fruitsImg, path: "/fruits" },
    { name: "Dairy Products", img: dairyImg, path: "/dairy" },
    { name: "Beverages", img: beveragesImg, path: "/beverages" },
    { name: "Dry Fruits", img: dryFruitsImg, path: "/dryfruits" },
    { name: "Grains", img: grainsImg, path: "/grains" },
    { name: "Snacks", img: snacksImg, path: "/snacks" },
    { name: "Pulses", img: pulsesImg, path: "/pulses" },
    { name: "Herbs & Spices", img: herbsImg, path: "/herbs" },
  ];

  return (
    <section id="products" className="section my-5">
      <h2 className="text-center mb-4">Our Categories</h2>
      <div className="circle-cards d-flex flex-wrap justify-content-center gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className="circle-card text-center text-decoration-none"
          >
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;

















































