import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
    </Fragment>
  );
}

export default App;
