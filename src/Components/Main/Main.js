import React from "react";
import Card from "../Card/Card";
import dataList from "../../data/data";
import "./Main.scss";

const Main = ({ addItem }) => {
  return (
    <ul className="main__items">
      <div className="container">
        <div className="main__items-inner">
          {dataList.map((item) => {
            return (
              <Card key={item.key} item={item} addItem={addItem} />
            );
          })}
        </div>
      </div>
    </ul>
  );
};
export default Main;
