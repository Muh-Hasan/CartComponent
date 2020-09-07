import React, { createContext, useReducer } from "react";
import Appreducer from "./appReducer";

const productstate = {
  cart: [],
};

export const Cartcontext = createContext(productstate);

export const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, productstate);

  function addToCart(product) {
    dispatch({
      type: "addToCart",
      payload: product,
    });
  }

  function removeCart(id) {
    dispatch({
      type: "remove",
      payload: id,
    });
  }

  function increase(id) {
    dispatch({
      type: "increase",
      payload: id,
    });
  }

  function decrease(id) {
    dispatch({
      type: "decrease",
      payload: id,
    });
  }
  function clear(cart) {
    dispatch({
      type: "clear",
      payload: cart,
    });
  }
  return (
    <Cartcontext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addToCart,
        removeCart,
        increase,
        decrease,
        clear,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};
