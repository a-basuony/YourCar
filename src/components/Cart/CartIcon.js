import React, { useState, useEffect } from "react";
import cartIconLarge from "../../assets/cartIcon 1.svg";
import cartIconSmall from "../../assets/cartIcon 2.svg";
import classes from "./CartIcon.module.css";
import cartIconClicked from "../../assets/cardIconClicked.svg";

function CartIcon(props) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on initial component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let cartIconSrc = cartIconLarge;

  if (props.scrolled || isSmallScreen) {
    cartIconSrc = cartIconSmall;
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={classes["card-icon"]} onClick={handleClick}>
      <span
        className={`${classes.span} ${
          isClicked ? classes["span-clicked"] : ""
        }`}
      >
        9
      </span>

      <img src={isClicked ? cartIconClicked : cartIconSrc} alt="cart icon" />
      {/* <img src={cartIconLarge} alt="cart icon" /> */}
    </div>
  );
}

export default CartIcon;
