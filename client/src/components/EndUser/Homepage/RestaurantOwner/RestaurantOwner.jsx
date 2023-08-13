import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./RestaurantOwner.scss";
import owner from "../../../../img/owner.svg";
import grow from "../../../../img/grow.svg";
import { useNavigate } from "react-router-dom";

const RestaurantOwner = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsSectionVisible(true);
      controls.start("visible");
    } else {
      setIsSectionVisible(false);
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        ref.current &&
        !ref.current.getBoundingClientRect().top < window.innerHeight
      ) {
        setIsSectionVisible(false);
        controls.start("hidden");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, controls]);

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50, x: -100 },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        transition={{ duration: 1.2 }}
        className="get-featured"
      >
        <h1>{isSectionVisible ? "Do You Own A Restaurant??" : ""}</h1>
        {isSectionVisible && <img src={owner} alt="Restaurant" />}
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50, x: 100 },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="get-featured"
      >
        <h1>{isSectionVisible ? "Scale Your Business Right Away" : ""}</h1>
        {isSectionVisible && <img src={grow} alt="Restaurant" />}
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="get-featured"
      >
        {isSectionVisible && (
          <button onClick={handleClick} className="signup-button">
            Sign Up
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default RestaurantOwner;
