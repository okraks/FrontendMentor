import React from "react";

import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <div className="flex text-white flex-row justify-between max-w-6xl mx-auto py-5 w-full ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex flex-row justify-around">
          <li className="nav-link">
            <a href="#">About</a>
          </li>
          <li className="nav-link">
            <a href="#">Discover</a>
          </li>
          <li className="nav-link">
            <a href="#">Get Started</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
