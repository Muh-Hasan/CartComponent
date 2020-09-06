import React, { useContext } from 'react';
// css
import './hover-min.css'
import './App.css'

// Cart Context
import { Cartprovider, Cartcontext } from './Cart/index'

// Router
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// components 
import Cart from './Cart/Cart'
import ProductDisplay from './components/Product/Product'

export default function App() {
  const { cart } = useContext(Cartcontext)
  const totalQ = cart.length
  console.log(totalQ)
  return (
    <Cartprovider>
      <Router>
        <div className='bar'>
          <span className='logo'>online shoe Store</span>
          <Link to='/'>
            <span className='sp-one'>Products</span>
          </Link>
          <Link to='/cart'>
            <span className='sp-one'>Cart({totalQ})</span>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<ProductDisplay />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </Cartprovider>
  );
}