import React, { useContext } from 'react';
// css
import './hover-min.css'
import './App.css'
import './bootstrap.css'
// Cart Context
import { Cartcontext } from './Cart/index'

// Router
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// components 
import Cart from './components/Cart/Cart'
import ProductDisplay from './components/Product/Product'

export default function App() {
  const { cart } = useContext(Cartcontext)
  return (
    <Router>
      <div className='bar'>
        <span className='logo'>online shoe Store</span>
        <Link to='/'>
          <span className='sp-one'>Products</span>
        </Link>
        <Link to='/cart'>
          <span className='sp-one'>Cart({cart.length})</span>
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<ProductDisplay />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}