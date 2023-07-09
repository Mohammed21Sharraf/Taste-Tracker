import React from 'react';
import './Footer.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="UniqueFooter">
        <div className="UniqueContainer">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3><span>TASTE</span>TRACKER</h3>
              <p>Discover, review, and savor the finest restaurants online!</p>
              <div className="footer-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="unique-nav-item">
                  <a className="" href="/">Restaurants</a>
                </li>
                <li className="unique-nav-item">
                  <a className="" href="/">Review</a>
                </li>
                <li className="unique-nav-item">
                  <a className="" href="/">Map</a>
                </li>
                <li className="unique-nav-item">
                  <a className="" href="/">Services</a>
                </li>
                <li className="unique-nav-item">
                  <a className="" href="/">Wishlist</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <div className="whitetext">
                <h5>Support</h5>
                <p><i className="fa-solid fa-phone-volume"></i> +8801711111111</p>
                <p><i className="fa-solid fa-envelope"></i> zeze@gmail.com</p>
                <p><i className="fa-solid fa-paper-plane"></i> Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="UniqueLastFooter">
        <p>&copy; Taste Tracker. All rights reserved.</p>
      </div>

      <div className="ScrollToTop" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </>
  );
};

export default Footer;
