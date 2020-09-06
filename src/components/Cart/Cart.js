import React, { useContext } from 'react'
import { Cartcontext } from '../../Cart/index'
import './Cart.css'
import { Link } from 'react-router-dom'

export default function Cart() {
    const { cart } = useContext(Cartcontext);
    return (

        <div>
            {/* <div className='text-center mt-5'>
                    Cart Summary
            </div> */}
            {cart.length <= 0 ? <div className='div-cen-empty'>
                <h1>Your Cart is Empty</h1>
                <Link to='/'><button className='hvr-bounce-to-left'>shop here</button>
                </Link>
            </div> :
                <div>

                    <div className='row no-gutters justify-content-center'>
                        <CartTable />
                    </div>
                </div>}
        </div>
    )
}

function Passcart({ product }) {

    const { removeCart, increase, decrease } = useContext(Cartcontext);
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
        <div className='one'>
            <div>
                <div className='row no-gutters py-2'>
                    <div className='col-sm-2 p-2'>
                        <img className='img-fluid d-block img-display' src={product.src} alt={product.name} />
                    </div>
                    <div className='col-sm-4 p-2'>
                        <h5 className='mb-1'>{product.name}</h5>
                        <p className='mb-1'>Price: {product.price}</p>
                    </div>
                    <div className='col-sm-2 p-2 text-center '>
                        <p className='mb-0'>Qty: {product.quantity}</p>
                        <p className='mb-0'>SubTotal: {product.quantity * product.price}</p>
                    </div>
                    <div className='col-sm-4 p-2 text-right'>
                        <button style={{ background: 'black', color: 'white' }} className='mb-1 btns' onClick={increaseQtty}>+</button>
                        <button style={{ background: 'black', color: 'white' }} className='mb-1 btns' onClick={decreaseQtty}>-</button>
                        <button style={{ background: 'red', color: 'white' }} className='mb-1 btns' onClick={remove}>x</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
function Payment() {
    const { cart, clear } = useContext(Cartcontext);
    const totalprice = cart.reduce((total, cart) => total + (cart.price) * cart.quantity, 0);
    const clearAll = () => {
        clear(cart)
    }
    return (
        <div className='two'>
            <div className='card card-body'>
                <p className='mb-1'>Total Items</p>
                <h4 className=' mb-3 txt-right'>{cart.length}</h4>
                <p className='mb-1'>Total Payment</p>
                <h3 className='mb-0 txt-right'>{totalprice}</h3>
                <hr className='mb-4' />
                <div className='text-center'>
                    <button className='checkout hvr-bounce-to-right'>Checkout</button>
                    <button className='clear' onClick={clearAll}>Clear</button>
                </div>
            </div>
        </div>
    )
}

// cart 
const CartTable = () => {
    const { cart } = useContext(Cartcontext);
    return (
        <div className='dis-pro1'>
            {cart.map(item => (
                <Passcart key={item.id} product={item} />
            ))}
            <Payment />
        </div>
    );
};
