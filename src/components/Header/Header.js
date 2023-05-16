import classes from "./Header.module.css";
import discoverIcon from "../../assets/Descover.svg";

function Header() {
  return (
    <header className={classes["header-section"]} id="home">
      <div className="container">
        <div className={classes["header-content"]}>
          <h2 className={classes["header-title"]}>
            Find the perfect car <br />
            for you at YourCar.
          </h2>
          <p className={classes["header-paragraph"]}>
            We offer a wide range of cars that cater to your needs and budget.
            Visit us today and drive away with your dream car!
          </p>
          <button className={classes["discover-button"]}>
            Discover <img src={discoverIcon} alt="discover button" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
