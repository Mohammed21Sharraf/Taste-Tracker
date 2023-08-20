import React from 'react';
import './Header.scss';
import video from '../../../../video/apple.mp4';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login")
  }

  return (
    <section className="hero-section" id="section_1">
      <div className="video-wrap">
        <video autoPlay loop muted className="custom-video" poster="">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <div className="content-text">
            <h1 className="text-bold">Get to know your Taste</h1>
            <button className="explore-button" onClick={handleClick}>Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
