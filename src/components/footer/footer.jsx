import React from "react";
import "../footer/footer.css"

function Footer() {
  return (
    <>
      <footer>
        <div className="footer__sec">
          <div className="row">
            <div className="footer__body">
              <div className="about footer__links">
              <h2 className = " footer__link">About</h2>
                <a  className = " footer__link" href="/products">Our Products</a>
                <a  className = " footer__link" href="/">Our Company</a>
                <a  className = " footer__link" href="">Services</a>
              </div>
              <div className="about footer__links">
                <h2 className = " footer__link">Order and pickup</h2>
                <a  className = " footer__link" href="/cart">Order Now</a>
                <a  className = " footer__link" href="/">Delivery</a>
                <a  className = " footer__link" href="/">Pickup</a>
                <a  className = " footer__link" href="/">Return Policy</a>
                <a  className = " footer__link" href="/">Bulk Order</a>
              </div>
              <div className="about footer__links">
              <h2 className = " footer__link">Location</h2>
                <h3  className = " footer__link">Nigeria</h3>
                <h3  className = " footer__link">New york</h3>
                <h3  className = " footer__link">Germany</h3>
                <h3  className = " footer__link">Italy</h3>
                <h3  className = " footer__link">France</h3>
              </div>
              <div className="about footer__links">
              <h2 className = " footer__link">Social Impact</h2>
                <h3  className = " footer__link">People</h3>
                <h3  className = " footer__link">Plant</h3>
                <h3  className = " footer__link">Environment</h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
