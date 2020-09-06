import React, { useContext } from 'react';
import { Cartcontext, Cartprovider } from './Cart/index'
import { products } from './dummyData'
import './App.css'
import { BrowserRouter as Router , Route , Routes , Link } from 'react-router-dom'
import Cart from './Cart/Cart'

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
