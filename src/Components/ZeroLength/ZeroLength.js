import React from "react";
import image from "../../../public/not-found.png";
import "./ZeroLength.scss";

const ZeroLength = () => {
  return (
    <div className="not-found">
      <h3 className="not-found__title">You have no items</h3>
      <img className="not-found__image" src={image} alt="not found" />
    </div>
  );
};
export default ZeroLength;
