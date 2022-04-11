import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { ProContext } from './Context/ProductContext'

function Header() {
  const [{ basket, user }, dispatch] = ProContext();
  return (
    <div className="header">
      <NavLink to="/" className="nav__options header__logo">
        <img

          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </NavLink>
      <div className="header__search">
        <input type="text" />
        <AiOutlineSearch className="search__icon" />
      </div>

      <NavLink to='login' className="nav__link nav__options">
        {user ?
          (<><small>Hello, {user?.substring(0, user?.indexOf("@"))} </small>
            <span>SignOut & Accounts</span></>)
          :
          (<><small>Hello, Guest </small>
            <span>SigIn & Accounts</span></>)
        }
      </NavLink>


      <NavLink to='login' className="nav__link ">

        <small>Returns</small>
        <span>& Orders</span>
      </NavLink>


      <NavLink to='/checkout' className="nav__link nav__options">
        <div className="basket">
          <FiShoppingCart />
          <span className="items__basket">{basket?.length}</span>
        </div>
        <span>Cart</span>
      </NavLink>

    </div >
  );
}

export default Header;
