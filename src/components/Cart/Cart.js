import React, { useContext } from 'react'
import { Cartcontext } from '../../Cart/index'
import './Cart.css'

export default function Cart() {

    return (
        <div className='container'>
            <div>
                <div className='text-center mt-5'>
                    Cart Summary
                </div>
                <div className='row no-gutters justify-content-center'>
                    <CartTable />
                </div>
            </div>
        </div>
    )
}

function Passcart({ product }) {

    const { cart, removeCart, increase, decrease } = useContext(Cartcontext);
    const totalprice = cart.reduce((total, cart) => total + (cart.price) * cart.quantity, 0);
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
        <div className='dis-pro1'>
            <div className='col-sm-9 p-3'>
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
                    </div>
                    <div className='col-sm-4 p-2 text-right'>
                        <button className='mb-1' onClick={increaseQtty}>+</button>
                        <button className='mb-1' onClick={decreaseQtty}>-</button>
                        <button className='mb-1' onClick={remove}>x</button>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 p-3'>
                <div className='card card-body'>
                    <p className='mb-1'>Total Items</p>
                    <h4 className=' mb-3 txt-right'>{cart.length}</h4>
                    <p className='mb-1'>Total Payment</p>
                    <h3 className='mb-0 txt-right'>{totalprice}</h3>
                    <hr className='mb-4' />
                </div>
                <div className='text-center'>
                    <button className='class="btn btn-primary mb-2"'>Checkout</button>
                    <button className='btn btn-outlineprimary btn-sm'>Clear</button>
                </div>
            </div>
        </div>
    );
}


// cart 
const CartTable = () => {
    const { cart } = useContext(Cartcontext);
    return (
        < >
            {cart.map(item => (
                <Passcart key={item.id} product={item} />
            ))}
        </>
    );
};
