import React, { useContext } from 'react'
import { Cartcontext } from './index'

export default function Cart() {

    return (
        <div>
            <CartTable />
        </div>
    )
}

function Passcart({product}) {

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
const CartTable = () => {
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
