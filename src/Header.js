import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt=""
      />
      <div className="header__search">
        <input type="text" />
        <AiOutlineSearch className="search__icon" />
      </div>
      <div className="nav__options">
        <small>Hello , sign in</small>
        <span>Accounts & Lists</span>
      </div>
      <div className="nav__options">
        <small>Returns</small>
        <span>& Orders</span>
      </div>
      <div className="nav__options">
        <div>
          <FiShoppingCart />
          <span className="items__basket">0</span>
        </div>
        <span>Cart</span>
      </div>
    </div>
  );
}

export default Header;
