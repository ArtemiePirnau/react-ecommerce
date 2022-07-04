import React from "react";
import {MdShoppingBag} from "react-icons/md";

const ShoppingIcon = ({ itemsLength }) => {
  return (
    <div className="shopping-cart">
      <MdShoppingBag />
      <span className="shopping-cart__num">{itemsLength}</span>
    </div>
  );
};
export default ShoppingIcon;
