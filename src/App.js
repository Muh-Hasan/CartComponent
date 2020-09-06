import React, { useContext } from 'react';
import { Cartcontext, Cartprovider } from './Cart/index'
import { products } from './dummyData'
import './App.css'
import { BrowserRouter as Router , Route , Routes , Link } from 'react-router-dom'

export default function App() {
  return (
    <Cartprovider>
      <Router>
      <div>
        <nav>
          <Link to='/'><button>Home</button></Link>
          <Link to='/cart'><button>Cart</button></Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<ProductDisplay />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </Router>
    </Cartprovider>
  );
}
function ProductDisplay(){
  
  return(
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
function Product({ product }) {
  const { cart, addToCart, increase } = useContext(Cartcontext);
  const addcart = () => {
    if (cart.find(item => item.id === product.id)) {
      increase(product.id);
    } else {
      product.quantity = 1;
      addToCart({ product });
    }
  };
  return (
    < >
      <div className='product-flex'>
          <div>
            <img src={product.src} alt={product.name} height='270px' width='300px' />
          </div>
          <div className='align-left-product'>
            <h4>{product.name}</h4>
            <h5>${product.price}</h5>
          </div>
        <button className='product-button' onClick={addcart}>Add to Cart</button>
      </div>
    </>
  );
}




function Passcart({ product }) {
  const {removeCart, increase, decrease } = useContext(Cartcontext);

  const remove = () => {
    removeCart(product.id);
  };

  const increaseQtty = () => {
    increase(product.id);
  };

  const decreaseQtty = () => {
    if (product.quantity <= 1) {
      remove();
    } else {
      decrease(product.id);
    }
  };


  return (
    <tr>
      <td>
        <img src={product.src} alt={product.name} height='50px' width='50px' />
      </td>
      <td>
        {product.name}
      </td>

      <td>${product.price}</td>

      <td>{product.quantity}</td>
      
      <td>
        <button className='cart-button' onClick={increaseQtty}>+</button>
        <button className='cart-button' onClick={decreaseQtty}>-</button>
        <button className='cart-button' onClick={remove}>x</button>
      </td>
    </tr>
  );
}


// cart 
const Cart = () => {
  const { cart } = useContext(Cartcontext);
  const totalprice = cart.reduce((total, cart) => total + (cart.price) * cart.quantity, 0);
  return (
    <div>
      <table >
        <thead >
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <Passcart key={item.id} product={item} />
          ))}
        </tbody>
      </table>
      <h5 className='total-align'>Total : ${totalprice}</h5>
    </div>
  );
};
