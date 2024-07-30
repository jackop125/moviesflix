import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex bg-black px-2 py-4 justify-between">
      <Link to="/">
        <img src={logo} alt="logo" width={150} />
      </Link>
      <div>
        <Link to="/" className="mx-5 hover:text-green-500"><i className="bi bi-house-fill"></i></Link> 
        <Link to="/search" className="me-5">
          <i className="bi bi-search"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
