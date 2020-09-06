import React , { useContext } from 'react'
// fake data
import { products } from '../../dummyData'
// css
import './Product.css'
// Cart Context
import { Cartcontext } from '../../Cart/index'

// mapping data 
export default function ProductDisplay() {

    return (
        <div className='dis-pro container'>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

// displaying products here 
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
        <div className='body-dis-card'>
            <div>
              <img className='dis-img' src={product.src} alt={product.name} />
            </div>
            <div className='dis-div'>
              <h4>{product.name}</h4>
              <h5>${product.price}</h5>
            </div>
          <button className='hvr-bounce-to-right'  onClick={addcart}>Add to Cart</button>
        </div>
      </>
    );
  }
  