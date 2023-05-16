import React, { useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Navbar.module.css";
import BurgerIcon from "../../assets/BurgerIcon.svg";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // const isScrolled = window.scrollY > 0;
      // setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <nav
        className={`${classes.navbar} ${menuOpen ? classes.open : ""} ${
          scrolled
            ? `${classes.navbar} ${classes["navbar-scrolled"]}`
            : classes.navbar
        }`}
      >
        <h1 className={classes.logo}>
          <span className={classes["span-logo"]}>Your</span>Car
        </h1>
        <div className={classes.links}>
          <div className={classes["links-card"]}>
            <ul className={classes["nav-links"]}>
              <li className={activeIndex === 0 ? classes.active : ""}>
                <a href="#home" onClick={() => handleLinkClick(0)}>
                  Home
                </a>
              </li>
              <li className={activeIndex === 1 ? classes.active : ""}>
                <a href="#about" onClick={() => handleLinkClick(1)}>
                  About
                </a>
              </li>
              <li className={activeIndex === 2 ? classes.active : ""}>
                <a href="#" onClick={() => handleLinkClick(2)}>
                  Services
                </a>
              </li>
              <li className={activeIndex === 3 ? classes.active : ""}>
                <a href="#" onClick={() => handleLinkClick(3)}>
                  Cars
                </a>
              </li>
              <li className={activeIndex === 4 ? classes.active : ""}>
                <a href="#" onClick={() => handleLinkClick(4)}>
                  Contact us
                </a>
              </li>
            </ul>
            <div className={classes["card-icon"]}>
              <CartIcon scrolled={scrolled} />
            </div>
            {/* start burger button  */}
            <button className={classes.menuButton} onClick={toggleMenu}>
              <img src={BurgerIcon} alt="Burger Icon" />
            </button>
            {/* end burger button  */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
