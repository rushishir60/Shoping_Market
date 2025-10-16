import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Cart from "../pages/Cart"; // make sure Cart.jsx exists
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../images/super_market.png";

function Navbar() {
  const [isFarmer, setIsFarmer] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleSwitchChange = () => {
    setIsFarmer(!isFarmer);
    if (!isFarmer) navigate("/farmer");
    else navigate("/");
  };

  return (
    <>
      <header className="w-100" id="gotoHome">
        {/* Top Bar */}
        <div className="row align-items-center border-bottom py-2 m-0 w-100">
          <div className="col-6"></div>
          <div className="col-6 d-flex align-items-center justify-content-end gap-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input switchBtn"
                type="checkbox"
                checked={isFarmer}
                onChange={handleSwitchChange}
              />
            </div>
            <i className="fa-solid fa-circle-user fs-4"></i>
            <i className="fa-solid fa-language fs-4"></i>

            {/* Cart Icon */}
            <button
              className="btn btn-light position-relative"
              onClick={() => setShowCart(true)}
            >
              <i className="fa-solid fa-cart-shopping fs-4"></i>
              {cartItems.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light py-3 w-100">
          <div className="container-fluid w-100">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" width="250px" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ width: "39px", paddingLeft: "4px", paddingRight: "4px" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
                <li className="nav-item navList">
                  <Link className="nav-link active fs-2 fw-semibold" to="/">Home</Link>
                </li>

                <li className="nav-item dropdown navList">
                  <Link
                    className="nav-link dropdown-toggle fs-2 fw-semibold"
                    to="/services"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/vegetables">Vegetables</Link></li>
                    <li><Link className="dropdown-item" to="/fruits">Fruits</Link></li>
                    <li><Link className="dropdown-item" to="/dairy">Dairy Products</Link></li>
                    <li><Link className="dropdown-item" to="/dryfruits">Dry Fruits</Link></li>
                    <li><Link className="dropdown-item" to="/grains">Grains</Link></li>
                    <li><Link className="dropdown-item" to="/pulses">Pulses</Link></li>
                    <li><Link className="dropdown-item" to="/snacks">Snacks</Link></li>
                    <li><Link className="dropdown-item" to="/beverages">Beverages</Link></li>
                    <li><Link className="dropdown-item" to="/herbs">Herbs & Spices</Link></li>
                  </ul>
                </li>

                <li className="nav-item navList">
                  <Link className="nav-link active fs-2 fw-semibold" to="/about">About</Link>
                </li>

                <li className="nav-item navList">
                  <Link className="nav-link active fs-2 fw-semibold" to="/contact">Contact</Link>
                </li>
              </ul>

              <form className="d-flex" style={{ height: "70px" }}>
                <input
                  className="form-control me-0 searchBox"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success searchBtn" style={{ width: "70px" }} type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      {/* Render Cart Panel */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </>
  );
}

export default Navbar;
