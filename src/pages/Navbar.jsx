import Avatar from "@mui/material/Avatar";
import React from "react";
import frankDP from "../images/FrankDP.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <Avatar alt="Frankin MN DP" src={frankDP} />
      </div>
    </>
  );
};

export default Navbar;
