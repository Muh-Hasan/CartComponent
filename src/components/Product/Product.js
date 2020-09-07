import React, { useContext } from "react";
import { products } from "../../dummyData";
import "./Product.css";
import { Cartcontext } from "../../Cart/index";

export default function ProductDisplay() {
  return (
    <div className="dis-pro container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

function Product({ product }) {
  const { cart, addToCart, increase } = useContext(Cartcontext);
  const addcart = () => {
    if (cart.find((item) => item.id === product.id)) {
      increase(product.id);
    } else {
      product.quantity = 1;
      addToCart({ product });
    }
  };
  return (
    <>
      <div className="card card-body">
        <img
          className="img-fluid img-dis"
          src={product.src}
          alt={product.name}
        />
        <p>{product.name}</p>
        <h3>${product.price}</h3>
        <div className="text-right">
          <button
            className="hvr-bounce-to-right dis-card-button"
            onClick={addcart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
