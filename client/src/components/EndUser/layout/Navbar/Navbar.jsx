import React, { Fragment, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpaque, setNavbarOpaque] = useState(false);
  const pathname = window.location.pathname;
  let nav = true;

  if (pathname === "/homepage") {
    nav = true;
  } else {
    nav = false;
  }

  useEffect(() => {
    const handleScrollHome = () => {
      const isScrolled = window.scrollY > 0;
      setNavbarOpaque(isScrolled);
    };

    window.addEventListener("scroll", handleScrollHome);

    return () => {
      window.removeEventListener("scroll", handleScrollHome);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond the first page (offset 0) of the Parallax view
      const isScrolled = window.scrollY > window.innerHeight;
      setNavbarOpaque(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {nav ? (
        <nav className={`Navbar ${isNavbarOpaque ? "opaque" : ""}`}>
          <div className="logo-item">
            <span className="logo"> TASTE TRACKER</span>
          </div>
          <div className="items">
            <div className="item">
              <Link to="/homepage" className="item">
                <span> Home </span>
              </Link>
            </div>
            <div className="item">
              <Link to="/restaurants">
                <span> Restaurants </span>
              </Link>
            </div>
            <div className="item">
              <Link to="/about">
                <span> About </span>
              </Link>
            </div>
            <div className="item">
              <Link to="/signin">
                <span> Sign In </span>
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className={`Navbar ${isNavbarOpaque ? "opaque" : ""}`}>
          <div className="logo-item">
            <span className={`logo ${isNavbarOpaque ? "maroon-text" : ""}`}>
              TASTE TRACKER
            </span>
          </div>
          <div
            className={`search-bar-container ${
              isNavbarOpaque ? "maroon-text" : ""
            }`}
          >
            <div className="search-bar">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className={`items ${isNavbarOpaque ? "maroon-text" : ""}`}>
            <div className="item">
              <Link to="/homepage" className="item">
                <span>Home</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/restaurants">
                <span>Restaurants</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/about">
                <span>About</span>
              </Link>
            </div>
            <div className={`item ${!isNavbarOpaque ? "white-text" : ""}`}>
              <Link to="/signin">
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </Fragment>
  );

  // return (
  //   <nav className={`Navbar ${isNavbarOpaque ? "opaque" : ""}`}>
  //     <div className="logo-item">
  //       <span className="logo"> TASTE TRACKER</span>
  //     </div>
  //     <div className="items">
  //       <div className="item">
  //         <Link to="/homepage" className="item">
  //           <span> Home </span>
  //         </Link>
  //       </div>
  //       <div className="item">
  //         <Link to="/restaurants">
  //           <span> Restaurants </span>
  //         </Link>
  //       </div>
  //       <div className="item">
  //         <Link to="/about">
  //           <span> About </span>
  //         </Link>
  //       </div>
  //       <div className="item">
  //         <Link to="/signin">
  //           <span> Sign In </span>
  //         </Link>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;
