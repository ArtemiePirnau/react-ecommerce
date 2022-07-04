import React from "react";

const Card = ({ item, addItem }) => {
  return (
    <li className="product__item" key={item.key}>
      <div className="product__item-box">
        <div className="product__item-price--box">
          Price:
          <span className="product__item-price">{item.price}</span>
          <p className="product__item-name">{item.name}</p>
          <button
            className="product__item-add"
            onClick={() => addItem(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <img src={item.imgSrc} alt={item.altText} className="product__item-img" />
    </li>
  );
};
export default Card;
