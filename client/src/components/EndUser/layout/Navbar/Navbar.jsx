import React, { Fragment, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";

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

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/userpage/${keyword}`);
    } else {
      navigate("/userpage");
    }
  };

  const handleSignOut = () => {
    //code likhoo
  };

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
          <form
            className={`search-bar-container ${isNavbarOpaque ? "maroon-text" : ""
              }`}
            onSubmit={searchSubmitHandler}
          >
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search a Restaurant"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div className={`items ${isNavbarOpaque ? "maroon-text" : ""}`}>
            <div className="item">
              <Link to="/homepage" className="item">
                <span>Home</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/offers">
                <span>Offers</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/wishlist" className="item-link">
                <span>Wishlist</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/reservations" className="item-link">
                <span>Reservations</span>
              </Link>
            </div>
            <div className="item">
              <button className="signout-button" onClick={handleSignOut}>
                Sign Out
              </button>
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
