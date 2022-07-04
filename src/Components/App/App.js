import React, { Component, Fragment, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <Fragment>
      <Router>
        <Header itemsLength={cart.length} />
        <Routes>
          <Route path="/" element={<Main addItem={addItem} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </Fragment>
  );
};
export default App;
