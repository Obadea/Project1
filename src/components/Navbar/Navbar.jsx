import React from "react";
import { logoImg, searchImg, shoppingBagImg, userImg } from "../../utils";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <img src={logoImg} alt="logo" className="w-[80px]" />
      </div>
      <div>
        <ul className="flex gap-10 max-sm:gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li className="max-sm:hidden">New Arrivals</li>
          <li className="max-sm:hidden">Contact</li>
        </ul>
      </div>

      <div className="flex gap-6 max-sm:gap-4">
        <img src={searchImg} className="cursor-pointer max-sm:hidden" />
        <img src={shoppingBagImg} className="cursor-pointer" />
        <img src={userImg} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
