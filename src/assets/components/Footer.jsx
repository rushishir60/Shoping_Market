import React from "react";
import logo from "../images/agamiAgriLogo.png"; // put your image inside src/assets/

function Footer() {
  return (
    <footer className="container-fluid footer1 mt-5">
      <div className="row text-center py-4">
        {/* Logo */}
        <div className="col">
          <img src={logo} width="230px" height="200px" alt="Agami Agri Logo" />
        </div>

        {/* Company Links */}
        <div className="col">
          <h3>Agami Agri</h3>
          <ul className="list-unstyled">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Super Market Links */}
        <div className="col">
          <h3>Super Market</h3>
          <ul className="list-unstyled">
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Dairy Products</li>
            <li>Grains</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="col">
          <i className="fa-brands fa-instagram m-2 fs-1"></i>
          <i className="fa-brands fa-youtube m-2 fs-1"></i>
          <i className="fa-brands fa-facebook m-2 fs-1"></i>
          <i className="fa-brands fa-linkedin m-2 fs-1"></i>
          <i className="fa-brands fa-github m-2 fs-1"></i>
          <i className="fa-brands fa-square-twitter m-2 fs-1"></i>
        </div>
      </div>

      <footer id="footerlast" className="pt-3 foot text-center">
        <h4>© 2025 Agami Agri</h4>
      </footer>
      
    </footer>
  );
}

export default Footer;
