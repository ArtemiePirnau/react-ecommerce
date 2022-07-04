import React from "react";
import { Link } from "react-router-dom";
import ShoppingIcon from "../ShoppingIcon/ShoppingIcon";
import "./Header.scss";

const Header = ({ itemsLength }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/">
            <div className="header__logo" href="#">
              ECommerce
            </div>
          </Link>
          <Link to="/cart">
            <ShoppingIcon itemsLength={itemsLength}/>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
