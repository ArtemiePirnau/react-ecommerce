import React, { useEffect, useState } from "react";
import ZeroLength from "../ZeroLength/ZeroLength";
import "../App/App.scss";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const removeItem = (id) => {
    const index = cart.findIndex((el) => el.id !== id);
    const newArr = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(newArr);
    changePrice();
  };

  const changePrice = () => {
    let value = 0;
    cart.map((item) => (value += item.price));
    setPrice(value);
  };

  useEffect(() => {
    changePrice();
  });

  return (
    <ul className="cart">
      <div className="container">
        {price <= 0 ? (
          <ZeroLength />
        ) : (
          <p className="total-price">
            Total Price: <span className="total-price__num">{`${price}$`}</span>
          </p>
        )}
        <div className="main__items-inner">
          {cart.map((item) => {
            return (
              <li className="product__item" key={item.key}>
                <div className="product__item-box">
                  <div className="product__item-price--box">
                    Price:
                    <span className="product__item-price">{item.price}</span>
                    <p className="product__item-name">{item.name}</p>
                    <button
                      className="product__item-add"
                      onClick={() => removeItem(item)}
                    >
                      Remove to Cart
                    </button>
                  </div>
                </div>
                <img
                  src={item.imgSrc}
                  alt={item.altText}
                  className="product__item-img"
                />
              </li>
            );
          })}
        </div>
      </div>
    </ul>
  );
};
export default Cart;
