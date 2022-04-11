import React from 'react'
import './Checkout.css'
import ShoppingCart from './ShoppingCart'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout-container">
            <ShoppingCart />
            <Subtotal />
        </div>
    )
}

export default Checkout
