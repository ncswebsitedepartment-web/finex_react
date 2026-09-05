import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/footerlogo.png"; // ✅ ADD THIS

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <div className="footer-brand">
            <img
              src={logo}
              alt="Finex Industries Logo"
              className="footer-logo"
            />
          </div>

          <p className="footer-tagline">
           We are Nashik based Furniture, Sheet metal & heavy fabrication manufacturing company having 10 years of experience in the field of manufacuring & site execuation across Pan India through lisioning Network.
          </p>

          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/csr">CSR</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>OUR SERVICES</h3>
          <ul>
            <li><a href="/infrastructure">Defence Infrastructure Solutions</a></li>
            <li><a href="/services/seat-berth">Ministry of Railway</a></li>
            <li><a href="/infrastructur">Healthcare Infrastructure</a></li>
            <li><a href="/infrastructure/">Fire Safety Solutions</a></li>
            <li><a href="/services/school-furniture/">Smart Furniture Solutions</a></li>
            <li><a href="/services/heavy-fabrication/">PEB & Heavy Fabrication</a></li>
            <li><a href="/infrastructure/">Government Turnkey Projects</a></li>
             <li><a href="/infrastructure/">Industrial & Engineering Solutions</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>CONTACT US</h3>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fa fa-map-marker-alt"></i>
            </div>
            <p>Gut No. 243/1B, Pimpalnare, Dindori, Nashik – 422004</p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fa fa-phone"></i>
            </div>
            <p><a href="tel:+918975789408">+91 8975789408</a></p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fa fa-envelope"></i>
            </div>
            <p><a href="mailto:info@finexindustries.com">
              info@finexindustries.com
            </a></p>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            © 2026 <span>Finex Industries Pvt. Ltd.</span> All rights reserved.
          </p>

        <p>
  Designed by
  <a href="https://puvsoft.com/" target="_blank" rel="noopener noreferrer">
    <strong> PUVSOFT PVT LTD</strong>
  </a>
</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;