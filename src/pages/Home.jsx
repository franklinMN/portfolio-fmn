import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_container">
        <div className="text">
          <h1 id="first">
            I build
            <br />
            Websites...
          </h1>
          <h1 id="second">
            Hello,
            <br />
            I'm Franklin MN.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
